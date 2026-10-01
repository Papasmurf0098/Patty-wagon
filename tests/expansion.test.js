import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { slideMove } from "../src/vehicle/Collision.js";
import { initialVehicle, stepVehicle } from "../src/vehicle/VehiclePhysics.js";
import { World } from "../src/world/World.js";
import { loadSave, writeSave, SAVE_KEY } from "../src/core/SaveManager.js";
import { scenicRoutes, ScenicProgress } from "../src/world/ScenicRoutes.js";
import { districtDetails } from "../src/world/DistrictDetails.js";
import { nearestRoad, terrainHeight } from "../src/world/Terrain.js";
import { generateChunk } from "../src/world/ChunkData.js";
const wall = { x: 0, z: 0, w: 0.4, d: 40, height: 10, y: 0 };
const start = (x = -10, z = 0) => ({
  ...initialVehicle({ x, z, heading: 0 }, () => 0),
  vx: 60,
  vz: 20,
  speed: 65,
});
const controls = { throttle: 1, steer: 1, brake: false, boost: false };
const flat = { heightAt: () => 0, solids: [], ramps: [], collected: 0 };

test("swept collision stops tunneling and retains tangent motion along a thin wall", () => {
  const s = start();
  slideMove(s, 30, 10, [wall]);
  assert.ok(s.x < -2.2 && s.x > -2.21);
  assert.ok(s.z > 9.99);
  assert.equal(s.vx, 0);
  assert.equal(s.vz, 20);
  assert.equal(s.speed, 20);
  const airborne = { ...start(), y: 12 };
  slideMove(airborne, 30, 10, [wall]);
  assert.equal(airborne.x, 20);
});
test("inside corners stop both axes and an overlapping spawn escapes to a safe face", () => {
  const s = start(-10, -10);
  slideMove(s, 30, 30, [wall, { x: 0, z: 0, w: 40, d: 0.4, height: 10 }]);
  assert.ok(s.x < -2.2 && s.z < -2.3);
  assert.equal(s.speed, 0);
  const embedded = start(0, 0);
  slideMove(embedded, 0, 0, [wall]);
  assert.ok(Math.abs(embedded.x) > 2.2);
});
test("drift has a larger lateral slip angle than normal steering", () => {
  const drive = {
    ...initialVehicle({ x: 0, z: 0, heading: 0 }, () => 0),
    speed: 38,
    vz: -38,
  };
  const drift = { ...drive };
  for (let i = 0; i < 30; i++) {
    stepVehicle(drive, controls, 1 / 60, flat);
    stepVehicle(drift, { ...controls, brake: true }, 1 / 60, flat);
  }
  const slip = (s) => Math.abs(Math.atan2(-s.vx, -s.vz) - s.heading);
  assert.ok(slip(drift) > slip(drive) * 1.4);
});
test("scenic routes require ordered grounded gates, ignore teleport crossings and complete once", () => {
  const save = loadSave({ getItem: () => null }),
    progress = new ScenicProgress(save),
    r = scenicRoutes[0];
  let events = 0;
  progress.update(r.gates[2], () => events++);
  assert.equal(events, 0);
  progress.resetPosition();
  progress.update({ ...r.gates[0], y: r.gates[0].y + 20 }, () => events++);
  assert.equal(events, 0);
  progress.resetPosition();
  progress.update({ ...r.gates[0], x: r.gates[0].x - 50 }, () => events++);
  progress.update({ ...r.gates[0], x: r.gates[0].x + 50 }, () => events++);
  assert.equal(events, 0);
  for (const gate of r.gates) {
    progress.resetPosition();
    progress.update({ ...gate, x: gate.x - 18 }, () => events++);
    progress.update(gate, () => events++);
  }
  assert.equal(events, 6);
  assert.equal(save.trails[r.id], 6);
  assert.ok(save.activities.includes(`trail:${r.id}`));
  progress.update(r.gates[5], () => events++);
  assert.equal(events, 6);
});
test("scenic progress survives reload and validates malformed counters", () => {
  const data = new Map(),
    storage = {
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => data.set(k, v),
    };
  const save = loadSave(storage);
  save.trails = { neighborhood: 3, coast: "bad", mountain: 999, unknown: 5 };
  writeSave(save, storage);
  assert.deepEqual(loadSave(storage).trails, {
    neighborhood: 3,
    coast: 0,
    mountain: 6,
  });
  data.set(SAVE_KEY, JSON.stringify({ ...save, trails: { neighborhood: -4 } }));
  assert.equal(loadSave(storage).trails.neighborhood, 0);
});
test("all new architectural sites and gate supports keep the full road lanes clear", () => {
  const w = new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
  assert.equal(w.districtObjects.length, 7);
  assert.equal(w.scenicGates.length, 18);
  assert.equal(w.coins.length, 612);
  for (const detail of districtDetails) {
    const road = nearestRoad(detail.x, detail.z, true);
    assert.ok(road.distance > road.width / 2 + detail.radius + 3, detail.id);
    const data = generateChunk(
      Math.floor(detail.x / 128),
      Math.floor(detail.z / 128),
      8,
    );
    for (const p of data.props)
      assert.ok(
        Math.hypot(p.x - detail.x, p.z - detail.z) >= detail.radius + 8,
      );
  }
  for (const route of scenicRoutes)
    for (const gate of route.gates) {
      assert.equal(gate.y, terrainHeight(gate.x, gate.z));
      for (const b of w.nearbySolids(gate.x, gate.z))
        assert.ok(
          Math.abs(gate.x - b.x) >= b.w / 2 + 2 ||
            Math.abs(gate.z - b.z) >= b.d / 2 + 2.1,
        );
    }
  const p = w.platforms[0];
  assert.equal(w.heightAt(p.x, p.z), p.y);
  w.dispose();
});
test("streamed rocks receive collision and release their spatial entries on replacement", () => {
  const w = new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
  w.createChunk(generateChunk(5, -3));
  const chunk = w.chunks.get("5,-3"),
    solids = chunk.rockSolids;
  assert.ok(solids.length > 0);
  for (const b of solids) assert.ok(w.nearbySolids(b.x, b.z).has(b));
  w.createChunk(generateChunk(5, -3, 8));
  for (const b of solids) assert.ok(!w.nearbySolids(b.x, b.z).has(b));
  w.dispose();
});

test("boardwalk approaches connect to sand without a vertical step", () => {
  const w = new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
  const p = w.platforms[0];
  for (const side of [-1, 1]) {
    const end = p.z + side * (p.d / 2 + p.approach);
    assert.equal(w.heightAt(p.x, end), terrainHeight(p.x, end));
    assert.ok(
      Math.abs(w.heightAt(p.x, end - side * 0.01) - w.heightAt(p.x, end)) <
        0.02,
    );
    const join = p.z + (side * p.d) / 2;
    assert.ok(Math.abs(w.heightAt(p.x, join + side * 0.01) - p.y) < 0.02);
  }
  w.dispose();
});
test("traffic uses moving collision bounds rather than proximity speed penalties", () => {
  const w = new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
  const car = w.traffic[0],
    s = initialVehicle({ x: -440, z: 435, heading: 0 }, w.heightAt.bind(w));
  w.update(
    0,
    1 / 60,
    s,
    () => {},
    () => {},
  );
  Object.assign(s, {
    x: car.solid.x,
    z: car.solid.z,
    y: car.solid.y,
    speed: 20,
  });
  w.update(
    1,
    1 / 60,
    s,
    () => {},
    () => {},
  );
  assert.ok(w.nearbySolids(car.solid.x, car.solid.z).has(car.solid));
  const x = car.solid.x;
  w.update(
    2,
    1 / 60,
    s,
    () => {},
    () => {},
  );
  assert.notEqual(car.solid.x, x);
  w.dispose();
  assert.ok(!w.nearbySolids(car.solid.x, car.solid.z).has(car.solid));
});

test("recovery and parked reloads inside scenic gates never award progress", () => {
  const save = loadSave({ getItem: () => null }),
    progress = new ScenicProgress(save),
    gate = scenicRoutes[0].gates[0];
  for (let i = 0; i < 3; i++) {
    progress.resetPosition();
    progress.update(gate, () => assert.fail("spawn reward"));
    progress.update(gate, () => assert.fail("stationary reward"));
  }
  assert.equal(save.trails.neighborhood, undefined);
});
