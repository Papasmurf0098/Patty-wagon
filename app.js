const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreNode = document.getElementById('score');
const timeNode = document.getElementById('time');
const livesNode = document.getElementById('lives');
const orderNameNode = document.getElementById('order-name');
const orderRecipeNode = document.getElementById('order-recipe');
const orderProgressNode = document.getElementById('order-progress');
const startButton = document.getElementById('start-button');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlay-title');
const overlayCopy = document.getElementById('overlay-copy');
const overlayButton = document.getElementById('overlay-button');

const ingredientStyles = {
  bun: { color: '#ffbf5f', label: 'Bun', accent: '#ffe2a9' },
  patty: { color: '#9d4822', label: 'Patty', accent: '#c86b3b' },
  cheese: { color: '#ffe347', label: 'Cheese', accent: '#fff3a0' },
  lettuce: { color: '#61ef72', label: 'Lettuce', accent: '#b1ff93' },
  tomato: { color: '#ff5364', label: 'Tomato', accent: '#ffb0aa' },
  pickle: { color: '#a3f542', label: 'Pickle', accent: '#ddff94' },
};

const orders = [
  { name: 'Classic Stack', recipe: ['bun', 'patty', 'cheese', 'bun'] },
  { name: 'Garden Melt', recipe: ['bun', 'patty', 'lettuce', 'tomato', 'bun'] },
  { name: 'Pickle Pop', recipe: ['bun', 'patty', 'pickle', 'cheese', 'bun'] },
  { name: 'Loaded Wagon', recipe: ['bun', 'patty', 'cheese', 'lettuce', 'tomato', 'bun'] },
];

const starfield = Array.from({ length: 22 }, (_, index) => ({
  x: 30 + ((index * 97) % (canvas.width - 60)),
  y: 24 + ((index * 37) % 120),
  radius: 1.5 + (index % 3),
  alpha: 0.2 + (index % 5) * 0.12,
}));

const skyline = Array.from({ length: 9 }, (_, index) => ({
  x: index * 88,
  width: 58 + (index % 3) * 14,
  height: 70 + (index % 4) * 24,
}));

const clouds = [
  { x: 120, y: 88, scale: 1.05, speed: 8 },
  { x: 420, y: 70, scale: 0.82, speed: 13 },
  { x: 610, y: 112, scale: 0.95, speed: 10 },
];

const state = {
  running: false,
  score: 0,
  timeLeft: 60,
  lives: 3,
  worldTime: 0,
  truck: {
    x: canvas.width / 2 - 60,
    y: canvas.height - 82,
    width: 120,
    height: 44,
    velocityX: 0,
    maxSpeed: 520,
    acceleration: 1800,
    drag: 7.5,
    tilt: 0,
  },
  ingredients: [],
  activeKeys: new Set(),
  spawnTimer: 0,
  difficultyTimer: 0,
  spawnInterval: 0.9,
  currentOrder: null,
  progress: [],
  animationFrame: 0,
  lastTime: 0,
};

function randomOrder() {
  const next = orders[Math.floor(Math.random() * orders.length)];
  state.currentOrder = next;
  state.progress = [];
  orderNameNode.textContent = next.name;
  orderRecipeNode.textContent = next.recipe.map((item) => ingredientStyles[item].label).join(' → ');
  syncOrderProgress();
}

function syncHud() {
  scoreNode.textContent = String(state.score);
  timeNode.textContent = String(Math.max(0, Math.ceil(state.timeLeft)));
  livesNode.textContent = '❤'.repeat(state.lives) || '—';
}

function syncOrderProgress() {
  const built = state.progress.map((item) => ingredientStyles[item].label).join(' → ') || 'Truck is empty';
  const target = state.currentOrder.recipe.map((item) => ingredientStyles[item].label).join(' → ');
  orderProgressNode.textContent = `Building: ${built} | Target: ${target}`;
}

function showOverlay(title, copy, buttonLabel = 'Play again') {
  overlayTitle.textContent = title;
  overlayCopy.textContent = copy;
  overlayButton.textContent = buttonLabel;
  overlay.classList.remove('hidden');
}

function hideOverlay() {
  overlay.classList.add('hidden');
}

function resetGame() {
  state.score = 0;
  state.timeLeft = 60;
  state.lives = 3;
  state.worldTime = 0;
  state.ingredients = [];
  state.spawnTimer = 0;
  state.difficultyTimer = 0;
  state.spawnInterval = 0.9;
  state.truck.x = canvas.width / 2 - state.truck.width / 2;
  state.truck.velocityX = 0;
  state.truck.tilt = 0;
  randomOrder();
  syncHud();
}

function startGame() {
  resetGame();
  state.running = true;
  state.lastTime = 0;
  hideOverlay();
}

function endGame(message) {
  state.running = false;
  showOverlay('Shift complete', `${message} Final score: ${state.score}.`, 'Run it back');
}

function spawnIngredient() {
  const orderNeeds = state.currentOrder.recipe;
  const nextIndex = Math.min(state.progress.length, orderNeeds.length - 1);
  const targetItem = orderNeeds[nextIndex];
  const ingredientPool = Object.keys(ingredientStyles);
  const type = Math.random() < 0.68 ? targetItem : ingredientPool[Math.floor(Math.random() * ingredientPool.length)];

  state.ingredients.push({
    type,
    x: 40 + Math.random() * (canvas.width - 80),
    y: -36,
    radius: 18 + Math.random() * 3,
    velocityX: (Math.random() - 0.5) * 32,
    velocityY: 155 + Math.random() * 120 + state.score * 2.5,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 2.6,
  });
}

function updateTruck(delta) {
  const moveInput = (state.activeKeys.has('ArrowRight') ? 1 : 0) - (state.activeKeys.has('ArrowLeft') ? 1 : 0);
  const { truck } = state;

  if (moveInput !== 0) {
    truck.velocityX += moveInput * truck.acceleration * delta;
  } else {
    truck.velocityX -= truck.velocityX * Math.min(1, truck.drag * delta);
  }

  truck.velocityX = Math.max(-truck.maxSpeed, Math.min(truck.maxSpeed, truck.velocityX));
  truck.x += truck.velocityX * delta;
  truck.x = Math.max(12, Math.min(canvas.width - truck.width - 12, truck.x));

  if ((truck.x === 12 && truck.velocityX < 0) || (truck.x === canvas.width - truck.width - 12 && truck.velocityX > 0)) {
    truck.velocityX = 0;
  }

  const targetTilt = (truck.velocityX / truck.maxSpeed) * 0.18;
  truck.tilt += (targetTilt - truck.tilt) * Math.min(1, delta * 10);
}

function updateIngredients(delta) {
  const truckBounds = {
    x: state.truck.x + 4,
    y: state.truck.y - 10,
    width: state.truck.width - 8,
    height: state.truck.height + 26,
  };

  state.ingredients = state.ingredients.filter((ingredient) => {
    ingredient.x += ingredient.velocityX * delta;
    ingredient.y += ingredient.velocityY * delta;
    ingredient.rotation += ingredient.spin * delta;

    if (ingredient.x - ingredient.radius <= 8 || ingredient.x + ingredient.radius >= canvas.width - 8) {
      ingredient.velocityX *= -1;
      ingredient.x = Math.max(8 + ingredient.radius, Math.min(canvas.width - 8 - ingredient.radius, ingredient.x));
    }

    if (circleRectCollision(ingredient, truckBounds)) {
      handleCatch(ingredient.type);
      return false;
    }

    if (ingredient.y - ingredient.radius > canvas.height) {
      const needed = state.currentOrder.recipe[state.progress.length];
      if (ingredient.type === needed) {
        state.lives -= 1;
      }
      syncHud();
      return false;
    }

    return true;
  });
}

function update(delta) {
  state.worldTime += delta;
  updateTruck(delta);

  state.timeLeft -= delta;
  state.spawnTimer += delta;
  state.difficultyTimer += delta;

  if (state.difficultyTimer > 10) {
    state.difficultyTimer = 0;
    state.spawnInterval = Math.max(0.32, state.spawnInterval - 0.055);
  }

  if (state.spawnTimer >= state.spawnInterval) {
    state.spawnTimer = 0;
    spawnIngredient();
  }

  updateIngredients(delta);

  if (state.timeLeft <= 0 || state.lives <= 0) {
    endGame(state.timeLeft <= 0 ? 'The lunch rush is over.' : 'Too many ingredients hit the pavement.');
  }
}

function handleCatch(type) {
  const needed = state.currentOrder.recipe[state.progress.length];

  if (type === needed) {
    state.progress.push(type);
    state.score += 10;

    if (state.progress.length === state.currentOrder.recipe.length) {
      state.score += 50;
      state.timeLeft += 6;
      randomOrder();
    }
  } else {
    state.score = Math.max(0, state.score - 5);
    state.timeLeft = Math.max(0, state.timeLeft - 3);
  }

  syncHud();
  syncOrderProgress();
}

function circleRectCollision(circle, rect) {
  const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
  const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));
  const dx = circle.x - closestX;
  const dy = circle.y - closestY;
  return dx * dx + dy * dy <= circle.radius * circle.radius;
}

function drawSkyGlow() {
  const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.48);
  skyGradient.addColorStop(0, '#2f59ff');
  skyGradient.addColorStop(0.4, '#8a41ff');
  skyGradient.addColorStop(1, '#ff8f4d');
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height * 0.5);

  const sun = ctx.createRadialGradient(canvas.width * 0.76, canvas.height * 0.18, 12, canvas.width * 0.76, canvas.height * 0.18, 110);
  sun.addColorStop(0, 'rgba(255, 240, 140, 0.95)');
  sun.addColorStop(0.45, 'rgba(255, 161, 84, 0.55)');
  sun.addColorStop(1, 'rgba(255, 112, 68, 0)');
  ctx.fillStyle = sun;
  ctx.beginPath();
  ctx.arc(canvas.width * 0.76, canvas.height * 0.18, 110, 0, Math.PI * 2);
  ctx.fill();
}

function drawStars() {
  starfield.forEach((star, index) => {
    const pulse = 0.25 + Math.sin(state.worldTime * 1.8 + index) * 0.18;
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.18, star.alpha + pulse)})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawCloud(cloud) {
  const drift = (state.worldTime * cloud.speed) % (canvas.width + 180);
  const x = (cloud.x + drift) % (canvas.width + 180) - 90;
  const y = cloud.y;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.24)';
  ctx.beginPath();
  ctx.arc(x, y, 20 * cloud.scale, 0, Math.PI * 2);
  ctx.arc(x + 24 * cloud.scale, y - 10 * cloud.scale, 25 * cloud.scale, 0, Math.PI * 2);
  ctx.arc(x + 52 * cloud.scale, y, 22 * cloud.scale, 0, Math.PI * 2);
  ctx.fill();
}

function drawSkyline() {
  ctx.fillStyle = '#301a5d';
  ctx.fillRect(0, canvas.height * 0.45, canvas.width, canvas.height * 0.11);

  skyline.forEach((building, index) => {
    const baseY = canvas.height * 0.56;
    ctx.fillStyle = index % 2 === 0 ? '#221249' : '#35196b';
    ctx.fillRect(building.x, baseY - building.height, building.width, building.height);

    ctx.fillStyle = 'rgba(255, 225, 118, 0.55)';
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 2; col += 1) {
        ctx.fillRect(building.x + 10 + col * 18, baseY - building.height + 12 + row * 18, 8, 10);
      }
    }
  });
}

function drawRoad() {
  const roadY = canvas.height * 0.68;
  ctx.fillStyle = '#1a1c26';
  ctx.fillRect(0, roadY, canvas.width, canvas.height - roadY);

  ctx.fillStyle = '#0d1016';
  ctx.fillRect(0, roadY + 32, canvas.width, 56);

  const stripeOffset = (state.worldTime * Math.abs(state.truck.velocityX) * 0.4) % 80;
  ctx.fillStyle = '#ffe45a';
  for (let x = -120 + stripeOffset; x < canvas.width + 120; x += 80) {
    ctx.fillRect(x, roadY + 58, 42, 8);
  }

  ctx.fillStyle = 'rgba(255, 110, 64, 0.12)';
  ctx.fillRect(0, roadY - 20, canvas.width, 20);
}

function drawTruck() {
  const { x, y, width, height, tilt } = state.truck;
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(tilt);
  ctx.translate(-(x + width / 2), -(y + height / 2));

  const bodyGradient = ctx.createLinearGradient(x, y, x, y + height);
  bodyGradient.addColorStop(0, '#ffe676');
  bodyGradient.addColorStop(0.55, '#ff9b39');
  bodyGradient.addColorStop(1, '#ff5d37');
  ctx.fillStyle = bodyGradient;
  roundRect(x, y, width, height, 12);
  ctx.fill();

  ctx.fillStyle = '#6a1d14';
  roundRect(x + 18, y - 20, width - 36, 22, 10);
  ctx.fill();

  ctx.fillStyle = '#fff6d0';
  roundRect(x + 10, y + 9, 26, 16, 6);
  roundRect(x + width - 36, y + 9, 26, 16, 6);
  ctx.fill();

  ctx.fillStyle = '#fff2a4';
  ctx.fillRect(x + width - 6, y + 16, 8, 9);

  ctx.fillStyle = '#572012';
  ctx.fillRect(x + 42, y + 11, width - 84, 10);

  ctx.fillStyle = '#1a1d27';
  ctx.beginPath();
  ctx.arc(x + 24, y + height + 4, 12, 0, Math.PI * 2);
  ctx.arc(x + width - 24, y + height + 4, 12, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawIngredient(ingredient) {
  const style = ingredientStyles[ingredient.type];
  ctx.save();
  ctx.translate(ingredient.x, ingredient.y);
  ctx.rotate(ingredient.rotation);

  const fill = ctx.createRadialGradient(-5, -5, 4, 0, 0, ingredient.radius + 2);
  fill.addColorStop(0, style.accent);
  fill.addColorStop(1, style.color);
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.arc(0, 0, ingredient.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(255,255,255,0.24)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.restore();

  ctx.fillStyle = 'rgba(20, 12, 6, 0.45)';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(style.label, ingredient.x, ingredient.y + 4);
}

function drawOrderHint() {
  const nextIngredient = state.currentOrder.recipe[Math.min(state.progress.length, state.currentOrder.recipe.length - 1)];
  ctx.fillStyle = 'rgba(16, 10, 32, 0.42)';
  roundRect(16, 16, 292, 78, 18);
  ctx.fill();

  ctx.fillStyle = '#fff5da';
  ctx.font = 'bold 18px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(state.currentOrder.name, 30, 44);

  ctx.font = '14px sans-serif';
  ctx.fillStyle = '#ffdd9b';
  ctx.fillText(`Next up: ${ingredientStyles[nextIngredient].label}`, 30, 70);
}

function drawBackground() {
  drawSkyGlow();
  drawStars();
  clouds.forEach(drawCloud);
  drawSkyline();
  drawRoad();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawOrderHint();
  state.ingredients.forEach(drawIngredient);
  drawTruck();
}

function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function gameLoop(timestamp) {
  if (!state.lastTime) {
    state.lastTime = timestamp;
  }

  const delta = Math.min((timestamp - state.lastTime) / 1000, 0.032);
  state.lastTime = timestamp;

  if (state.running) {
    update(delta);
  } else {
    state.worldTime += delta * 0.35;
  }

  draw();
  state.animationFrame = window.requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    state.activeKeys.add(event.key);
    event.preventDefault();
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    state.activeKeys.delete(event.key);
  }
});

startButton.addEventListener('click', startGame);
overlayButton.addEventListener('click', startGame);

randomOrder();
syncHud();
draw();
showOverlay('Ready for service?', 'Catch ingredients in the right order to build each burger before time runs out.', 'Start shift');
state.animationFrame = window.requestAnimationFrame(gameLoop);
