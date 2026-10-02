import * as T from "three";
import { frontierSites } from "../world/WorldConfig.js";
import { terrainHeight } from "../world/Terrain.js";
export function lightingProfile(x, z) {
  const t = T.MathUtils.smoothstep(
    Math.max(Math.abs(x), Math.abs(z)),
    700,
    1120,
  );
  return {
    depth: t,
    sky: new T.Color(0x65c6bf).lerp(new T.Color(0x194b68), t),
    sun: 2 - t * 0.95,
    ambient: 1.45 - t * 0.5,
    fogNear: 350 - t * 110,
    fogFar: 1050 - t * 290,
    headlight: 30 + t * 160,
  };
}
export class WorldLighting {
  constructor(scene, sun, hemisphere, software = false) {
    this.scene = scene;
    this.sun = sun;
    this.hemisphere = hemisphere;
    this.software = software;
    this.started = false;
    this.headlamp = new T.SpotLight(0xd7f6e5, 0, 95, Math.PI / 6, 0.65, 1.4);
    this.headlamp.castShadow = false;
    this.locals = software
      ? []
      : [
          new T.PointLight(0xffffff, 0, 90, 1.5),
          new T.PointLight(0xffffff, 0, 90, 1.5),
        ];
    if (!software)
      scene.add(this.headlamp, this.headlamp.target, ...this.locals);
  }
  update(vehicle, dt, save) {
    const p = lightingProfile(vehicle.x, vehicle.z),
      blend = this.started ? 1 - Math.exp(-dt * 2) : 1;
    this.started = true;
    this.scene.background ??= p.sky.clone();
    this.scene.background.lerp(p.sky, blend);
    this.scene.fog.color.lerp(p.sky, blend);
    this.scene.fog.near = T.MathUtils.lerp(
      this.scene.fog.near,
      this.software ? 230 : p.fogNear,
      blend,
    );
    this.scene.fog.far = T.MathUtils.lerp(
      this.scene.fog.far,
      this.software ? 630 : p.fogFar,
      blend,
    );
    this.sun.intensity = T.MathUtils.lerp(
      this.sun.intensity,
      this.software ? 0.55 : p.sun,
      blend,
    );
    this.hemisphere.intensity = T.MathUtils.lerp(
      this.hemisphere.intensity,
      this.software ? 2 : p.ambient,
      blend,
    );
    this.sun.position.set(vehicle.x - 90, vehicle.y + 150, vehicle.z + 90);
    this.sun.target.position.set(vehicle.x, vehicle.y, vehicle.z);
    if (this.software) return;
    const dx = -Math.sin(vehicle.heading),
      dz = -Math.cos(vehicle.heading);
    this.headlamp.position.set(
      vehicle.x + dx * 4,
      vehicle.y + 2.3,
      vehicle.z + dz * 4,
    );
    const tx = vehicle.x + dx * 35,
      tz = vehicle.z + dz * 35;
    this.headlamp.target.position.set(tx, terrainHeight(tx, tz) + 0.4, tz);
    this.headlamp.intensity = T.MathUtils.lerp(
      this.headlamp.intensity,
      p.headlight,
      blend,
    );
    const active = frontierSites
      .filter((s) => save.deliveries.includes(s.id))
      .sort(
        (a, b) =>
          Math.hypot(a.x - vehicle.x, a.z - vehicle.z) -
          Math.hypot(b.x - vehicle.x, b.z - vehicle.z),
      );
    this.locals.forEach((light, i) => {
      const site = active[i];
      light.visible =
        !!site && Math.hypot(site.x - vehicle.x, site.z - vehicle.z) < 220;
      if (!light.visible) return;
      light.color.setHex(site.color);
      light.intensity = 220;
      light.position.set(
        site.x - 32,
        terrainHeight(site.x - 32, site.z) + 19,
        site.z,
      );
    });
  }
}
