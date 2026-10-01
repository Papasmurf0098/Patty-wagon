import {
  WORLD_SEED,
  WORLD_SIZE,
  frontierSites,
  WORLD_VERSION,
  districts,
  secrets,
  ramps,
} from "../world/WorldConfig.js";
import { scenicRoutes } from "../world/ScenicRoutes.js";
import { discoverySites } from "../world/DiscoveryPlan.js";
import { destinationCollections } from "../world/DestinationCollections.js";
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
    trails: {},
    bestStunts: {},
    discoveries: [],
    keepsakes: [],
    deliveries: [],
    cargo: null,
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
    out.deliveries = unique(raw.deliveries, (v) =>
      frontierSites.some((s) => s.id === v),
    );
    out.cargo =
      frontierSites.some((s) => s.id === raw.cargo) &&
      !out.deliveries.includes(raw.cargo)
        ? raw.cargo
        : null;
    out.coins = unique(raw.coins, id("crown"));
    out.broken = unique(raw.broken, id("prop"));
    out.activities = unique(raw.activities, (v) =>
      [
        "jump",
        "smash",
        "explorer",
        ...scenicRoutes.map((r) => `trail:${r.id}`),
        ...ramps.map((r) => `stunt:${r.id}`),
      ].includes(v),
    );
    for (const route of scenicRoutes) {
      const n = raw.trails?.[route.id];
      out.trails[route.id] = out.activities.includes(`trail:${route.id}`)
        ? route.gates.length
        : Number.isInteger(n)
          ? Math.max(0, Math.min(route.gates.length, n))
          : 0;
    }
    out.keepsakes = unique(raw.keepsakes, (v) =>
      destinationCollections.some((c) => c.items.some((p) => p.id === v)),
    );
    // Completion is derived from validated items, so partial collections cannot grant badges.
    for (const c of destinationCollections)
      if (c.items.every((p) => out.keepsakes.includes(p.id)))
        out.activities.push(`collection:${c.id}`);
    out.discoveries = unique(raw.discoveries, (v) =>
      discoverySites.some((s) => s.id === v),
    );
    for (const r of ramps) {
      const n = raw.bestStunts?.[r.id];
      if (Number.isFinite(n) && n >= 25 && n < 2000)
        out.bestStunts[r.id] = Math.round(n * 10) / 10;
    }
    out.visited = unique(raw.visited, (v) => districts.some((d) => d.id === v));
    out.secrets = unique(raw.secrets, (v) => secrets.some((s) => s.id === v));
    if (
      raw.position &&
      ["x", "z", "heading"].every((k) => Number.isFinite(raw.position[k])) &&
      Math.max(Math.abs(raw.position.x), Math.abs(raw.position.z)) <
        WORLD_SIZE / 2 - 25
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
