import * as T from "three";
import { box, ball, cylinder, ring, sign, mergeStaticAsset } from "./Models.js";
import { surfaceMaterial } from "./Materials.js";
import { terrainHeight } from "../world/Terrain.js";
const wood = surfaceMaterial("wood", 0x987c59),
  stone = surfaceMaterial("stone", 0xa6b9ae),
  metal = surfaceMaterial("metal", 0x769f9e);
export function makeFrontierSite(site) {
  const group = new T.Group(),
    solids = [];
  const piece = (x, z, build, w, d, h) => {
    const p = new T.Group(),
      y = terrainHeight(site.x + x, site.z + z);
    p.position.set(x, y, z);
    group.add(p);
    build(p);
    if (w) solids.push({ x: site.x + x, z: site.z + z, y, w, d, height: h });
  };
  piece(
    -32,
    0,
    (p) => {
      cylinder(p, 0, 1, 0, 8, 2, stone);
      for (const x of [-4, 4])
        for (const z of [-4, 4]) cylinder(p, x, 8, z, 0.45, 14, metal);
      for (const y of [5, 10, 15]) box(p, 0, y, 0, 10, 0.5, 10, metal);
      cylinder(p, 0, 18, 0, 4, 6, metal);
      ring(p, 0, 19, 0, 5, 0.3, metal).rotation.x = Math.PI / 2;
    },
    16,
    16,
    22,
  );
  const lamp = new T.Mesh(
    new T.SphereGeometry(2.6, 12, 8),
    new T.MeshBasicMaterial({ color: 0x466165 }),
  );
  lamp.position.set(
    site.x - 32,
    terrainHeight(site.x - 32, site.z) + 22,
    site.z,
  );
  if (site.kind === "harbor") {
    piece(
      33,
      8,
      (p) => {
        for (let i = 0; i < 12; i++)
          box(p, 0, 0.45, i * 2 - 12, 17, 0.7, 1.8, wood);
        for (const x of [-8, 8])
          for (const z of [-12, 10]) {
            cylinder(p, x, 2, z, 0.5, 5, wood);
            ring(p, x, 3, z, 0.65, 0.13, metal).rotation.x = Math.PI / 2;
          }
        for (const z of [-7, 3]) {
          box(p, 0, 2, z, 7, 3, 5, wood);
          for (const y of [1, 3]) box(p, 0, y, z + 2.6, 7, 0.15, 0.15, metal);
        }
      },
      19,
      28,
      5,
    );
  } else if (site.kind === "relay") {
    piece(
      34,
      0,
      (p) => {
        cylinder(p, 0, 1, 0, 11, 2, stone);
        ball(p, 0, 6, 0, 10, 8, 10, metal);
        for (const z of [-5, 0, 5]) {
          ring(p, -9, 5, z, 1.3, 0.25, 0xc3e8dc).rotation.y = Math.PI / 2;
          ball(p, -9.1, 5, z, 0.2, 1, 1, 0x397783);
        }
        cylinder(p, 0, 17, 0, 0.4, 9, metal);
        const dish = ball(p, 0, 22, 0, 6, 1.3, 6, 0xc8d1b5);
        dish.rotation.z = 0.35;
      },
      23,
      23,
      25,
    );
  } else {
    for (const z of [-20, 20])
      piece(
        34,
        z,
        (p) => {
          box(p, 0, 0.5, 0, 20, 1, 15, stone);
          box(p, 0, 5, 0, 16, 9, 12, wood);
          for (const x of [-5, 5]) box(p, x, 5, -6.1, 3, 3, 0.25, 0x69b8bc);
          for (const side of [-1, 1]) {
            const roof = box(
              p,
              side * 5,
              11,
              0,
              11,
              0.7,
              17,
              surfaceMaterial("cloth", 0x638997),
            );
            roof.rotation.z = -side * 0.3;
          }
          box(p, -8.1, 4, 0, 0.2, 6, 4, metal);
        },
        22,
        18,
        14,
      );
  }
  for (const z of [-32, 32])
    piece(
      -30,
      z,
      (p) => {
        box(p, 0, 1.5, 0, 6, 3, 5, wood);
        cylinder(p, 5, 2, 0, 1.8, 4, metal);
      },
      13,
      6,
      4,
    );
  piece(0, 32, (p) => {
    for (const x of [-15, 15]) cylinder(p, x, 4, 0, 0.25, 8, wood);
    sign(p, site.name.toUpperCase(), 0, 8, 0, 28, "#365967");
  });
  // Landing-pad markings are flush, leaving the driving aisle open.
  piece(0, 0, (p) => {
    const pad = ring(p, 0, 0.12, 0, 7, 0.2, site.color);
    pad.rotation.x = Math.PI / 2;
  });
  mergeStaticAsset(group);
  group.position.set(site.x, 0, site.z);
  return { group, solids, lamp };
}
