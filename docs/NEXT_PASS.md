# World expansion handoff — October 1, 2026

## Current branch

PR #3 includes the district, collision, scenic-route, destination, and stunt passes. It targets main but is not merged. Keep new work on its branch until publication is authorized.

## Implemented and checked

- Seven district structures and eighteen ordered scenic gates.
- Three side destinations connected by approximately 551 meters of terrain-following paths.
- Tidepools, salvage equipment and a ribbed hull, fluted sanctuary ruins and mosaic courtyard.
- Nine forward airborne ring challenges with clean-landing badges and personal bests.
- Twelve promenade residents with terrain following, lane avoidance, and prop checks.
- Swept wall sliding, greater drift slip, streamed-rock collision, and moving traffic bounds.
- Existing 612 crown identities preserved, open vehicle approaches, and extended clear ramp runouts.
- 39 automated checks pass, including all nine stunts at normal and boosted speeds with streamed rock collision. Production bundling passes.

## Visual review

The three models were projected through Three.js SVGRenderer for geometry review. See previews/discovery-areas.jpg. It excludes WebGL textures, normal maps, animated water light, cast shadows, and sign lettering. Real browser WebGL appearance and real-phone frame times remain unverified.

## Next priorities

1. Measure real-device WebGL performance across all seven districts and the three side destinations. Verify map scrolling on a phone with ten destination controls.
2. Improve path behavior around props at promenade endpoints; pedestrians currently pause at obstructed positions rather than using full pathfinding.
3. Add more authored discoveries and destination-specific interactions while keeping the persistent HUD compact.
4. Refine traffic contact if needed. Boats remain kinematic, with moving collision bounds rather than rigid-body reactions.
5. Consider a quality setting based on measured GPU costs; avoid increasing coral density to fill empty space.

## Reference used for this pass

The console movie-game guide describes optional ring challenges and driving shortcuts: https://gamefaqs.gamespot.com/gamecube/920583-the-spongebob-squarepants-movie/faqs/34678 (War_Doc, updated June 4, 2005). This is design inspiration from the console version, not evidence of the browser game's exact map or rules. Our adaptation uses airborne ramp rings, persistent badges, and no timers, as required by the free-roam brief.

Keep open access, no mission timers, no mandatory cutscenes, a burger-body wagon, broad connected districts, and a small HUD. Regenerate and commit root assets with source changes for GitHub Pages.
