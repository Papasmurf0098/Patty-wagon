import { colorAt, nearestRoad, hash, clamp, lerp } from "./Terrain.js";
const roadColor = [0.0802, 0.2423, 0.2582];
const srgb = (c) =>
  c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055;
export function surfaceColor(x, z) {
  const sand = colorAt(x, z),
    road = nearestRoad(x, z),
    weight = clamp((road.width / 2 + 1 - road.distance) / 2, 0, 1),
    grain = 0.98 + hash(Math.floor(x * 2), Math.floor(z * 2), 51) * 0.04;
  return sand.map((v, i) => lerp(v, roadColor[i], weight) * grain);
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
