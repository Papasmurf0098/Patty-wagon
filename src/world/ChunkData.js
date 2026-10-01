import { surfacePaint } from "./SurfacePaint.js";
import { livingSites, siteRadius } from "./TownPlan.js";
import { districtDetails } from "./DistrictDetails.js";
import { discoverySites, distanceToDiscoveryPath } from "./DiscoveryPlan.js";
import {
  CHUNK_SIZE,
  frontierSites,
  landmarks,
  ramps,
  secrets,
  districtAt,
  inRampCorridor,
} from "./WorldConfig.js";
import {
  hash,
  rawHeight,
  terrainHeight,
  nearestRoad,
  colorAt,
  insideWorld,
} from "./Terrain.js";
// Stateless minimum-spacing thinning on global cells. Neighbor priority makes
// placement independent of chunk generation order, including shared borders.
function candidate(gx, gz) {
  return {
    x: (gx + 0.15 + hash(gx, gz, 24) * 0.7) * 18,
    z: (gz + 0.15 + hash(gx, gz, 25) * 0.7) * 18,
    priority: hash(gx, gz, 26),
  };
}
export function scatterPoint(gx, gz) {
  const p = candidate(gx, gz);
  for (let i = -1; i <= 1; i++)
    for (let j = -1; j <= 1; j++) {
      if (!i && !j) continue;
      const q = candidate(gx + i, gz + j);
      if (q.priority < p.priority && Math.hypot(p.x - q.x, p.z - q.z) < 12)
        return null;
    }
  return p;
}
export function generateChunk(cx, cz, segments = 32) {
  const count = (segments + 1) ** 2,
    positions = new Float32Array(count * 3),
    colors = new Float32Array(count * 3),
    uv = new Float32Array(count * 2),
    indices = new Uint32Array(segments * segments * 6);
  const ox = cx * CHUNK_SIZE,
    oz = cz * CHUNK_SIZE,
    step = CHUNK_SIZE / segments;
  for (let z = 0; z <= segments; z++)
    for (let x = 0; x <= segments; x++) {
      const i = (z * (segments + 1) + x) * 3,
        wx = ox + x * step,
        wz = oz + z * step;
      uv.set([wx / 28, wz / 28], (i / 3) * 2);
      positions.set([x * step, rawHeight(wx, wz), z * step], i);
      colors.set(colorAt(wx, wz), i);
    }
  let k = 0;
  for (let z = 0; z < segments; z++)
    for (let x = 0; x < segments; x++) {
      const a = z * (segments + 1) + x,
        b = a + 1,
        c = a + segments + 1,
        d = c + 1;
      indices.set([a, c, b, b, c, d], k);
      k += 6;
    }
  const props = [];
  for (
    let gx = Math.floor(ox / 18);
    gx <= Math.floor((ox + CHUNK_SIZE) / 18);
    gx++
  )
    for (
      let gz = Math.floor(oz / 18);
      gz <= Math.floor((oz + CHUNK_SIZE) / 18);
      gz++
    ) {
      const p = scatterPoint(gx, gz);
      if (
        !p ||
        p.x < ox ||
        p.x >= ox + CHUNK_SIZE ||
        p.z < oz ||
        p.z >= oz + CHUNK_SIZE ||
        !insideWorld(p.x, p.z, 15)
      )
        continue;
      const road = nearestRoad(p.x, p.z);
      if (
        frontierSites.some(
          (s) => Math.hypot(p.x - s.x, p.z - s.z) < s.radius + 8,
        ) ||
        ramps.some((r) => inRampCorridor(p.x, p.z, r)) ||
        secrets.some((s) => Math.hypot(p.x - s.x, p.z - s.z) < 23) ||
        livingSites.some(
          (s) => Math.hypot(p.x - s.x, p.z - s.z) < siteRadius(s) + 6,
        ) ||
        districtDetails.some(
          (s) => Math.hypot(p.x - s.x, p.z - s.z) < s.radius + 8,
        ) ||
        discoverySites.some(
          (s) => Math.hypot(p.x - s.x, p.z - s.z) < s.radius + 7,
        ) ||
        distanceToDiscoveryPath(p.x, p.z) < 14 ||
        road.distance < road.width / 2 + 9 ||
        landmarks.some((l) => Math.hypot(p.x - l.x, p.z - l.z) < l.radius + 8)
      )
        continue;
      const d = districtAt(p.x, p.z),
        v = hash(gx, gz, 39);
      const type =
        d.id === "wreck"
          ? v < 0.45
            ? "rock"
            : "coral"
          : d.id === "fields"
            ? v < 0.55
              ? "coral"
              : "kelp"
            : v < 0.22
              ? "rock"
              : v < 0.56
                ? "kelp"
                : "coral";
      // Preserve rock formations; retain only 35% of decorative vegetation.
      if (type !== "rock" && hash(gx, gz, 903) >= 0.35) continue;
      props.push({
        id: `flora:${gx}:${gz}`,
        x: p.x,
        y: terrainHeight(p.x, p.z),
        z: p.z,
        type,
        rotation: hash(gx, gz, 40) * Math.PI * 2,
        scale: 0.7 + hash(gx, gz, 41) * 1.8,
        color: Math.floor(hash(gx, gz, 42) * 3),
      });
    }
  const paint = surfacePaint(ox, oz);
  return {
    cx,
    cz,
    segments,
    positions,
    colors,
    uv,
    indices,
    props,
    paint: paint.pixels,
    paintSize: paint.resolution,
  };
}
