# Architecture Notes

## Stack

Patty-wagon is a dependency-free browser game built with:

- semantic HTML for structure;
- CSS for responsive layout and visual styling;
- vanilla JavaScript plus the Canvas API for the game loop and rendering.

## Application structure

- `index.html` defines the two-panel layout, scoreboard, order panel, and end-game overlay.
- `style.css` handles the arcade presentation and adapts the layout for smaller screens.
- `app.js` owns game state, order generation, input handling, collision logic, scoring, timing, and rendering.

## Gameplay loop

1. The player starts a shift.
2. Ingredients spawn and fall toward the truck.
3. Catching the correct ingredient advances the active burger.
4. Completing a burger awards score and extra time, then a new order is selected.
5. The game ends when time or lives run out.

## Future expansion ideas

- add difficulty levels or endless mode;
- track a local high score;
- add sound effects and pause support;
- support touch controls for mobile play.
