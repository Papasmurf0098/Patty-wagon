import * as T from "three";
import "./style.css";
import { createRenderer, prepareSoftwareScene } from "./core/Renderer.js";
import { World, makeCar } from "./world/World.js";
import { Input } from "./systems/Input.js";
import { Audio } from "./systems/Audio.js";
import { loadSave, writeSave } from "./core/SaveManager.js";
import { initialVehicle, stepVehicle } from "./vehicle/VehiclePhysics.js";

try {
  const canvas = document.querySelector("#game");
  const { renderer, software } = createRenderer(canvas);
  const scene = new T.Scene();
  scene.background = new T.Color(0x8acbd2);
  scene.fog = new T.Fog(0x8acbd2, 95, 210);
  const camera = new T.PerspectiveCamera(
    58,
    innerWidth / innerHeight,
    0.1,
    300,
  );
  const sun = new T.DirectionalLight(0xffe3b0, 3);
  sun.position.set(-50, 100, 40);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, {
    left: -130,
    right: 130,
    top: 130,
    bottom: -130,
    far: 250,
  });
  sun.shadow.bias = -0.001;
  scene.add(sun);
  const save = loadSave(),
    world = new World(scene, save),
    input = new Input(),
    audio = new Audio(),
    car = makeCar(0xedac52, true);
  scene.add(car);
  if (software) prepareSoftwareScene(scene, world.particleMesh);
  let lastRender = 0;
  let state = initialVehicle(),
    paused = false,
    time = 0,
    last = performance.now(),
    toastUntil = 0,
    jumpStart = null,
    bestJump = 0;
  const menu = document.querySelector("#menu"),
    toast = document.querySelector("#toast");
  function notify(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    toastUntil = time + 3.5;
  }
  function persist() {
    if (!writeSave(save))
      notify("Progress could not be saved in this browser.");
  }
  function complete(id, message) {
    if (save.activities.includes(id)) return;
    save.activities.push(id);
    persist();
    audio.tone(1000, 0.3);
    notify(message);
  }
  function pause(value) {
    paused = value;
    input.clear();
    if (value) {
      document.querySelector("#progress").textContent =
        `${save.coins.length}/96 discoveries · ${save.activities.length}/3 activities · ${save.broken.length}/42 props smashed`;
      if (!menu.open) menu.showModal();
    } else if (menu.open) menu.close();
    last = performance.now();
  }
  menu.addEventListener("cancel", (e) => {
    e.preventDefault();
    pause(false);
  });
  menu.addEventListener("close", () => {
    paused = false;
    last = performance.now();
  });
  document.querySelector("#pause").onclick = () => pause(true);
  document.querySelector("#help").onclick = () => pause(true);
  document.querySelector("#resume").onclick = () => pause(false);
  function reset() {
    state = initialVehicle();
    jumpStart = null;
    camera.position.set(0, 9, 50);
    notify("Back on the road.");
  }
  document.querySelector("#reset").onclick = reset;
  document.querySelector("#sound").onclick = (e) => {
    e.target.textContent = audio.toggle() ? "Sound on" : "Sound off";
  };
  addEventListener("keydown", (e) => {
    if (e.repeat) return;
    if (e.code === "Escape") {
      e.preventDefault();
      pause(!paused);
    }
    if (e.code === "KeyR") reset();
  });
  addEventListener("blur", () => pause(true));
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause(true);
  });
  function resize() {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener("resize", resize);
  resize();
  camera.position.set(0, 9, 50);
  const desired = new T.Vector3(),
    target = new T.Vector3(),
    ray = new T.Raycaster();
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.04);
    last = now;
    if (paused) return;
    time += dt;
    const result = stepVehicle(
      state,
      {
        throttle:
          Number(input.has("KeyW", "ArrowUp")) -
          Number(input.has("KeyS", "ArrowDown")),
        steer:
          Number(input.has("KeyD", "ArrowRight")) -
          Number(input.has("KeyA", "ArrowLeft")),
        brake: input.has("Space"),
        boost: input.has("ShiftLeft", "ShiftRight"),
      },
      dt,
      world,
    );
    if (state.y > 1 && !jumpStart) jumpStart = { x: state.x, z: state.z };
    if (result.landed && jumpStart) {
      const distance = Math.hypot(state.x - jumpStart.x, state.z - jumpStart.z);
      bestJump = Math.max(bestJump, distance);
      if (distance > 16)
        complete("jump", "Long jump discovered · 16 m cleared");
      jumpStart = null;
    }
    world.update(
      time,
      dt,
      state,
      (id) => {
        save.coins.push(id);
        world.collected = save.coins.length;
        persist();
        audio.tone(650 + (save.coins.length % 8) * 65);
        if (save.coins.length === 25 || save.coins.length === 50)
          notify("Wagon upgraded · more speed and sharper handling");
        if (save.coins.length === 32) notify("Trailblazer · 32 discoveries");
        if (save.coins.length === 96)
          notify("Every discovery found · the world is still yours");
      },
      (id) => {
        save.broken.push(id);
        persist();
        audio.tone(130, 0.1);
        if (save.broken.length >= 10)
          complete("smash", "Smash activity complete · 10 props broken");
      },
    );
    if (Math.hypot(state.x - world.secret.x, state.z - world.secret.z) < 5)
      complete("garden", "Secret discovered · the end of the boardwalk");
    car.position.set(state.x, state.y, state.z);
    car.rotation.set(
      Math.sin(time * 8) * Math.min(Math.abs(state.speed) / 800, 0.04),
      state.heading,
      (input.has("Space") ? 0.06 : 0) * Math.sin(state.heading),
    );
    target.set(state.x, state.y + 2, state.z);
    desired.set(
      state.x + Math.sin(state.heading) * 12,
      state.y + 7,
      state.z + Math.cos(state.heading) * 12,
    );
    // Pull the camera in when solid architecture occludes the chase line.
    const direction = desired.clone().sub(target),
      length = direction.length();
    ray.set(target, direction.normalize());
    ray.far = length;
    const hits = ray.intersectObjects(
      scene.children.filter(
        (m) => m.isMesh && m.geometry?.type === "BoxGeometry",
      ),
      false,
    );
    if (hits.length && hits[0].distance > 1)
      desired
        .copy(target)
        .addScaledVector(direction, Math.max(2, hits[0].distance - 0.8));
    camera.position.lerp(desired, 1 - Math.exp(-6 * dt));
    camera.lookAt(
      state.x - Math.sin(state.heading) * 5,
      state.y + 1.7,
      state.z - Math.cos(state.heading) * 5,
    );
    document.querySelector("#score").textContent = save.coins.length;
    document.querySelector("#speed").innerHTML =
      `${Math.round(Math.abs(state.speed) * 3.6)} <small>km/h</small>`;
    document.querySelector("#boost").value = state.energy;
    document.querySelector("#upgrade").textContent =
      save.coins.length >= 50
        ? "Boost · tier III"
        : save.coins.length >= 25
          ? "Boost · tier II"
          : "Boost";
    document.querySelector("#district").textContent =
      state.x < -39
        ? "Sunset Boardwalk"
        : state.x > 39
          ? "Rustwater Works"
          : "Coral Commons";
    if (time > toastUntil) toast.classList.remove("visible");
    if (!software || now - lastRender >= 80) {
      renderer.render(scene, camera);
      lastRender = now;
    }
  }
  notify("WASD / arrows to drive · Shift to boost · Space to drift");
  requestAnimationFrame(frame);
  // Read-only diagnostics for automated smoke checks.
  window.__pattyWagon = {
    get state() {
      return { ...state };
    },
    get progress() {
      return structuredClone(save);
    },
    get diagnostics() {
      return {
        coins: world.coins.length,
        breakables: world.breakables.length,
        ramps: world.ramps.length,
        traffic: world.traffic.length,
        npcs: world.people.length,
        renderer: software ? "software" : "webgl",
        drawCalls: renderer.info.render.calls ?? renderer.info.render.faces,
        bestJump,
      };
    },
  };
} catch (error) {
  const node = document.querySelector("#error");
  node.hidden = false;
  node.textContent = `The 3D world could not start. Please refresh the page or try an updated browser. ${error.message}`;
  console.error(error);
}
