import { frontierSites } from "./WorldConfig.js";
import { discoverySites } from "./DiscoveryPlan.js";
import { terrainHeight } from "./Terrain.js";
export const supplyRuns = frontierSites.map((site, i) => ({
  id: site.id,
  name: site.name,
  source: {
    x: discoverySites[i].x,
    z: discoverySites[i].z - 20,
    name: discoverySites[i].name,
  },
  target: { x: site.x, z: site.z, name: site.name },
}));
export function supplyAction(save, vehicle) {
  if (!vehicle.grounded || Math.abs(vehicle.speed) > 3) return null;
  for (const run of supplyRuns) {
    if (save.deliveries.includes(run.id)) {
      if (
        vehicle.energy < 95 &&
        Math.hypot(vehicle.x - run.target.x, vehicle.z - run.target.z) < 9 &&
        Math.abs(vehicle.y - terrainHeight(run.target.x, run.target.z)) < 3
      )
        return {
          id: run.id,
          service: true,
          label: `Recharge boost at ${run.name}`,
        };
      continue;
    }
    const point =
      save.cargo === run.id ? run.target : !save.cargo ? run.source : null;
    if (
      !point ||
      Math.hypot(vehicle.x - point.x, vehicle.z - point.z) > 9 ||
      Math.abs(vehicle.y - terrainHeight(point.x, point.z)) > 3
    )
      continue;
    return {
      id: run.id,
      delivery: save.cargo === run.id,
      label:
        save.cargo === run.id
          ? `Restore ${run.name} beacon`
          : `Load supplies for ${run.name}`,
    };
  }
  return null;
}
export function performSupplyAction(save, vehicle) {
  const action = supplyAction(save, vehicle);
  if (!action) return null;
  if (action.service) {
    vehicle.energy = 100;
    return action;
  }
  if (action.delivery) {
    save.deliveries.push(action.id);
    save.cargo = null;
  } else save.cargo = action.id;
  return action;
}
