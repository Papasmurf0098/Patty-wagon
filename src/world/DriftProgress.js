import { driftPads } from "./WorldConfig.js";
export function driftSlip(s) {
  const speed = Math.hypot(s.vx, s.vz);
  if (speed < 0.001) return 0;
  return Math.acos(
    Math.max(
      -1,
      Math.min(
        1,
        (-Math.sin(s.heading) * s.vx - Math.cos(s.heading) * s.vz) / speed,
      ),
    ),
  );
}
export class DriftProgress {
  constructor(save) {
    this.save = save;
    save.bestDrifts ??= {};
    this.reset();
  }
  reset() {
    this.previous = null;
    this.chain = null;
  }
  step(vehicle, controls, result, onBank) {
    const previous = this.previous;
    this.previous = { x: vehicle.x, z: vehicle.z };
    if (!previous) return;
    const moved = Math.hypot(vehicle.x - previous.x, vehicle.z - previous.z);
    if (moved > 20 || result.impacts || !vehicle.grounded) {
      this.chain = null;
      return;
    }
    const pad = driftPads.find(
      (p) => Math.hypot(vehicle.x - p.x, vehicle.z - p.z) < p.radius - 4,
    );
    const slip = driftSlip(vehicle);
    if (controls.brake && slip >= 1.35) {
      this.chain = null;
      return;
    }
    const drifting =
      pad &&
      controls.brake &&
      Math.hypot(vehicle.vx, vehicle.vz) > 8 &&
      slip > 0.18 &&
      slip < 1.35;
    if (!drifting || (this.chain && this.chain.id !== pad.id)) {
      if (this.chain && this.chain.distance >= 12) {
        const best = this.save.bestDrifts[this.chain.id] ?? 0,
          score = Math.round(this.chain.distance * 10) / 10;
        if (score > best) {
          this.save.bestDrifts[this.chain.id] = score;
          const id = `drift:${this.chain.id}`,
            first = !this.save.activities.includes(id);
          if (first) this.save.activities.push(id);
          onBank(
            driftPads.find((p) => p.id === this.chain.id),
            score,
            first,
          );
        }
      }
      this.chain = null;
    }
    if (drifting) {
      this.chain ??= { id: pad.id, distance: 0 };
      this.chain.distance += moved;
    }
  }
}
