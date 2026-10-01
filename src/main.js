import * as T from "three";
import "./style.css";
import { createRenderer, prepareSoftwareScene } from "./core/Renderer.js";
import { World } from "./world/World.js";
import { makeWagon } from "./art/Models.js";
import {
  districts,
  secrets,
  spawnFor,
  WORLD_SIZE,
} from "./world/WorldConfig.js";
import { roadPaths, terrainHeight } from "./world/Terrain.js";
import { Input } from "./systems/Input.js";
import { Audio } from "./systems/Audio.js";
import { loadSave, writeSave } from "./core/SaveManager.js";
import { initialVehicle, stepVehicle } from "./vehicle/VehiclePhysics.js";
import { scenicRoutes, ScenicProgress } from "./world/ScenicRoutes.js";
try {
  const $ = (s) => document.querySelector(s),
    canvas = $("#game"),
    { renderer, software } = createRenderer(canvas),
    scene = new T.Scene();
  scene.fog = new T.Fog(0x65c6bf, software ? 230 : 350, software ? 630 : 1050);
  const camera = new T.PerspectiveCamera(
    58,
    innerWidth / innerHeight,
    0.2,
    software ? 650 : 1250,
  );
  scene.add(new T.HemisphereLight(0xc5e9e8, 0x526c69, software ? 2.0 : 1.45));
  if (software) scene.add(new T.AmbientLight(0xd9f0dd, 0.75));
  const sun = new T.DirectionalLight(0xffedc1, software ? 0.55 : 2.0);
  sun.position.set(-90, 150, 90);
  sun.castShadow = !software;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -60;
  sun.shadow.camera.right = 60;
  sun.shadow.camera.top = 60;
  sun.shadow.camera.bottom = -60;
  sun.shadow.camera.far = 400;
  sun.shadow.bias = -0.001;
  sun.shadow.normalBias = 0.06;
  scene.add(sun);
  scene.add(sun.target);
  const save = loadSave(),
    world = new World(scene, save, { software }),
    input = new Input(),
    audio = new Audio(),
    car = makeWagon();
  const scenicProgress = new ScenicProgress(save);
  scene.add(car);
  if (software)
    car.traverse((node) => {
      if (node.isMesh) node.renderOrder = 5;
    });
  if (software) {
    const hidden = [world.particleMesh, world.bubbleMesh];
    for (const m of hidden) scene.remove(m);
    prepareSoftwareScene(scene);
    for (const m of hidden) {
      scene.add(m);
      m.visible = false;
    }
  }
  let state = initialVehicle(
    save.position ?? spawnFor(),
    world.heightAt.bind(world),
  );
  let time = 0,
    last = performance.now(),
    lastRender = 0,
    paused = false,
    toastUntil = 0,
    jumpStart = null,
    bestJump = 0,
    lastSave = 0,
    lastHud = 0;
  const menu = $("#menu"),
    atlas = $("#atlas"),
    toast = $("#toast"),
    minimap = $("#minimap"),
    context = minimap.getContext("2d");
  const wanted = new T.Vector3(),
    look = new T.Vector3();
  const stats = { fps: 0, frameMs: 0, frames: 0, totalTime: 0 };
  $("#total").textContent = world.coins.length;
  function notify(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    toastUntil = time + 3;
  }
  function persist() {
    save.position = { x: state.x, z: state.z, heading: state.heading };
    if (!writeSave(save)) notify("This browser could not save your progress.");
  }
  function complete(id, message) {
    if (save.activities.includes(id)) return;
    save.activities.push(id);
    persist();
    audio.tone(950, 0.3);
    notify(message);
  }
  function progress() {
    return `${save.coins.length} / ${world.coins.length} crowns · ${save.visited.length} / 7 areas explored · ${save.secrets.length} / 7 secrets · ${save.broken.length} props smashed · ${scenicRoutes.filter(r => save.trails[r.id] === r.gates.length).length} / 3 scenic routes`;
  }
  function pause(value) {
    paused = value;
    input.clear();
    if (value) {
      $("#progress").textContent = progress();
      $("#legacy").textContent = save.legacy
        ? `Previous town archived: ${save.legacy.coins} discoveries. Your wagon keeps that upgrade credit.`
        : "";
      if (!menu.open) menu.showModal();
    } else {
      if (menu.open) menu.close();
      if (atlas.open) atlas.close();
    }
    last = performance.now();
  }
  menu.addEventListener("cancel", (e) => {
    e.preventDefault();
    pause(false);
  });
  menu.addEventListener("close", () => {
    if (!atlas.open) {
      paused = false;
      last = performance.now();
    }
  });
  atlas.addEventListener("cancel", (e) => {
    e.preventDefault();
    pause(false);
  });
  atlas.addEventListener("close", () => {
    if (!menu.open) {
      paused = false;
      last = performance.now();
    }
  });
  $("#pause").onclick = () => pause(true);
  $("#help").onclick = () => pause(true);
  $("#resume").onclick = () => pause(false);
  $("#close-map").onclick = () => pause(false);
  function place(spawn, message) {
    state = initialVehicle(spawn, world.heightAt.bind(world));
    scenicProgress.resetPosition();
    jumpStart = null;
    camera.position.set(
      state.x + Math.sin(state.heading) * 18,
      state.y + 9,
      state.z + Math.cos(state.heading) * 18,
    );
    world.ensureAround(state.x, state.z, state.heading, true);
    persist();
    if (message) notify(message);
  }
  $("#reset").onclick = () =>
    place(world.recover(state.x, state.z), "Back on the nearest road.");
  $("#sound").onclick = (e) => {
    e.target.textContent = audio.toggle() ? "Sound on" : "Sound off";
  };
  function drawMap(ctx, size, player = true) {
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "#134c59";
    ctx.fillRect(0, 0, size, size);
    const point = (x, z) => [
      (x / WORLD_SIZE + 0.5) * size,
      (z / WORLD_SIZE + 0.5) * size,
    ];
    for (const d of districts) {
      const [x, z] = point(d.x, d.z);
      const gradient = ctx.createRadialGradient(x, z, 0, x, z, size * 0.19);
      gradient.addColorStop(0, d.color + "44");
      gradient.addColorStop(1, d.color + "00");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, z, size * 0.19, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#afddd0";
    ctx.lineWidth = size > 300 ? 3 : 1.5;
    for (const path of roadPaths) {
      ctx.beginPath();
      path.nodes.forEach((p, i) => {
        const [x, z] = point(p.x, p.z);
        i ? ctx.lineTo(x, z) : ctx.moveTo(x, z);
      });
      ctx.stroke();
    }
    for (const d of districts) {
      const [x, z] = point(d.x, d.z);
      ctx.fillStyle = save.visited.includes(d.id) ? "#ffd56d" : "#d9e9d8";
      ctx.beginPath();
      ctx.arc(x, z, size > 300 ? 5 : 2.2, 0, Math.PI * 2);
      ctx.fill();
      if (size > 300) {
        ctx.font = "600 12px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(d.name, x, z - 12);
      }
    }
    if (player) {
      const [x, z] = point(state.x, state.z);
      ctx.save();
      ctx.translate(x, z);
      ctx.rotate(-state.heading);
      ctx.fillStyle = "#fff2bb";
      ctx.strokeStyle = "#155968";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -7);
      ctx.lineTo(5, 6);
      ctx.lineTo(0, 3);
      ctx.lineTo(-5, 6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    for(const route of scenicRoutes) {
      const gate=route.gates[save.trails[route.id] ?? 0];
      if(!gate) continue;
      const [x,z]=point(gate.x,gate.z);
      ctx.strokeStyle="#ffe292"; ctx.lineWidth=size>300?2:1;
      ctx.strokeRect(x-3,z-3,6,6);
      if(size>300) {
        ctx.fillStyle="#fff1c5"; ctx.font="11px system-ui"; ctx.textAlign="center";
        ctx.fillText(`${route.name} ${(save.trails[route.id] ?? 0)+1}/6`,x,z+17);
      }
    }
  }
  const descriptions = [
    "The three houses & kelp arch",
    "Restaurant landmarks & smash trail",
    "Jellyfish trails & coral grotto",
    "Goofy Goober & pearl garden",
    "Thug Tug & sunken treasure",
    "Dune jumps & mountain lookout",
    "Neptune’s castle & royal garden",
  ];
  const areaList = $("#area-list");
  districts.forEach((d, i) => {
    const button = document.createElement("button");
    button.className = "area";
    button.dataset.area = d.id;
    const title = document.createElement("strong");
    title.textContent = d.name;
    const small = document.createElement("small");
    small.textContent = descriptions[i];
    button.append(title, small);
    button.onclick = () => {
      pause(false);
      place(spawnFor(d.id), d.name);
    };
    areaList.append(button);
  });
  function showMap() {
    input.clear();
    paused = true;
    if (menu.open) menu.close();
    if (!atlas.open) atlas.showModal();
    drawMap($("#town-map").getContext("2d"), 600);
    $("#map-progress").textContent = progress();
  }
  $("#map").onclick = showMap;
  $("#minimap").onclick = showMap;
  addEventListener("keydown", (e) => {
    if (e.repeat) return;
    if (e.code === "Escape") {
      e.preventDefault();
      pause(!paused);
    }
    if (e.code === "KeyR") $("#reset").click();
    if (e.code === "KeyM") {
      e.preventDefault();
      atlas.open ? pause(false) : showMap();
    }
  });
  addEventListener("blur", () => {
    if (!paused) pause(true);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      persist();
      pause(true);
    }
  });
  addEventListener("pagehide", persist);
  if (!software) {
    canvas.addEventListener("webglcontextlost", (event) => {
      event.preventDefault();
      persist();
      pause(true);
      const node = $("#error");
      node.hidden = false;
      node.textContent = "Graphics paused. Waiting for the browser to restore the game…";
    });
    canvas.addEventListener("webglcontextrestored", () => {
      $("#error").hidden = true;
      // Keep the menu open so driving only resumes when the player is ready.
      notify("Graphics restored · choose Resume to continue");
    });
  }
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize);
  resize();
  place(save.position ?? spawnFor());
  function frame(now) {
    requestAnimationFrame(frame);
    const elapsed = Math.min((now - last) / 1000, 0.12);
    last = now;
    if (paused) return;
    time += elapsed;
    stats.frames++;
    stats.totalTime += elapsed;
    stats.frameMs = stats.frameMs * 0.95 + elapsed * 1000 * 0.05;
    if (stats.totalTime > 1) {
      stats.fps = Math.round(stats.frames / stats.totalTime);
      stats.frames = 0;
      stats.totalTime = 0;
    }
    const controls = {
      throttle:
        Number(input.has("KeyW", "ArrowUp")) -
        Number(input.has("KeyS", "ArrowDown")),
      steer:
        Number(input.has("KeyD", "ArrowRight")) -
        Number(input.has("KeyA", "ArrowLeft")),
      brake: input.has("Space"),
      boost: input.has("ShiftLeft", "ShiftRight"),
    };
    const steps = Math.max(1, Math.ceil(elapsed / (1 / 60)));
    for (let i = 0; i < steps; i++) {
      const result = stepVehicle(state, controls, elapsed / steps, world);
      if (result.launched && !jumpStart) jumpStart = { x: state.x, z: state.z };
      if (result.landed && jumpStart) {
        const distance = Math.hypot(
          state.x - jumpStart.x,
          state.z - jumpStart.z,
        );
        bestJump = Math.max(bestJump, distance);
        if (distance > 35) complete("jump", "Long jump · 35 meters cleared");
        jumpStart = null;
      }
    }
    world.update(
      time,
      elapsed,
      state,
      (id) => {
        save.coins.push(id);
        audio.tone(600 + (save.coins.length % 7) * 70);
        if (world.collected === 30 || world.collected === 80)
          notify("Wagon upgraded · more speed and sharper handling");
        persist();
      },
      (id) => {
        save.broken.push(id);
        audio.tone(120, 0.1);
        if (save.broken.length >= 20)
          complete("smash", "Smash trail · 20 props broken");
        persist();
      },
    );
    scenicProgress.update(state,(route,count,finished)=> {
      persist(); audio.tone(finished ? 1100 : 780,0.15);
      notify(finished ? `${route.name} complete` : `${route.name} · ${count}/6 gates`);
    });
    for (const d of districts)
      if (
        Math.hypot(state.x - d.x, state.z - d.z) < 155 &&
        !save.visited.includes(d.id)
      ) {
        save.visited.push(d.id);
        persist();
        if (save.visited.length === 7)
          complete("explorer", "Town explorer · all seven areas discovered");
      }
    for (const s of secrets)
      if (
        Math.hypot(state.x - s.x, state.z - s.z) < 15 &&
        !save.secrets.includes(s.id)
      ) {
        save.secrets.push(s.id);
        persist();
        audio.tone(1150, 0.3);
        notify(`Secret discovered · ${s.name}`);
      }
    car.position.set(state.x, state.y, state.z);
    car.rotation.order = "YXZ";
    car.rotation.set(
      state.pitch,
      state.heading,
      state.roll +
        controls.steer * Math.min(Math.abs(state.speed) * 0.0025, 0.08),
    );
    for (const w of car.userData.wheels) {
      w.mesh.rotation.x += (state.speed * elapsed) / 0.73;
      w.mesh.rotation.y = w.front ? -controls.steer * 0.32 : 0;
    }
    car.userData.propeller.rotation.z += state.speed * elapsed * 0.4;
    look.set(state.x, state.y + 2.2, state.z);
    wanted.set(
      state.x + Math.sin(state.heading) * 17,
      state.y + 9.0,
      state.z + Math.cos(state.heading) * 17,
    );
    wanted.y = Math.max(wanted.y, world.heightAt(wanted.x, wanted.z) + 3.8);
    // Local broadphase checks, rather than raycasting the entire town.
    for (let i = 1; i <= 8; i++) {
      const t = i / 8,
        x = look.x + (wanted.x - look.x) * t,
        y = look.y + (wanted.y - look.y) * t,
        z = look.z + (wanted.z - look.z) * t;
      if (
        [...world.nearbySolids(x, z)].some(
          (b) =>
            y > b.y &&
            y < b.y + b.height &&
            Math.abs(x - b.x) < b.w / 2 + 0.5 &&
            Math.abs(z - b.z) < b.d / 2 + 0.5,
        )
      ) {
        wanted.lerp(look, 1 - t + 0.08);
        break;
      }
    }
    camera.position.lerp(wanted, 1 - Math.exp(-6 * elapsed));
    camera.lookAt(
      state.x - Math.sin(state.heading) * 5,
      state.y + 1.8,
      state.z - Math.cos(state.heading) * 5,
    );
    sun.position.set(state.x - 90, state.y + 150, state.z + 90);
    sun.target.position.set(state.x, state.y, state.z);
    if (time - lastHud > 0.14) {
      $("#score").textContent = save.coins.length;
      $("#speed-value").textContent = Math.round(Math.abs(state.speed) * 3.6);
      $("#boost").value = state.energy;
      $("#upgrade").textContent =
        world.collected >= 80
          ? "Boost III"
          : world.collected >= 30
            ? "Boost II"
            : "Boost";
      $("#district").textContent = districts.reduce((a, b) =>
        Math.hypot(state.x - a.x, state.z - a.z) <
        Math.hypot(state.x - b.x, state.z - b.z)
          ? a
          : b,
      ).name;
      drawMap(context, 168);
      lastHud = time;
      const node = renderer.domElement;
      node.dataset.renderer = software ? "software" : "webgl";
      node.dataset.worldSize = WORLD_SIZE;
      node.dataset.activeChunks = [...world.chunks.values()].filter(
        (c) => c.group.visible,
      ).length;
      node.dataset.frameMs = stats.frameMs.toFixed(1);
      node.dataset.crowns = save.coins.length;
      node.dataset.position = `${state.x.toFixed(1)},${state.y.toFixed(1)},${state.z.toFixed(1)}`;
      node.dataset.grounded = state.grounded;
    }
    if (time - lastSave > 10) {
      persist();
      lastSave = time;
    }
    if (time > toastUntil) toast.classList.remove("visible");
    if (!software || now - lastRender > 100) {
      renderer.render(scene, camera);
      if (software) renderer.domElement.style.background = "transparent";
      lastRender = now;
    }
  }
  window.__pattyWagon = {
    get state() {
      return { ...state };
    },
    get progress() {
      return structuredClone(save);
    },
    get diagnostics() {
      return {
        renderer: software ? "software" : "webgl",
        worldSize: WORLD_SIZE,
        roadLength: Math.round(roadPaths.reduce((n, r) => n + r.length, 0)),
        loopLength: Math.round(roadPaths[0].length),
        crowns: world.coins.length,
        breakables: world.breakables.length,
        ramps: world.ramps.length,
        districts: districts.length,
        activeChunks: [...world.chunks.values()].filter((c) => c.group.visible)
          .length,
        cachedChunks: world.chunks.size,
        drawCalls: renderer.info.render.calls ?? renderer.info.render.faces,
        fps: stats.fps,
        bestJump,
        districtDetails:world.districtObjects.length,
        scenicGates:world.scenicGates.length,
      };
    },
  };
  notify("WASD / arrows · drive   Shift · boost   M · town map");
  requestAnimationFrame(frame);
} catch (error) {
  const node = document.querySelector("#error");
  node.hidden = false;
  node.textContent = `The underwater town could not start. Refresh the page to try again. ${error.message}`;
  console.error(error);
}
