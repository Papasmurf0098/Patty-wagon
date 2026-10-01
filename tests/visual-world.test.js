import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import {
  surfaceTextures,
  surfaceSample,
  SURFACE_KINDS,
} from "../src/art/Materials.js";
import { World } from "../src/world/World.js";
import { loadSave } from "../src/core/SaveManager.js";
import { livingSites, siteRadius } from "../src/world/TownPlan.js";
import { generateChunk } from "../src/world/ChunkData.js";
import { initialVehicle, stepVehicle } from "../src/vehicle/VehiclePhysics.js";
import { nearestRoad } from "../src/world/Terrain.js";

test("surface families tile and keep color and normal data in their appropriate spaces", () => {
  for (const kind of SURFACE_KINDS) {
    assert.deepEqual(
      surfaceSample(kind, 0, 0.31),
      surfaceSample(kind, 1, 0.31),
    );
    assert.deepEqual(
      surfaceSample(kind, 0.37, 0),
      surfaceSample(kind, 0.37, 1),
    );
    const maps = surfaceTextures(kind, 64);
    assert.equal(maps.color.colorSpace, T.SRGBColorSpace);
    assert.equal(maps.normal.colorSpace, T.NoColorSpace);
    for (let i = 0; i < maps.normal.image.data.length; i += 4) {
      const normal = [0, 1, 2].map(
        (k) => (maps.normal.image.data[i + k] / 255) * 2 - 1,
      );
      assert.ok(Math.abs(Math.hypot(...normal) - 1) < 0.012);
    }
  }
});

test("activity pockets are grounded, do not occupy road lanes, and reserve their scenery space", () => {
  const w = new World(new T.Scene(), loadSave({ getItem: () => null }), {
    worker: false,
  });
  assert.equal(w.activitySites.length, livingSites.length);
  assert.equal(
    w.coins.length,
    612,
    "existing discovery identities must survive the asset pass",
  );
  for (const site of w.activitySites) {
    assert.ok(
      site.group.children.length < 20,
      "static prop parts should share merged draw batches",
    );
    const r = nearestRoad(site.x, site.z, true);
    assert.ok(r.distance > r.width / 2 + siteRadius(site) - 2, site.id);
    for (const dx of [-site.width / 2, site.width / 2])
      for (const dz of [-site.depth / 2, site.depth / 2])
        assert.ok(
          site.base >= w.heightAt(site.x + dx, site.z + dz) - 0.01,
          site.id,
        );
    const data = generateChunk(
      Math.floor(site.x / 128),
      Math.floor(site.z / 128),
      8,
    );
    for (const p of data.props)
      assert.ok(Math.hypot(p.x - site.x, p.z - site.z) >= siteRadius(site) + 6);
  }
  for (const c of w.coins)
    for (const site of w.activitySites)
      assert.ok(
        Math.abs(c.x - site.x) >= site.width / 2 + 1 ||
          Math.abs(c.z - site.z) >= site.depth / 2 + 1,
        `${c.id} overlaps ${site.id}`,
      );
  w.dispose();
});

test("floatier flight increases hang time while emitting a single clean landing", () => {
  const s = initialVehicle({ x: 0, z: 0, heading: 0 }, () => 0);
  Object.assign(s, { y: 6, vy: 11, grounded: false });
  let duration = 0,
    landings = 0,
    peak = 6;
  const controls = { throttle: 0, steer: 0, brake: false, boost: false };
  for (let i = 0; i < 240; i++) {
    const result = stepVehicle(s, controls, 1 / 60, {
      heightAt: () => 0,
      ramps: [],
      solids: [],
    });
    if (!s.grounded) duration += 1 / 60;
    peak = Math.max(peak, s.y);
    if (result.landed) landings++;
  }
  assert.ok(
    duration > 1.55 && duration < 1.8,
    "flight should have noticeably greater hang time than the prior 1.3s arc",
  );
  assert.ok(peak > 9 && peak < 10);
  assert.equal(landings, 1);
  assert.equal(s.y, 0);
  assert.equal(s.grounded, true);
});
