import { discoverySites } from "./DiscoveryPlan.js";
import { terrainHeight } from "./Terrain.js";

const themes = [
  { name: "Tidepool pearls", item: "Pearl", kind: "pearl", color: 0xf4cfe4 },
  { name: "Salvage sweep", item: "Cog", kind: "cog", color: 0xe8b46e },
  {
    name: "Sanctuary echoes",
    item: "Echo shell",
    kind: "shell",
    color: 0xa5e4de,
  },
];
// Collectibles sit in the open central aisles, away from pool rims and props.
export const destinationCollections = discoverySites.map((site, i) => ({
  ...themes[i],
  id: site.id,
  siteName: site.name,
  items: [-12, 0, 12].map((z, n) => ({
    id: `${site.id}:${n}`,
    x: site.x,
    z: site.z + z,
    y: terrainHeight(site.x, site.z + z),
  })),
}));
export class DestinationProgress {
  constructor(save) {
    this.save = save;
    save.keepsakes ??= [];
    this.previous = null;
  }
  reset() {
    this.previous = null;
  }
  step(vehicle, onCollect) {
    const previous = this.previous;
    this.previous = { x: vehicle.x, y: vehicle.y, z: vehicle.z };
    if (!previous || !vehicle.grounded) return;
    const dx = vehicle.x - previous.x,
      dz = vehicle.z - previous.z;
    const length = dx * dx + dz * dz;
    // Require driving; recovery, map travel, and parked reloads cannot collect.
    if (length < 0.0001 || length > 400) return;
    for (const collection of destinationCollections) {
      for (const item of collection.items) {
        if (this.save.keepsakes.includes(item.id)) continue;
        const t = Math.max(
          0,
          Math.min(
            1,
            ((item.x - previous.x) * dx + (item.z - previous.z) * dz) / length,
          ),
        );
        const y = previous.y + (vehicle.y - previous.y) * t;
        if (
          Math.hypot(
            previous.x + dx * t - item.x,
            previous.z + dz * t - item.z,
          ) > 3.3 ||
          Math.abs(y - item.y) > 2
        )
          continue;
        this.save.keepsakes.push(item.id);
        const count = collection.items.filter((p) =>
          this.save.keepsakes.includes(p.id),
        ).length;
        const finished = count === collection.items.length;
        if (
          finished &&
          !this.save.activities.includes(`collection:${collection.id}`)
        )
          this.save.activities.push(`collection:${collection.id}`);
        onCollect(collection, count, finished);
      }
    }
  }
}
