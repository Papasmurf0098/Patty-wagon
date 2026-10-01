import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { World } from "../src/world/World.js";
import { loadSave, writeSave } from "../src/core/SaveManager.js";
import { initialVehicle, stepVehicle } from "../src/vehicle/VehiclePhysics.js";
import {
  StuntProgress,
  crossedStuntRing,
  stuntTargets,
} from "../src/world/StuntProgress.js";
import {
  discoverySites,
  discoveryPaths,
  promenadeSample,
  distanceToDiscoveryPath,
} from "../src/world/DiscoveryPlan.js";
import { terrainHeight, nearestRoad } from "../src/world/Terrain.js";
import { generateChunk } from "../src/world/ChunkData.js";
import { inRampCorridor } from "../src/world/WorldConfig.js";
const world = () =>
  new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
const overlaps = (p, b) =>
  p.y < b.y + b.height &&
  p.y + 2.6 > b.y &&
  Math.abs(p.x - b.x) < b.w / 2 + 2 &&
  Math.abs(p.z - b.z) < b.d / 2 + 2.1;

test("three side destinations have clear vehicle approaches and preserve all crowns", () => {
  const w = world();
  assert.equal(w.discoveryObjects.length, 3);
  assert.equal(w.coins.length, 612);
  for (const path of discoveryPaths) {
    assert.ok(path.length > 50);
    assert.ok(
      nearestRoad(path.nodes[0].x, path.nodes[0].z, true).distance < 0.001,
    );
    for (const p of path.nodes)
      for (const b of w.nearbySolids(p.x, p.z))
        assert.ok(!overlaps(p, b), `${path.id} blocked at ${p.x},${p.z}`);
  }
  for (const c of w.coins)
    for (const b of w.nearbySolids(c.x, c.z)) assert.ok(!overlaps(c, b), c.id);
  for (const site of discoverySites) {
    const spawn = {
      x: site.x,
      z: site.z - 20,
      y: terrainHeight(site.x, site.z - 20),
    };
    for (const b of w.nearbySolids(spawn.x, spawn.z))
      assert.ok(!overlaps(spawn, b), site.id);
    const data = generateChunk(
      Math.floor(site.x / 128),
      Math.floor(site.z / 128),
      8,
    );
    for (const p of data.props) {
      assert.ok(Math.hypot(p.x - site.x, p.z - site.z) >= site.radius + 7);
      assert.ok(distanceToDiscoveryPath(p.x, p.z) >= 14);
    }
  }
  w.dispose();
});

test("all nine rings can be reached and cleanly landed with normal or boosted driving", () => {
  const w = world();
  for (const boost of [false, true])
    for (const r of w.ramps) {
      const offset = r.length / 2 + 18,
        spawn = {
          x: r.x + Math.sin(r.heading) * offset,
          z: r.z + Math.cos(r.heading) * offset,
          heading: r.heading,
        };
      const s = initialVehicle(spawn, w.heightAt.bind(w)),
        save = loadSave({ getItem: () => null }),
        tracker = new StuntProgress(save);
      const speed = boost ? 52 : 38;
      Object.assign(s, {
        speed,
        vx: -Math.sin(r.heading) * speed,
        vz: -Math.cos(r.heading) * speed,
      });
      w.ensureAround(s.x, s.z, s.heading, true);
      for (let i = 0; i < 30; i++) w.stream();
      let badges = 0;
      for (let i = 0; i < 480; i++) {
        const result = stepVehicle(
          s,
          { throttle: 1, steer: 0, brake: false, boost },
          1 / 60,
          w,
        );
        tracker.step(s, result, () => badges++);
        w.ensureAround(s.x, s.z, s.heading);
        w.stream();
      }
      assert.ok(
        save.activities.includes(`stunt:${r.id}`),
        `${r.id} boost=${boost}`,
      );
      assert.equal(badges, 1);
      assert.ok(save.bestStunts[r.id] >= 25);
    }
  w.dispose();
});

test("stunt rings require forward airborne passage and reject ground misses or reverse crossings", () => {
  const t = { x: 0, y: 10, z: 0, heading: 0, radius: 6.5 };
  assert.ok(
    crossedStuntRing({ x: 0, y: 8.4, z: 4 }, { x: 0, y: 8.4, z: -4 }, t),
  );
  assert.ok(
    !crossedStuntRing({ x: 0, y: 8.4, z: -4 }, { x: 0, y: 8.4, z: 4 }, t),
  );
  assert.ok(!crossedStuntRing({ x: 0, y: 0, z: 4 }, { x: 0, y: 0, z: -4 }, t));
  assert.ok(
    !crossedStuntRing({ x: 8, y: 8.4, z: 4 }, { x: 8, y: 8.4, z: -4 }, t),
  );
});

test("stunt collision or recovery cannot award a clean-landing badge", () => {
  for (const interrupted of ["collision", "recovery"]) {
    const save = loadSave({ getItem: () => null }),
      tracker = new StuntProgress(save),
      t = stuntTargets[0];
    tracker.flight = { id: t.id, x: t.x, z: t.z + 30, passed: true };
    tracker.previous = { x: t.x, y: 0, z: t.z };
    if (interrupted === "recovery") tracker.reset();
    tracker.step(
      { x: t.x, y: 0, z: t.z - 5 },
      { landed: true, impacts: interrupted === "collision" ? 1 : 0 },
      () => assert.fail("invalid reward"),
    );
    assert.equal(save.activities.length, 0);
  }
});

test("procedural scenery reserves full ramp approaches and boosted landing corridors", () => {
  const w = world();
  for (const r of w.ramps) {
    const target = stuntTargets.find((t) => t.id === r.id),
      data = generateChunk(
        Math.floor(target.x / 128),
        Math.floor(target.z / 128),
        8,
      );
    for (const p of data.props) assert.ok(!inRampCorridor(p.x, p.z, r), r.id);
  }
  w.dispose();
});

test("destination discoveries and best stunts survive reload with invalid records removed", () => {
  const data = new Map(),
    storage = {
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => data.set(k, v),
    },
    save = loadSave(storage);
  save.discoveries = ["tide-garden", "tide-garden", "unknown"];
  save.activities = ["stunt:conch-hop", "stunt:unknown"];
  save.bestStunts = { "conch-hop": 42.37, "fields-leap": -8, unknown: 500 };
  writeSave(save, storage);
  const restored = loadSave(storage);
  assert.deepEqual(restored.discoveries, ["tide-garden"]);
  assert.deepEqual(restored.activities, ["stunt:conch-hop"]);
  assert.deepEqual(restored.bestStunts, { "conch-hop": 42.4 });
});

test("promenade residents follow continuous shoulders and avoid the drive corridor", () => {
  for (const path of discoveryPaths)
    for (let n = 5; n < path.length - 5; n += 3) {
      const p = promenadeSample(path, n),
        q = promenadeSample(path, n + 0.05);
      assert.ok(
        Math.hypot(p.x - q.x, p.z - q.z) < 3,
        "shoulder turns must remain continuous enough for walking",
      );
      assert.ok(Number.isFinite(p.heading));
    }
  const w = world();
  assert.equal(w.people.filter((p) => p.pathRoute).length, 12);
  const s = initialVehicle({ x: 655, z: 645, heading: 0 }, w.heightAt.bind(w));
  for (const t of [0, 30, 120, 300])
    w.update(
      t,
      1 / 60,
      s,
      () => {},
      () => {},
    );
  for (const p of w.people.filter((p) => p.pathRoute && p.mesh.visible)) {
    const road = nearestRoad(p.x, p.z);
    assert.ok(road.distance >= road.width / 2 + 3);
    assert.ok(Math.abs(p.mesh.position.y - terrainHeight(p.x, p.z)) < 0.1);
  }
  w.dispose();
});
