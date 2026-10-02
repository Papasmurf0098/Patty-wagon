import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import {
  destinationCollections,
  DestinationProgress,
} from "../src/world/DestinationCollections.js";
import { loadSave, writeSave } from "../src/core/SaveManager.js";
import { World } from "../src/world/World.js";
import { initialVehicle, stepVehicle } from "../src/vehicle/VehiclePhysics.js";

test("all destination keepsakes can be collected by driving the authored aisles", () => {
  const save = loadSave({ getItem: () => null }),
    world = new World(new T.Scene(), save, { worker: false });
  const tracker = new DestinationProgress(save);
  assert.equal(world.destinationTokens.length, 9);
  for (const collection of destinationCollections) {
    const first = collection.items[0];
    const state = initialVehicle(
      { x: first.x, z: first.z - 8, heading: Math.PI },
      world.heightAt.bind(world),
    );
    world.ensureAround(state.x, state.z, state.heading, true);
    for (let i = 0; i < 30; i++) world.stream();
    tracker.reset();
    let events = 0;
    for (let i = 0; i < 140; i++) {
      const result = stepVehicle(
        state,
        { throttle: 1, steer: 0, brake: false, boost: false },
        1 / 60,
        world,
      );
      assert.equal(result.impacts, 0, collection.id);
      tracker.step(state, () => events++);
    }
    assert.equal(events, 3, collection.id);
    assert.ok(save.activities.includes(`collection:${collection.id}`));
  }
  world.update(
    1,
    1 / 60,
    { x: 655, y: 0, z: 665 },
    () => {},
    () => {},
  );
  assert.ok(world.destinationTokens.every((t) => !t.group.visible));
  assert.equal(world.coins.length, 612);
  world.dispose();
});

test("keepsakes reject stationary, airborne, elevated and teleport passes and never duplicate", () => {
  for (const mode of ["parked", "airborne", "elevated", "teleport", "reset"]) {
    const save = loadSave({ getItem: () => null }),
      tracker = new DestinationProgress(save),
      item = destinationCollections[0].items[0];
    const s = { ...item, grounded: true };
    if (mode === "elevated") s.y += 8;
    if (mode === "airborne") s.grounded = false;
    tracker.step(
      { ...s, z: s.z - (mode === "teleport" ? 30 : mode === "parked" ? 0 : 4) },
      () => {},
    );
    if (mode === "reset") tracker.reset();
    tracker.step(s, () => assert.fail(mode));
    assert.equal(save.keepsakes.length, 0);
  }
  const save = loadSave({ getItem: () => null }),
    tracker = new DestinationProgress(save),
    item = destinationCollections[0].items[0];
  let events = 0;
  for (let n = 0; n < 5; n++) {
    tracker.step({ ...item, z: item.z - 4, grounded: true }, () => events++);
    tracker.step({ ...item, z: item.z + 4, grounded: true }, () => events++);
  }
  assert.equal(events, 1);
});

test("partial collections resume and validated items determine completion badges", () => {
  const data = new Map(),
    storage = {
      getItem: (k) => data.get(k) ?? null,
      setItem: (k, v) => data.set(k, v),
    };
  const save = loadSave(storage),
    first = destinationCollections[0],
    second = destinationCollections[1];
  save.keepsakes = [
    ...first.items.map((p) => p.id),
    first.items[0].id,
    second.items[0].id,
    "unknown",
  ];
  save.activities = [`collection:${second.id}`];
  assert.ok(writeSave(save, storage));
  const restored = loadSave(storage);
  assert.equal(restored.keepsakes.length, 4);
  assert.deepEqual(restored.activities, [`collection:${first.id}`]);
  const tracker = new DestinationProgress(restored);
  for (const item of second.items.slice(1)) {
    tracker.reset();
    tracker.step({ ...item, z: item.z - 4, grounded: true }, () => {});
    tracker.step({ ...item, z: item.z + 4, grounded: true }, () => {});
  }
  assert.ok(restored.activities.includes(`collection:${second.id}`));
});
