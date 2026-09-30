export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export function groundHeight(x, z, ramps) {
  for (const r of ramps)
    if (
      Math.abs(x - r.x) < r.width / 2 &&
      z >= r.z - r.length / 2 &&
      z <= r.z + r.length / 2
    )
      return (r.height * (r.z + r.length / 2 - z)) / r.length;
  return 0;
}
export function stepVehicle(s, input, dt, world) {
  const prevY = s.y;
  const ground = groundHeight(s.x, s.z, world.ramps);
  const grounded = s.y <= ground + 0.08 && s.vy <= 0;
  const boost = input.boost && input.throttle > 0 && s.energy > 1;
  const level = world.collected >= 50 ? 2 : world.collected >= 25 ? 1 : 0;
  s.energy = clamp(s.energy + (boost ? -32 : 18) * dt, 0, 100);
  s.speed += input.throttle * (boost ? 36 : 23) * dt;
  s.speed *= Math.exp(-(input.brake ? 3.4 : input.throttle ? 0.25 : 1.05) * dt);
  s.speed = clamp(s.speed, -12, (boost ? 43 : 29) + level * 3);
  s.heading -=
    input.steer *
    (input.brake ? 2.1 : 1.45) *
    (s.speed / 18) *
    dt *
    (grounded ? 1 : 0.35);
  const desiredX = -Math.sin(s.heading) * s.speed,
    desiredZ = -Math.cos(s.heading) * s.speed;
  const grip = 1 - Math.exp(-(input.brake ? 2.3 : 8 + level) * dt);
  s.vx += (desiredX - s.vx) * grip;
  s.vz += (desiredZ - s.vz) * grip;
  const oldX = s.x,
    oldZ = s.z;
  s.x = clamp(s.x + s.vx * dt, -115, 115);
  s.z = clamp(s.z + s.vz * dt, -115, 115);
  const nextGround = groundHeight(s.x, s.z, world.ramps);
  if (grounded && ground > 0 && nextGround < ground - 0.3 && s.speed > 8)
    s.vy = 8 + Math.abs(s.speed) * 0.22;
  if (grounded && nextGround >= ground - 0.3) {
    s.y = nextGround;
    s.vy = 0;
  } else {
    s.vy -= 24 * dt;
    s.y += s.vy * dt;
    if (s.y < nextGround) {
      s.y = nextGround;
      s.vy = 0;
    }
  }
  for (const b of world.solids)
    if (
      s.y < b.height &&
      Math.abs(s.x - b.x) < b.w / 2 + 1.4 &&
      Math.abs(s.z - b.z) < b.d / 2 + 1.8
    ) {
      s.x = oldX;
      s.z = oldZ;
      s.speed *= -0.25;
      s.vx *= -0.3;
      s.vz *= -0.3;
      break;
    }
  if (!Number.isFinite(s.y) || s.y < -10) {
    s.x = 0;
    s.z = 34;
    s.y = 0;
    s.vy = 0;
    s.speed = 0;
  }
  return { boost, landed: prevY > nextGround + 0.8 && s.y === nextGround };
}
export function initialVehicle() {
  return {
    x: 0,
    y: 0,
    z: 34,
    heading: 0,
    speed: 0,
    vx: 0,
    vz: 0,
    vy: 0,
    energy: 100,
  };
}
