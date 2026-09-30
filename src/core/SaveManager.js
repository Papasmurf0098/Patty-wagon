import {
  WORLD_SEED,
  WORLD_VERSION,
  districts,
  secrets,
} from "../world/WorldConfig.js";
export const SAVE_KEY = `patty-wagon-underwater-v${WORLD_VERSION}-${WORLD_SEED}`;
export const LEGACY_KEY = "patty-wagon-free-roam-v1";
const unique = (value, validate) =>
  Array.isArray(value) ? [...new Set(value.filter(validate))] : [];
const id = (prefix) => (v) =>
  typeof v === "string" && new RegExp(`^${prefix}:[a-z0-9:-]{1,90}$`).test(v);
function fresh(legacy = null) {
  return {
    version: WORLD_VERSION,
    seed: WORLD_SEED,
    coins: [],
    broken: [],
    activities: [],
    visited: [],
    secrets: [],
    position: null,
    legacy,
  };
}
export function loadSave(storage) {
  try {
    storage ??= globalThis.localStorage;
    const raw = JSON.parse(storage.getItem(SAVE_KEY));
    const previous = JSON.parse(storage.getItem(LEGACY_KEY));
    const legacy =
      raw?.legacy ??
      (previous
        ? {
            coins: unique(
              previous.coins,
              (v) => Number.isInteger(v) && v >= 0 && v < 96,
            ).length,
            broken: unique(
              previous.broken,
              (v) => Number.isInteger(v) && v >= 0 && v < 42,
            ).length,
          }
        : null);
    const out = fresh(legacy);
    if (raw?.version !== WORLD_VERSION || raw?.seed !== WORLD_SEED) return out;
    out.coins = unique(raw.coins, id("crown"));
    out.broken = unique(raw.broken, id("prop"));
    out.activities = unique(raw.activities, (v) =>
      ["jump", "smash", "explorer"].includes(v),
    );
    out.visited = unique(raw.visited, (v) => districts.some((d) => d.id === v));
    out.secrets = unique(raw.secrets, (v) => secrets.some((s) => s.id === v));
    if (
      raw.position &&
      ["x", "z", "heading"].every((k) => Number.isFinite(raw.position[k])) &&
      Math.max(Math.abs(raw.position.x), Math.abs(raw.position.z)) < 875
    )
      out.position = {
        x: raw.position.x,
        z: raw.position.z,
        heading: raw.position.heading,
      };
    if (legacy)
      out.legacy = {
        coins: Math.max(0, Math.min(96, Number(legacy.coins) || 0)),
        broken: Math.max(0, Math.min(42, Number(legacy.broken) || 0)),
      };
    return out;
  } catch {
    return fresh();
  }
}
export function writeSave(save, storage) {
  try {
    storage ??= globalThis.localStorage;
    storage.setItem(SAVE_KEY, JSON.stringify(save));
    return true;
  } catch {
    return false;
  }
}
