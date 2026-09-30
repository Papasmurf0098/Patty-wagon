import test from "node:test";
import assert from "node:assert/strict";
import {
  initialVehicle,
  stepVehicle,
  groundHeight,
} from "../src/vehicle/VehiclePhysics.js";
import { loadSave, writeSave } from "../src/core/SaveManager.js";
const world = { ramps: [], solids: [], collected: 0 };
const controls = { throttle: 1, steer: 0, brake: false, boost: false };
test("forward is -Z, ground is +Y, steering right turns toward +X", () => {
  const s = initialVehicle();
  for (let i = 0; i < 120; i++) stepVehicle(s, controls, 1 / 60, world);
  assert.ok(s.z < 20);
  assert.equal(s.y, 0);
  for (let i = 0; i < 30; i++)
    stepVehicle(s, { ...controls, steer: 1 }, 1 / 60, world);
  assert.ok(s.x > 0);
});
test("boost consumes energy and upgrades increase cruising speed", () => {
  const a = initialVehicle(),
    b = initialVehicle();
  for (let i = 0; i < 600; i++) {
    stepVehicle(a, controls, 1 / 60, world);
    stepVehicle(b, controls, 1 / 60, { ...world, collected: 50 });
  }
  assert.ok(b.speed > a.speed);
  stepVehicle(a, { ...controls, boost: true }, 0.1, world);
  assert.ok(a.energy < 100);
});
test("ramps rise toward -Z and launch vehicles into a recoverable arc", () => {
  const r = { x: 0, z: 0, width: 10, length: 16, height: 5 };
  assert.equal(groundHeight(0, 8, [r]), 0);
  assert.equal(groundHeight(0, -8, [r]), 5);
  const s = { ...initialVehicle(), z: 8, speed: 24 };
  let maxY = 0;
  for (let i = 0; i < 240; i++) {
    stepVehicle(s, controls, 1 / 60, { ...world, ramps: [r] });
    maxY = Math.max(maxY, s.y);
  }
  assert.ok(maxY > 6);
  assert.equal(s.y, 0);
});
test("solid collision blocks entry and resets momentum", () => {
  const s = { ...initialVehicle(), speed: 25 };
  for (let i = 0; i < 120; i++)
    stepVehicle(s, controls, 1 / 60, {
      ...world,
      solids: [{ x: 0, z: 20, w: 12, d: 8, height: 9 }],
    });
  assert.ok(s.z > 25);
});
test("save handles corrupted storage, deduplicates IDs and preserves progress", () => {
  const storage = {
    value: "broken",
    getItem() {
      return this.value;
    },
    setItem(k, v) {
      this.value = v;
    },
  };
  assert.deepEqual(loadSave(storage).coins, []);
  writeSave(
    { coins: [1, 1, -1, 100], activities: ["jump", "bad"], broken: [3, 3] },
    storage,
  );
  assert.deepEqual(loadSave(storage), {
    version: 1,
    coins: [1],
    activities: ["jump"],
    broken: [3],
  });
  assert.equal(
    writeSave(
      {},
      {
        setItem() {
          throw Error();
        },
      },
    ),
    false,
  );
});
import * as T from "three";
import { World } from "../src/world/World.js";
test("world builds all slice systems, collects once and breaks props once", () => {
  const save = { coins: [], broken: [], activities: [] };
  const scene = new T.Scene();
  const w = new World(scene, save);
  assert.equal(w.coins.length, 96);
  assert.equal(w.breakables.length, 42);
  assert.equal(w.ramps.length, 6);
  assert.equal(w.traffic.length, 9);
  assert.equal(w.people.length, 24);
  let coins = 0,
    broken = 0;
  const c = w.coins[0];
  const s = { ...initialVehicle(), x: c.x, z: c.z };
  w.update(
    0,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  w.update(
    0.016,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  assert.equal(coins, 1);
  const b = w.breakables[0];
  s.x = b.x;
  s.z = b.z;
  s.speed = 15;
  w.update(
    0.032,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  w.update(
    0.048,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  assert.equal(broken, 1);
  assert.ok(scene.children.length > 100);
});
