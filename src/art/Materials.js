import * as T from "three";

const textureCache = new Map();
const materialCache = new Map();
const waterTime = { value: 0 };
const tau = Math.PI * 2;
const limit = (n) => Math.min(1, Math.max(0, n));
const grain = (x, y, salt = 0) => {
  let n = Math.imul(x + salt, 374761393) ^ Math.imul(y, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
};
export const SURFACE_KINDS = [
  "wood",
  "stone",
  "metal",
  "bun",
  "rubber",
  "cloth",
  "sand",
];

// Deterministic tileable height/color fields, with relief stored separately
// from color. Textures are shared across every instance of a material family.
export function surfaceSample(kind, u, v) {
  u = ((u % 1) + 1) % 1;
  v = ((v % 1) + 1) % 1;
  const fine = Math.sin(tau * (u * 71 + v * 53)) * 0.015;
  const broad = Math.sin(tau * u * 3) * Math.cos(tau * v * 4);
  let height, shade;
  if (kind === "wood") {
    const plank = u * 6;
    const seam = Math.min(plank % 1, 1 - (plank % 1)) < 0.023;
    const fiber = Math.sin(tau * (u * 58 + Math.sin(v * tau * 2) * 0.22));
    const knot = Math.sin(tau * (u * 7 + Math.sin(v * tau) * 0.35));
    height = seam ? 0.15 : 0.56 + fiber * 0.045 + knot * 0.03;
    shade = seam ? 0.48 : 0.91 + fiber * 0.045 + knot * 0.04 + broad * 0.04;
  } else if (kind === "stone") {
    const row = Math.floor(v * 6),
      column = (u * 5 + (row % 2) * 0.5) % 1;
    const mortar = Math.min(column, 1 - column) < 0.018 || (v * 6) % 1 < 0.035;
    height = mortar ? 0.27 : 0.6 + broad * 0.055 + fine;
    shade = mortar ? 0.68 : 0.92 + broad * 0.08 + fine;
  } else if (kind === "metal") {
    const scratches = Math.sin(tau * u * 115) * Math.sin(tau * v * 3);
    const patina = Math.max(0, broad - 0.3);
    height = 0.5 + scratches * 0.012 + fine * 0.3;
    shade = 0.95 + scratches * 0.025 - patina * 0.13;
  } else if (kind === "bun") {
    const pores = Math.sin(tau * u * 47) * Math.sin(tau * v * 41);
    height = 0.5 + pores * 0.038 + broad * 0.02;
    shade = 0.96 + broad * 0.055 + pores * 0.018;
  } else if (kind === "rubber") {
    const tread = Math.sin(tau * (u * 18 + Math.sin(v * tau * 8) * 0.18));
    height = tread > 0.4 ? 0.66 : 0.39;
    shade = tread > 0.4 ? 1 : 0.75;
  } else if (kind === "cloth") {
    const weave = Math.sin(tau * u * 90) * Math.sin(tau * v * 90);
    height = 0.5 + weave * 0.015;
    shade = 0.96 + weave * 0.035 + broad * 0.02;
  } else {
    const ripples = Math.sin(tau * v * 16 + Math.sin(tau * u * 4) * 1.7);
    height = 0.5 + ripples * 0.12 + fine * 0.2;
    shade = 0.94 + ripples * 0.04 + broad * 0.02;
  }
  return { height, shade };
}

export function surfaceTextures(kind, size = 512) {
  const key = `${kind}:${size}`;
  if (textureCache.has(key)) return textureCache.get(key);
  const color = new Uint8Array(size * size * 4);
  const normals = new Uint8Array(size * size * 4);
  const heights = new Float32Array(size * size);
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const i = y * size + x,
        sample = surfaceSample(kind, x / size, y / size);
      heights[i] = sample.height;
      const value = Math.round(
        limit(sample.shade + (grain(x, y, 57) - 0.5) * 0.045) * 255,
      );
      color.set([value, value, value, 255], i * 4);
    }
  const at = (x, y) =>
    heights[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * 2.0;
      const dy = (at(x, y + 1) - at(x, y - 1)) * 2.0;
      const length = Math.hypot(dx, dy, 1),
        i = (y * size + x) * 4;
      normals.set(
        [
          Math.round(((-dx / length) * 0.5 + 0.5) * 255),
          Math.round(((-dy / length) * 0.5 + 0.5) * 255),
          Math.round(((1 / length) * 0.5 + 0.5) * 255),
          255,
        ],
        i,
      );
    }
  const make = (data, colorSpace) => {
    const texture = new T.DataTexture(data, size, size, T.RGBAFormat);
    texture.colorSpace = colorSpace;
    texture.wrapS = texture.wrapT = T.RepeatWrapping;
    texture.magFilter = T.LinearFilter;
    texture.minFilter = T.LinearMipmapLinearFilter;
    texture.generateMipmaps = true;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    return texture;
  };
  const result = {
    color: make(color, T.SRGBColorSpace),
    normal: make(normals, T.NoColorSpace),
  };
  textureCache.set(key, result);
  return result;
}

// Shared uniform lets the water light move without recompiling any material.
export function addWaterLight(material, worldNormalUV = false) {
  const previous = material.onBeforeCompile;
  material.onBeforeCompile = (shader, renderer) => {
    previous.call(material, shader, renderer);
    shader.uniforms.waterTime = waterTime;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <common>",
      "#include <common>\nvarying vec3 waterPosition;",
    );
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      "#include <begin_vertex>\nwaterPosition = (modelMatrix * vec4(position, 1.0)).xyz;",
    );
    if (worldNormalUV)
      shader.vertexShader = shader.vertexShader.replace(
        "#include <uv_vertex>",
        "#include <uv_vertex>\n#ifdef USE_NORMALMAP\n vNormalMapUv = (modelMatrix * vec4(position,1.0)).xz / 12.0;\n#endif",
      );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <common>",
      "#include <common>\nuniform float waterTime;\nvarying vec3 waterPosition;",
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <opaque_fragment>",
      `float waterA = sin(waterPosition.x * 0.72 + sin(waterPosition.z * 0.58 + waterTime * 0.33));
       float waterB = sin(waterPosition.z * 0.86 - sin(waterPosition.x * 0.51 - waterTime * 0.26));
       float waterLines = pow(clamp(1.0 - abs(waterA + waterB) * 0.5, 0.0, 1.0), 12.0);
       outgoingLight *= 0.98 + waterLines * 0.11;
       #include <opaque_fragment>`,
    );
  };
  material.customProgramCacheKey = () => `water-surface-v2:${worldNormalUV}`;
  return material;
}
export function updateVisualTime(time) {
  waterTime.value = time;
}

export function surfaceMaterial(kind, color = 0xffffff) {
  const key = `${kind}:${color}`;
  if (materialCache.has(key)) return materialCache.get(key);
  const maps = surfaceTextures(kind);
  const settings = {
    wood: [13, 0.2],
    stone: [5, 0.42],
    metal: [55, 0.16],
    bun: [10, 0.24],
    rubber: [4, 0.38],
    cloth: [3, 0.18],
    sand: [5, 0.35],
  }[kind] ?? [10, 0.2];
  const material = new T.MeshPhongMaterial({
    color,
    map: maps.color,
    normalMap: maps.normal,
    normalScale: new T.Vector2(settings[1], settings[1]),
    shininess: settings[0],
    specular: kind === "metal" ? 0x749c99 : 0x242b26,
    side: T.DoubleSide,
  });
  material.userData.surface = kind;
  addWaterLight(material);
  materialCache.set(key, material);
  return material;
}
