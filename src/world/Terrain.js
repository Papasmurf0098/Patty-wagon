import {
  WORLD_SEED,
  WORLD_SIZE,
  routes,
  landmarks,
  districtAt,
} from "./WorldConfig.js";
export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (t) => t * t * (3 - 2 * t);
export function hash(x, z, salt = 0) {
  let v =
    Math.imul(x | 0, 374761393) ^
    Math.imul(z | 0, 668265263) ^
    Math.imul(WORLD_SEED + salt, 1442695041);
  v = Math.imul(v ^ (v >>> 13), 1274126177);
  return ((v ^ (v >>> 16)) >>> 0) / 4294967296;
}
export function noise(x, z, salt = 0) {
  const a = Math.floor(x),
    b = Math.floor(z),
    u = smooth(x - a),
    v = smooth(z - b);
  return (
    lerp(
      lerp(hash(a, b, salt), hash(a + 1, b, salt), u),
      lerp(hash(a, b + 1, salt), hash(a + 1, b + 1, salt), u),
      v,
    ) *
      2 -
    1
  );
}
export function baseHeight(x, z) {
  const ridge =
    43 * Math.exp(-((x - 140) ** 2 / 90000 + (z + 650) ** 2 / 42000));
  const terrace = 22 * Math.exp(-((x + 360) ** 2 + (z + 620) ** 2) / 85000);
  const boundary =
    22 * smooth(clamp((Math.max(Math.abs(x), Math.abs(z)) - 780) / 120, 0, 1));
  return (
    3 +
    noise(x / 230, z / 230) * 6 +
    noise(x / 73, z / 73, 71) * 2.5 +
    noise(x / 24, z / 24, 19) * 0.55 +
    ridge +
    terrace +
    boundary
  );
}
function catmull(p0, p1, p2, p3, t) {
  const a = t * t,
    b = a * t;
  return [0, 1].map(
    (k) =>
      0.5 *
      (2 * p1[k] +
        (-p0[k] + p2[k]) * t +
        (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * a +
        (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * b),
  );
}
export const roadPaths = routes.map((route) => {
  const pts = route.points,
    n = pts.length,
    samples = [];
  const get = (i) =>
    route.closed ? pts[(i + n) % n] : pts[clamp(i, 0, n - 1)];
  const pieces = route.closed ? n : n - 1;
  for (let i = 0; i < pieces; i++) {
    const count = Math.ceil(
      Math.hypot(get(i + 1)[0] - get(i)[0], get(i + 1)[1] - get(i)[1]) / 9,
    );
    for (let j = 0; j < count; j++)
      samples.push(
        catmull(get(i - 1), get(i), get(i + 1), get(i + 2), j / count),
      );
  }
  samples.push(route.closed ? samples[0] : pts[n - 1]);
  let length = 0;
  const nodes = samples.map(([x, z], i) => {
    if (i) length += Math.hypot(x - samples[i - 1][0], z - samples[i - 1][1]);
    return { x, z, y: baseHeight(x, z), distance: length };
  });
  return { ...route, nodes, length };
});
const roadGrid = new Map(),
  gridSize = 64;
export const roadSegments = [];
for (const path of roadPaths)
  for (let i = 1; i < path.nodes.length; i++) {
    const a = path.nodes[i - 1],
      b = path.nodes[i],
      s = { a, b, width: path.width, path: path.id };
    roadSegments.push(s);
    for (
      let gx = Math.floor((Math.min(a.x, b.x) - 42) / gridSize);
      gx <= Math.floor((Math.max(a.x, b.x) + 42) / gridSize);
      gx++
    )
      for (
        let gz = Math.floor((Math.min(a.z, b.z) - 42) / gridSize);
        gz <= Math.floor((Math.max(a.z, b.z) + 42) / gridSize);
        gz++
      ) {
        const key = `${gx},${gz}`;
        if (!roadGrid.has(key)) roadGrid.set(key, []);
        roadGrid.get(key).push(s);
      }
  }
export function nearestRoad(x, z, global = false) {
  let best = {
    distance: Infinity,
    x,
    z,
    y: baseHeight(x, z),
    width: 20,
    heading: 0,
  };
  const items = global
    ? roadSegments
    : (roadGrid.get(
        `${Math.floor(x / gridSize)},${Math.floor(z / gridSize)}`,
      ) ?? []);
  for (const s of items) {
    const dx = s.b.x - s.a.x,
      dz = s.b.z - s.a.z,
      l = dx * dx + dz * dz;
    const t = clamp(((x - s.a.x) * dx + (z - s.a.z) * dz) / (l || 1), 0, 1);
    const rx = s.a.x + dx * t,
      rz = s.a.z + dz * t,
      d = Math.hypot(rx - x, rz - z);
    if (d < best.distance)
      best = {
        distance: d,
        x: rx,
        z: rz,
        y: lerp(s.a.y, s.b.y, t),
        width: s.width,
        heading: Math.atan2(-dx, -dz),
      };
  }
  return best;
}
export function rawHeight(x, z) {
  let h = baseHeight(x, z);
  const road = nearestRoad(x, z);
  if (road.distance < road.width / 2 + 20)
    h = lerp(
      road.y,
      h,
      smooth(clamp((road.distance - road.width / 2) / 20, 0, 1)),
    );
  for (const l of landmarks) {
    const distance = Math.hypot(x - l.x, z - l.z);
    if (distance < l.radius + 18)
      h = lerp(
        baseHeight(l.x, l.z),
        h,
        smooth(clamp((distance - l.radius) / 18, 0, 1)),
      );
  }
  return h;
}
// Identical triangle interpolation to the four-unit near terrain mesh.
export function terrainHeight(x, z) {
  const gx = Math.floor(x / 4) * 4,
    gz = Math.floor(z / 4) * 4,
    u = (x - gx) / 4,
    v = (z - gz) / 4;
  const a = rawHeight(gx, gz),
    b = rawHeight(gx + 4, gz),
    c = rawHeight(gx, gz + 4),
    d = rawHeight(gx + 4, gz + 4);
  return u + v <= 1
    ? a + (b - a) * u + (c - a) * v
    : d + (c - d) * (1 - u) + (b - d) * (1 - v);
}
export function rampHeight(x, z, r) {
  const dx = x - r.x,
    dz = z - r.z,
    c = Math.cos(r.heading ?? 0),
    s = Math.sin(r.heading ?? 0);
  const lx = c * dx - s * dz,
    lz = s * dx + c * dz;
  if (Math.abs(lx) > r.width / 2 || Math.abs(lz) > r.length / 2) return null;
  return r.baseY + r.height * (0.5 - lz / r.length);
}
export function colorAt(x, z) {
  const d = districtAt(x, z),
    variation = noise(x / 38, z / 38, 128) * 0.055;
  const colors = {
    conch: [0.86, 0.72, 0.43],
    commons: [0.83, 0.73, 0.48],
    fields: [0.64, 0.73, 0.5],
    lagoon: [0.75, 0.79, 0.55],
    wreck: [0.65, 0.65, 0.57],
    ridge: [0.84, 0.65, 0.44],
    neptune: [0.69, 0.76, 0.69],
  };
  return colors[d.id].map((c) => clamp(c + variation, 0, 1));
}
export function insideWorld(x, z, margin = 0) {
  return (
    Math.abs(x) <= WORLD_SIZE / 2 - margin &&
    Math.abs(z) <= WORLD_SIZE / 2 - margin
  );
}
