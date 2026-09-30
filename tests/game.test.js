import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import {
  initialVehicle,
  stepVehicle,
  groundHeight,
} from "../src/vehicle/VehiclePhysics.js";
import {
  loadSave,
  writeSave,
  SAVE_KEY,
  LEGACY_KEY,
} from "../src/core/SaveManager.js";
import { World } from "../src/world/World.js";
import { generateChunk, scatterPoint } from "../src/world/ChunkData.js";
import {
  terrainHeight,
  rawHeight,
  roadPaths,
  nearestRoad,
} from "../src/world/Terrain.js";
import {
  districts,
  CHUNK_SIZE,
  WORLD_SIZE,
  spawnFor,
  ramps,
} from "../src/world/WorldConfig.js";
import { makeWagon } from "../src/art/Models.js";
const controls = { throttle: 1, steer: 0, brake: false, boost: false };
const flat = { ramps: [], solids: [], collected: 0, heightAt: () => 0 };
const start = () => initialVehicle({ x: 0, z: 34, heading: 0 }, () => 0);
const storage = () => ({
  data: new Map(),
  getItem(k) {
    return this.data.get(k) ?? null;
  },
  setItem(k, v) {
    this.data.set(k, v);
  },
});
function newWorld(software = false) {
  return new World(new T.Scene(), loadSave(storage()), {
    worker: false,
    software,
  });
}
test("Y-up driving moves forward toward -Z and right steering toward +X", () => {
  const s = start();
  for (let i = 0; i < 120; i++) stepVehicle(s, controls, 1 / 60, flat);
  assert.ok(s.z < 20);
  assert.equal(s.y, 0);
  for (let i = 0; i < 30; i++)
    stepVehicle(s, { ...controls, steer: 1 }, 1 / 60, flat);
  assert.ok(s.x > 0);
});
test("boost, energy regeneration, braking, reversing and upgrade credit work", () => {
  const a = start(),
    b = start();
  for (let i = 0; i < 400; i++) {
    stepVehicle(a, controls, 1 / 60, flat);
    stepVehicle(b, controls, 1 / 60, { ...flat, collected: 80 });
  }
  assert.ok(b.speed > a.speed);
  stepVehicle(a, { ...controls, boost: true }, 0.05, flat);
  assert.ok(a.energy < 100);
  for (let i = 0; i < 100; i++)
    stepVehicle(a, { ...controls, throttle: 0, brake: true }, 1 / 60, flat);
  assert.ok(Math.abs(a.speed) < 1);
  for (let i = 0; i < 120; i++)
    stepVehicle(a, { ...controls, throttle: -1 }, 1 / 60, flat);
  assert.ok(a.speed < 0);
  assert.equal(a.energy, 100);
});
test("ramps support every orientation and launch into a recoverable arc", () => {
  const r = {
    x: 0,
    z: 0,
    width: 12,
    length: 20,
    height: 7,
    baseY: 0,
    heading: 0,
  };
  assert.equal(groundHeight(0, 10, [r]), 0);
  assert.equal(groundHeight(0, -10, [r]), 7);
  assert.equal(groundHeight(-10, 0, [{ ...r, heading: Math.PI / 2 }]), 7);
  const s = { ...start(), z: 10, speed: 24 };
  let high = 0,
    landed = false;
  for (let i = 0; i < 360; i++) {
    const result = stepVehicle(s, controls, 1 / 60, {
      ...flat,
      heightAt: undefined,
      ramps: [r],
    });
    high = Math.max(high, s.y);
    landed ||= result.landed;
  }
  assert.ok(high > 9);
  assert.ok(landed);
  assert.equal(s.y, 0);
});
test("solid collisions honor elevated foundations", () => {
  const s = { ...start(), speed: 25 };
  for (let i = 0; i < 120; i++)
    stepVehicle(s, controls, 1 / 60, {
      ...flat,
      solids: [{ x: 0, z: 20, w: 12, d: 8, height: 9, y: 0 }],
    });
  assert.ok(s.z > 25);
  const elevated = { ...start(), y: 15 };
  stepVehicle(elevated, controls, 1 / 60, {
    ...flat,
    heightAt: () => 15,
    solids: [{ x: 0, z: 34, w: 12, d: 8, height: 9, y: 0 }],
  });
  assert.ok(elevated.z < 34);
});
test("new world drives past the old 115-unit boundary", () => {
  const s = start();
  for (let i = 0; i < 1200; i++) stepVehicle(s, controls, 1 / 60, flat);
  assert.ok(s.z < -300);
  assert.ok(s.z > -WORLD_SIZE / 2);
});
test("seeded terrain and scenery are independent of chunk generation order", () => {
  const a = generateChunk(-2, 3);
  generateChunk(5, -4);
  const b = generateChunk(-2, 3);
  assert.deepEqual(a.positions, b.positions);
  assert.deepEqual(a.props, b.props);
  const c = generateChunk(-1, 3),
    n = 33;
  for (let z = 0; z < n; z++)
    assert.equal(a.positions[(z * n + 32) * 3 + 1], c.positions[z * n * 3 + 1]);
});
test("physics matches the rendered near-terrain triangle interpolation", () => {
  const x = -417.7,
    z = 418.2,
    cx = Math.floor(x / CHUNK_SIZE),
    cz = Math.floor(z / CHUNK_SIZE),
    chunk = generateChunk(cx, cz),
    u = (x - cx * CHUNK_SIZE) / 4,
    v = (z - cz * CHUNK_SIZE) / 4,
    gx = Math.floor(u),
    gz = Math.floor(v),
    tx = u - gx,
    tz = v - gz,
    n = 33;
  const h = (dx, dz) => chunk.positions[((gz + dz) * n + gx + dx) * 3 + 1];
  const y =
    tx + tz <= 1
      ? h(0, 0) + (h(1, 0) - h(0, 0)) * tx + (h(0, 1) - h(0, 0)) * tz
      : h(1, 1) +
        (h(0, 1) - h(1, 1)) * (1 - tx) +
        (h(1, 0) - h(1, 1)) * (1 - tz);
  assert.ok(Math.abs(terrainHeight(x, z) - y) < 0.000002);
});
test("global scenery samples respect minimum spacing across chunk borders", () => {
  const points = [];
  for (let x = -12; x < 12; x++)
    for (let z = -12; z < 12; z++) {
      const p = scatterPoint(x, z);
      if (p) points.push(p);
    }
  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++)
      assert.ok(
        Math.hypot(points[i].x - points[j].x, points[i].z - points[j].z) >= 12,
      );
});
test("terrain and scenery preserve road and landmark clearance", () => {
  for (const c of [
    [-4, 2],
    [-1, -1],
    [4, -2],
    [0, -6],
  ])
    for (const p of generateChunk(...c).props) {
      const r = nearestRoad(p.x, p.z);
      assert.ok(r.distance >= r.width / 2 + 9);
    }
});
test("town has seven connected areas, a multi-minute loop, and clear road centerlines", () => {
  const w = newWorld();
  assert.equal(districts.length, 7);
  assert.ok(roadPaths[0].length > 4000);
  assert.ok(w.coins.length > 500);
  assert.equal(w.ramps.length, 9);
  for (const d of districts) {
    const r = nearestRoad(d.x, d.z, true);
    assert.ok(r.distance < 165, `${d.name} is disconnected`);
  }
  for (const path of roadPaths)
    for (const p of path.nodes)
      for (const b of w.nearbySolids(p.x, p.z))
        assert.ok(
          !(
            Math.abs(p.x - b.x) < b.w / 2 + 2 &&
            Math.abs(p.z - b.z) < b.d / 2 + 2
          ),
          `Road ${path.id} blocked near ${p.x.toFixed(0)},${p.z.toFixed(0)}`,
        );
});
test("following actual slopes keeps all four wheel samples and chassis grounded", () => {
  const w = newWorld(),
    s = initialVehicle(spawnFor(), w.heightAt.bind(w));
  for (let i = 0; i < 240; i++) {
    stepVehicle(s, controls, 1 / 60, w);
    assert.ok(Number.isFinite(s.pitch) && Number.isFinite(s.roll));
    if (s.grounded) assert.ok(Math.abs(s.y - w.heightAt(s.x, s.z)) < 0.2);
  }
});
test("pickups and destruction remain one-time after unloading and rebuilding chunks", () => {
  const w = newWorld(true),
    c = w.coins.find(
      (c) => !w.ramps.some((r) => Math.hypot(c.x - r.x, c.z - r.z) < 40),
    );
  let coins = 0,
    broken = 0;
  const s = initialVehicle({ x: c.x, z: c.z, heading: 0 }, w.heightAt.bind(w));
  w.ensureAround(s.x, s.z, 0, true);
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
  const key = w.chunkKey(c.x, c.z),
    chunk = w.chunks.get(key),
    data = generateChunk(Math.floor(c.x / 128), Math.floor(c.z / 128), 8);
  w.createChunk(data);
  w.update(
    0.032,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  assert.equal(coins, 1);
  assert.ok(w.collectedIds.has(c.id));
  const b = w.breakables[0];
  Object.assign(s, { x: b.x, z: b.z, y: w.heightAt(b.x, b.z), speed: 15 });
  w.update(
    0.048,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  w.createChunk(generateChunk(Math.floor(b.x / 128), Math.floor(b.z / 128), 8));
  w.update(
    0.064,
    0.016,
    s,
    () => coins++,
    () => broken++,
  );
  assert.equal(broken, 1);
  assert.ok(w.brokenIds.has(b.id));
});
test("streaming keeps the visible set bounded and revisits cached regions", () => {
  const w = newWorld(true);
  for (const id of [
    "conch",
    "commons",
    "fields",
    "lagoon",
    "wreck",
    "ridge",
    "neptune",
    "conch",
  ]) {
    const s = spawnFor(id);
    w.ensureAround(s.x, s.z, 0, true);
    for (let i = 0; i < 15; i++) w.stream();
    assert.ok(
      [...w.chunks.values()].filter((c) => c.group.visible).length <= 9,
    );
    assert.ok(w.chunks.size <= 55);
  }
});
test("versioned saves preserve the old town, validate new IDs and restore exploration", () => {
  const st = storage();
  const previous = JSON.stringify({
    coins: [1, 1, 2],
    broken: [3],
    activities: ["jump"],
  });
  st.data.set(LEGACY_KEY, previous);
  const save = loadSave(st);
  assert.deepEqual(save.legacy, { coins: 2, broken: 1 });
  save.coins = ["crown:town-loop:1", "crown:town-loop:1", "bad"];
  save.broken = ["prop:conch:7"];
  save.visited = ["conch", "bad"];
  save.secrets = ["pearl-garden"];
  save.position = { x: 400, z: 510, heading: 0 };
  writeSave(save, st);
  const restored = loadSave(st);
  assert.deepEqual(restored.coins, ["crown:town-loop:1"]);
  assert.deepEqual(restored.visited, ["conch"]);
  assert.deepEqual(restored.secrets, ["pearl-garden"]);
  assert.equal(st.getItem(LEGACY_KEY), previous);
  assert.equal(restored.position.x, 400);
  st.data.set(SAVE_KEY, "corrupt");
  assert.deepEqual(loadSave(st).coins, []);
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
test("wagon consists of food shell, seating, wheels and passengers", () => {
  const car = makeWagon();
  assert.equal(car.name, "Hamburger wagon");
  assert.equal(car.userData.wheels.length, 4);
  car.updateMatrixWorld(true);
  const bounds = new T.Box3().setFromObject(car);
  assert.ok(bounds.max.x > 2.4 && bounds.min.x < -2.4);
  assert.ok(bounds.max.y > 4);
  assert.ok(car.children.some((m) => m.geometry?.type === "LatheGeometry"));
});

test("chassis tilts its nose upward on an uphill grade and right side upward across a bank", () => {
  const slope = (x, z) => x * 0.07 - z * 0.13;
  const s = initialVehicle({ x: 0, z: 0, heading: 0 }, slope);
  for (let i = 0; i < 120; i++)
    stepVehicle(
      s,
      { throttle: 0, steer: 0, boost: false, brake: false },
      1 / 60,
      { ...flat, heightAt: slope },
    );
  assert.ok(s.pitch > 0, "nose must rise toward elevated ground");
  assert.ok(s.roll > 0, "right side must rise with the bank");
});

test("road paint follows the seafloor and remains continuous across chunk borders", async () => {
  const { surfacePaint, surfaceColor } = await import(
    "../src/world/SurfacePaint.js"
  );
  const a = surfacePaint(-512, 384),
    b = surfacePaint(-384, 384),
    n = 65;
  for (let z = 0; z < n; z++)
    assert.deepEqual(
      a.pixels.slice((z * n + 64) * 4, (z * n + 64) * 4 + 4),
      b.pixels.slice(z * n * 4, z * n * 4 + 4),
    );
  const point = roadPaths[0].nodes[35],
    road = surfaceColor(point.x, point.z),
    sand = surfaceColor(850, 500);
  assert.ok(road[0] < sand[0] * 0.5, "road center must be distinct from sand");
});

test("native chunk rendering receives valid transferred paint and local texture coordinates", () => {
  const w = newWorld(),
    data = generateChunk(-3, 3),
    key = "-3,3";
  w.createChunk(data);
  const terrain = w.chunks.get(key).terrain;
  assert.ok(terrain.material.map.isDataTexture);
  assert.equal(terrain.material.map.image.width, 65);
  assert.equal(terrain.material.map.image.data.length, 65 * 65 * 4);
  const uv = terrain.geometry.attributes.uv;
  for (let i = 0; i < uv.count; i++)
    assert.ok(
      uv.getX(i) >= 0 && uv.getX(i) <= 1 && uv.getY(i) >= 0 && uv.getY(i) <= 1,
    );
});


test("replacing streamed chunks releases instance buffers without destroying shared art", () => {
  const w = newWorld();
  const c = w.coins[0];
  const cx = Math.floor(c.x / CHUNK_SIZE), cz = Math.floor(c.z / CHUNK_SIZE);
  w.createChunk(generateChunk(cx, cz));
  const chunk = w.chunks.get(`${cx},${cz}`);
  let batches = 0, released = 0, sharedDisposed = 0, terrainDisposed = 0;
  chunk.group.traverse(node => {
    if (node.isInstancedMesh) {
      batches++;
      node.addEventListener('dispose', () => released++);
      node.geometry.addEventListener('dispose', () => sharedDisposed++);
    }
  });
  chunk.terrain.geometry.addEventListener('dispose', () => terrainDisposed++);
  w.createChunk(generateChunk(cx, cz, 8));
  assert.ok(batches > 0);
  assert.equal(released, batches);
  assert.equal(sharedDisposed, 0);
  assert.equal(terrainDisposed, 1);
  assert.equal(chunk.group.parent, null);
  w.dispose();
  assert.equal(w.chunks.size, 0);
});

test("rapid travel discards stale and duplicate generation work", () => {
  const w = newWorld();
  const spawn = spawnFor('conch');
  w.ensureAround(spawn.x, spawn.z, 0, true);
  const chunk = [...w.chunks.values()][0];
  const [cx, cz] = chunk.key.split(',').map(Number);
  w.queue = [
    {key:'100,100', cx:100, cz:100, segments:32},
    {key:chunk.key, cx, cz, segments:chunk.segments},
  ];
  w.stream();
  assert.equal(w.queue.length, 0);
  assert.equal(w.chunks.has('100,100'), false);
  assert.equal(w.chunks.get(chunk.key), chunk);
  w.dispose();
});
