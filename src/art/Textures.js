import * as T from "three";
import { hash } from "../world/Terrain.js";
let sand = null;
export function sandTexture() {
  if (sand || typeof document === "undefined") return sand;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#fff8e2";
  ctx.fillRect(0, 0, 256, 256);
  ctx.strokeStyle = "#dad9b8";
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.22;
  for (let row = -2; row < 18; row++) {
    ctx.beginPath();
    for (let x = 0; x <= 256; x += 4) {
      const y = row * 18 + Math.sin(x / 34 + row * 1.4) * 3;
      x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  for (let i = 0; i < 1100; i++) {
    ctx.globalAlpha = 0.025 + hash(i, 2, 43) * 0.06;
    ctx.fillStyle = i % 3 ? "#685f3b" : "#ffffff";
    ctx.fillRect(hash(i, 0, 43) * 256, hash(i, 1, 43) * 256, 1.2, 1.2);
  }
  sand = new T.CanvasTexture(canvas);
  sand.colorSpace = T.SRGBColorSpace;
  sand.wrapS = sand.wrapT = T.RepeatWrapping;
  sand.anisotropy = 4;
  return sand;
}
