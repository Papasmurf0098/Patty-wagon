# Patty Wagon: underwater free roam

The player drives a hamburger wagon around a broad, connected Bikini Bottom-inspired town. The burger forms the entire vehicle, with seating inside the upper bun and wheels beneath the food body. A bright underwater backdrop, sandy seafloor, marine architecture, coral, kelp, jellyfish, and widely separated landmarks establish the setting.

The world is the main experience. Every area is accessible immediately; activities, crown trails, destruction, jumps, secrets, deliveries, and drift activities are optional. There are no timers, mandatory missions, lives, or cutscenes.

## Town

The map spans 2,400 world units, with seven connected areas: Conch Street, Restaurant Commons, Jellyfish Fields, Goo Lagoon, Wreck Cove, Sand Mountain, and Neptune Terrace. A winding outer loop and six cross-town routes give players multiple approaches. Open sand connects neighborhoods beyond the road network.

Major landmarks receive individual models. Secondary homes are placed in small clusters, with clear roads and breathing room. Seeded terrain and minimum-spacing scenery generation add variety between destinations without replacing designed routes and discoveries.

## Driving and exploration

Y is up; the vehicle's forward direction is -Z. The arcade controller supports acceleration, reverse, boost, drifting, forgiving collisions, slope following, suspension orientation, ramp launch, air steering, and recovery to the nearest road. Crowns increase upgrades without spending. Exploration progress persists across chunk unloading and reloads.

The HUD stays small. A minimap shows the connected routes, and the town map lets the player start in any area. Controls and progress details appear in the pause menu.

## Rendering

Nearby terrain uses four-unit mesh spacing, matching collision interpolation. Scenery is generated in a worker and rendered in streamed chunks with instancing, local simulation, distant landmark models, and a bounded cache. Coarse background terrain keeps the full map present during loading.

WebGL provides preferred fidelity. SVG compatibility rendering keeps the game visible on browsers without WebGL, with a smaller scenery radius and reduced update frequency. WebGL and phone performance must be measured separately.

The approved research and implementation priorities are in [CORRECTION_PLAN.md](CORRECTION_PLAN.md). The earlier compact-world framework is preserved in [ORIGINAL_FRAMEWORK.md](ORIGINAL_FRAMEWORK.md); the latest larger underwater-town brief supersedes its scale and district examples.
