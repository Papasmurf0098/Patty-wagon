import { nearestRoad, terrainHeight } from "./Terrain.js";

export const discoverySites = [
  {
    id: "tide-garden",
    name: "Tidepool Gardens",
    kind: "pools",
    x: 655,
    z: 665,
    radius: 38,
    bends: [
      [590, 495],
      [610, 555],
      [640, 605],
    ],
    color: 0x78cec8,
  },
  {
    id: "salvage-yard",
    name: "Anchor Salvage Yard",
    kind: "yard",
    x: 805,
    z: 100,
    radius: 35,
    bends: [],
    color: 0xd7a26f,
  },
  {
    id: "shell-ruins",
    name: "Old Shell Sanctuary",
    kind: "ruins",
    x: -450,
    z: -410,
    radius: 40,
    bends: [
      [-340, -400],
      [-450, -460],
    ],
    color: 0xb9afdc,
  },
];
export const discoveryPaths = discoverySites.map((site) => {
  const road = nearestRoad(site.x, site.z, true);
  const points = [[road.x, road.z], ...site.bends, [site.x, site.z]];
  const nodes = [];
  for (let i = 1; i < points.length; i++) {
    const a = points[i - 1],
      b = points[i],
      count = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 4);
    for (let n = 0; n < count; n++) {
      const t = n / count,
        x = a[0] + (b[0] - a[0]) * t,
        z = a[1] + (b[1] - a[1]) * t;
      nodes.push({ x, z, y: terrainHeight(x, z) });
    }
  }
  nodes.push({ x: site.x, z: site.z, y: terrainHeight(site.x, site.z) });
  let length = 0;
  nodes.forEach((p, i) => {
    if (i) length += Math.hypot(p.x - nodes[i - 1].x, p.z - nodes[i - 1].z);
    p.distance = length;
  });
  return { id: site.id, name: site.name, width: 12, nodes, points, length };
});
export function distanceToDiscoveryPath(x, z) {
  let best = Infinity;
  for (const path of discoveryPaths)
    for (let i = 1; i < path.points.length; i++) {
      const a = path.points[i - 1],
        b = path.points[i],
        dx = b[0] - a[0],
        dz = b[1] - a[1];
      const t = Math.max(
        0,
        Math.min(
          1,
          ((x - a[0]) * dx + (z - a[1]) * dz) / (dx * dx + dz * dz || 1),
        ),
      );
      best = Math.min(best, Math.hypot(x - a[0] - dx * t, z - a[1] - dz * t));
    }
  return best;
}
export function promenadeSample(path, distance, side = 1) {
  const n = Math.max(0, Math.min(path.length, distance));
  let lo = 1,
    hi = path.nodes.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (path.nodes[mid].distance < n) lo = mid + 1;
    else hi = mid;
  }
  const a = path.nodes[lo - 1],
    b = path.nodes[lo],
    t = (n - a.distance) / (b.distance - a.distance || 1);
  const dx = b.x - a.x,
    dz = b.z - a.z,
    len = Math.hypot(dx, dz) || 1,
    offset = (path.width / 2 + 3) * side;
  return {
    x: a.x + dx * t + (dz / len) * offset,
    z: a.z + dz * t - (dx / len) * offset,
    heading: Math.atan2(dx, dz),
  };
}
