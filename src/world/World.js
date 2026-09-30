import * as T from "three";
import { districts, ramps } from "./WorldConfig.js";
const materials = new Map();
export function mat(color, metalness = 0) {
  const key = `${color}-${metalness}`;
  if (!materials.has(key))
    materials.set(
      key,
      new T.MeshStandardMaterial({ color, roughness: 0.65, metalness }),
    );
  return materials.get(key);
}
export function box(parent, x, y, z, w, h, d, color) {
  const m = new T.Mesh(new T.BoxGeometry(w, h, d), mat(color));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function sphere(parent, x, y, z, r, color, sx = 1, sy = 1, sz = 1) {
  const m = new T.Mesh(new T.SphereGeometry(r, 16, 10), mat(color));
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  parent.add(m);
  return m;
}
export function makeCar(color = 0xe69a43, burger = false) {
  const g = new T.Group();
  box(g, 0, 0.85, 0, 2.7, 0.7, 4.2, color);
  box(g, 0, 1.45, -0.3, 2.3, 0.8, 2.3, 0x86d8dc);
  box(g, 0, 1.88, -0.3, 2.5, 0.15, 2.6, color);
  box(g, 0, 0.65, -2.15, 2.8, 0.22, 0.25, 0xf5ebd1);
  box(g, 0, 0.65, 2.15, 2.8, 0.22, 0.25, 0xf5ebd1);
  for (const x of [-0.9, 0.9])
    box(g, x, 0.95, -2.17, 0.5, 0.28, 0.08, 0xfff2aa);
  for (const x of [-1.4, 1.4])
    for (const z of [-1.3, 1.3]) {
      const w = new T.Mesh(
        new T.CylinderGeometry(0.58, 0.58, 0.35, 14),
        mat(0x183542),
      );
      w.rotation.z = Math.PI / 2;
      w.position.set(x, 0.6, z);
      g.add(w);
      sphere(g, x * 1.02, 0.6, z, 0.25, 0xf2d6a1, 0.3, 1, 1);
    }
  if (burger) {
    sphere(g, 0, 2.15, 0, 1.5, 0xc67930, 1, 0.23, 0.9);
    sphere(g, 0, 2.4, 0, 1.5, 0x6f372b, 1, 0.16, 0.9);
    box(g, 0, 2.59, 0, 2.6, 0.12, 2.3, 0x8dbb46);
    sphere(g, 0, 2.82, 0, 1.5, 0xf5b652, 1, 0.38, 0.9);
    for (let i = 0; i < 15; i++) {
      const a = i * 2.4,
        r = 0.2 + (i % 4) * 0.3;
      sphere(
        g,
        Math.sin(a) * r,
        3.27 - r * 0.18,
        Math.cos(a) * r,
        0.07,
        0xffebad,
        1.6,
        0.5,
        1,
      );
    }
  }
  return g;
}
export class World {
  constructor(scene, save) {
    this.scene = scene;
    this.ramps = ramps;
    this.solids = [];
    this.coins = [];
    this.breakables = [];
    this.traffic = [];
    this.people = [];
    this.particles = [];
    this.collected = save.coins.length;
    this.save = save;
    box(scene, 0, -0.6, 0, 244, 1, 244, 0x76b5b3);
    for (const d of districts) {
      box(scene, d.x, -0.02, 0, 76, 0.12, 236, d.color);
      box(scene, d.x, 0.08, 0, 14, 0.12, 222, 0x365866);
    }
    for (const z of [-75, 0, 75]) {
      box(scene, 0, 0.08, z, 230, 0.12, 14, 0x365866);
      for (let x = -108; x <= 108; x += 12)
        box(scene, x, 0.16, z, 5, 0.02, 0.28, 0xf1de99);
    }
    // Repeated architecture detail is instanced to keep draw calls bounded.
    const windows = [];
    const trees = [];
    for (const d of districts)
      for (const z of [-99, -50, -24, 24, 50, 99])
        for (const side of [-1, 1]) {
          const x = d.x + side * 23;
          const h = 5 + ((Math.abs(z) + d.x + 100) % 13);
          const color = d.x < 0 ? 0xf1aa88 : d.x > 0 ? 0x477f83 : 0x8a79af;
          box(scene, x, h / 2, z, 14, h, 15, color);
          box(scene, x, h + 0.3, z, 15, 0.6, 16, 0xffe0ac);
          this.solids.push({ x, z, w: 14, d: 15, height: h });
          for (let y = 2; y < h; y += 3)
            for (const dx of [-4, 0, 4]) windows.push([x + dx, y, z + 7.55]);
          box(scene, x, 1, z + 8, 16, 0.2, 3, 0xf0d7b0);
          for (const dx of [-7, 7]) trees.push([x + dx, z + 12]);
        }
    this.instance(windows, new T.BoxGeometry(1.4, 1.8, 0.12), 0xade3d9);
    this.instance(
      trees.map(([x, z]) => [x, 1.7, z]),
      new T.CylinderGeometry(0.3, 0.45, 3.4, 7),
      0x665756,
    );
    this.instance(
      trees.map(([x, z]) => [x, 4.5, z]),
      new T.IcosahedronGeometry(2.4, 1),
      0x3f9e88,
    );
    // Landmarks: glowing coral plaza, boardwalk wheel, industrial water tower.
    sphere(scene, 0, 2, -100, 5, 0xe49fad, 1, 0.5, 1);
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      const stem = box(
        scene,
        Math.sin(a) * 5,
        4,
        -100 + Math.cos(a) * 5,
        0.7,
        8,
        0.7,
        0xe89fbe,
      );
      stem.rotation.z = Math.sin(a) * 0.5;
      sphere(scene, Math.sin(a) * 7, 7, -100 + Math.cos(a) * 5, 1.3, 0xffddac);
    }
    const wheel = new T.Group();
    wheel.position.set(-100, 13, -85);
    const ring = new T.Mesh(new T.TorusGeometry(10, 0.4, 8, 48), mat(0xf5c172));
    wheel.add(ring);
    for (let i = 0; i < 10; i++) {
      const a = (i * Math.PI) / 5;
      const spoke = box(wheel, 0, 0, 0, 0.15, 20, 0.15, 0xffe9c0);
      spoke.rotation.z = a;
      box(wheel, Math.sin(a) * 10, Math.cos(a) * 10, 0, 2, 2, 1.8, 0x9ce4d7);
    }
    scene.add(wheel);
    this.wheel = wheel;
    box(scene, -100, 5, -85, 0.7, 10, 0.7, 0xf5e3ba);
    for (const x of [95, 105])
      for (const z of [-100, -90]) box(scene, x, 8, z, 0.7, 16, 0.7, 0x395a65);
    sphere(scene, 100, 17, -95, 6, 0xd8ac70, 1, 0.8, 1);
    box(scene, 100, 21, -95, 12, 1, 12, 0xf0d4a1);
    box(scene, -110, 0.4, 28, 14, 0.8, 83, 0xb58867);
    for (let z = -10; z < 68; z += 4)
      box(scene, -110, 0.86, z, 14, 0.1, 0.2, 0xffd2a6);
    for (const r of ramps) {
      const vertices = new Float32Array([
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
      ]);
      const geom = new T.BufferGeometry();
      geom.setAttribute("position", new T.BufferAttribute(vertices, 3));
      geom.setIndex([0, 2, 1, 1, 2, 3]);
      geom.computeVertexNormals();
      const m = new T.Mesh(
        geom,
        new T.MeshStandardMaterial({ color: 0xf4a967, side: T.DoubleSide }),
      );
      m.position.set(r.x, 0.18, r.z);
      m.receiveShadow = true;
      scene.add(m);
      for (const x of [-r.width / 2, r.width / 2])
        box(
          scene,
          r.x + x,
          r.height / 2,
          r.z - r.length / 2,
          0.3,
          r.height,
          0.3,
          0xffdfb0,
        );
    }
    const coinGeo = new T.TorusGeometry(0.65, 0.2, 6, 12);
    for (let district = 0; district < 3; district++)
      for (let i = 0; i < 32; i++) {
        const id = district * 32 + i,
          x =
            districts[district].x +
            (i < 20 ? (i % 2 ? 2 : -2) : Math.sin(i * 1.7) * 36),
          z = i < 20 ? 92 - i * 9 : -88 + (i - 20) * 16;
        const mesh = new T.Mesh(coinGeo, mat(0xffdb6d, 0.35));
        mesh.position.set(x, 1.7, z);
        mesh.visible = !save.coins.includes(id);
        scene.add(mesh);
        this.coins.push({ id, mesh, x, z, baseY: 1.7 });
      }
    for (let i = 0; i < 42; i++) {
      const x = districts[i % 3].x + (i % 2 ? 10 : -10),
        z = -92 + Math.floor(i / 3) * 14;
      const mesh = box(
        scene,
        x,
        0.75,
        z,
        1.5,
        1.5,
        1.5,
        i % 2 ? 0xba7c53 : 0xdf9870,
      );
      mesh.visible = !save.broken.includes(i);
      this.breakables.push({ id: i, mesh, x, z });
    }
    for (let i = 0; i < 9; i++) {
      const mesh = makeCar([0x91d1c3, 0xe6978b, 0xb6a5dc][i % 3]);
      scene.add(mesh);
      this.traffic.push({
        mesh,
        lane: districts[i % 3].x + 4,
        phase: i * 24,
        speed: 5 + (i % 3),
      });
    }
    for (let i = 0; i < 24; i++) {
      const mesh = new T.Group();
      box(mesh, 0, 1, 0, 0.6, 1.3, 0.5, i % 2 ? 0xe9c278 : 0x69cabb);
      sphere(mesh, 0, 1.95, 0, 0.35, 0xf3d0a8);
      for (const x of [-0.18, 0.18])
        box(mesh, x, 0.25, 0, 0.2, 0.5, 0.2, 0x345665);
      scene.add(mesh);
      this.people.push({
        mesh,
        x: districts[i % 3].x + (i % 2 ? 11 : -11),
        z: -95 + i * 8,
        phase: i,
      });
    }
    this.secret = new T.Vector3(-108, 0, 64);
    sphere(scene, -108, 2, 64, 1.3, 0x95f6c6);
    this.scene.add(new T.HemisphereLight(0xdcf8ff, 0x627f72, 2.4));
    this.particleMesh = new T.InstancedMesh(
      new T.IcosahedronGeometry(0.18),
      mat(0xffdb81),
      120,
    );
    this.particleMesh.instanceMatrix.setUsage(T.DynamicDrawUsage);
    this.particleMesh.frustumCulled = false;
    scene.add(this.particleMesh);
  }
  instance(points, geometry, color) {
    const m = new T.InstancedMesh(geometry, mat(color), points.length),
      dummy = new T.Object3D();
    points.forEach((p, i) => {
      dummy.position.set(...p);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    });
    m.castShadow = true;
    m.receiveShadow = true;
    this.scene.add(m);
  }
  burst(x, y, z) {
    for (let i = 0; i < 12; i++) {
      if (this.particles.length >= 120) this.particles.shift();
      this.particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 8,
        vy: 3 + Math.random() * 5,
        vz: (Math.random() - 0.5) * 8,
        life: 1,
      });
    }
  }
  update(time, dt, vehicle, onCollect, onSmash) {
    this.wheel.rotation.z = time * 0.09;
    for (const c of this.coins) {
      if (!c.mesh.visible) continue;
      c.mesh.rotation.y = time * 1.8;
      c.mesh.position.y = c.baseY + Math.sin(time * 3 + c.id) * 0.25;
      if (Math.hypot(vehicle.x - c.x, vehicle.z - c.z) < 2.4 && vehicle.y < 3) {
        c.mesh.visible = false;
        this.burst(c.x, 2, c.z);
        onCollect(c.id);
      }
    }
    for (const b of this.breakables)
      if (
        b.mesh.visible &&
        vehicle.y < 2 &&
        Math.hypot(vehicle.x - b.x, vehicle.z - b.z) < 2.4 &&
        Math.abs(vehicle.speed) > 3
      ) {
        b.mesh.visible = false;
        this.burst(b.x, 1, b.z);
        onSmash(b.id);
      }
    for (const car of this.traffic) {
      const z = ((time * car.speed + car.phase) % 210) - 105;
      car.mesh.position.set(car.lane, 0, z);
      car.mesh.rotation.y = Math.PI;
      if (
        vehicle.y < 2 &&
        Math.hypot(vehicle.x - car.lane, vehicle.z - z) < 3
      ) {
        vehicle.speed *= -0.4;
        vehicle.x -= 2;
      }
    }
    for (const p of this.people) {
      const close = Math.hypot(vehicle.x - p.x, vehicle.z - p.z) < 9;
      p.mesh.position.set(
        p.x +
          (close
            ? Math.sign(p.x - vehicle.x) * 3
            : Math.sin(time + p.phase) * 0.3),
        Math.abs(Math.sin(time * 4 + p.phase)) * 0.08,
        p.z + Math.sin(time * 0.3 + p.phase) * 3,
      );
      p.mesh.rotation.z = Math.sin(time * 4 + p.phase) * 0.05;
    }
    this.particles = this.particles.filter((p) => p.life > 0);
    const dummy = new T.Object3D();
    for (let i = 0; i < 120; i++) {
      const p = this.particles[i];
      if (p) {
        p.life -= dt;
        p.vy -= 12 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
        dummy.position.set(p.x, p.y, p.z);
        dummy.scale.setScalar(Math.max(0, p.life));
      } else dummy.scale.setScalar(0);
      dummy.updateMatrix();
      this.particleMesh.setMatrixAt(i, dummy.matrix);
    }
    this.particleMesh.instanceMatrix.needsUpdate = true;
  }
}
