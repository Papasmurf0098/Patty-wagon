import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { planRoute, buildNavigation } from "../src/world/Navigation.js";
import { DriftProgress, driftSlip } from "../src/world/DriftProgress.js";
import {
  driftPads,
  districts,
  frontierSites,
  spawnFor,
} from "../src/world/WorldConfig.js";
import { discoverySites } from "../src/world/DiscoveryPlan.js";
import { World } from "../src/world/World.js";
import { initialVehicle, stepVehicle } from "../src/vehicle/VehiclePhysics.js";
import { terrainHeight, nearestRoad } from "../src/world/Terrain.js";
import { loadSave, writeSave } from "../src/core/SaveManager.js";
import { approachSites } from "../src/world/SurfacePaint.js";
import { driftPaths } from "../src/world/DriftPlan.js";
const fresh = () => loadSave({ getItem: () => null });
test("navigation connects every destination using the authored road and side-path graph", () => {
  for (const target of [
    ...districts.map((d) => {
      const s = spawnFor(d.id),
        r = nearestRoad(s.x, s.z, true);
      return { x: r.x, z: r.z, name: d.name };
    }),
    ...discoverySites,
    ...frontierSites,
    ...driftPads,
  ]) {
    const route = planRoute(spawnFor(), target);
    assert.ok(route, target.name);
    assert.ok(route.points.length > 0);
    for (let i = 1; i < route.points.length; i++)
      assert.ok(
        Math.hypot(
          route.points[i].x - route.points[i - 1].x,
          route.points[i].z - route.points[i - 1].z,
        ) < 20,
      );
    assert.ok(route.arrival < 14, target.name);
    assert.ok(Number.isFinite(route.length));
  }
});
test("navigation finds the shorter connected branch and rejects disconnected networks", () => {
  const graph = buildNavigation([
    {
      id: "main",
      nodes: [
        { x: 0, z: 0 },
        { x: 10, z: 0 },
        { x: 20, z: 0 },
      ],
    },
    {
      id: "branch",
      nodes: [
        { x: 20, z: 0 },
        { x: 20, z: 10 },
        { x: 20, z: 20 },
      ],
    },
  ]);
  const route = planRoute({ x: 0, z: 0 }, { x: 20, z: 20 }, graph);
  assert.ok(route.length <= 40);
  assert.equal(
    planRoute(
      { x: 0, z: 0 },
      { x: 100, z: 0 },
      buildNavigation([
        { id: "a", nodes: [{ x: 0, z: 0 }] },
        { id: "b", nodes: [{ x: 100, z: 0 }] },
      ]),
    ),
    null,
  );
});
test("all drift pads allow real grounded drift chains to bank a badge", () => {
  const w = new World(new T.Scene(), fresh(), { worker: false });
  for (const path of driftPaths)
    for (const p of path.nodes)
      for (const b of w.nearbySolids(p.x, p.z))
        assert.ok(
          Math.abs(p.x - b.x) > b.w / 2 + 2 ||
            Math.abs(p.z - b.z) > b.d / 2 + 2.1,
          path.id,
        );
  for (const pad of driftPads) {
    const save = fresh(),
      progress = new DriftProgress(save),
      s = initialVehicle(
        { x: pad.x, z: pad.z + 18, heading: 0 },
        w.heightAt.bind(w),
      );
    s.speed = 30;
    s.vz = -30;
    w.ensureAround(s.x, s.z, 0, true);
    for (let i = 0; i < 30; i++) w.stream();
    let events = 0;
    for (let i = 0; i < 180; i++) {
      const input = { throttle: 1, steer: 0.8, brake: i < 150, boost: true };
      const result = stepVehicle(s, input, 1 / 60, w);
      progress.step(s, input, result, () => events++);
    }
    assert.ok(
      save.bestDrifts[pad.id] >= 12,
      `${pad.id} score=${save.bestDrifts[pad.id]}`,
    );
    assert.ok(events >= 1);
  }
  w.dispose();
});
test("drift scoring rejects spins, collisions, recovery, teleport, airborne motion and parked points", () => {
  assert.ok(driftSlip({ heading: 0, vx: 0, vz: 10 }) > 3);
  const pad = driftPads[0];
  for (const mode of [
    "spin",
    "collision",
    "airborne",
    "recovery",
    "teleport",
    "parked",
  ]) {
    const save = fresh(),
      progress = new DriftProgress(save),
      s = { x: pad.x, z: pad.z, heading: 0, vx: 10, vz: -20, grounded: true };
    progress.chain = { id: pad.id, distance: 20 };
    progress.previous = { x: s.x, z: s.z - 1 };
    if (mode === "recovery") progress.reset();
    if (mode === "teleport") s.z += 100;
    if (mode === "collision")
      progress.step(s, { brake: true }, { impacts: 1 }, () =>
        assert.fail(mode),
      );
    else if (mode === "airborne")
      progress.step({ ...s, grounded: false }, { brake: true }, {}, () =>
        assert.fail(mode),
      );
    else if (mode === "spin") {
      for (let i = 0; i < 30; i++)
        progress.step(
          { ...s, z: s.z - i, vx: 0, vz: 20 },
          { brake: true },
          {},
          () => assert.fail(mode),
        );
    } else if (mode === "parked") {
      progress.chain = null;
      for (let i = 0; i < 30; i++)
        progress.step({ ...s, vx: 0, vz: 0 }, { brake: true }, {}, () =>
          assert.fail(mode),
        );
    } else progress.step(s, { brake: true }, {}, () => assert.fail(mode));
    assert.equal(save.activities.length, 0);
  }
});
test("horn startles nearby residents and jellyfish and its visible ripple expires", () => {
  const w = new World(new T.Scene(), fresh(), { worker: false }),
    p = w.people[0],
    vehicle = initialVehicle(
      { x: p.x + 6, z: p.z, heading: 0 },
      w.heightAt.bind(w),
    );
  assert.ok(w.honk(vehicle, 2) > 0);
  assert.equal(p.startledUntil, 3.2);
  assert.ok(p.hornAway.x < 0);
  w.update(
    2.2,
    1 / 60,
    vehicle,
    () => {},
    () => {},
  );
  assert.ok(w.hornRipple.visible);
  w.update(
    4,
    1 / 60,
    vehicle,
    () => {},
    () => {},
  );
  assert.equal(w.hornRipple.visible, false);
  const jelly = w.jellies[0];
  w.honk({ x: jelly.x, z: jelly.z, y: jelly.y }, 5);
  assert.equal(jelly.startledUntil, 6.2);
  w.dispose();
});
test("drift records validate on reload and bent discoveries have no painted direct approach", () => {
  const data = new Map(),
    storage = {
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => data.set(k, v),
    },
    save = loadSave(storage);
  save.bestDrifts = { "harbor-slide": 28.37, "relay-slide": -4, unknown: 500 };
  save.activities = ["drift:harbor-slide", "drift:unknown"];
  writeSave(save, storage);
  assert.deepEqual(loadSave(storage).bestDrifts, { "harbor-slide": 28.4 });
  assert.deepEqual(loadSave(storage).activities, ["drift:harbor-slide"]);
  assert.ok(
    discoverySites.every(
      (site) => !approachSites.some((p) => p.id === site.id),
    ),
  );
});
