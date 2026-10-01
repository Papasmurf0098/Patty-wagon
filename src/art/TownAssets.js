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

const plank = surface("wood", 0xc19a63),
  frame = surface("metal", 0x507c7d);
const stone = surface("stone", 0xb8c8b1),
  rope = surface("cloth", 0xd3bd85);
function crate(group, x, y, z, size = 1.7) {
  box(group, x, y + size / 2, z, size, size, size, plank);
  for (const dy of [0.2, size - 0.2])
    box(group, x, y + dy, z + size / 2 + 0.02, size, 0.15, 0.12, frame);
  const brace = box(
    group,
    x,
    y + size / 2,
    z + size / 2 + 0.08,
    0.13,
    size * 1.22,
    0.09,
    plank,
  );
  brace.rotation.z = 0.7;
}
function table(group, x, z) {
  box(group, x, 1.8, z, 5.0, 0.26, 3.0, plank);
  for (const dx of [-1.8, 1.8]) {
    box(group, x + dx, 0.9, z, 0.2, 1.8, 2.4, frame);
    box(group, x + dx, 0.6, z, 0.3, 0.22, 4.6, plank);
  }
  for (const dz of [-1.8, 1.8])
    box(group, x, 1.05, z + dz, 5.2, 0.22, 0.8, plank);
  for (const dx of [-0.65, 0.65])
    cylinder(group, x + dx, 2.07, z, 0.19, 0.32, surface("metal", 0xcaddbd));
}
function umbrella(group, x, z, color) {
  cylinder(group, x, 3.5, z, 0.09, 7.0, frame);
  const roof = mesh(
    group,
    new T.ConeGeometry(4.6, 1.5, 12, 1, true),
    surface("cloth", color),
    x,
    6.65,
    z,
  );
  roof.rotation.y = Math.PI / 12;
  ring(group, x, 5.9, z, 4.6, 0.08, rope).rotation.x = Math.PI / 2;
  for (const a of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) {
    const rib = box(
      group,
      x + Math.cos(a) * 2.2,
      6.28,
      z + Math.sin(a) * 2.2,
      4.4,
      0.045,
      0.055,
      rope,
    );
    rib.rotation.y = -a;
    rib.rotation.z = 0.14;
  }
}
function ropeBetween(group, a, b, y = 2) {
  const curve = new T.CatmullRomCurve3([
    new T.Vector3(a[0], y, a[1]),
    new T.Vector3((a[0] + b[0]) / 2, y - 0.45, (a[1] + b[1]) / 2),
    new T.Vector3(b[0], y, b[1]),
  ]);
  mesh(group, new T.TubeGeometry(curve, 10, 0.065, 5, false), rope);
}

export const PROP_SIZES = {
  market: [16, 12, 8],
  patio: [18, 13, 8],
  yard: [12, 9, 6],
  dock: [13, 24, 5],
  workshop: [16, 14, 7],
  stop: [13, 9, 8],
};
export function makeTownProp(kind, label = "") {
  const group = new T.Group();
  group.name = kind;
  if (kind === "market") {
    for (const x of [-5.5, 5.5])
      for (const z of [-3.5, 3.5]) cylinder(group, x, 3.4, z, 0.16, 6.8, plank);
    const canopy = mesh(
      group,
      new T.CylinderGeometry(1, 1, 1, 14, 1, true, 0, Math.PI),
      surface("cloth", 0xc48d71),
      0,
      6.7,
      0,
      6.8,
      8.4,
      2.1,
    );
    canopy.rotation.z = Math.PI / 2;
    box(group, 0, 2.1, 0, 11.7, 0.28, 3.3, plank);
    box(group, 0, 1, 1.4, 11.4, 2, 0.15, plank);
    for (const x of [-4, 0, 4]) {
      crate(group, x, 0, -3.4, 1.5);
      for (let i = 0; i < 5; i++)
        ball(
          group,
          x + ((i % 3) - 1) * 0.55,
          2.55,
          0.2 + (i % 2) * 0.5,
          0.36,
          0.3,
          0.36,
          [0xebbb65, 0xcf8976, 0x93b79c][Math.abs(x) % 3],
        );
    }
    sign(group, label || "REEF MARKET", 0, 5.8, 3.55, 10, "#386e73");
  } else if (kind === "patio") {
    for (const x of [-4.5, 4.5]) {
      table(group, x, 0);
      umbrella(group, x, 0, x < 0 ? 0xc39da7 : 0x8eaca7);
    }
    for (const x of [-8, 8]) {
      cylinder(group, x, 0.9, 4, 0.8, 1.8, surface("stone", 0xd4c09c));
      ball(group, x, 1.8, 4, 0.8, 0.2, 0.8, 0x8b9989);
    }
  } else if (kind === "yard") {
    for (const x of [-4, 4]) cylinder(group, x, 2.6, -2, 0.1, 5.2, frame);
    ropeBetween(group, [-4, -2], [4, -2], 4.6);
    for (let i = 0; i < 4; i++) {
      const cloth = box(
        group,
        -2.7 + i * 1.8,
        3.65,
        -2,
        1.15,
        1.55,
        0.04,
        surface("cloth", [0xb68eae, 0xd9c895, 0x7eafb3, 0xcb957d][i]),
      );
      cloth.rotation.z = (i % 2 ? 1 : -1) * 0.06;
    }
    cylinder(group, -3.8, 1.35, 2, 0.06, 2.7, frame);
    box(group, -3.8, 2.7, 2, 1.0, 0.75, 1.6, frame);
    box(group, -3.8, 2.7, 2.82, 0.8, 0.55, 0.06, surface("metal", 0xdac393));
    crate(group, 3.7, 0, 2, 1.2);
    sign(group, label || "CONCH POST", 0, 1.4, 3.5, 3.4, "#587b73");
  } else if (kind === "dock") {
    for (let i = 0; i < 17; i++)
      box(group, 0, 1.1, -10 + i * 1.25, 9, 0.35, 1.15, plank);
    for (const x of [-4.8, 4.8])
      for (const z of [-10, -4, 2, 10]) {
        cylinder(group, x, 1.4, z, 0.33, 3.8, plank);
        ring(group, x, 2.7, z, 0.35, 0.1, rope).rotation.x = Math.PI / 2;
      }
    for (const side of [-4.8, 4.8])
      for (let i = 0; i < 3; i++)
        ropeBetween(group, [side, -10 + i * 6], [side, -4 + i * 6], 3.0);
    crate(group, -2, 1.3, -7);
    crate(group, 2, 1.3, -8, 1.3);
    const coil = new T.Group();
    coil.position.set(2.5, 1.45, 4);
    group.add(coil);
    for (let i = 0; i < 5; i++)
      ring(coil, 0, i * 0.1, 0, 0.7 + i * 0.04, 0.08, rope).rotation.x =
        Math.PI / 2;
    sign(group, label || "COVE LANDING", 0, 3.9, -10, 7, "#527d76");
  } else if (kind === "workshop") {
    box(group, 0, 2.2, -2, 10, 4.4, 5.5, surface("wood", 0x8b806a));
    box(group, 0, 4.65, -2, 11, 0.45, 6.8, surface("metal", 0x6d9993));
    box(group, 0, 1.8, 0.8, 3.5, 3.6, 0.18, surface("metal", 0x344f5d));
    for (const x of [-3.7, 3.7])
      box(group, x, 2.6, 0.85, 2.2, 1.4, 0.15, 0x73aeb0);
    crate(group, -6, 0, 2.5);
    crate(group, 5, 0, 2.2, 1.3);
    box(group, 0, 1.5, 4.2, 5.5, 0.2, 1.7, plank);
    for (const x of [-2, 2]) box(group, x, 0.75, 4.2, 0.16, 1.5, 1.4, frame);
    for (const x of [-1.4, 0, 1.4])
      ring(group, x, 1.8, 4.2, 0.32, 0.1, frame).rotation.x = Math.PI / 2;
    sign(group, label || "BOAT REPAIR", 0, 4.7, 1.6, 8, "#816550");
  } else if (kind === "stop") {
    for (const x of [-4.6, 4.6]) cylinder(group, x, 2.5, -2, 0.14, 5, frame);
    box(group, 0, 5.1, -1, 10.5, 0.3, 5, surface("metal", 0x749e91));
    box(group, 0, 1.2, -1, 7.5, 0.24, 1.3, plank);
    for (const x of [-2.7, 2.7]) box(group, x, 0.6, -1, 0.15, 1.2, 1.2, frame);
    box(group, 0, 2, -1.7, 7.5, 1.1, 0.16, plank);
    cylinder(group, 5, 3, 1, 0.1, 6, frame);
    sign(group, label || "TOWN LOOP", 3.8, 5.4, 1.2, 4, "#53777a");
    cylinder(group, -5, 0.8, 2, 0.65, 1.6, frame);
    ring(group, -5, 1.55, 2, 0.67, 0.07, rope).rotation.x = Math.PI / 2;
  }
  return mergeStaticAsset(group);
}
