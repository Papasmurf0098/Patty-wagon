# Patty Wagon — Underwater Free Roam

Drive a hamburger wagon through a broad, connected underwater town inspired by the 2004 SpongeBob movie browser driving game. Explore sandy dunes, marine neighborhoods, reefs, a lagoon, a shipwreck cove, mountain routes, and a castle terrace. There are no forced timers, lives, mandatory missions, or cutscenes.

## Play

[Open the game](https://papasmurf0098.github.io/Patty-wagon/).

WASD / arrows drive. Space brakes and drifts. Shift boosts. R recovers to the nearest road. M opens the town map. Escape pauses. Touch controls support steering, acceleration, reverse, drift, and boost together. Sound is opt-in.

The town map shows the full connected network and lets you start exploring in any of the seven areas. Progress saves in the browser. The previous compact town's save remains archived under its original key, with its collected crowns counted toward wagon upgrade credit.

## This revision

- A 1,800 × 1,800-unit seafloor map, replacing the previous 230-unit driving boundary.
- Seven connected areas: Conch Street, Restaurant Commons, Jellyfish Fields, Goo Lagoon, Wreck Cove, Sand Mountain, and Neptune Terrace.
- A 4.5 km main loop and approximately 8.9 km of roads overall, using the design convention of one world unit per meter.
- A hamburger-body wagon with an open upper-bun seating area, two passengers, sesame seeds, integrated wheels, a pickle flag, and animated propeller.
- Individually modeled pineapple, stone-head and rock homes, Krusty Krab, Chum Bucket, Goofy Goober, Thug Tug, and Neptune's castle.
- 612 crowns, 123 breakable barrels, nine ramps, seven secret locations, three exploration milestones, nine boat vehicles, 40 fish residents, and 38 jellyfish.
- Terrain-following driving and suspension orientation, boost upgrades, ramp flight, camera obstruction checks, nearest-road recovery, local collision queries, a minimap, and a full town map.
- Seeded terrain and scenery, road and landing-zone exclusions, minimum-spacing placement across chunk borders, worker generation, streamed instanced scenery, landmark LOD, terrain-conforming road paint, and an approximately 55-chunk cache limit.

All models are newly generated geometry; official game asset files are not distributed. This is a stylized procedural implementation rather than a reproduction of the original game's assets or exact map.

## Develop

Requires Node 22.12+ (or 20.19+).

```sh
npm ci
npm run dev
npm test
npm run build
```

The editable Vite entry is `game.html`. `npm run build` produces the static `dist/` game and copies the compiled `index.html`, `.nojekyll`, and `assets/` to the repository root. Commit those generated files with source changes. Both root-based GitHub Pages publishing and `dist/` hosting use relative URLs, including the bundled terrain worker. No CDN or backend is required.

## Architecture

- `src/art`: shared materials, hamburger wagon, marine models, landmarks, and procedural sand texture.
- `src/world/WorldConfig.js`: authored regions, routes, landmarks, ramps, secrets, and spawn points.
- `src/world/Terrain.js`: deterministic terrain, sampled road splines, grading, and triangle-matched surface heights.
- `src/world/ChunkData.js` and `TerrainWorker.js`: renderer-independent chunk generation and global scenery spacing.
- `src/world/World.js`: road meshes, scenery loading, exploration objects, local simulation, and chunk caching.
- `src/vehicle`: Y-up, -Z-forward arcade driving, terrain alignment, ramp launches, and collisions.
- `src/core`: versioned saves and WebGL/SVG compatibility.
- `src/systems`: keyboard/touch input and opt-in sound.

See [the current design](docs/DESIGN.md) and [the approved correction plan](docs/CORRECTION_PLAN.md).

## Validation and limits

Forty-three automated checks cover driving direction, steering, boost, braking/reverse, elevated collision, ramp orientation and landing, the expanded driving bounds, seeded generation, shared chunk edges, minimum scenery spacing, collision/mesh height agreement, route clearance, persistent pickups/destruction, bounded streaming, save migration, and the wagon model. Production bundling passes.

The deployed game was visually reviewed in SVG compatibility mode across all seven areas. The town map's area controls and the seven-area exploration milestone were also checked. Desktop WebGL rendering and real-phone performance are not yet measured. SVG mode is a compatibility view and has less scenery, no shadows or particle effects, and a lower render frequency. It is not a benchmark for WebGL quality. General seafloor collision follows terrain and ramps; caves are drive-through arches rather than a volumetric cave system, traffic is kinematic, and breakage uses particles rather than rigid-body fragments.


## Stability follow-up

Streamed chunks now release their instance buffers when replaced or evicted, barrel hoops share geometry, and stale or duplicate terrain requests are discarded after travel. Startup no longer generates the same nearby terrain twice. Graphics-context loss saves progress and pauses until restoration. Two regression checks verify resource disposal and stale queue cleanup; all 20 tests and production bundling pass. This pass does not establish real-device frame rates.

## Open-world detail pass

Decorative coral and kelp are reduced by 65.9% across the sampled 14×14 chunk grid (5,241 to 1,785 instances), retaining rock formations and authored landmarks. Base driving speed increases from 27 to 38 units/s, boost from 43 to 58, with stronger acceleration and adjusted steering. Fine repeating seafloor grain and current ripples use world coordinates so detail stays aligned across chunks. Roads gain sandy shoulders and wear, and landmarks gain compacted access paths and aprons. Inhabited districts gain sparse roadside benches and marine lamps. Jump landing detection also handles near-ground snaps correctly at higher speeds.

## Materials and town-life release

Seven cached 512×512 material families add wood grain, stone joints, metal wear, bun pores, tire tread, fabric weave, and sand ripples. Separate normal maps add lighting detail; color maps use sRGB while normal data remains unconverted. Phong lighting provides smoother shading and surface highlights. Fine terrain normals use world coordinates, and a shared uniform animates subtle water-light patterns on the ground and selected assets. Contact shading follows terrain beneath buildings and the wagon.

Fourteen authored activity pockets furnish all seven districts: neighborhood laundry and post, market stalls, restaurant seating, shelters, working docks, and a repair shed. Foundations sample their corners for ground support; streets, jump approaches, and activity pockets reserve scenery clearances. Existing crown IDs and the 612-crown total are preserved. Residents gain articulated arms and legs, with additional pedestrians around gathering areas. Static landmark and prop geometry is merged by material to keep draw counts lower; the reduced coral/kelp density and faster driving stay in place.

Jump gravity is 18 units/s², down from 24; launch impulse is scaled to 90% to give additional hang time with a controlled height increase. A 6m/11m-per-second reference flight lasts roughly 1.6 seconds and returns a single landing event. All 23 automated checks pass. The modified asset and terrain shaders compile and link with the installed Three.js shader generator on Mesa llvmpipe. The production build passes; real-device GPU frame rates remain unmeasured.

See [the rendering research and implementation choices](docs/VISUAL_TECHNIQUES.md).

## Scenic routes and collision release — October 1, 2026

Seven additional district structures add distinct silhouettes and everyday uses: Conch Street water tower, Jellyfish Fields observation hut, Restaurant Commons billboard, lagoon boardwalk, Wreck Cove beacon, Sand Mountain quarry crane, and Neptune Terrace fountain. Shared wood, stone, fabric, and metal materials keep the existing texture detail; static geometry is merged by material. Foundations and piers support the structures. The boardwalk has terrain-connected approaches and a matching driving surface. Scenery reserves these footprints.

Three optional scenic drives provide eighteen numbered roadside gates: Neighborhood Cruise, Lagoon Promenade, and Mountain Descent. Follow each route in order at your own pace. Gate progress persists across reloads in the existing save, and the next gate appears as a gold square on the maps. All 612 crown identities remain available.

Continuous swept chassis collision prevents tunneling through thin posts, resolves overlapping spawns, and preserves tangent movement when scraping walls. Lower lateral grip creates greater drift slip while the existing 38/58-unit-per-second normal/boost limits and floatier jumps remain. Streamed rocks now have spatial collision entries, removed on replacement and disposal; rock placement avoids blocking crowns. Traffic boats have moving collision bounds and remain kinematic.

Thirty-two checks pass, including thin-wall sweeps, inside corners, drift slip, ordered scenic progression, teleport rejection, save restoration, open road lanes, boardwalk surface continuity, moving traffic colliders, and rock collision cleanup. Production bundling passes. Real-phone WebGL performance remains unmeasured.

## Side destinations and stunt release — October 1, 2026

Three new destinations develop open sand beyond the existing town: Tidepool Gardens, Anchor Salvage Yard, and Old Shell Sanctuary. Approximately 551 meters of terrain-following side paths connect them to the main roads. Compacted surfaces, sparse shoulder posts, map lines, and direct map travel make them accessible. Tidepools include shell details and benches; the yard includes anchors, crates, winch equipment, stacked beams, and an open ribbed salvage hull; the sanctuary includes broken fluted columns, a drive-through arch, and a tiled courtyard. Models use shared textured materials and merged static geometry.

Nine airborne stunt rings add optional ramp challenges. Pass through a ring in the forward direction and land cleanly after traveling at least 25 meters to earn its badge. Best successful jump distances and destination discoveries save in the existing browser save. Collisions or recovery cancel the attempt; missed rings carry no penalty or deadline. All nine challenges pass normal and boosted driving simulations with streamed rock collision present. Extended ramp approaches and landing corridors reserve scenery space.

Twelve additional residents walk along promenade shoulders between destinations. Their paths follow the terrain, avoid main driving lanes, and check solid props. Existing crown identities and the 612-crown total remain intact. The map adds destination markers, side paths, and completion-colored stunt rings; these details stay in the map and pause menu rather than expanding the persistent HUD.

All 39 automated checks and the production build pass. The additional checks cover vehicle-clear side paths, all nine stunt flights at two speeds with streamed scenery, ring direction and height, interrupted attempts, saves, landing-corridor exclusions, and resident paths.

[Geometry layout preview](docs/previews/discovery-areas.jpg): generated from the new models using Three.js SVG projection. This review excludes normal maps, water-light shaders, cast shadows, and sign lettering; it is not a screenshot of final WebGL appearance. Real-phone WebGL frame times remain unmeasured.

## Destination keepsakes and driving refinements — October 1, 2026

Tidepool Gardens, Anchor Salvage Yard, and Old Shell Sanctuary now have optional three-item collections: pearls in open clams, salvage cogs, and echo shells. Nine animated keepsakes occupy the clear central driving aisles. Drive through them to collect; each completed set earns a persistent badge. Partial progress survives reloads, and the map's destination buttons show individual counts. No timer or extra control is required, and the persistent driving HUD stays compact. These keepsakes are separate from the existing 612 crowns and do not alter upgrades.

Conch Hop now angles away from the pineapple so upgraded boosted flights can land cleanly. Scenic gates ignore initial positions after recovery or reload and require actual movement. Collection tracking also rejects parked, airborne, elevated, and teleport passes.

All 43 checks pass. Stunt coverage now runs all nine ramps with and without boost at all three upgrade tiers (54 streamed driving simulations). Additional checks cover collection reachability, one-time rewards, token visibility, invalid saves, and partial progress restoration. Production bundling passes. A geometry-only review checked the new token placement; real-browser WebGL and phone performance remain unverified.
