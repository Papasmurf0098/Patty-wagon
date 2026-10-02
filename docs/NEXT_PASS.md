# World expansion handoff — October 1, 2026

## Current branch

PR #3 includes the district, collision, scenic-route, destination, and stunt passes. It targets main but is not merged. Keep new work on its branch until publication is authorized.

## Implemented and checked

- Expanded to 2,400 × 2,400 units with 3.28 km of new roads, three outer stations, and six workers. Streaming, reef boundaries, and saves use the expanded extent.
- Three explicit E/tap supply runs restore beacon lighting and unlock boost recharge. Cargo persists; map travel cancels cargo, road recovery preserves it.
- Smooth outer-water fog and lighting, terrain-aimed headlights, and two pooled local beacon lights; software mode omits extra lights.
- Horn with H/touch, optional sound, visible ripple, and resident/jellyfish reactions.
- Three repeatable drift yards with reserved access paths, live chain feedback, badges, and best distances.
- Road-graph guidance on both maps; active shipments automatically select their destination.
- Startup cargo continuity and authored-only discovery-path painting fixed.
- Seven district structures and eighteen ordered scenic gates.
- Three side destinations connected by approximately 551 meters of terrain-following paths.
- Tidepools, salvage equipment and a ribbed hull, fluted sanctuary ruins and mosaic courtyard.
- Nine destination keepsakes with three completion badges, partial save restoration, animated clam/cog/shell models, and map counts.
- Conch Hop angles clear of the pineapple at upgraded boost speeds; scenic recovery/reload positions cannot award gates.
- Nine forward airborne ring challenges with clean-landing badges and personal bests.
- Twelve promenade residents with terrain following, lane avoidance, and prop checks.
- Swept wall sliding, greater drift slip, streamed-rock collision, and moving traffic bounds.
- Existing 612 crown identities preserved, open vehicle approaches, and extended clear ramp runouts.
- 53 automated checks pass, including all nine stunts at normal and boosted speeds across all three upgrade tiers with streamed rock collision. Production bundling passes.

## Visual review

The three models were projected through Three.js SVGRenderer for geometry review. See previews/discovery-areas.jpg. It excludes WebGL textures, normal maps, animated water light, cast shadows, and sign lettering. Real browser WebGL appearance and real-phone frame times remain unverified.

## Next priorities

1. Measure real-device WebGL performance across all seven districts and the three side destinations and three frontier stations. Verify map scrolling with thirteen destination rows plus three drift guides and the E/tap interaction button.
2. Improve path behavior around props at promenade endpoints; pedestrians currently pause at obstructed positions rather than using full pathfinding.
3. Deepen destination interactions beyond the new keepsake collections while keeping the persistent HUD compact. Collections are independent of crown upgrades and have no timers.
4. Refine traffic contact if needed. Boats remain kinematic, with moving collision bounds rather than rigid-body reactions.
5. Consider a quality setting based on measured GPU costs; avoid increasing coral density to fill empty space.

## Reference used for this pass

The console movie-game guide describes optional ring challenges and driving shortcuts: https://gamefaqs.gamespot.com/gamecube/920583-the-spongebob-squarepants-movie/faqs/34678 (War_Doc, updated June 4, 2005). This is design inspiration from the console version, not evidence of the browser game's exact map or rules. Our adaptation uses airborne ramp rings, persistent badges, and no timers, as required by the free-roam brief.

Keep open access, no mission timers, no mandatory cutscenes, a burger-body wagon, broad connected districts, and a small HUD. Regenerate and commit root assets with source changes for GitHub Pages.

See MISSING_FEATURES.md for the latest research and missing-feature audit.
