import { colorAt, nearestRoad, hash, clamp, lerp } from "./Terrain.js";
import { landmarks, frontierSites } from "./WorldConfig.js";
import { livingSites, siteRadius } from "./TownPlan.js";
import { discoverySites, distanceToDiscoveryPath } from "./DiscoveryPlan.js";
const approaches = [
  ...landmarks,
  ...frontierSites,
  ...discoverySites,
  ...livingSites.map((s) => ({ ...s, radius: siteRadius(s) - 2 })),
].map((l) => ({ ...l, road: nearestRoad(l.x, l.z, true) }));
function approachWeight(x, z) {
  let weight = 0;
  for (const l of approaches) {
    const dx = l.road.x - l.x,
      dz = l.road.z - l.z;
    const t = clamp(
      ((x - l.x) * dx + (z - l.z) * dz) / (dx * dx + dz * dz || 1),
      0,
      1,
    );
    const distance = Math.hypot(x - l.x - dx * t, z - l.z - dz * t);
    const apron = Math.hypot(x - l.x, z - l.z);
    weight = Math.max(
      weight,
      clamp((5 - distance) / 2, 0, 1),
      clamp((l.radius + 7 - apron) / 4, 0, 1),
    );
  }
  return weight;
}
const roadColor = [0.0802, 0.2423, 0.2582];
const srgb = (c) =>
  c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
export function surfaceColor(x, z) {
  const sand = colorAt(x, z),
    road = nearestRoad(x, z),
    weight = clamp((road.width / 2 + 1 - road.distance) / 2, 0, 1),
    grain = 0.98 + hash(Math.floor(x * 2), Math.floor(z * 2), 51) * 0.04;
  const approach = Math.max(
    approachWeight(x, z),
    clamp((7 - distanceToDiscoveryPath(x, z)) / 2, 0, 1),
  );
  // Compacted entrances connect landmarks to streets; shoulders collect sand.
  const shoulder = clamp(
    1 - Math.abs(road.distance - road.width / 2) / 3,
    0,
    1,
  );
  const wear = Number.isFinite(road.distance)
    ? Math.sin(road.distance * 1.8) * 0.018
    : 0;
  return sand.map((v, i) => {
    const ground = lerp(v, [0.63, 0.57, 0.4][i], approach * 0.65);
    return lerp(ground, roadColor[i] + wear + shoulder * 0.1, weight) * grain;
  });
}
export function surfacePaint(ox, oz, size = 128, resolution = 65) {
  const pixels = new Uint8Array(resolution * resolution * 4);
  for (let z = 0; z < resolution; z++)
    for (let x = 0; x < resolution; x++) {
      const color = surfaceColor(
          ox + (x / (resolution - 1)) * size,
          oz + (z / (resolution - 1)) * size,
        ),
        offset = (z * resolution + x) * 4;
      pixels[offset] = Math.round(clamp(srgb(color[0]), 0, 1) * 255);
      pixels[offset + 1] = Math.round(clamp(srgb(color[1]), 0, 1) * 255);
      pixels[offset + 2] = Math.round(clamp(srgb(color[2]), 0, 1) * 255);
      pixels[offset + 3] = 255;
    }
  return { pixels, resolution };
}
