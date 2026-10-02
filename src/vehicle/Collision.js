// Sweep the chassis against expanded X/Z boxes, then preserve tangent motion.
// Three passes handle inside corners without bouncing or tunneling through posts.
export function slideMove(state, dx, dz, solids) {
  let x = state.x, z = state.z, impacts = 0;
  const eligible = [...solids].filter(b =>
    state.y < (b.y ?? 0) + b.height && state.y + 2.6 > (b.y ?? 0));
  for (let pass = 0; pass < 3; pass++) {
    let hit = null;
    for (const b of eligible) {
      const minX = b.x - b.w / 2 - 2, maxX = b.x + b.w / 2 + 2;
      const minZ = b.z - b.d / 2 - 2.1, maxZ = b.z + b.d / 2 + 2.1;
      if (x > minX && x < maxX && z > minZ && z < maxZ) {
        // Resolve an overlapping spawn or a downhill contact along the nearest face.
        const faces = [[x-minX,-1,0],[maxX-x,1,0],[z-minZ,0,-1],[maxZ-z,0,1]];
        faces.sort((a,b) => a[0]-b[0]);
        const [depth,nx,nz] = faces[0];
        x += nx * (depth + 0.002); z += nz * (depth + 0.002);
      }
      let enter = -Infinity, leave = Infinity, nx = 0, nz = 0, miss = false;
      for (const [p,v,min,max,axis] of [[x,dx,minX,maxX,0],[z,dz,minZ,maxZ,1]]) {
        if (Math.abs(v) < 1e-9) {
          if (p < min || p > max) miss = true;
          continue;
        }
        const a = (min-p)/v, c = (max-p)/v;
        const near = Math.min(a,c), far = Math.max(a,c);
        if (near > enter) {
          enter = near; nx = axis === 0 ? -Math.sign(v) : 0;
          nz = axis === 1 ? -Math.sign(v) : 0;
        }
        leave = Math.min(leave,far);
      }
      if (!miss && enter >= 0 && enter <= 1 && enter <= leave && (!hit || enter < hit.t))
        hit = {t:enter,nx,nz};
    }
    if (!hit) { x += dx; z += dz; break; }
    const t = Math.max(0, hit.t - 0.001 / (Math.hypot(dx,dz) || 1));
    x += dx*t; z += dz*t;
    dx *= 1-t; dz *= 1-t;
    const normal = dx*hit.nx + dz*hit.nz;
    if (normal < 0) { dx -= normal*hit.nx; dz -= normal*hit.nz; }
    const velocity = state.vx*hit.nx + state.vz*hit.nz;
    if (velocity < 0) { state.vx -= velocity*hit.nx; state.vz -= velocity*hit.nz; }
    impacts++;
  }
  state.x = x; state.z = z;
  if (impacts) state.speed = Math.sign(state.speed) * Math.min(Math.abs(state.speed), Math.hypot(state.vx,state.vz));
  return impacts;
}
