# Patty-wagon

Patty-wagon is now a playable browser game about surviving a burger-truck lunch rush.

## The game

You control the Patty-wagon and catch falling ingredients in the right order to complete burger tickets.
Each completed burger earns bonus points and extra time, while wrong catches cost time and score.

### Controls

- **Left arrow:** move left
- **Right arrow:** move right
- **Start lunch rush:** begin or restart a shift

### Rules

- Catch ingredients in the exact order shown on the current order card.
- Completing an order gives you **50 bonus points** and **6 extra seconds**.
- Catching the wrong ingredient costs **5 points** and **3 seconds**.
- Missing an ingredient that the current burger needs costs a life.
- The shift ends when the timer reaches zero or you run out of lives.

## Run locally

Because the game is plain HTML, CSS, and JavaScript, you can open `index.html` directly in a browser.
If you want a local server instead, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Repository layout

```text
.
├── index.html      # Game markup and HUD
├── style.css       # Visual design and responsive layout
├── app.js          # Game loop, rendering, and rules
├── README.md
├── Makefile
└── docs/
    └── ARCHITECTURE.md
```
