import { driftPads } from "./WorldConfig.js";
import { nearestRoad, terrainHeight } from "./Terrain.js";
const approaches = [
  { road: [990, 520], bends: [[905, 480]] },
  { road: [990, -290], bends: [[965, -380]] },
  { road: [-1000, -660], bends: [[-920, -720]] },
];
export const driftPaths = driftPads.map((pad, i) => {
  const plan = approaches[i],
    road = nearestRoad(...plan.road, true),
    points = [[road.x, road.z], ...plan.bends, [pad.x, pad.z]],
    nodes = [];
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
  nodes.push({ x: pad.x, z: pad.z, y: terrainHeight(pad.x, pad.z) });
  return { id: `drift-path:${pad.id}`, width: 12, points, nodes };
});
export function distanceToDriftPath(x, z) {
  let best = Infinity;
  for (const path of driftPaths)
    for (let i = 1; i < path.points.length; i++) {
      const a = path.points[i - 1],
        b = path.points[i],
        dx = b[0] - a[0],
        dz = b[1] - a[1],
        t = Math.max(
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
