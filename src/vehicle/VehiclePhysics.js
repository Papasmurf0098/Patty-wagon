import { terrainHeight, rampHeight, clamp } from "../world/Terrain.js";
import { WORLD_SIZE, spawnFor } from "../world/WorldConfig.js";
export { clamp };
// Exported for ramp and surface continuity checks; world ground uses terrain too.
export function groundHeight(x, z, ramps = [], terrain = () => 0) {
  let y = terrain(x, z);
  for (const r of ramps) {
    const h = rampHeight(x, z, { baseY: 0, ...r });
    if (h !== null) y = Math.max(y, h);
  }
  return y;
}
function surface(world, x, z) {
  return world.heightAt
    ? world.heightAt(x, z)
    : groundHeight(x, z, world.ramps ?? []);
}
export function stepVehicle(s, input, dt, world) {
  dt = Math.min(Math.max(dt, 0), 0.05);
  const ground = surface(world, s.x, s.z),
    wasGrounded = s.y <= ground + 0.18 && s.vy <= 0;
  const boost = input.boost && input.throttle > 0 && s.energy > 1;
  const level = world.collected >= 80 ? 2 : world.collected >= 30 ? 1 : 0;
  s.energy = clamp(s.energy + (boost ? -26 : 16) * dt, 0, 100);
  s.speed += input.throttle * (boost ? 32 : 21) * dt;
  s.speed *= Math.exp(-(input.brake ? 2.6 : input.throttle ? 0.25 : 0.8) * dt);
  s.speed = clamp(s.speed, -12, (boost ? 43 : 27) + level * 3);
  s.heading -=
    input.steer *
    (input.brake ? 2.15 : 1.42) *
    clamp(s.speed / 18, -1, 1.2) *
    dt *
    (wasGrounded ? 1 : 0.38);
  const grip = 1 - Math.exp(-(input.brake ? 2.4 : 8 + level) * dt);
  s.vx += (-Math.sin(s.heading) * s.speed - s.vx) * grip;
  s.vz += (-Math.cos(s.heading) * s.speed - s.vz) * grip;
  const oldX = s.x,
    oldZ = s.z;
  s.x += s.vx * dt;
  s.z += s.vz * dt;
  const limit = world.boundary ?? WORLD_SIZE / 2 - 8;
  if (Math.abs(s.x) > limit || Math.abs(s.z) > limit) {
    s.x = clamp(s.x, -limit, limit);
    s.z = clamp(s.z, -limit, limit);
    s.speed *= -0.2;
    s.vx *= -0.2;
    s.vz *= -0.2;
  }
  const nextGround = surface(world, s.x, s.z);
  const onRamp = world.ramps?.some(
    (r) => rampHeight(oldX, oldZ, { baseY: 0, ...r }) !== null,
  );
  let launched = false,
    landed = false;
  if (wasGrounded && ground - nextGround > 0.65 && Math.abs(s.speed) > 8) {
    s.vy = (onRamp ? 8 : 2) + Math.abs(s.speed) * (onRamp ? 0.22 : 0.1);
    launched = true;
  }
  if (wasGrounded && !launched) {
    s.y = nextGround;
    s.vy = 0;
  } else {
    s.vy -= 24 * dt;
    s.y += s.vy * dt;
    if (s.y <= nextGround) {
      s.y = nextGround;
      s.vy = 0;
      landed = true;
    }
  }
  const solids = world.nearbySolids
    ? world.nearbySolids(s.x, s.z)
    : (world.solids ?? []);
  for (const b of solids)
    if (
      s.y < (b.y ?? 0) + b.height &&
      s.y + 2.6 > (b.y ?? 0) &&
      Math.abs(s.x - b.x) < b.w / 2 + 2.0 &&
      Math.abs(s.z - b.z) < b.d / 2 + 2.1
    ) {
      s.x = oldX;
      s.z = oldZ;
      s.speed *= -0.22;
      s.vx *= -0.2;
      s.vz *= -0.2;
      break;
    }
  if (
    !["x", "z", "y", "heading", "speed", "vx", "vz", "vy"].every((k) =>
      Number.isFinite(s[k]),
    )
  )
    Object.assign(s, initialVehicle());
  s.grounded = s.y <= surface(world, s.x, s.z) + 0.18;
  // Wheel samples align the burger body with grades without changing Y-up driving.
  const fwdX = -Math.sin(s.heading),
    fwdZ = -Math.cos(s.heading),
    rightX = Math.cos(s.heading),
    rightZ = -Math.sin(s.heading);
  if (s.grounded) {
    const front = surface(world, s.x + fwdX * 1.5, s.z + fwdZ * 1.5),
      back = surface(world, s.x - fwdX * 1.5, s.z - fwdZ * 1.5);
    const left = surface(world, s.x - rightX * 1.8, s.z - rightZ * 1.8),
      right = surface(world, s.x + rightX * 1.8, s.z + rightZ * 1.8);
    s.pitch +=
      (Math.atan2(front - back, 3) - s.pitch) * (1 - Math.exp(-10 * dt));
    s.roll +=
      (Math.atan2(right - left, 3.6) - s.roll) * (1 - Math.exp(-10 * dt));
  } else {
    s.pitch *= Math.exp(-2 * dt);
    s.roll *= Math.exp(-2 * dt);
  }
  return { boost, landed, launched };
}
export function initialVehicle(spawn = spawnFor(), height = terrainHeight) {
  return {
    x: spawn.x,
    y: height(spawn.x, spawn.z),
    z: spawn.z,
    heading: spawn.heading ?? 0,
    speed: 0,
    vx: 0,
    vz: 0,
    vy: 0,
    energy: 100,
    pitch: 0,
    roll: 0,
    grounded: true,
  };
}
