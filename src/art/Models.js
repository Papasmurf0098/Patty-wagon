import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { surfaceMaterial } from "./Materials.js";
const materials = new Map();
export function mat(color, basic = false, opacity = 1) {
  const key = `${color}:${basic}:${opacity}`;
  if (!materials.has(key))
    materials.set(
      key,
      new (basic ? T.MeshBasicMaterial : T.MeshPhongMaterial)({
        color,
        transparent: opacity < 1,
        opacity,
        side: T.DoubleSide,
        ...(basic ? {} : { shininess: 14, specular: 0x303c36 }),
      }),
    );
  return materials.get(key);
}
const unitBox = new T.BoxGeometry(1, 1, 1),
  unitSphere = new T.SphereGeometry(1, 20, 12),
  unitCylinder = new T.CylinderGeometry(1, 1, 1, 16);
export function mesh(
  parent,
  geo,
  color,
  x = 0,
  y = 0,
  z = 0,
  sx = 1,
  sy = 1,
  sz = 1,
) {
  const m = new T.Mesh(geo, typeof color === "number" ? mat(color) : color);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function finishAsset(root, defaultKind = null) {
  const wood = new Set([
    0xae7953, 0x876541, 0xddc38a, 0x7c5946, 0xa27951, 0xc9a574, 0x906f55,
    0x624d46, 0x887455, 0xa57d58, 0xa77d50,
  ]);
  const metal = new Set([
    0x87a8ae, 0x506b79, 0xbdc6b8, 0x8c9ba5, 0xe8d699, 0x89a9ae, 0x749294,
    0x536f74, 0x496e70, 0x799d97, 0xe8e2bc,
  ]);
  const buns = new Set([0xe8a548, 0xf4bc5b]);
  root.traverse((node) => {
    if (
      !node.isMesh ||
      !node.material.color ||
      node.material.map ||
      node.material.transparent
    )
      return;
    const color = node.material.color.getHex();
    const kind = buns.has(color)
      ? "bun"
      : wood.has(color)
        ? "wood"
        : metal.has(color)
          ? "metal"
          : [0x263443, 0x354659, 0x344b52].includes(color)
            ? "rubber"
            : defaultKind;
    if (kind) node.material = surfaceMaterial(kind, color);
  });
  return root;
}
// Combine static parts by shared material while preserving local transforms.
// The result keeps authored silhouettes and uses one draw per surface family.
export function mergeStaticAsset(root) {
  root.updateMatrixWorld(true);
  const inverse = root.matrixWorld.clone().invert(),
    buckets = new Map();
  root.traverse((node) => {
    if (!node.isMesh || Array.isArray(node.material)) return;
    const key = node.material.uuid;
    if (!buckets.has(key))
      buckets.set(key, { material: node.material, geometries: [] });
    const source = node.geometry.index
      ? node.geometry.toNonIndexed()
      : node.geometry.clone();
    source.applyMatrix4(
      new T.Matrix4().multiplyMatrices(inverse, node.matrixWorld),
    );
    buckets.get(key).geometries.push(source);
  });
  root.clear();
  for (const { material, geometries } of buckets.values()) {
    const geometry = mergeGeometries(geometries);
    geometries.forEach((g) => g.dispose());
    if (geometry) mesh(root, geometry, material);
  }
  return root;
}
export const box = (p, x, y, z, w, h, d, c) =>
  mesh(p, unitBox, c, x, y, z, w, h, d);
export const ball = (p, x, y, z, rx, ry, rz, c) =>
  mesh(p, unitSphere, c, x, y, z, rx, ry, rz);
export const cylinder = (p, x, y, z, r, h, c) =>
  mesh(p, unitCylinder, c, x, y, z, r, h, r);
export function ring(p, x, y, z, r, t, c) {
  return mesh(p, new T.TorusGeometry(r, t, 5, 20), c, x, y, z);
}
function lathe(p, profile, c, sz = 1) {
  return mesh(
    p,
    new T.LatheGeometry(
      profile.map(([x, y]) => new T.Vector2(x, y)),
      24,
    ),
    c,
    0,
    0,
    0,
    1,
    1,
    sz,
  );
}
function face(p, x, y, z, r = 0.2) {
  ball(p, x, y, z, r, r * 1.14, r * 0.4, 0xfffff0);
  ball(p, x, y, z - r * 0.35, r * 0.48, r * 0.56, r * 0.2, 0x1c3846);
}
export function makeWagon() {
  const g = new T.Group();
  g.name = "Hamburger wagon";
  // Entire chassis is food: lower bun, patty, lettuce, cheese and open upper bun.
  lathe(
    g,
    [
      [0, 0.58],
      [1.85, 0.58],
      [2.22, 0.74],
      [2.26, 0.95],
      [2.08, 1.09],
      [0, 1.09],
    ],
    0xe8a548,
    1.14,
  );
  lathe(
    g,
    [
      [0, 1.08],
      [2.12, 1.08],
      [2.25, 1.16],
      [2.21, 1.39],
      [2.07, 1.46],
      [0, 1.46],
    ],
    0x773c27,
    1.14,
  );
  const lettuce = new T.Shape();
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2,
      r = 2.24 + Math.sin(a * 11) * 0.16;
    const x = Math.cos(a) * r,
      z = Math.sin(a) * r * 1.13;
    i ? lettuce.lineTo(x, z) : lettuce.moveTo(x, z);
  }
  const leaf = mesh(g, new T.ShapeGeometry(lettuce), 0x76b834, 0, 1.49, 0);
  leaf.rotation.x = -Math.PI / 2;
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    ball(
      g,
      Math.cos(a) * 2.15,
      1.49,
      Math.sin(a) * 2.42,
      0.38,
      0.11,
      0.33,
      i % 2 ? 0x68a832 : 0x9ac543,
    );
  }
  const cheese = box(g, 0, 1.54, 0, 3.62, 0.12, 4.04, 0xffd148);
  cheese.rotation.y = 0.21;
  // Lathed shell leaves a real circular seating opening; no sedan cabin or roof.
  lathe(
    g,
    [
      [2.23, 1.65],
      [2.24, 1.85],
      [2.12, 2.18],
      [1.89, 2.49],
      [1.47, 2.66],
      [1.22, 2.63],
      [1.18, 2.4],
      [1.37, 2.12],
      [1.65, 1.85],
    ],
    0xf4bc5b,
    1.13,
  );
  for (let i = 0; i < 42; i++) {
    const a = i * 2.39996,
      r = 1.42 + (i % 6) * 0.125;
    const y = 2.67 - (r - 1.43) * 0.72;
    const s = ball(
      g,
      Math.cos(a) * r,
      y,
      Math.sin(a) * r * 1.13,
      0.095,
      0.032,
      0.045,
      0xffe6a3,
    );
    s.rotation.y = a + 0.8;
  }
  const wheels = [];
  for (const x of [-2.23, 2.23])
    for (const z of [-1.37, 1.37]) {
      const wheel = new T.Group();
      wheel.position.set(x, 0.73, z);
      g.add(wheel);
      const tire = cylinder(wheel, 0, 0, 0, 0.73, 0.48, 0x263443);
      tire.rotation.z = Math.PI / 2;
      const hub = cylinder(
        wheel,
        Math.sign(x) * 0.27,
        0,
        0,
        0.38,
        0.08,
        0xe8e2bc,
      );
      hub.rotation.z = Math.PI / 2;
      const cap = cylinder(
        wheel,
        Math.sign(x) * 0.32,
        0,
        0,
        0.17,
        0.1,
        0xcb713b,
      );
      cap.rotation.z = Math.PI / 2;
      wheels.push({ mesh: wheel, front: z < 0 });
    }
  // Interior seats and two expressive passengers.
  for (const x of [-0.65, 0.65]) {
    box(g, x, 1.77, 0.1, 0.78, 0.18, 0.9, 0x984b38);
    box(g, x, 2.11, 0.49, 0.78, 0.72, 0.18, 0xab543a);
  }
  const driver = new T.Group();
  driver.position.set(-0.64, 2.16, 0.1);
  g.add(driver);
  box(driver, 0, 0.61, 0, 0.89, 0.89, 0.39, 0xf4d748);
  box(driver, 0, 0.09, 0, 0.86, 0.19, 0.41, 0xffffff);
  box(driver, 0, -0.09, 0, 0.86, 0.19, 0.43, 0x916432);
  face(driver, -0.21, 0.72, -0.23, 0.18);
  face(driver, 0.21, 0.72, -0.23, 0.18);
  ball(driver, 0, 0.51, -0.33, 0.09, 0.12, 0.15, 0xf5cd44);
  box(driver, 0, 0.25, -0.24, 0.13, 0.17, 0.04, 0xd54d39);
  for (const x of [-0.31, 0.3]) {
    ball(driver, x, 0.25, -0.2, 0.07, 0.07, 0.03, 0xd98537);
    ball(driver, x, 0.89, -0.2, 0.055, 0.045, 0.02, 0xc9ac2d);
  }
  box(driver, -0.1, 0.38, -0.22, 0.09, 0.09, 0.05, 0xffffff);
  box(driver, 0.1, 0.38, -0.22, 0.09, 0.09, 0.05, 0xffffff);
  const passenger = new T.Group();
  passenger.position.set(0.61, 2.09, 0.13);
  g.add(passenger);
  ball(passenger, 0, 0.31, 0, 0.48, 0.54, 0.28, 0xef989d);
  mesh(
    passenger,
    new T.ConeGeometry(0.32, 0.86, 10),
    0xef989d,
    0,
    0.86,
    0,
    1,
    1,
    0.86,
  );
  face(passenger, -0.11, 0.71, -0.27, 0.11);
  face(passenger, 0.11, 0.71, -0.27, 0.11);
  ball(passenger, -0.45, 0.3, 0, 0.29, 0.13, 0.17, 0xef989d);
  ball(passenger, 0.45, 0.3, 0, 0.29, 0.13, 0.17, 0xef989d);
  box(passenger, 0, -0.03, 0, 0.72, 0.27, 0.47, 0x91b856);
  const steering = ring(g, -0.64, 2.16, -0.56, 0.31, 0.05, 0x574534);
  steering.rotation.x = -0.62;
  for (const x of [-1.45, 1.45])
    ball(g, x, 1.24, -2.45, 0.28, 0.22, 0.12, 0xfff0b7);
  cylinder(g, 1.54, 3.02, 1.68, 0.045, 2.65, 0xa67a39);
  const flag = box(g, 1.76, 4.06, 1.68, 0.85, 0.34, 0.11, 0x7dba42);
  flag.rotation.z = -0.2;
  const propeller = new T.Group();
  propeller.position.set(0, 1.02, 2.73);
  g.add(propeller);
  for (let i = 0; i < 3; i++) {
    const b = box(propeller, 0, 0.3, 0, 0.13, 0.77, 0.11, 0xe5dfac);
    b.rotation.z = (i * Math.PI * 2) / 3;
  }
  ball(propeller, 0, 0, 0.1, 0.17, 0.17, 0.14, 0xcb7c40);
  g.userData = { wheels, propeller };
  return finishAsset(g);
}
export function sign(p, text, x, y, z, width = 20, color = "#bf4e43") {
  if (typeof document === "undefined") return;
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1024, 256);
  ctx.strokeStyle = "#fff1bd";
  ctx.lineWidth = 12;
  ctx.strokeRect(16, 16, 992, 224);
  ctx.strokeStyle = "#ffffff35";
  ctx.lineWidth = 2;
  ctx.strokeRect(29, 29, 966, 198);
  ctx.fillStyle = "#fff3cd";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#182d36";
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 3;
  ctx.font = "bold 84px sans-serif";
  ctx.fillText(text, 512, 135, 932);
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  texture.anisotropy = 4;
  const material = new T.MeshPhongMaterial({
    map: texture,
    side: T.DoubleSide,
    shininess: 10,
  });
  mesh(p, new T.PlaneGeometry(width, width / 4), material, x, y, z);
}
function porthole(p, x, y, z, r = 2.2) {
  ring(p, x, y, z, r, 0.3, surfaceMaterial("metal", 0xe8d699));
  const glass = cylinder(p, x, y, z - 0.08, r - 0.25, 0.13, 0x6cc1c2);
  glass.rotation.x = Math.PI / 2;
  // An opaque dark interior and an off-center highlight read as deep glass.
  const inset = cylinder(p, x, y, z + 0.01, r * 0.56, 0.14, 0x276a7c);
  inset.rotation.x = Math.PI / 2;
  ball(
    p,
    x - r * 0.25,
    y + r * 0.27,
    z + 0.1,
    r * 0.14,
    r * 0.26,
    0.035,
    0xcaf1db,
  );
}
function pipe(p, x, y, z, r, h, c) {
  cylinder(p, x, y, z, r, h, c);
  ring(p, x, y + h / 2, z, r + 0.08, 0.17, c).rotation.x = Math.PI / 2;
}
export function makeLandmark(type) {
  const g = new T.Group();
  g.name = type;
  if (type === "pineapple") {
    ball(g, 0, 12, 0, 10.8, 14, 10.3, 0xe99a34);
    // Raised diamond lattice wraps the fruit, rather than flat painted blocks.
    for (let band = 0; band < 9; band++)
      for (let i = 0; i < 12; i++) {
        const y = 3 + band * 2.45,
          a = (i * Math.PI) / 6 + ((band % 2) * Math.PI) / 12,
          r = 10.5 * Math.sqrt(Math.max(0.05, 1 - ((y - 12) / 14) ** 2));
        const detail = box(
          g,
          Math.sin(a) * r,
          y,
          Math.cos(a) * r,
          1.8,
          0.16,
          0.21,
          0xf6ba4b,
        );
        detail.rotation.y = a;
        detail.rotation.z = (i % 2 ? 1 : -1) * 0.6;
      }
    for (let i = 0; i < 11; i++) {
      const a = (i * Math.PI * 2) / 11;
      const shape = new T.Shape();
      shape.moveTo(-1.2, 0);
      shape.quadraticCurveTo(-2.2, 5, 0, 13);
      shape.quadraticCurveTo(2.6, 5, 1.2, 0);
      shape.closePath();
      const leaf = mesh(
        g,
        new T.ShapeGeometry(shape),
        i % 2 ? 0x45954c : 0x74b64b,
        Math.sin(a) * 2,
        24,
        Math.cos(a) * 2,
      );
      leaf.rotation.y = a;
      leaf.rotation.x = 0.3 + (i % 3) * 0.18;
    }
    const door = ball(g, 0, 3, 10.1, 2.6, 3.4, 0.5, 0x5c929e);
    ring(g, 0, 3, 10.7, 2.1, 0.28, 0xc7d2aa);
    box(g, 0, 3, 10.8, 0.22, 4, 0.12, 0xabc9c7);
    box(g, 0, 3, 10.8, 4, 0.22, 0.12, 0xabc9c7);
    porthole(g, -5.5, 11, 8.8, 2);
    porthole(g, 5, 18, 8.1, 1.8);
    pipe(g, 9, 17, 1, 0.8, 6, 0x89a9ae);
    for (let z = 11; z < 25; z += 3) box(g, 0, 0.15, z, 7, 0.3, 2.6, 0xe3d3a6);
  } else if (type === "head") {
    ball(g, 0, 10, 0, 8.9, 13, 7.5, 0x698c9b);
    box(g, 0, 8, 5.9, 9, 15, 2.4, 0x6a8d9e);
    for (const x of [-3.1, 3.1]) {
      ball(g, x, 15, 6.7, 2.5, 1.65, 0.9, 0x456e80);
      box(g, x, 17.1, 7.1, 5.4, 1.2, 2.5, 0x759eab);
      porthole(g, x, 15, 7.6, 1.5);
    }
    box(g, 0, 11.4, 8.2, 2.3, 8.8, 4.6, 0x7ea1ad);
    ball(g, 0, 3, 7.3, 2.2, 3.2, 0.5, 0x36566b);
    box(g, 0, 21, 0, 12.4, 1.4, 12, 0x8faeb3);
  } else if (type === "rock") {
    mesh(
      g,
      new T.SphereGeometry(1, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      0x967a79,
      0,
      0,
      0,
      13,
      8,
      12,
    );
    cylinder(g, 0, 0.2, 0, 14, 0.4, 0xcfbf91);
    box(g, 0, 0.5, 14, 2.5, 0.5, 7, 0xa9917d);
    ball(g, -6, 0.2, 14, 1.4, 0.3, 1, 0xe4c885);
  } else if (type === "krusty") {
    box(g, 0, 5, 0, 32, 10, 23, 0xae7953);
    const roof = mesh(
      g,
      new T.CylinderGeometry(1, 1, 1, 18, 1, false, 0, Math.PI),
      0x876541,
      0,
      10,
      0,
      15,
      35,
      15,
    );
    roof.rotation.z = Math.PI / 2;
    for (let x = -15; x <= 15; x += 5) {
      box(g, x, 5, 12, 0.8, 10, 0.9, 0xddc38a);
      box(g, x, 5, -12, 0.8, 10, 0.9, 0xddc38a);
    }
    for (const x of [-10, 10]) {
      box(g, x, 5.6, 12.2, 7.9, 6.7, 0.2, 0x8cc6bb);
      box(g, x, 5.6, 12.5, 0.24, 6.7, 0.22, 0xe4d6a6);
      box(g, x, 5.6, 12.5, 7.9, 0.24, 0.22, 0xe4d6a6);
    }
    box(g, 0, 3.5, 12.3, 4.2, 7, 0.4, 0x4b9b9a);
    sign(g, "KRUSTY KRAB", 0, 12.5, 14, 22, "#8b523d");
    cylinder(g, -25, 12, 10, 0.6, 24, 0xdcca8b);
    ball(g, -25, 24, 10, 6.7, 4, 1.4, 0xe3b3b1);
    sign(g, "KRAB", -25, 24, 11.5, 9, "#b76c76");
    for (let i = 0; i < 5; i++) {
      const flag = box(
        g,
        -12 + i * 6,
        18.5,
        6,
        2.6,
        2.4,
        0.12,
        [0xf3d05a, 0xd0735f, 0x629ebe, 0x78ac8c, 0xe9d5a9][i],
      );
      flag.rotation.z = 0.15;
    }
  } else if (type === "bucket") {
    mesh(g, new T.CylinderGeometry(12, 10, 20, 20), 0x87a8ae, 0, 10, 0);
    cylinder(g, 0, 0.6, 0, 10.6, 1.2, 0x506b79);
    for (const y of [1, 19.3])
      ring(g, 0, y, 0, y < 2 ? 10.7 : 12.3, 0.6, 0xbdc6b8).rotation.x =
        Math.PI / 2;
    const handle = mesh(
      g,
      new T.TorusGeometry(14, 0.65, 6, 24, Math.PI),
      0x8c9ba5,
      0,
      19,
      0,
    );
    handle.rotation.z = 0;
    box(g, 0, 4, 10.8, 5.7, 8, 0.4, 0x334e66);
    sign(g, "CHUM BUCKET", 0, 14, 11.8, 19, "#9c463c");
  } else if (type === "goober") {
    ball(g, 0, 7, 0, 24, 8, 18, 0x966487);
    box(g, 0, 6, 13, 24, 12, 1, 0xe3a5a8);
    for (const x of [-8, 0, 8]) {
      ball(g, x, 5, 14, 3.2, 4.7, 0.5, 0x6ec0c2);
    }
    sign(g, "GOOFY GOOBER", 0, 13, 17, 27, "#7e4276");
    const cone = mesh(g, new T.ConeGeometry(5, 15, 12), 0xd29e66, 0, 22, -2);
    cone.rotation.z = Math.PI;
    ball(g, 0, 31, -2, 7, 7, 6, 0xf5c0cb);
    ball(g, -4, 29, -2, 4, 4, 4, 0xf4e4bc);
    ball(g, 4, 29, -2, 4, 4, 4, 0x9c7458);
    ball(g, 0, 37, -2, 1.7, 1.8, 1.7, 0xd35363);
  } else if (type === "ship") {
    const hull = new T.Group();
    hull.rotation.z = -0.12;
    g.add(hull);
    ball(hull, 0, 6, 0, 18, 10, 31, 0x7c5946);
    box(hull, 0, 12, 0, 29, 1.2, 51, 0xa27951);
    for (let z = -26; z < 28; z += 4)
      box(hull, 0, 13, z, 29, 0.25, 0.4, 0xc9a574);
    box(hull, 0, 21, -9, 22, 16, 23, 0x906f55);
    box(hull, 0, 30, -9, 27, 1.7, 28, 0x624d46);
    for (const x of [-8, 0, 8]) porthole(hull, x, 23, 3, 2.7);
    cylinder(hull, 0, 32, -20, 1.2, 20, 0x887455);
    box(hull, 0, 39, -20, 18, 1, 1, 0x887455);
    for (const x of [-17, 17])
      for (const z of [-17, 0, 17]) {
        const tire = ring(hull, x, 8, z, 3.2, 0.9, 0x344b52);
        tire.rotation.y = Math.PI / 2;
      }
    sign(hull, "THUG TUG", 0, 18, 6, 20, "#654437");
  } else if (type === "castle") {
    box(g, 0, 8, 0, 48, 16, 24, 0x81bdb5);
    box(g, 0, 18, 0, 34, 6, 22, 0xc7e0cb);
    for (const x of [-26, 26])
      for (const z of [-12, 12]) {
        cylinder(g, x, 16, z, 7, 32, 0x98cfc4);
        cylinder(g, x, 32, z, 8.2, 2, 0xd5e4c9);
        mesh(g, new T.ConeGeometry(8.5, 14, 8), 0x759fbc, x, 40, z);
        ball(g, x, 48, z, 1.4, 1.4, 1.4, 0xf6d983);
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          box(
            g,
            x + Math.cos(a) * 7.2,
            34,
            z + Math.sin(a) * 7.2,
            2.4,
            4,
            2.4,
            0xc7e0cb,
          );
        }
      }
    ball(g, 0, 6, 13, 5, 7, 0.5, 0x3d8b94);
    sign(g, "NEPTUNE", 0, 24, 13, 25, "#407e8f");
    cylinder(g, 0, 36, 0, 0.45, 19, 0xe3c56f);
    for (const x of [-4, 0, 4]) {
      cylinder(g, x, 44, 0, 0.45, 7, 0xf3d780);
      mesh(g, new T.ConeGeometry(0.8, 3, 6), 0xf3d780, x, 49, 0);
    }
    box(g, 0, 40, 0, 9, 0.8, 0.8, 0xf3d780);
    for (let i = 0; i < 4; i++)
      box(g, 0, 0.6 + i * 0.6, 17 - i * 1.5, 19, 1.2, 3, 0xbdcbae);
  }
  finishAsset(g, ["head", "rock", "castle"].includes(type) ? "stone" : null);
  return mergeStaticAsset(g);
}
export function makeHome(i = 0) {
  const g = new T.Group(),
    colors = [0xbb85ad, 0x80b5bd, 0xdbaa83, 0x94b598];
  const c = colors[i % 4];
  cylinder(g, 0, 5, 0, 5, 10, c);
  ball(g, 0, 10, 0, 5.3, 1.8, 5.3, 0xcacaa8);
  for (const y of [1, 9])
    ring(g, 0, y, 0, 5.1, 0.2, 0xb9c3a3).rotation.x = Math.PI / 2;
  porthole(g, -2, 6, 4.6, 1.25);
  ball(g, 1.8, 2, 4.8, 1.3, 2.2, 0.25, 0x416877);
  pipe(g, 3, 13, -1, 0.5, 6, 0x749294);
  // Recessed entry, door handle, weathered sill and a small house number plaque.
  box(g, 1.8, 0.18, 6, 3.3, 0.35, 2.2, surfaceMaterial("stone", 0xc2c9a5));
  ball(g, 2.35, 2, 5.1, 0.1, 0.1, 0.08, surfaceMaterial("metal", 0xdcc78d));
  sign(g, String(101 + i), -2.4, 3.5, 4.9, 1.6, "#526d72");
  return mergeStaticAsset(finishAsset(g, "metal"));
}
export function makeFish(color = 0xf2ae77) {
  const g = new T.Group();
  ball(g, 0, 1.75, 0, 0.6, 0.95, 0.42, color);
  box(g, 0, 0.65, 0, 0.8, 0.6, 0.5, 0x718b8a);
  face(g, -0.18, 2.05, -0.39, 0.18);
  face(g, 0.18, 2.05, -0.39, 0.18);
  ball(g, 0, 1.62, -0.47, 0.2, 0.11, 0.13, 0xa46d6d);
  const arms = [],
    legs = [];
  for (const x of [-0.59, 0.59]) {
    const arm = new T.Group();
    arm.position.set(x, 1.65, 0);
    g.add(arm);
    ball(arm, 0, -0.3, 0, 0.2, 0.44, 0.14, color);
    ball(arm, 0, -0.65, -0.07, 0.18, 0.17, 0.13, color);
    arms.push(arm);
  }
  for (const x of [-0.24, 0.24]) {
    const leg = new T.Group();
    leg.position.set(x, 0.65, 0);
    g.add(leg);
    cylinder(leg, 0, -0.3, 0, 0.13, 0.6, color);
    ball(leg, 0, -0.52, -0.1, 0.22, 0.15, 0.36, 0x444e65);
    legs.push(leg);
  }
  // Small fins, a shirt collar and a belt give residents more than a silhouette.
  const fin = new T.Shape();
  fin.moveTo(0, 0);
  fin.lineTo(0.6, 0.35);
  fin.lineTo(0, 0.65);
  fin.closePath();
  const tail = mesh(g, new T.ShapeGeometry(fin), color, 0, 1.25, 0.35);
  tail.rotation.y = Math.PI / 2;
  for (const x of [-0.18, 0.18])
    box(g, x, 1.12, -0.42, 0.24, 0.1, 0.035, 0xeee4ba);
  box(g, 0, 0.88, -0.28, 0.78, 0.08, 0.05, 0x4d696b);
  g.userData = { arms, legs };
  return g;
}
export function makeBoat(color = 0xa78ab9) {
  const g = new T.Group();
  ball(g, 0, 1, 0, 1.7, 0.8, 2.9, color);
  box(g, 0, 1.4, 0, 2.5, 0.2, 3.5, 0xdbe1b8);
  box(g, 0, 2.1, 0.3, 1.7, 1.1, 1.5, color);
  box(g, 0, 2, -1, 2.2, 1.2, 0.13, 0x93d4d2);
  for (const x of [-1.5, 1.5])
    for (const z of [-1.4, 1.4]) {
      const m = cylinder(g, x, 0.55, z, 0.55, 0.33, 0x354659);
      m.rotation.z = Math.PI / 2;
    }
  return g;
}
export function makeJelly(color = 0xec9fc7) {
  const g = new T.Group();
  mesh(
    g,
    new T.SphereGeometry(1, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2),
    mat(color, false, 0.8),
    0,
    0,
    0,
    2,
    1.7,
    2,
  );
  ring(g, 0, 0, 0, 1.9, 0.09, color).rotation.x = Math.PI / 2;
  for (let i = 0; i < 5; i++) {
    const a = (i * Math.PI * 2) / 5;
    const t = cylinder(
      g,
      Math.cos(a) * 1.2,
      -1.4,
      Math.sin(a) * 1.2,
      0.1,
      2.8,
      color,
    );
    t.rotation.z = Math.sin(a) * 0.18;
  }
  return g;
}
const barrelHoop = new T.TorusGeometry(0.96, 0.07, 5, 20);
export function makeBarrel() {
  const g = new T.Group();
  cylinder(g, 0, 1, 0, 0.95, 2, 0xa57d58);
  for (const y of [0.3, 1.65])
    mesh(g, barrelHoop, 0x536f74, 0, y, 0).rotation.x = Math.PI / 2;
  return finishAsset(g);
}
export function crownGeometry() {
  const shape = new T.Shape();
  shape.moveTo(-0.85, 0);
  shape.lineTo(-1, 1.1);
  shape.lineTo(-0.48, 0.72);
  shape.lineTo(0, 1.43);
  shape.lineTo(0.48, 0.72);
  shape.lineTo(1, 1.1);
  shape.lineTo(0.85, 0);
  shape.closePath();
  return new T.ExtrudeGeometry(shape, { depth: 0.24, bevelEnabled: false });
}
export function floraGeometries() {
  const branches = [];
  for (const [x, y, z, h, a] of [
    [0, 2.5, 0, 5, 0],
    [-1, 3, 0, 3, 0.7],
    [1.1, 3.8, 0, 3, -0.65],
    [0, 4.1, 0.8, 3, 0.2],
  ]) {
    const geo = new T.CylinderGeometry(0.38, 0.55, h, 6);
    geo.rotateZ(a);
    geo.translate(x, y, z);
    branches.push(geo);
    const tip = new T.SphereGeometry(0.42, 6, 4);
    tip.translate(x - (Math.sin(a) * h) / 2, y + (Math.cos(a) * h) / 2, z);
    branches.push(tip);
  }
  const coral = mergeGeometries(branches);
  branches.forEach((g) => g.dispose());
  const kelpParts = [];
  for (let i = 0; i < 3; i++) {
    const points = [];
    for (let j = 0; j < 5; j++)
      points.push(
        new T.Vector3(
          Math.sin(j * 0.8 + i) * 0.6 + i * 0.35,
          j * 2,
          Math.cos(j + i) * 0.3,
        ),
      );
    const geo = new T.TubeGeometry(
      new T.CatmullRomCurve3(points),
      10,
      0.15,
      3,
      false,
    );
    kelpParts.push(geo);
    for (let j = 1; j < 5; j++) {
      const leaf = new T.SphereGeometry(1, 6, 4);
      leaf.scale(0.38, 1.35, 0.13);
      leaf.rotateZ((j % 2 ? 1 : -1) * 0.55);
      leaf.translate(
        points[j].x + (j % 2 ? 0.45 : -0.45),
        points[j].y,
        points[j].z,
      );
      kelpParts.push(leaf);
    }
  }
  const kelp = mergeGeometries(kelpParts);
  kelpParts.forEach((g) => g.dispose());
  return { coral, kelp, rock: new T.IcosahedronGeometry(2.4, 0) };
}
export function makeArch(color = 0xc29ccb, width = 15, height = 13) {
  const g = new T.Group();
  const arch = mesh(
    g,
    new T.TorusGeometry(width / 2, 2.2, 6, 12, Math.PI),
    color,
    0,
    height - width / 2,
    0,
  );
  arch.scale.y = height / (width / 2);
  for (const x of [-width / 2, width / 2])
    ball(g, x, 2, 0, 3.7, 3.5, 3.7, color);
  return g;
}
