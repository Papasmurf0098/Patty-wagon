import * as T from "three";
import { terrainHeight } from "./Terrain.js";
// Tessellate across the width as well as along the spline: long, flat road
// triangles otherwise cut through dunes despite their endpoints being correct.
export function roadGeometry(path, spacing = 4) {
  const nodes = [];
  for (let i = 1; i < path.nodes.length; i++) {
    const a = path.nodes[i - 1],
      b = path.nodes[i],
      steps = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / spacing);
    for (let j = 0; j < steps; j++) {
      const t = j / steps;
      nodes.push({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
    }
  }
  nodes.push(path.nodes.at(-1));
  const columns = Math.ceil(path.width / spacing),
    positions = [],
    indices = [];
  nodes.forEach((p, i) => {
    const a = nodes[Math.max(0, i - 1)],
      b = nodes[Math.min(nodes.length - 1, i + 1)],
      dx = b.x - a.x,
      dz = b.z - a.z,
      length = Math.hypot(dx, dz) || 1;
    for (let j = 0; j <= columns; j++) {
      const t = (j / columns - 0.5) * path.width,
        x = p.x + (dz / length) * t,
        z = p.z - (dx / length) * t;
      positions.push(x, terrainHeight(x, z) + 0.25, z);
    }
    if (i)
      for (let j = 0; j < columns; j++) {
        const a = (i - 1) * (columns + 1) + j,
          b = a + columns + 1;
        indices.push(a, b, a + 1, a + 1, b, b + 1);
      }
  });
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}
