import { roadPaths, terrainHeight } from "./Terrain.js";

// Gate locations come from the actual graded road splines, not approximations.
const definitions = [
  {
    id: "neighborhood",
    name: "Neighborhood cruise",
    path: "conch-commons",
    color: 0xf3c868,
  },
  {
    id: "coast",
    name: "Lagoon promenade",
    path: "lagoon-commons",
    color: 0x7cdbcd,
  },
  {
    id: "mountain",
    name: "Mountain descent",
    path: "ridge-commons",
    color: 0xe9aab9,
  },
];
export const scenicRoutes = definitions.map((route) => {
  const path = roadPaths.find((p) => p.id === route.path);
  const gates = [0.08, 0.24, 0.4, 0.56, 0.72, 0.9].map((fraction) => {
    const index = path.nodes.findIndex(
      (p) => p.distance >= path.length * fraction,
    );
    const p = path.nodes[index],
      next = path.nodes[Math.min(index + 1, path.nodes.length - 1)];
    return {
      x: p.x,
      z: p.z,
      y: terrainHeight(p.x, p.z),
      width: path.width,
      heading: Math.atan2(next.x - p.x, next.z - p.z),
    };
  });
  return { ...route, gates };
});

function crosses(a, b, gate, radius) {
  const dx = b.x - a.x,
    dz = b.z - a.z,
    length = dx * dx + dz * dz;
  const t = length
    ? Math.max(
        0,
        Math.min(1, ((gate.x - a.x) * dx + (gate.z - a.z) * dz) / length),
      )
    : 0;
  const y = a.y + (b.y - a.y) * t;
  return (
    Math.hypot(a.x + dx * t - gate.x, a.z + dz * t - gate.z) < radius &&
    Math.abs(y - gate.y) < 5
  );
}
export class ScenicProgress {
  constructor(save) {
    this.save = save;
    save.trails ??= {};
    this.previous = null;
  }
  resetPosition() {
    this.previous = null;
  }
  update(vehicle, onGate) {
    const previous = this.previous;
    this.previous = { x: vehicle.x, y: vehicle.y, z: vehicle.z };
    if (!previous) return;
    if (Math.hypot(vehicle.x - previous.x, vehicle.z - previous.z) < 0.01)
      return;
    // Teleports never count as driving through intervening checkpoints.
    if (Math.hypot(vehicle.x - previous.x, vehicle.z - previous.z) > 20) return;
    for (const route of scenicRoutes) {
      const index = this.save.trails[route.id] ?? 0;
      if (index >= route.gates.length) continue;
      if (
        crosses(
          previous,
          vehicle,
          route.gates[index],
          route.gates[index].width / 2 + 2,
        )
      ) {
        this.save.trails[route.id] = index + 1;
        const finished = index + 1 === route.gates.length;
        if (finished && !this.save.activities.includes(`trail:${route.id}`))
          this.save.activities.push(`trail:${route.id}`);
        onGate(route, index + 1, finished);
      }
    }
  }
}
