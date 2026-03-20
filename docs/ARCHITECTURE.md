# Architecture Notes

## Stack

Patty-wagon is a dependency-free browser game built with:

- semantic HTML for structure and HUD layout;
- CSS for responsive presentation and visual theming;
- vanilla JavaScript plus the Canvas API for gameplay, animation, and rendering.

## Application structure

- `index.html` defines the two-panel layout, scoreboard, order panel, controls, and overlay states.
- `style.css` handles the saturated arcade look, responsive layout, and panel styling around the canvas.
- `app.js` owns game state, spawn logic, input handling, score/timer updates, collision checks, truck movement, and scene rendering.
- `Makefile` provides local developer commands for validation and static serving.

## Runtime model

The game loop is driven by `requestAnimationFrame` and is organized around a few responsibilities:

1. update player movement using acceleration, drag, edge clamping, and visual tilt;
2. spawn and animate ingredient pickups;
3. resolve catches using circle-versus-rectangle collision checks against the truck catch zone;
4. advance order progress, score, timer, and lives;
5. render the skybox, skyline, road, truck, ingredient sprites, and HUD hints every frame.

## Validation model

The repository intentionally keeps validation lightweight:

- `make check` confirms required game files are present;
- `make check` scans the repository for unresolved merge-conflict markers;
- `make check` runs `node --check app.js` for a fast JavaScript syntax pass.

## Future expansion ideas

- add touch controls for mobile play;
- add local high-score persistence;
- add sound effects and pause support;
- split rendering and gameplay logic into modules if the game grows substantially.
