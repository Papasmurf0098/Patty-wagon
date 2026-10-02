import { ramps } from "./WorldConfig.js";
import { terrainHeight } from "./Terrain.js";

export const stuntTargets = ramps.map((r) => {
  const offset = r.length / 2 + 20;
  return {
    id: r.id,
    heading: r.heading,
    radius: 6.5,
    x: r.x - Math.sin(r.heading) * offset,
    z: r.z - Math.cos(r.heading) * offset,
    y: terrainHeight(r.x, r.z) + r.height + 5.2,
  };
});
// Segment/plane intersection prevents fast boosted jumps from skipping a ring.
export function crossedStuntRing(a, b, target) {
  const sin = Math.sin(target.heading),
    cos = Math.cos(target.heading);
  const depth = (p) => (p.x - target.x) * sin + (p.z - target.z) * cos;
  const da = depth(a),
    db = depth(b);
  if (da <= 0 || db > 0 || da === db) return false;
  const t = da / (da - db),
    x = a.x + (b.x - a.x) * t,
    z = a.z + (b.z - a.z) * t;
  const y = a.y + (b.y - a.y) * t + 1.6;
  const lateral = (x - target.x) * cos - (z - target.z) * sin;
  return Math.hypot(lateral, y - target.y) <= target.radius - 1;
}
export class StuntProgress {
  constructor(save) {
    this.save = save;
    save.bestStunts ??= {};
    this.reset();
  }
  reset() {
    this.flight = null;
    this.previous = null;
  }
  step(state, result, onComplete) {
    const old = this.previous ?? state;
    this.previous = { x: state.x, y: state.y, z: state.z };
    if (Math.hypot(state.x - old.x, state.z - old.z) > 20) {
      this.flight = null;
      return;
    }
    if (result.launched) {
      const ramp = ramps.find((r) => {
        const dx = state.x - r.x,
          dz = state.z - r.z,
          c = Math.cos(r.heading),
          s = Math.sin(r.heading);
        const lateral = c * dx - s * dz,
          along = s * dx + c * dz;
        return (
          Math.abs(lateral) < r.width / 2 + 2 &&
          along < -r.length / 2 + 3 &&
          along > -r.length / 2 - 9
        );
      });
      this.flight = ramp
        ? { id: ramp.id, x: state.x, z: state.z, passed: false }
        : null;
    }
    if (!this.flight) return;
    if (result.impacts) {
      this.flight = null;
      return;
    }
    const target = stuntTargets.find((t) => t.id === this.flight.id);
    this.flight.passed ||= crossedStuntRing(old, state, target);
    if (result.landed) {
      const distance = Math.hypot(
        state.x - this.flight.x,
        state.z - this.flight.z,
      );
      const id = `stunt:${this.flight.id}`;
      if (this.flight.passed && distance >= 25) {
        const first = !this.save.activities.includes(id);
        if (first) this.save.activities.push(id);
        const previous = this.save.bestStunts[this.flight.id] ?? 0;
        if (distance > previous) {
          this.save.bestStunts[this.flight.id] = Math.round(distance * 10) / 10;
          onComplete(target, distance, first);
        }
      }
      this.flight = null;
    }
  }
}
