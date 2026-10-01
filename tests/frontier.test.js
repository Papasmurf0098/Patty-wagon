import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { WORLD_SIZE, frontierSites } from "../src/world/WorldConfig.js";
import { roadPaths, terrainHeight } from "../src/world/Terrain.js";
import { World } from "../src/world/World.js";
import { loadSave, writeSave } from "../src/core/SaveManager.js";
import {
  supplyRuns,
  supplyAction,
  performSupplyAction,
} from "../src/world/SupplyRuns.js";
import {
  WorldLighting,
  lightingProfile,
} from "../src/systems/WorldLighting.js";
const fresh = () => loadSave({ getItem: () => null });
const parked = (p) => ({
  ...p,
  y: terrainHeight(p.x, p.z),
  grounded: true,
  speed: 0,
});
test("expanded world streams all frontier stations and preserves original crown IDs", () => {
  const w = new World(new T.Scene(), fresh(), { worker: false });
  assert.equal(WORLD_SIZE, 2400);
  assert.equal(w.coins.length, 612);
  assert.equal(w.frontierObjects.length, 3);
  assert.equal(w.people.filter((p) => p.frontier).length, 6);
  assert.ok(
    roadPaths.filter((p) => p.frontier).reduce((n, p) => n + p.length, 0) >
      2500,
  );
  for (const s of frontierSites) {
    w.ensureAround(s.x, s.z, 0, true);
    for (let i = 0; i < 40; i++) w.stream();
    assert.ok(
      w.chunks.has(`${Math.floor(s.x / 128)},${Math.floor(s.z / 128)}`),
      s.id,
    );
    for (const b of w.nearbySolids(s.x, s.z))
      assert.ok(
        Math.abs(s.x - b.x) > b.w / 2 + 2 ||
          Math.abs(s.z - b.z) > b.d / 2 + 2.1,
        s.id,
      );
    assert.ok(w.chunks.size <= 55);
  }
  w.dispose();
});
test("supply runs require a stopped grounded wagon, correct destination, and award once", () => {
  const save = fresh(),
    run = supplyRuns[0],
    source = parked(run.source),
    target = parked(run.target);
  assert.equal(supplyAction(save, target), null);
  for (const bad of [{ speed: 4 }, { grounded: false }, { y: source.y + 10 }])
    assert.equal(supplyAction(save, { ...source, ...bad }), null);
  assert.equal(performSupplyAction(save, source).delivery, false);
  assert.equal(save.cargo, run.id);
  assert.equal(performSupplyAction(save, parked(supplyRuns[1].target)), null);
  assert.equal(performSupplyAction(save, target).delivery, true);
  assert.equal(save.cargo, null);
  assert.deepEqual(save.deliveries, [run.id]);
  assert.equal(performSupplyAction(save, target), null);
  assert.equal(performSupplyAction(save, source), null);
  target.energy = 12;
  assert.equal(performSupplyAction(save, target).service, true);
  assert.equal(target.energy, 100);
  assert.equal(performSupplyAction(save, target), null);
  assert.deepEqual(save.deliveries, [run.id]);
});
test("frontier positions and shipments survive reload, malformed delivery records do not", () => {
  const data = new Map(),
    storage = {
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => data.set(k, v),
    },
    save = loadSave(storage);
  save.position = { x: 1080, z: -500, heading: 1 };
  save.cargo = supplyRuns[0].id;
  save.deliveries = [supplyRuns[1].id, supplyRuns[1].id, "bogus"];
  writeSave(save, storage);
  const restored = loadSave(storage);
  assert.deepEqual(restored.position, save.position);
  assert.equal(restored.cargo, save.cargo);
  assert.deepEqual(restored.deliveries, [supplyRuns[1].id]);
  restored.cargo = supplyRuns[1].id;
  writeSave(restored, storage);
  assert.equal(loadSave(storage).cargo, null);
});
test("outer-water lighting blends smoothly with bounded local lights and forward headlights", () => {
  const town = lightingProfile(0, 0),
    outer = lightingProfile(1120, 0);
  assert.ok(outer.sun < town.sun);
  assert.ok(outer.ambient > 0.8);
  assert.ok(outer.headlight > town.headlight);
  for (let x = 690; x < 1140; x++)
    assert.ok(
      Math.abs(lightingProfile(x + 1, 0).sun - lightingProfile(x, 0).sun) <
        0.01,
    );
  const scene = new T.Scene();
  scene.fog = new T.Fog(0x65c6bf, 350, 1050);
  const sun = new T.DirectionalLight(),
    hemi = new T.HemisphereLight(),
    system = new WorldLighting(scene, sun, hemi),
    save = fresh();
  save.deliveries = frontierSites.map((s) => s.id);
  const s = { ...parked(frontierSites[0]), heading: Math.PI / 2 };
  system.update(s, 1 / 60, save);
  assert.equal(system.locals.length, 2);
  assert.ok(system.headlamp.target.position.x < system.headlamp.position.x);
  assert.ok(system.locals.some((l) => l.visible));
  assert.equal(system.headlamp.castShadow, false);
  const prior = scene.fog.far;
  system.update({ ...s, x: 0, z: 0 }, 1 / 60, save);
  assert.ok(scene.fog.far > prior && scene.fog.far < town.fogFar);
});
