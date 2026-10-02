import * as T from "three";
import { ball, box, ring, mergeStaticAsset } from "./Models.js";

export function makeDestinationToken(kind, color) {
  const group = new T.Group();
  if (kind === "pearl") {
    // Open clam halves cradle the pearl; the whole keepsake slowly turns.
    for (const side of [-1, 1]) {
      const half = ball(group, side * 0.8, -0.45, 0, 1.1, 0.25, 1, 0xc48cae);
      half.rotation.z = side * 0.35;
    }
    ball(group, 0, 0.25, 0, 0.85, 0.85, 0.85, color);
  } else if (kind === "cog") {
    ring(group, 0, 0, 0, 0.8, 0.28, color);
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const tooth = box(
        group,
        Math.sin(angle) * 1.05,
        Math.cos(angle) * 1.05,
        0,
        0.4,
        0.55,
        0.5,
        color,
      );
      tooth.rotation.z = -angle;
    }
  } else {
    for (let i = 0; i < 7; i++) {
      const angle = (i - 3) * 0.23;
      const rib = ball(
        group,
        Math.sin(angle) * 0.7,
        Math.cos(angle) * 0.6,
        0,
        0.23,
        1.05,
        0.3,
        color,
      );
      rib.rotation.z = -angle;
    }
    ball(group, 0, -0.45, 0, 0.45, 0.3, 0.35, 0xe2d6b0);
  }
  mergeStaticAsset(group);
  return group;
}
