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

Twenty automated checks cover driving direction, steering, boost, braking/reverse, elevated collision, ramp orientation and landing, the expanded driving bounds, seeded generation, shared chunk edges, minimum scenery spacing, collision/mesh height agreement, route clearance, persistent pickups/destruction, bounded streaming, save migration, and the wagon model. Production bundling passes.

The deployed game was visually reviewed in SVG compatibility mode across all seven areas. The town map's area controls and the seven-area exploration milestone were also checked. Desktop WebGL rendering and real-phone performance are not yet measured. SVG mode is a compatibility view and has less scenery, no shadows or particle effects, and a lower render frequency. It is not a benchmark for WebGL quality. General seafloor collision follows terrain and ramps; caves are drive-through arches rather than a volumetric cave system, traffic is kinematic, and breakage uses particles rather than rigid-body fragments.


## Stability follow-up

Streamed chunks now release their instance buffers when replaced or evicted, barrel hoops share geometry, and stale or duplicate terrain requests are discarded after travel. Startup no longer generates the same nearby terrain twice. Graphics-context loss saves progress and pauses until restoration. Two regression checks verify resource disposal and stale queue cleanup; all 20 tests and production bundling pass. This pass does not establish real-device frame rates.
