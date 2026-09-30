import * as T from "three";
import {
  WORLD_SIZE,
  CHUNK_SIZE,
  districts,
  landmarks,
  ramps,
  secrets,
  districtAt,
} from "./WorldConfig.js";
import {
  terrainHeight,
  rawHeight,
  colorAt,
  roadPaths,
  nearestRoad,
  rampHeight,
  hash,
  clamp,
} from "./Terrain.js";
import { generateChunk } from "./ChunkData.js";
import { surfaceColor } from "./SurfacePaint.js";
import { roadGeometry } from "./RoadGeometry.js";
import { SpatialHash } from "./SpatialHash.js";
import {
  mat,
  mesh,
  box,
  ball,
  cylinder,
  ring,
  makeLandmark,
  makeHome,
  makeFish,
  makeBoat,
  makeJelly,
  makeBarrel,
  makeArch,
  floraGeometries,
  crownGeometry,
} from "../art/Models.js";
import { sandTexture, terrainMaterial as makeTerrainMaterial } from "../art/Textures.js";
import { prepareSoftwareScene, setInstance } from "../core/Renderer.js";
const dummy = new T.Object3D();
export class World {
  constructor(scene, save, { software = false, worker = true } = {}) {
    this.scene = scene;
    this.save = save;
    this.software = software;
    this.boundary = WORLD_SIZE / 2 - 8;
    this.ramps = ramps.map((r) => ({ ...r, baseY: terrainHeight(r.x, r.z) }));
    this.solids = [];
    this.colliderHash = new SpatialHash();
    this.interactionHash = new SpatialHash();
    this.coins = [];
    this.breakables = [];
    this.traffic = [];
    this.people = [];
    this.jellies = [];
    this.decor = [];
    this.landmarkObjects = [];
    this.collected = save.coins.length + (save.legacy?.coins ?? 0);
    this.collectedIds = new Set(save.coins);
    this.brokenIds = new Set(save.broken);
    this.chunks = new Map();
    this.pending = new Map();
    this.ready = [];
    this.queue = [];
    this.wanted = new Map();
    this.stamp = 0;
    this.lastCell = "";
    this.flora = floraGeometries();
    this.crownGeo = crownGeometry();
    this.crownMat = mat(0xffd66a);
    this.terrainMat = new T.MeshLambertMaterial({
      vertexColors: true,
      map: sandTexture(),
    });
    if (worker && typeof Worker !== "undefined")
      try {
        this.worker = new Worker(
          new URL("./TerrainWorker.js", import.meta.url),
          { type: "module" },
        );
        this.worker.onmessage = ({ data }) => {
          this.pending.delete(data.key);
          this.ready.push(data);
        };
        this.worker.onerror = () => {
          this.worker.terminate();
          this.worker = null;
          for (const entry of this.pending.values()) this.queue.push(entry);
          this.pending.clear();
        };
      } catch {}
    this.makeGround();
    this.makeRoads();
    this.makeLandmarks();
    this.makeStreetDetails();
    this.makeSetPieces();
    this.makeExploration();
    this.makeResidents();
    this.makeAtmosphere();
  }
  heightAt(x, z) {
    let y = terrainHeight(x, z);
    for (const r of this.ramps) {
      const h = rampHeight(x, z, r);
      if (h !== null) y = Math.max(y, h);
    }
    return y;
  }
  nearbySolids(x, z) {
    return this.colliderHash.query(x, z, 8);
  }
  addSolid(x, z, w, d, height, y = terrainHeight(x, z)) {
    const s = { x, z, w, d, height, y };
    this.solids.push(s);
    this.colliderHash.add(s);
    return s;
  }
  makeGround() {
    // Coarse continuous floor remains present beneath streamed detail.
    const geo = new T.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, 60, 60);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position,
      colors = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i),
        z = pos.getZ(i);
      pos.setY(i, rawHeight(x, z) - 3);
      colors.set(surfaceColor(x, z), i * 3);
      geo.attributes.uv.setXY(i, x / 28, z / 28);
    }
    geo.setAttribute("color", new T.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    this.floor = mesh(this.scene, geo, this.terrainMat);
    this.floor.castShadow = false;
    this.floor.renderOrder = -60;
  }
  makeRoads() {
    const markings = [];
    for (const path of roadPaths) {
      path.nodes.forEach((p, i) => {
        const previous = path.nodes[Math.max(0, i - 1)],
          next = path.nodes[Math.min(path.nodes.length - 1, i + 1)];
        if (i % 3 === 0)
          markings.push({
            x: p.x,
            y: terrainHeight(p.x, p.z) + 0.34,
            z: p.z,
            a: Math.atan2(next.x - previous.x, next.z - previous.z),
          });
      });
      if (this.software) {
        const m = mesh(this.scene, roadGeometry(path, 24), 0x50878b);
        m.castShadow = false;
        m.renderOrder = -30;
      }
    }
    const batch = new T.InstancedMesh(
      new T.BoxGeometry(0.45, 0.025, 4),
      mat(0xe6d6a0),
      markings.length,
    );
    markings.forEach((p, i) => {
      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(0, p.a, 0);
      dummy.scale.setScalar(1);
      setInstance(batch, i, dummy);
    });
    batch.computeBoundingSphere();
    batch.renderOrder = -29;
    this.scene.add(batch);
  }
  makeLandmarks() {
    const sizes = {
      pineapple: [21, 21, 35],
      head: [18, 16, 25],
      rock: [23, 23, 8],
      krusty: [34, 26, 23],
      bucket: [24, 24, 35],
      goober: [45, 32, 41],
      ship: [36, 62, 40],
      castle: [66, 43, 49],
    };
    for (const l of landmarks) {
      const group = new T.LOD(),
        detailed = makeLandmark(l.type),
        simple = new T.Group();
      const [w, d, h] = sizes[l.type];
      if (l.type === "pineapple") {
        ball(simple, 0, 12, 0, 10, 14, 10, 0xe99a34);
        for (const x of [-3, 0, 3])
          mesh(simple, new T.ConeGeometry(3, 13, 5), 0x64a447, x, 29, 0);
      } else if (l.type === "castle") {
        box(simple, 0, 12, 0, 48, 24, 24, 0x91c7bc);
        for (const x of [-27, 27]) {
          cylinder(simple, x, 18, 0, 7, 36, 0xa0d6cb);
          mesh(simple, new T.ConeGeometry(8, 15, 7), 0x7facc0, x, 43, 0);
        }
      } else if (l.type === "ship") {
        ball(simple, 0, 8, 0, 18, 10, 30, 0x896148);
        box(simple, 0, 24, -7, 24, 20, 24, 0x8e7158);
      } else {
        ball(
          simple,
          0,
          h * 0.43,
          0,
          w * 0.48,
          h * 0.48,
          d * 0.48,
          l.type === "head"
            ? 0x7393a2
            : l.type === "rock"
              ? 0x977e7f
              : 0xb7ad93,
        );
      }
      group.addLevel(detailed, 0);
      group.addLevel(simple, this.software ? 190 : 300, 0.08);
      group.position.set(l.x, terrainHeight(l.x, l.z), l.z);
      this.scene.add(group);
      this.landmarkObjects.push(group);
      this.addSolid(l.x, l.z, w, d, h);
    }
    // Small, spaced clusters of marine homes. Road clearances are checked.
    let id = 0;
    for (const d of [districts[0], districts[1], districts[3], districts[4]])
      for (let i = 0; i < 9; i++) {
        const a = i * 2.4,
          r = 85 + (i % 3) * 27,
          x = d.x + Math.cos(a) * r,
          z = d.z + Math.sin(a) * r;
        const road = nearestRoad(x, z);
        if (
          road.distance < road.width / 2 + 21 ||
          landmarks.some((l) => Math.hypot(x - l.x, z - l.z) < l.radius + 18) ||
          this.solids.some(
            (s) => Math.hypot(x - s.x, z - s.z) < Math.max(s.w, s.d) / 2 + 15,
          )
        )
          continue;
        const home = makeHome(id++);
        home.position.set(x, terrainHeight(x, z), z);
        home.rotation.y = i * 0.7;
        this.scene.add(home);
        this.decor.push(home);
        this.addSolid(x, z, 10, 10, 16);
      }
  }
  makeStreetDetails() {
    // Small roadside pockets give inhabited districts a readable human scale.
    // Furniture sits on the shoulder, leaving the entire driving corridor open.
    for (const d of districts.filter(d => ["conch", "commons", "lagoon", "neptune"].includes(d.id))) {
      const path = roadPaths.find(p => p.id === (d.id === "conch" ? "conch-commons" :
        d.id === "lagoon" ? "lagoon-commons" : d.id === "neptune" ? "palace-commons" : "wreck-commons"));
      for (let i = 5; i < path.nodes.length - 1; i += 9) {
        const p = path.nodes[i], next = path.nodes[i + 1];
        if (Math.hypot(p.x-d.x,p.z-d.z) > 230) continue;
        const angle = Math.atan2(next.x-p.x,next.z-p.z);
        const side = i % 2 ? 1 : -1;
        const x = p.x + Math.cos(angle) * (path.width / 2 + 7) * side;
        const z = p.z - Math.sin(angle) * (path.width / 2 + 7) * side;
        const road = nearestRoad(x,z);
        if (road.distance < road.width / 2 + 4 || this.solids.some(s => Math.hypot(x-s.x,z-s.z)<Math.max(s.w,s.d)/2+8)) continue;
        const group = new T.Group();
        group.position.set(x,terrainHeight(x,z),z);
        group.rotation.y = angle;
        cylinder(group,0,3.9,0,0.18,7.8,0x496e70);
        ring(group,0,7.7,0,0.9,0.10,0x799d97).rotation.x = Math.PI/2;
        ball(group,0,7.7,0,0.65,0.8,0.65,0xe6d9a3);
        // Slatted bench and its legs, facing the road.
        for (let j=0;j<4;j++) box(group,2.8,1.1,-0.6+j*0.4,3.4,0.16,0.30,0xa77d50);
        for (const bx of [1.6,4]) box(group,bx,0.55,0,0.18,1.1,1.5,0x4d7373);
        for (const by of [1.7,2.1]) box(group,2.8,by,0.8,3.4,0.25,0.16,0xa77d50);
        this.scene.add(group);
        this.decor.push(group);
        this.addSolid(x,z,0.7,0.7,8);
      }
    }
  }
  makeSetPieces() {
    for (const r of this.ramps) {
      const group = new T.Group();
      group.position.set(r.x, r.baseY, r.z);
      group.rotation.y = r.heading;
      const g = new T.BufferGeometry();
      g.setAttribute(
        "position",
        new T.Float32BufferAttribute(
          [
            -r.width / 2,
            0,
            r.length / 2,
            r.width / 2,
            0,
            r.length / 2,
            -r.width / 2,
            r.height,
            -r.length / 2,
            r.width / 2,
            r.height,
            -r.length / 2,
          ],
          3,
        ),
      );
      g.setIndex([0, 2, 1, 1, 2, 3]);
      g.computeVertexNormals();
      mesh(group, g, 0xc89160, 0, 0.08, 0);
      for (const x of [-r.width / 2, r.width / 2]) {
        box(
          group,
          x,
          r.height / 2,
          -r.length / 2,
          0.5,
          r.height,
          0.5,
          0xd7b987,
        );
        const rail = box(
          group,
          x,
          r.height / 2 + 0.8,
          0,
          0.25,
          0.25,
          Math.hypot(r.length, r.height),
          0xf0d9a0,
        );
        rail.rotation.x = Math.atan2(r.height, r.length);
      }
      for (let i = 0; i < 3; i++) {
        const z = 8 - i * 7,
          y = r.height * (0.5 - z / r.length) + 0.12;
        box(group, 0, y, z, r.width * 0.75, 0.08, 1.2, 0xf3cf69);
      }
      this.scene.add(group);
    }
    for (const s of secrets) {
      const g = new T.Group();
      g.position.set(s.x, terrainHeight(s.x, s.z), s.z);
      const arch = makeArch(
        s.id === "coral-grotto" ? 0xa487ad : 0x85b5b0,
        20,
        14,
      );
      g.add(arch);
      ball(g, 0, 3, -9, 2.4, 2.4, 2.4, 0xdaf0bf);
      for (const x of [-13, 13]) this.addSolid(s.x + x, s.z, 5, 7, 12);
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        ball(
          g,
          Math.cos(a) * 13,
          0.5,
          -9 + Math.sin(a) * 13,
          2,
          1.4,
          2,
          0x88b2a6,
        );
      }
      this.scene.add(g);
      this.decor.push(g);
    }
    // Goo is a patch on the sea floor, not a surface-ocean horizon.
    const vertices = [],
      indices = [];
    const cx = 500,
      cz = 560;
    vertices.push(cx, terrainHeight(cx, cz) + 0.18, cz);
    for (let i = 0; i <= 48; i++) {
      const a = (i / 48) * Math.PI * 2,
        x = cx + Math.cos(a) * 77,
        z = cz + Math.sin(a) * 51;
      vertices.push(x, terrainHeight(x, z) + 0.18, z);
      if (i) indices.push(0, i, i + 1);
    }
    const geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.Float32BufferAttribute(vertices, 3));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    mesh(this.scene, geo, mat(0x4ea69b, false, 0.86));
    // Mountain tunnel is an actual drive-through opening between rock supports.
    const tunnel = makeArch(0xd5b18e, 34, 22);
    tunnel.position.set(212, terrainHeight(212, -505), -505);
    this.scene.add(tunnel);
    for (const x of [194, 230]) this.addSolid(x, -505, 8, 10, 22);
    // Visible enclosing reefs make the finite boundary readable.
    const geoRock = new T.IcosahedronGeometry(1, 1),
      batch = new T.InstancedMesh(geoRock, mat(0x86b0ab), 88);
    let k = 0;
    for (let i = 0; i < 22; i++)
      for (const edge of [0, 1, 2, 3]) {
        const v = -880 + i * 84,
          x = edge < 2 ? (edge ? 884 : -884) : v,
          z = edge < 2 ? v : edge === 2 ? 884 : -884;
        const size = 13 + hash(i, edge, 84) * 10;
        dummy.position.set(x, terrainHeight(x, z) + size * 0.6, z);
        dummy.rotation.set(0, hash(i, edge) * 6, 0);
        dummy.scale.set(size, size * 1.5, size);
        setInstance(batch, k++, dummy);
        this.addSolid(x, z, size * 1.8, size * 1.8, size * 2.1);
      }
    batch.computeBoundingSphere();
    this.scene.add(batch);
  }
  makeExploration() {
    for (const path of roadPaths) {
      let index = 0,
        next = 12;
      for (const p of path.nodes) {
        if (p.distance < next) continue;
        next += 22;
        const previous = path.nodes[Math.max(0, path.nodes.indexOf(p) - 1)],
          dx = p.x - previous.x,
          dz = p.z - previous.z,
          l = Math.hypot(dx, dz) || 1;
        const offset = index % 2 ? 3.5 : -3.5,
          x = p.x + (dz / l) * offset,
          z = p.z - (dx / l) * offset;
        this.addCrown(
          `crown:${path.id}:${index++}`,
          x,
          z,
          terrainHeight(x, z) + 2.0,
        );
      }
    }
    for (const d of districts)
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2,
          x = d.x + Math.cos(a) * (44 + (i % 3) * 7),
          z = d.z + Math.sin(a) * (44 + (i % 3) * 7);
        if (
          !this.solids.some(
            (b) =>
              Math.abs(x - b.x) < b.w / 2 + 3 &&
              Math.abs(z - b.z) < b.d / 2 + 3,
          )
        )
          this.addCrown(`crown:${d.id}:${i}`, x, z, terrainHeight(x, z) + 2);
      }
    for (const s of secrets)
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4,
          x = s.x + Math.cos(a) * 8,
          z = s.z - 9 + Math.sin(a) * 8;
        this.addCrown(
          `crown:secret-${s.id}:${i}`,
          x,
          z,
          terrainHeight(x, z) + 2.2,
        );
      }
    for (const r of this.ramps)
      for (let i = 0; i < 6; i++) {
        const lx = 0,
          lz = r.length / 2 - (i * r.length) / 5;
        const x = r.x + Math.sin(r.heading) * lz,
          z = r.z + Math.cos(r.heading) * lz;
        this.addCrown(`crown:${r.id}:${i}`, x, z, this.heightAt(x, z) + 2.3);
      }
    for (const d of districts)
      for (let i = 0; i < 18; i++) {
        const a = i * 2.3,
          x = d.x + Math.cos(a) * (22 + (i % 4) * 15),
          z = d.z + Math.sin(a) * (22 + (i % 4) * 15);
        if (
          this.solids.some(
            (s) =>
              Math.abs(x - s.x) < s.w / 2 + 3 &&
              Math.abs(z - s.z) < s.d / 2 + 3,
          )
        )
          continue;
        const b = {
          id: `prop:${d.id}:${i}`,
          x,
          z,
          y: terrainHeight(x, z),
          kind: "barrel",
        };
        this.breakables.push(b);
        this.interactionHash.add(b);
      }
    this.objectsByChunk = new Map();
    for (const item of [...this.coins, ...this.breakables]) {
      const key = this.chunkKey(item.x, item.z);
      if (!this.objectsByChunk.has(key)) this.objectsByChunk.set(key, []);
      this.objectsByChunk.get(key).push(item);
    }
  }
  addCrown(id, x, z, y) {
    const c = {
      id,
      x,
      z,
      y,
      kind: "crown",
      phase: hash(Math.floor(x), Math.floor(z), 16) * 6,
    };
    this.coins.push(c);
    this.interactionHash.add(c);
  }
  chunkKey(x, z) {
    return `${Math.floor(x / CHUNK_SIZE)},${Math.floor(z / CHUNK_SIZE)}`;
  }
  makeResidents() {
    for (const d of districts)
      for (let i = 0; i < 6; i++) {
        const a = i * 2.1,
          x = d.x + Math.cos(a) * 35,
          z = d.z + Math.sin(a) * 35;
        if (
          this.solids.some(
            (s) =>
              Math.abs(x - s.x) < s.w / 2 + 4 &&
              Math.abs(z - s.z) < s.d / 2 + 4,
          )
        )
          continue;
        const m = makeFish([0xe6ae7d, 0x93c4b0, 0xbd9bc8, 0xdfb676][i % 4]);
        this.scene.add(m);
        this.people.push({ mesh: m, x, z, phase: i + d.x * 0.01 });
      }
    for (let i = 0; i < 9; i++) {
      const m = makeBoat([0xa495c0, 0xe1af7b, 0x82b5b9][i % 3]);
      this.scene.add(m);
      this.traffic.push({ mesh: m, phase: i / 9, speed: 8 + (i % 3) * 2 });
    }
    for (const d of districts)
      for (let i = 0; i < (d.id === "fields" ? 14 : 4); i++) {
        const a = i * 2.3,
          x = d.x + Math.cos(a) * (60 + (i % 4) * 22),
          z = d.z + Math.sin(a) * (60 + (i % 4) * 22),
          y = terrainHeight(x, z) + 8 + (i % 3) * 3;
        const m = makeJelly(i % 2 ? 0xe997be : 0xb29bdb);
        this.scene.add(m);
        this.jellies.push({ mesh: m, x, y, z, phase: i });
      }
  }
  makeAtmosphere() {
    this.bubbles = [];
    const batch = new T.InstancedMesh(
      new T.SphereGeometry(0.13, 5, 3),
      mat(0xc9f8e3, false, 0.36),
      42,
    );
    batch.frustumCulled = false;
    this.scene.add(batch);
    this.bubbleMesh = batch;
    this.particles = [];
    this.particleMesh = new T.InstancedMesh(
      new T.IcosahedronGeometry(0.16),
      mat(0xffd87c),
      80,
    );
    this.particleMesh.frustumCulled = false;
    this.scene.add(this.particleMesh);
    if (this.software) {
      batch.visible = false;
      this.particleMesh.visible = false;
    }
  }
  createChunk(data) {
    const key = `${data.cx},${data.cz}`,
      prior = this.chunks.get(key);
    if (prior) this.disposeChunk(prior);
    const group = new T.Group();
    group.position.set(data.cx * CHUNK_SIZE, 0, data.cz * CHUNK_SIZE);
    const geo = new T.BufferGeometry();
    geo.setAttribute("position", new T.BufferAttribute(data.positions, 3));
    geo.setAttribute("color", new T.BufferAttribute(data.colors, 3));
    geo.setAttribute("uv", new T.BufferAttribute(data.uv, 2));
    geo.setIndex(new T.BufferAttribute(data.indices, 1));
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    let terrainMaterial = this.terrainMat;
    if (!this.software) {
      const texture = new T.DataTexture(
        data.paint,
        data.paintSize,
        data.paintSize,
        T.RGBAFormat,
      );
      texture.colorSpace = T.SRGBColorSpace;
      texture.magFilter = T.LinearFilter;
      texture.minFilter = T.LinearFilter;
      texture.needsUpdate = true;
      terrainMaterial = makeTerrainMaterial(texture);
      for (let i = 0; i < geo.attributes.uv.count; i++)
        geo.attributes.uv.setXY(
          i,
          geo.attributes.position.getX(i) / CHUNK_SIZE,
          geo.attributes.position.getZ(i) / CHUNK_SIZE,
        );
    }
    const terrain = mesh(group, geo, terrainMaterial);
    terrain.castShadow = false;
    terrain.renderOrder = -50;
    const flora = [];
    for (const type of ["rock", "coral", "kelp"])
      for (let color = 0; color < 3; color++) {
        let props = data.props.filter(
          (p) => p.type === type && p.color === color,
        );
        if (this.software)
          props = props.filter(
            (p) => hash(Math.floor(p.x), Math.floor(p.z), 62) < 0.3,
          );
        if (!props.length) continue;
        const colors = {
          rock: [0x98ada1, 0xb9b4a0, 0x9ca9ba],
          coral: [0xce8bae, 0xe2a180, 0xa597c9],
          kelp: [0x458f78, 0x69a77e, 0x88ac65],
        };
        const batch = new T.InstancedMesh(
          this.flora[type],
          mat(colors[type][color]),
          props.length,
        );
        batch.castShadow = false;
        batch.receiveShadow = true;
        props.forEach((p, i) => {
          dummy.position.set(
            p.x - group.position.x,
            p.y,
            p.z - group.position.z,
          );
          dummy.rotation.set(0, p.rotation, 0);
          dummy.scale.setScalar(p.scale);
          setInstance(batch, i, dummy);
        });
        batch.computeBoundingSphere();
        group.add(batch);
        flora.push({ batch, props });
      }
    const objects = this.objectsByChunk.get(key) ?? [],
      coins = objects.filter((o) => o.kind === "crown");
    let crownBatch = null;
    if (coins.length) {
      crownBatch = new T.InstancedMesh(
        this.crownGeo,
        this.crownMat,
        coins.length,
      );
      crownBatch.instanceMatrix.setUsage(T.DynamicDrawUsage);
      crownBatch.frustumCulled = false;
      group.add(crownBatch);
      coins.forEach((c, i) => {
        c.slot = i;
        dummy.position.set(c.x - group.position.x, c.y, c.z - group.position.z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(this.collectedIds.has(c.id) ? 0 : 1);
        setInstance(crownBatch, i, dummy);
      });
    }
    const barrels = [];
    for (const b of objects.filter((o) => o.kind === "barrel")) {
      if (this.brokenIds.has(b.id)) continue;
      const m = makeBarrel();
      m.position.set(b.x - group.position.x, b.y, b.z - group.position.z);
      group.add(m);
      barrels.push({ item: b, mesh: m });
    }
    const chunk = {
      key,
      group,
      terrain,
      segments: data.segments,
      flora,
      coins,
      crownBatch,
      barrels,
      used: ++this.stamp,
    };
    this.chunks.set(key, chunk);
    this.scene.add(group);
    if (this.software) prepareSoftwareScene(group);
    this.updateChunkCoins(chunk, 0);
  }
  ensureAround(x, z, heading = 0, immediate = false) {
    const cx = Math.floor(x / CHUNK_SIZE),
      cz = Math.floor(z / CHUNK_SIZE),
      cell = `${cx},${cz}`;
    if (cell === this.lastCell && !immediate) return;
    this.lastCell = cell;
    this.wanted.clear();
    const radius = this.software ? 1 : 2;
    const requests = [];
    for (let dz = -radius; dz <= radius; dz++)
      for (let dx = -radius; dx <= radius; dx++) {
        const a = cx + dx,
          b = cz + dz;
        if (
          a * CHUNK_SIZE > 900 ||
          b * CHUNK_SIZE > 900 ||
          (a + 1) * CHUNK_SIZE < -900 ||
          (b + 1) * CHUNK_SIZE < -900
        )
          continue;
        const segments = this.software
            ? 8
            : Math.max(Math.abs(dx), Math.abs(dz)) <= 1
              ? 32
              : 8,
          key = `${a},${b}`;
        this.wanted.set(key, segments);
        const loaded = this.chunks.get(key);
        if (loaded && loaded.segments === segments) {
          loaded.group.visible = true;
          loaded.used = ++this.stamp;
          continue;
        }
        if (!this.pending.has(key))
          requests.push({
            key,
            cx: a,
            cz: b,
            segments,
            priority: dx * dx + dz * dz,
          });
      }
    requests.sort((a, b) => a.priority - b.priority);
    for (const chunk of this.chunks.values())
      chunk.group.visible = this.wanted.has(chunk.key);
    this.queue = requests;
    if (immediate) {
      const count = Math.min(3, this.queue.length);
      for (let i = 0; i < count; i++) {
        const item = this.queue.shift();
        this.createChunk(generateChunk(item.cx, item.cz, item.segments));
      }
    }
  }
  stream() {
    // Worker generation never touches Three.js or the DOM. Only one mesh is
    // assembled per animation frame; fallback generators follow the same budget.
    if (this.ready.length) {
      const data = this.ready.shift(),
        key = `${data.cx},${data.cz}`;
      const desired = this.wanted.get(key);
      if (desired === data.segments) this.createChunk(data);
      else if (desired && !this.pending.has(key))
        this.queue.push({ key, cx: data.cx, cz: data.cz, segments: desired });
    }
    this.queue = this.queue.filter((item) =>
      this.wanted.get(item.key) === item.segments &&
      this.chunks.get(item.key)?.segments !== item.segments &&
      !this.pending.has(item.key));
    if (this.queue.length && this.pending.size < 3) {
      const item = this.queue.shift();
      if (this.worker) {
        this.pending.set(item.key, item);
        this.worker.postMessage(item);
      } else this.createChunk(generateChunk(item.cx, item.cz, item.segments));
    }
    while (this.chunks.size > 55) {
      const old = [...this.chunks.values()]
        .filter((c) => !c.group.visible)
        .sort((a, b) => a.used - b.used);
      const c = old[0];
      if (c) {
        this.disposeChunk(c);
        this.chunks.delete(c.key);
      } else break;
    }
  }
  updateChunkCoins(chunk, time) {
    if (!chunk.crownBatch) return;
    chunk.coins.forEach((c, i) => {
      dummy.position.set(
        c.x - chunk.group.position.x,
        c.y + Math.sin(time * 2 + c.phase) * 0.2,
        c.z - chunk.group.position.z,
      );
      dummy.rotation.set(0, time * 1.1 + c.phase, 0);
      dummy.scale.setScalar(this.collectedIds.has(c.id) ? 0 : 1);
      setInstance(chunk.crownBatch, i, dummy);
    });
    chunk.crownBatch.instanceMatrix.needsUpdate = true;
  }
  burst(x, y, z) {
    if (this.software) return;
    for (let i = 0; i < 12; i++) {
      if (this.particles.length >= 80) this.particles.shift();
      this.particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 7,
        vy: 3 + Math.random() * 4,
        vz: (Math.random() - 0.5) * 7,
        life: 1,
      });
    }
  }
  update(time, dt, vehicle, onCollect, onSmash) {
    this.ensureAround(vehicle.x, vehicle.z, vehicle.heading);
    this.stream();
    for (const c of this.interactionHash.query(vehicle.x, vehicle.z, 5)) {
      if (
        Math.hypot(c.x - vehicle.x, c.z - vehicle.z) > 3.9 ||
        Math.abs(c.y - vehicle.y - 1.6) > 3.1
      )
        continue;
      if (c.kind === "crown" && !this.collectedIds.has(c.id)) {
        this.collectedIds.add(c.id);
        this.collected++;
        this.burst(c.x, c.y, c.z);
        onCollect(c.id);
      }
      if (
        c.kind === "barrel" &&
        !this.brokenIds.has(c.id) &&
        Math.abs(vehicle.speed) > 4
      ) {
        this.brokenIds.add(c.id);
        this.burst(c.x, c.y + 1, c.z);
        onSmash(c.id);
      }
    }
    for (const chunk of this.chunks.values())
      if (chunk.group.visible) {
        this.updateChunkCoins(chunk, time);
        for (const b of chunk.barrels)
          b.mesh.visible = !this.brokenIds.has(b.item.id);
        if (this.software)
          for (const { batch, props } of chunk.flora)
            batch.userData.softwareCopies?.forEach(
              (m, i) =>
                (m.visible =
                  Math.hypot(props[i].x - vehicle.x, props[i].z - vehicle.z) <
                  95),
            );
      }
    for (const m of this.landmarkObjects) {
      m.visible =
        Math.hypot(m.position.x - vehicle.x, m.position.z - vehicle.z) <
        (this.software ? 600 : 1050);
    }
    for (const m of this.decor)
      m.visible =
        Math.hypot(m.position.x - vehicle.x, m.position.z - vehicle.z) <
        (this.software ? 230 : 400);
    const ringPath = roadPaths[0];
    for (const car of this.traffic) {
      const distance =
        (time * car.speed + car.phase * ringPath.length) % ringPath.length;
      let lo = 0,
        hi = ringPath.nodes.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ringPath.nodes[mid].distance < distance) lo = mid + 1;
        else hi = mid;
      }
      const a = ringPath.nodes[Math.max(0, lo - 1)],
        b = ringPath.nodes[lo],
        t = clamp(
          (distance - a.distance) / (b.distance - a.distance || 1),
          0,
          1,
        ),
        dx = b.x - a.x,
        dz = b.z - a.z,
        l = Math.hypot(dx, dz) || 1;
      const x = a.x + dx * t + (dz / l) * 5,
        z = a.z + dz * t - (dx / l) * 5;
      car.mesh.visible =
        Math.hypot(x - vehicle.x, z - vehicle.z) < (this.software ? 125 : 250);
      if (car.mesh.visible) {
        car.mesh.position.set(x, terrainHeight(x, z), z);
        car.mesh.rotation.y = Math.atan2(-dx, -dz);
        if (
          Math.hypot(x - vehicle.x, z - vehicle.z) < 4.7 &&
          vehicle.y < car.mesh.position.y + 2
        ) {
          vehicle.speed *= 0.94;
        }
      }
    }
    for (const p of this.people) {
      p.mesh.visible =
        Math.hypot(p.x - vehicle.x, p.z - vehicle.z) <
        (this.software ? 90 : 180);
      if (!p.mesh.visible) continue;
      const close = Math.hypot(p.x - vehicle.x, p.z - vehicle.z) < 10,
        x =
          p.x +
          Math.sin(time * 0.4 + p.phase) * 3 +
          (close ? Math.sign(p.x - vehicle.x) * 4 : 0),
        z = p.z + Math.cos(time * 0.3 + p.phase) * 3;
      p.mesh.position.set(
        x,
        terrainHeight(x, z) + Math.abs(Math.sin(time * 4 + p.phase)) * 0.06,
        z,
      );
      p.mesh.rotation.y = p.phase + Math.sin(time * 0.2) * 0.3;
      p.mesh.rotation.z = Math.sin(time * 4 + p.phase) * 0.035;
    }
    for (const j of this.jellies) {
      j.mesh.visible =
        Math.hypot(j.x - vehicle.x, j.z - vehicle.z) <
        (this.software ? 140 : 270);
      if (j.mesh.visible) {
        j.mesh.position.set(
          j.x + Math.sin(time * 0.2 + j.phase) * 5,
          j.y + Math.sin(time + j.phase) * 1.1,
          j.z,
        );
        j.mesh.scale.setScalar(1 + Math.sin(time * 2 + j.phase) * 0.045);
      }
    }
    if (!this.software) {
      for (let i = 0; i < 42; i++) {
        const x = vehicle.x + (hash(i, 0, 62) - 0.5) * 120,
          z = vehicle.z + (hash(i, 1, 62) - 0.5) * 120,
          y = vehicle.y + ((time * 0.8 + hash(i, 2, 62) * 30) % 30);
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.setScalar(0.4 + hash(i, 3, 62) * 1.1);
        setInstance(this.bubbleMesh, i, dummy);
      }
      this.bubbleMesh.instanceMatrix.needsUpdate = true;
      this.particles = this.particles.filter((p) => p.life > 0);
      for (let i = 0; i < 80; i++) {
        const p = this.particles[i];
        if (p) {
          p.life -= dt;
          p.vy -= 9 * dt;
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.z += p.vz * dt;
          dummy.position.set(p.x, p.y, p.z);
          dummy.scale.setScalar(Math.max(0, p.life));
        } else dummy.scale.setScalar(0);
        dummy.rotation.set(0, 0, 0);
        setInstance(this.particleMesh, i, dummy);
      }
      this.particleMesh.instanceMatrix.needsUpdate = true;
    }
  }
  recover(x, z) {
    const road = nearestRoad(x, z, true);
    return { x: road.x, z: road.z, heading: road.heading };
  }
  disposeChunk(chunk) {
    this.scene.remove(chunk.group);
    // Instance buffers belong to each batch; geometry and palette materials
    // are shared across chunks and must remain alive for neighboring scenery.
    chunk.group.traverse((node) => {
      if (node.isInstancedMesh) node.dispose();
    });
    chunk.terrain.geometry.dispose();
    if (!this.software) {
      chunk.terrain.material.map.dispose();
      chunk.terrain.material.dispose();
    }
  }
  dispose() {
    this.worker?.terminate();
    this.worker = null;
    this.pending.clear();
    this.ready.length = 0;
    this.queue.length = 0;
    for (const chunk of this.chunks.values()) this.disposeChunk(chunk);
    this.chunks.clear();
  }
}
