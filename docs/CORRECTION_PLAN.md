# Patty Wagon: research and correction plan

Prepared 30 September 2026 for Papasmurf0098/Patty-wagon.

The corrected game should be a broad, connected underwater town that is enjoyable to drive around. Its central vehicle is a hamburger with wheels and seating built into it. The current compact city and conventional car miss that brief. This plan replaces those foundations; changing colors and enlarging the existing grid would not resolve the problem.

This is the approved correction plan. The rebuild implements its main systems; the current feature list, validation, and remaining limitations are recorded in the repository README. Performance targets below remain targets until measured on WebGL desktop and phone hardware.

## Reference and evidence

The relevant reference is **The SpongeBob SquarePants Movie (3D Game)**, the 2004 3D Groove browser driving game. A first-person account describes free driving around Bikini Bottom, collecting crowns, smashing objects, and entering activities. It also distinguishes this game from the similarly titled console release. [1, 2]

Original screenshots establish the most useful visual requirements: a blue-green underwater backdrop with flower silhouettes, open sandy ground, separated marine structures, recognizable landmarks, and a vehicle constructed from a hamburger. The upper bun surrounds the seating area; the food layers form the body, with wheels fitted around it. [1]

The two screenshots on the first-person account illustrate glitches. The purple terrain in one image and the wagon's overturned orientation in the other are not intended gameplay features. They are useful evidence for the vehicle, background, and landmark shapes, not templates for the ground or driving behavior.

The original world's documented locations include Conch Street, Jellyfish Fields, Goo Lagoon, the Krusty Krab, Chum Bucket, Goofy Goober, Thug Tug, Sand Mountain, and Neptune's castle. [2] Their exact arrangement and scale are not established by this research. The layout below is a new proposal using that town vocabulary.

No reliable measurement of the original map was found. The proposed dimensions below are design targets, not claims about the 2004 game's size. The original also used timed activities and crown costs; our existing requirement for unrestricted free roaming and no forced timers remains authoritative.

Reference material:

- [First-person account and original screenshots](https://lolwut.neocities.org/gaming/pc/spongebob-movie-game).
- [Original wagon and underwater backdrop](https://lolwut.neocities.org/images/spongebob-3d-sign.jpg), shown during an overturned-car glitch.
- [Original wagon and shipwreck landmark](https://lolwut.neocities.org/images/spongebob-3d-purple-area.jpg), shown beyond the intended boundary.
- [Gameplay footage for subsequent visual review](https://www.youtube.com/watch?v=MWUhij0rmUw). Footage playback was unavailable during this research; it was not used to claim frame-by-frame observations.

## What needs to change

| Current build                                                          | Required correction                                                                                    |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Flat 244-unit ground plane; driving clamped to a 230 × 230-unit square | A much larger shaped seafloor with connected routes, terrain, and visible outskirts                    |
| Three narrow district strips with repeated block buildings             | Several neighborhoods of one town, separated by open sand, dunes, reefs, and long sightlines           |
| Surface-town appearance with trees and ordinary streets                | Underwater backdrop, marine architecture, kelp, coral, bubbles, fish residents, and boat-style traffic |
| Conventional car with a burger mounted above it                        | Hamburger forms the entire wagon body; seating and wheels integrate into the food silhouette           |
| Short, straight roads and hard edge clamps                             | Curving roads, off-road routes, loops, shortcuts, and readable natural boundaries                      |
| All scenery created and updated together                               | Load nearby terrain and props; use simpler distant shapes and nearby simulation                        |
| Fixed collectible and breakable ID limits                              | Stable IDs that survive expansion and chunk unloading                                                  |

The older design document's references to a compact world are superseded by the latest brief. Preserve its exploration, optional activities, playful driving, destruction, and lack of forced mission pacing.

## Scale and town layout

Start with an approximately **1,800 × 1,800-unit town envelope**. For tuning, treat one unit as approximately one meter. This is about 7.8 times the present drivable width and 61 times its bounding-square area. Actual accessible area will be smaller where cliffs, landmark structures, and boundary reefs occupy space.

Plan a winding outer road loop of roughly 4–5 km, several cross-town routes, and off-road alternatives. At a proposed cruising speed of 18–22 units/second, a 4.5 km loop takes approximately 3.4–4.2 minutes without stops. These are estimates to calibrate in driving tests, not measured results. Exploration should add substantial time through branches, jumps, landmarks, and secrets.

The entire town envelope and route skeleton should exist in the first corrected build. Finish one area's art first, then populate the rest; do not present another tiny standalone slice as the expanded world.

| Town area                     | Visual anchor and driving role                                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Conch neighborhood            | Pineapple, stone-head house, and rock-house silhouettes in a broad sandy residential clearing; friendly spawn and handling space |
| Restaurant commons            | Krusty Krab and Chum Bucket anchors; small clusters of tube and barrel buildings, a plaza, traffic, and several road exits       |
| Jellyfish Fields              | Rolling sand, low marine growth, jellyfish, broad off-road freedom, dunes, and crown trails                                      |
| Goo Lagoon and leisure area   | An underwater lagoon and Goofy Goober destination, with sandy banks and curved routes; retain the underwater backdrop throughout |
| Wreck cove and working harbor | Thug Tug shipwreck silhouette, salvage piles, boats, pipes, breakable props, and wide stunt clearings                            |
| Sand ridge and coral caves    | Raised routes, sweeping bends, tunnels, ledges, and jump sequences with generous landing zones                                   |
| Neptune terrace               | Castle landmark visible across the town; a civic clearing and elevated roads that connect back to the ridge and center           |

These are parts of the same town. Color and terrain transitions should blend. Routes should form several loops, and each major area should have at least two usable approaches. A road, a landmark sightline, and a crown trail should help players orient themselves without needing constant arrows.

Initial spacing targets: major roads 20–28 units wide, local roads 12–18, and open driving clearings 60–200 across. Group buildings near destinations, then leave breathing room between groups. Dense scenery belongs in selected reef patches and plazas. Driveable sand should connect much of the town beyond the paved road network.

Boundaries should be visible reef walls, steep ridges, or trench edges with a forgiving recovery system. Avoid stopping the wagon against an unexplained rectangular clamp.

## Vehicle specification

Build the wagon as a dedicated model, separate from traffic vehicles:

1. The lower bun and patty define the chassis silhouette. Lettuce, cheese, and other food layers remain visible around its sides.
2. The domed sesame-seed top bun has an inset seating area. Seats, steering, and occupants fit inside that opening.
3. Four wheels sit partly beneath the burger. There is no visible sedan body supporting it.
4. Rear decorative details can include the reference's pickle flag and propeller shape.
5. Steering, wheel rotation, suspension, and restrained body bounce make the food vehicle feel playful without obscuring its shape.

Begin near 4.5–5 units long, then tune dimensions against the chase camera and roads. Use shaped bun geometry and carefully composed layers. A collision hull can stay simple while the visible model receives more detail.

Validate front, side, rear, and chase-camera views before populating the world. At normal playing distance, it must read immediately as a hamburger being driven. The vehicle's scale establishes the dimensions for buildings, roads, jumps, and clearings.

## Underwater art direction

Use a bright stylized blue-green water backdrop, large distant flower motifs, warm sandy ground, marine particles, bubbles, kelp, and small fish schools. Lighting should be soft and readable, with restrained moving caustics where useful. Marine homes should use recognizable rounded, cylindrical, shell, rock, and nautical forms.

Preserve long views to major silhouettes. Tune underwater haze so nearby objects remain clear and distant landmarks fade gradually. Begin testing landmark visibility around 500–800 units rather than retaining the current 95–210-unit fog range. Three.js fog changes appearance; it does not replace visibility culling or streaming. [6]

The atmosphere must communicate that the whole town is submerged from the spawn view onward. Renaming districts, adding a few bubbles, or tinting the existing skyline would not meet this requirement.

## Procedural generation approach

Use **fixed landmarks and routes with seeded terrain and scenery generation**. The town remains learnable and consistent between visits. Generation expands its connective landscape and variety while authored choices establish its identity.

| Technique                       | Application                                                            | Constraint                                                                                                                   |
| ------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Layered Simplex or Perlin noise | Broad sandy undulations with smaller dune detail                       | Limit slopes and roughness for arcade driving; flatten landmark sites and road corridors [3]                                 |
| Region masks                    | Blend sand, coral, kelp, rock, and salvage density                     | Every region remains underwater; visual differences do not require disconnected maps                                         |
| Poisson-disc sampling           | Space coral, rocks, kelp, and scattered minor props                    | Enforce minimum spacing and exclude roads, spawn areas, sightlines, and landing zones [4]                                    |
| Modular shape rules             | Vary secondary marine homes, reef formations, and salvage arrangements | Use a coherent asset kit; retain individually designed major landmarks                                                       |
| Authored gameplay sockets       | Place crown trails, jumps, breakables, secrets, and activity entrances | Check approach, landing, visibility, and accessibility before placement                                                      |
| Optional Wave Function Collapse | Later experiments with small reef or courtyard tile sets               | Local adjacency does not by itself guarantee a good town or connected driving network; contradictions also need handling [8] |

Generation order:

1. Define a stable world seed, generator version, town regions, landmark locations, and route graph.
2. Shape broad terrain in global coordinates. Blend in low-amplitude dune detail and flatten or grade road splines and landmark pads.
3. Use the same ground-height source for terrain generation and driving collision. Match physics to the rendered mesh interpolation where necessary; a separate approximation can produce floating wheels or buried cars.
4. Apply blended region and exclusion masks.
5. Scatter decoration with spacing rules. Handle neighboring chunk borders consistently so props neither duplicate nor crowd seams.
6. Add designed collectible trails, jump sequences, breakable clusters, and secrets.
7. Reject inaccessible placements and inspect representative views and routes manually.

Noise heightfields suit the main seafloor. Overhangs, caves, bridges, and elevated platforms need separate meshes and collision surfaces. Use explicit authored pieces there rather than forcing them into a single heightfield.

Save collectible and destroyed-object state using stable object identifiers tied to region and placement, plus world seed/version metadata. Do not let objects respawn when a chunk reloads. Existing progress needs an explicit migration or archived previous-world save rather than silently discarding it.

## Making the larger world run in a browser

Prototype 128-unit terrain chunks. A 1,800-unit envelope requires roughly a 15 × 15 allocation grid, with outer chunks clipped or constrained to the boundary. Keep detailed terrain and collision nearby, reduced detail farther away, and inexpensive landmark silhouettes at greater distances.

Use instancing for repeated props sharing geometry and material, grouped by chunk so distant batches can be culled. Three.js supports this to reduce draw calls. Use distance-based model detail for larger structures. [5] Generate terrain and placement data in a Web Worker and transfer typed arrays; assemble and render the scene on the main thread. [7]

Load ahead in the direction of travel, including at boost speed. Limit chunk assembly work per frame, cache recent chunks, and release unused resources. Test turning around quickly so loading does not reveal empty ground. Keep NPCs, traffic, breakables, and collision checks in local spatial queries instead of scanning the entire town every frame.

Aim initially for 60 fps on a representative desktop browser and 30 fps on a representative phone. These are goals, not promises. Measure frame times, draw calls, triangles, memory, and loading spikes before setting final budgets. Reduce repeated detail and distant simulation before shrinking the requested map.

The present SVG/software preview helped resolve a blank browser view, but it cannot establish WebGL art quality or full-map performance. It needs its own capped nearby scene. Final visual and performance review must include a browser with functioning WebGL and a real touch-device check.

## Implementation order and completion checks

| Step                            | Deliverable                                                                                               | Evidence needed before moving on                                                                                    |
| ------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 1. Correct visual foundation    | Dedicated burger wagon, underwater backdrop, shaped sand, one recognizable landmark                       | Front/side/rear wagon views and an in-game chase screenshot clearly match the reference's essential shapes          |
| 2. Build the full town skeleton | Entire 1,800-unit envelope, seven area anchors, road loops, off-road connections, and boundaries          | Drive across the town and around the outer loop; record travel times and check alternative routes                   |
| 3. Support terrain and scale    | Ground-following driving, camera clearance, chunk loading, nearby collision, save IDs                     | Continuous travel, boost, jumps, chunk seams, turnarounds, and reloads work without visible gaps or progress resets |
| 4. Populate the town            | Marine asset kit, individually built landmarks, generated scenery, fish residents, and boat-style traffic | Each area is distinguishable from the chase view and has usable open space, sights, and discoveries                 |
| 5. Add exploration gameplay     | Crown trails, destruction feedback, shortcuts, secrets, and optional world activities                     | Free exploration remains available; placement is reachable and rewards survive chunk unloading and save reload      |
| 6. Review the actual experience | Desktop and touch playthroughs with screenshots and performance capture                                   | Underwater identity, burger silhouette, town scale, navigation, handling, and loading meet the brief together       |

Keep the working build/deployment pipeline, inputs, and reusable driving systems. Replace the existing world layout and wagon model. Update the fixed boundary and camera distances, introduce terrain sampling, and remove the fixed 96-collectible/42-breakable assumptions as the new save schema is introduced.

Automated checks should cover meaningful risks: deterministic generation, matching chunk edges, route reachability, terrain collision, and persistent collected/destroyed state. Visual review and real driving remain essential; passing those checks alone does not establish that the game resembles the reference.

The first reviewable correction should show the actual burger wagon driving through a visibly underwater, open landscape, with the full town's routes already laid out and distant landmarks establishing its size. The complete rebuild is ready only when all planned areas support exploration and the scale is sustained by working scenery, driving, and streaming.

## Sources

Accessed 30 September 2026. Original-game descriptions are distinguished above from proposed design choices. Technical references are authored explanations, a research paper, and official documentation.

1. [lolwut: The SpongeBob SquarePants Movie 3D Game](https://lolwut.neocities.org/gaming/pc/spongebob-movie-game) — first-person account and original screenshots.
2. [SpongeBob Wiki: The SpongeBob SquarePants Movie (3D Game)](<https://spongebob.fandom.com/wiki/The_SpongeBob_SquarePants_Movie_(3D_Game)>) and [VideoGaming Wiki: Bikini Bottom in the 3D game](<https://videogaming.fandom.com/wiki/Bikini_Bottom_(The_SpongeBob_SquarePants_Movie_3D_Game)>) — release/developer identification and documented locations; secondary sources.
3. [Amit Patel / Red Blob Games: Making maps with noise functions](https://www.redblobgames.com/maps/terrain-from-noise/) — noise frequency, layered terrain, shaping, and region generation.
4. [Robert Bridson: Fast Poisson Disk Sampling in Arbitrary Dimensions](https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf) — minimum-distance point sampling, SIGGRAPH 2007.
5. Three.js documentation: [InstancedMesh](https://threejs.org/docs/pages/InstancedMesh.html) and [LOD](https://threejs.org/docs/pages/LOD.html).
6. [Three.js manual: Fog](https://threejs.org/manual/pages/fog.html).
7. [MDN: Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).
8. [Maxim Gumin: WaveFunctionCollapse](https://github.com/mxgmn/WaveFunctionCollapse) — algorithm, constraints, and limitations.
