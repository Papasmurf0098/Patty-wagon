import * as T from "three";
import { hash } from "../world/Terrain.js";
let sand = null;
export function sandTexture() {
  if (sand || typeof document === "undefined") return sand;
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const pixels = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    // Seamless current ripples plus fine mineral grain, repeating every 12m.
    const wave = Math.sin(y / size * Math.PI * 32 + Math.sin(x / size * Math.PI * 4) * 1.7);
    const grain = hash(x, y, 43);
    const value = Math.round(220 + wave * 10 + (grain - 0.5) * 26);
    const i = (y * size + x) * 4;
    pixels.data.set([value, value, value, 255], i);
  }
  ctx.putImageData(pixels, 0, 0);
  sand = new T.CanvasTexture(canvas);
  sand.colorSpace = T.SRGBColorSpace;
  sand.wrapS = sand.wrapT = T.RepeatWrapping;
  sand.anisotropy = 4;
  return sand;
}
// World coordinates keep fine detail continuous across chunk and LOD boundaries.
export function terrainMaterial(map) {
  const material = new T.MeshLambertMaterial({ map });
  const detail = sandTexture();
  if (!detail) return material;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.seafloorDetail = { value: detail };
    shader.vertexShader = shader.vertexShader.replace('#include <common>',
      '#include <common>\nvarying vec2 seafloorUV;');
    shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\nseafloorUV = (modelMatrix * vec4(position, 1.0)).xz / 12.0;');
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>',
      '#include <common>\nuniform sampler2D seafloorDetail;\nvarying vec2 seafloorUV;');
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>',
      '#include <map_fragment>\ndiffuseColor.rgb *= mix(vec3(0.82), vec3(1.16), texture2D(seafloorDetail, seafloorUV).rgb);');
  };
  material.customProgramCacheKey = () => 'seafloor-detail-v1';
  return material;
}
