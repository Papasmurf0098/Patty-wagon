# World expansion handoff — October 1, 2026

## Implemented and checked

- Seven district structures, eighteen scenic gates, and terrain-connected lagoon boardwalk approaches.
- Three ordered, untimed scenic routes with persistent progress and map markers.
- Swept wall sliding, greater drift slip, collision for streamed rocks, and moving traffic bounds.
- Existing 612 crown identities preserved; new footprints reserve scenery; road lanes remain open.
- 32 automated checks and production build pass.

## Next priorities

1. Measure real-device WebGL frame times in all seven districts, especially around the new scenic gate labels and shared material batches. SVG compatibility confirms placement only.
2. Improve resident paths between meaningful destinations; maintain road avoidance and collision awareness.
3. Add optional untimed stunt discoveries around existing ramps, with landing clearance checks and rewards that preserve existing saves.
4. Extend the lagoon and wreck environments with authored accessible side routes and stronger destination silhouettes, rather than raising coral density.
5. Refine dynamic boat contact if needed. Traffic is intentionally kinematic; it has collision but does not simulate a full rigid-body reaction.

Keep the underwater free-roam brief: open access, no mission timers, no mandatory cutscenes, clean small HUD, burger-body wagon, broad connected districts. Static root assets must be regenerated and committed with every source change.
