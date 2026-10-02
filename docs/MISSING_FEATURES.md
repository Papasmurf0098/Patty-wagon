# Missing-feature audit — October 1, 2026

The 3D Groove browser game and the console movie game are different implementations. The browser game's broad driving and crown exploration remain the creative baseline. Console features are optional inspiration, not evidence of exact browser mechanics.

## Research

- War_Doc's firsthand console walkthrough lists horn, brake/reverse, and nitro controls, plus driving challenges and shortcuts: https://gamefaqs.gamespot.com/ps2/920196-the-spongebob-squarepants-movie/faqs/34678 (updated June 4, 2005).
- The original GameCube manual is available at https://gamegear.net/media/canonical/console/gamecube/manual/nickelodeon-the-spongebob-squarepants-movie-usa-rev-1__139770.pdf. Retrieval was incomplete; no unsupported manual-specific claims were used.
- Browser-game recordings appeared in search, including https://www.youtube.com/watch?v=aSM_EprTCE0. Search metadata is useful for identifying the correct game but cannot establish detailed mechanics without reviewing the footage.

## Implemented priorities

| Gap | Result |
| --- | --- |
| Driving horn | H and touch Horn, optional two-note audio, a reusable expanding ripple, nearby resident and jellyfish reactions. |
| Repeatable driving skill activity | Three terrain-following drift yards with authored access paths. Clean grounded slides of at least 12 meters bank persistent badges and best distances; spins, impacts, airborne motion, recovery, and teleport invalidate chains. |
| Driving guidance | Separate Guide buttons for destinations and drift yards. A graph of actual road and side-path samples finds a road route, highlighted on both maps. Shipments automatically select their destination. Replans are limited to once every three seconds during driving. |
| Cargo reload continuity | Initial placement preserves restored cargo; explicit map travel still returns shipments to their depot. |
| False side-path paint | Discovery destinations use only their authored bent paths and destination apron; the extra straight painted connector is removed. |

All activities remain untimed and optional. Guide selection does not teleport the player or cancel cargo. Core-area guidance ends on nearby roads; local side destinations and drift yards have authored final approaches. Recovery resets skill trackers. Sound remains opt-in.

## Remaining gaps

- Real-device WebGL lighting, touch layouts, and frame-time measurement.
- More distinct environmental puzzles, temporary pickups, and authored moving obstacles.
- More complete pedestrian navigation and traffic response.
- Gamepad controls and richer ambient audio.
- Quality options chosen using actual GPU measurements.

Avoid mandatory combat, lives, mission timers, or cutscenes without a change to the free-roam brief. Preserve the 612 original crown identities and existing save version. Current automated validation includes destination graph connectivity, access-path clearance, actual drift simulations at every new yard, invalid attempts, horn reactions, save validation, and the existing full gameplay suite.
