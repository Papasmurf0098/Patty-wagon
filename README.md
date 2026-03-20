# Patty-wagon

Patty-wagon is a dependency-free browser arcade game about surviving a burger-truck lunch rush.

## What you play

You steer the Patty-wagon across the road and catch falling ingredients in the exact order shown on the current ticket.
The current build includes:

- smooth left/right driving with acceleration and drag;
- animated ingredient drops with bounce, drift, and spin;
- score, time, and lives tracking;
- rotating burger orders with bonus time for completed tickets;
- a stylized sunset skybox and animated city backdrop.

## Controls

- **Left arrow:** steer left
- **Right arrow:** steer right
- **Start lunch rush / Run it back:** start or restart a shift

## Rules

- Catch ingredients in the exact order shown on the current order card.
- Completing an order gives you **50 bonus points** and **6 extra seconds**.
- Catching the wrong ingredient costs **5 points** and **3 seconds**.
- Missing an ingredient that the current burger currently needs costs a life.
- The shift ends when the timer reaches zero or you run out of lives.

## Run locally

You can open `index.html` directly in a browser, or use the included Make target:

```bash
make serve
```

Then open <http://localhost:8000>.

## Validation

Run the built-in validation before submitting changes:

```bash
make check
```

`make check` verifies the core game files exist, scans for unresolved merge-conflict markers, and validates JavaScript syntax.

## Repository layout

```text
.
├── index.html              # Game markup, HUD, and overlay
├── style.css               # Saturated arcade styling and layout
├── app.js                  # Game state, physics, collisions, and rendering
├── README.md
├── CONTRIBUTING.md
├── Makefile
└── docs/
    └── ARCHITECTURE.md
```
