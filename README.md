# Patty Wagon — Free Roam

A fresh third-person 3D arcade driving sandbox. Explore a compact seaside toy town in a burger wagon, collect discoveries, smash scenery, and take ramps at your own pace. There are no timers, lives, mandatory missions, or cutscenes.

## Play / develop

Requires Node 22.12+ (or 20.19+).

```sh
npm ci
npm run dev
npm test
npm run build
```

WASD / arrows drive; Space brakes and drifts; Shift boosts; R resets the vehicle; Escape pauses. Touch buttons support simultaneous steering and acceleration. Sound is opt-in. Progress saves locally, independently of the old game's save data.

## This starting build

- One connected 240-unit world, three districts: Coral Commons, Sunset Boardwalk, Rustwater Works.
- A modeled burger wagon, chase camera with obstruction checks, acceleration, reverse, drift, boost, ramp jumps, simplified building collisions, reset.
- 96 collectible discoveries, 42 breakable props, six ramps, nine moving traffic cars, 24 ambient pedestrians.
- Three optional activities: clear a 16-unit jump, break 10 props, discover the boardwalk secret.
- Speed and handling upgrades at 25 and 50 discoveries; no currency spending.
- Distinct landmarks, architecture, trees, windows, road markings, particle feedback, and animated wheel.
- Minimal HUD; pause-only control panel; local saves validated on load.

## GitHub Pages

The repository root contains a ready-to-serve `index.html` and bundled `assets/`. It works when Pages publishes main directly, and the workflow can also publish the equivalent `dist/` output. Both use relative asset URLs, require no CDN, and need no backend.

The editable Vite entry is `game.html`; local development opens that page. `npm run build` compiles it, validates its asset references, and refreshes both `dist/` and the root publishing files. Commit the generated root `index.html`, `.nojekyll`, and `assets/` along with source changes. Do not edit the generated root HTML by hand.

## Architecture and scope

`src/vehicle` owns the Y-up, -Z-forward kinematic arcade controller. `src/world` builds deterministic procedural geometry, collectibles, props, traffic and ambient pedestrians. `src/core` validates saves. `src/systems` handles keyboard/touch input and opt-in synthesized sound. `src/main.js` coordinates rendering, progression, activities and HUD.

This is the first playable slice, not the complete five-to-seven-district expansion in [the design brief](docs/DESIGN.md). Districts are accessible immediately. Physics uses lightweight height surfaces and box obstacles instead of Rapier: traffic is kinematic, pedestrians decorative, and destruction uses pooled debris rather than rigid-body fragments. Art is original procedural geometry; glTF assets, full suspension physics, district audio zones, extra activities and gated districts remain future work. No official SpongeBob assets are included.

The old implementation is replaced in the current tree. Earlier commits remain available for recovery.

## Validation of the fresh start

Six automated tests pass, covering driving direction, steering, boost/upgrades, ramp launch and landing, solid collision, corrupted and unavailable storage, scene construction, one-time pickups and destruction. Production bundling passes. Browser rendering and touch play have not yet been visually verified: the execution environment had no installed browser and its browser download failed. Test this starting build on desktop and phone before treating it as a polished release.

## Graphics compatibility

WebGL is the preferred renderer. If the browser cannot create a WebGL context, the game automatically uses a reduced-detail SVG renderer. It preserves driving, progression and controls, but omits shadows and particle rendering and updates visuals at a lower rate. This mode is intended for compatibility, not equivalent visual fidelity or performance.
