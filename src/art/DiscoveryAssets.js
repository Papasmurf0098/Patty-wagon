import * as T from "three";
import {
  box,
  ball,
  cylinder,
  ring,
  mesh,
  sign,
  mergeStaticAsset,
} from "./Models.js";
import { surfaceMaterial as surface } from "./Materials.js";
import { terrainHeight } from "../world/Terrain.js";

const stone = surface("stone", 0xb7c7b9),
  wood = surface("wood", 0x977456),
  metal = surface("metal", 0x8c9b92),
  rust = surface("metal", 0xb07c5c);
export function makeDiscoverySite(site) {
  const group = new T.Group(),
    solids = [];
  const piece = (x, z, build) => {
    const p = new T.Group(),
      y = terrainHeight(site.x + x, site.z + z);
    p.position.set(x, y, z);
    group.add(p);
    build(p, (sx, sz, w, d, height, dy = 0) =>
      solids.push({
        x: site.x + x + sx,
        z: site.z + z + sz,
        w,
        d,
        height,
        y: y + dy,
      }),
    );
  };
  if (site.kind === "pools") {
    for (const [x, z, r] of [
      [-17, -10, 9],
      [18, 10, 10],
      [-15, 20, 7],
    ])
      piece(x, z, (p, solid) => {
        cylinder(p, 0, 0.18, 0, r, 0.36, 0x66bcb6);
        for (let i = 0; i < 10; i++) {
          const a = (i * Math.PI) / 5,
            px = Math.cos(a) * r,
            pz = Math.sin(a) * r;
          ball(p, px, 0.55, pz, 1.4, 0.8, 1.4, stone);
          solid(px, pz, 2.5, 2.5, 1.4);
        }
        for (let i = 0; i < 3; i++) {
          const x = -2 + i * 2;
          ball(p, x, 0.65, 1, 0.7, 0.3, 0.7, 0xedcfa1);
          ring(p, x, 0.8, 1, 0.38, 0.1, 0xd6a5b5).rotation.x = Math.PI / 2;
        }
      });
    for (const x of [-29, 29])
      piece(x, -23, (p, solid) => {
        cylinder(p, 0, 3, 0, 0.16, 6, metal);
        solid(0, 0, 0.4, 0.4, 6);
        ball(p, 0, 6.2, 0, 0.7, 0.9, 0.7, 0xffe1a5);
        box(p, 0, 1.1, 2.5, 5, 0.3, 1.5, wood);
        for (const dx of [-1.8, 1.8])
          box(p, dx, 0.55, 2.5, 0.2, 1.1, 1.3, metal);
      });
  } else if (site.kind === "yard") {
    piece(-17, 20, (p, solid) => {
      // Open, half-buried salvage hull with visible ribs and internal benches.
      const hullMaterial = wood.clone();
      hullMaterial.side = T.DoubleSide;
      mesh(
        p,
        new T.SphereGeometry(
          1,
          20,
          10,
          0,
          Math.PI * 2,
          Math.PI / 2,
          Math.PI / 2,
        ),
        hullMaterial,
        0,
        2,
        0,
        6,
        3,
        10,
      );
      const rim = ring(p, 0, 2, 0, 1, 0.06, wood);
      rim.rotation.x = Math.PI / 2;
      rim.scale.set(6, 10, 6);
      for (const z of [-6, -3, 0, 3, 6]) {
        const width = 10 * Math.sqrt(1 - (z / 11) ** 2);
        box(p, 0, 1.45, z, width, 0.18, 0.45, wood);
        for (const x of [-width / 2, width / 2])
          box(p, x, 0.8, z, 0.17, 2.1, 0.2, wood).rotation.z = -x * 0.07;
      }
      for (const z of [-4, 4])
        box(p, 0, 2.15, z, 9, 0.2, 1.6, surface("wood", 0xb5a079));
      for (const x of [-4, 4]) cylinder(p, x, 0.5, 0, 0.38, 1, metal);
      solid(0, 0, 12, 20, 3);
    });
    for (const z of [-26, 26])
      piece(12, z, (p, solid) => {
        for (let i = 0; i < 3; i++) {
          const x = -7 + i * 7;
          box(p, x, 1.7, 0, 5, 3.4, 5, wood);
          solid(x, 0, 5, 5, 3.4);
          for (const y of [0.4, 3]) box(p, x, y, 2.55, 5, 0.16, 0.1, rust);
        }
      });
    for (const [x, z] of [
      [-6, -23],
      [9, 0],
      [23, 22],
    ])
      piece(x, z, (p, solid) => {
        // Anchors, winch drum, and salvage beams leave a broad central drive aisle.
        cylinder(p, 0, 2, 0, 0.3, 4, rust);
        box(p, 0, 1, 0, 5.5, 0.35, 0.45, rust);
        ring(p, 0, 4.2, 0, 0.75, 0.18, metal);
        for (const dx of [-2.5, 2.5]) {
          const fluke = box(p, dx, 0.8, 0, 1.4, 1.8, 0.3, rust);
          fluke.rotation.z = dx < 0 ? -0.6 : 0.6;
        }
        solid(0, 0, 6, 2, 5);
      });
    piece(24, -4, (p, solid) => {
      for (let i = 0; i < 4; i++)
        box(p, 0, 0.5 + i * 0.6, 0, 4, 0.45, 14, wood);
      solid(0, 0, 4, 14, 2.8);
      const drum = cylinder(p, -5, 2.2, 0, 1.4, 3, metal);
      drum.rotation.z = Math.PI / 2;
      solid(-5, 0, 3, 3, 3.6);
    });
  } else {
    for (let i = 0; i < 16; i++) {
      const a = (i * Math.PI) / 8;
      piece(Math.cos(a) * 8, Math.sin(a) * 8, (p) => {
        const tile = box(
          p,
          0,
          0.1,
          0,
          2.6,
          0.2,
          2.6,
          surface("stone", i % 2 ? 0xb8bcb5 : 0xd2bf95),
        );
        tile.rotation.y = -a;
      });
    }
    // Two open rows of broken colonnades; the center is a drivable sanctuary.
    for (const x of [-22, 22])
      for (const z of [-24, 0, 24])
        piece(x, z, (p, solid) => {
          const h = z === 0 ? 8 : 12;
          cylinder(p, 0, 0.5, 0, 3.2, 1, stone);
          cylinder(p, 0, h / 2, 0, 1.4, h, stone);
          solid(0, 0, 4, 4, h);
          for (const y of [1.5, h - 0.5])
            ring(p, 0, y, 0, 1.5, 0.18, stone).rotation.x = Math.PI / 2;
          for (let i = 0; i < 8; i++) {
            const a = (i * Math.PI) / 4;
            cylinder(
              p,
              Math.cos(a) * 1.38,
              h / 2,
              Math.sin(a) * 1.38,
              0.07,
              h - 2,
              0xc4d6c2,
            );
          }
          if (z !== 0) box(p, 0, h + 0.5, 0, 6, 1, 6, stone);
        });
    piece(0, 26, (p, solid) => {
      for (const x of [-11, 11]) {
        cylinder(p, x, 7, 0, 1.5, 14, stone);
        solid(x, 0, 3, 3, 14);
      }
      box(p, 0, 14.5, 0, 26, 1.3, 4, stone);
      solid(0, 0, 26, 4, 1.3, 13.8);
      ball(p, 0, 16, 0, 2.8, 1.5, 0.7, 0xe0c899);
    });
    for (const x of [-31, 31])
      piece(x, 11, (p, solid) => {
        const slab = box(p, 0, 1.3, 0, 3, 2.6, 10, stone);
        slab.rotation.y = x * 0.03;
        solid(0, 0, 5, 11, 3);
      });
  }
  piece(0, -site.radius + 5, (p, solid) => {
    for (const x of [-16, 16]) {
      cylinder(p, x, 2.8, 0, 0.2, 5.6, wood);
      solid(x, 0, 0.5, 0.5, 6);
    }
    sign(p, site.name.toUpperCase(), 0, 5.4, 0, 29, "#577d7b");
  });
  mergeStaticAsset(group);
  group.position.set(site.x, 0, site.z);
  group.name = site.id;
  return { group, solids };
}
