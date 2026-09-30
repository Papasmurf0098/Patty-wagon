# Free-Roam 3D Web Game Framework

## Inspired by the structure of The SpongeBob SquarePants Movie 3D Game

## 1. Core Vision

Create a compact, dense, third-person 3D driving sandbox built for the web.

The game should focus on:

- Free-roam exploration
- Arcade-style vehicle handling
- Dense environments
- Collectibles
- Destructible scenery
- Hidden areas and shortcuts
- World-based challenges
- Environmental interactions
- Distinct visual districts
- Simple progression through exploration

The overworld itself is the primary gameplay experience.

There should be no dependence on timers or forced mission pacing.

---

## 2. Core Gameplay Loop

DRIVE\
↓\
EXPLORE\
↓\
DISCOVER\
↓\
COLLECT\
↓\
INTERACT / DESTROY / JUMP\
↓\
UNLOCK NEW AREAS, CHALLENGES, OR UPGRADES\
↓\
CONTINUE FREE ROAM

The player should always be able to ignore objectives and simply explore.

---

## 3. Primary Game Systems

### Vehicle System

- Third-person arcade driving
- Responsive acceleration
- Strong steering authority
- Mild drifting
- Forgiving collisions
- Air control
- Vehicle reset
- Optional boost
- Exaggerated suspension / bounce

Vehicle behavior should feel playful rather than realistic.

### Camera

- Third-person chase camera
- Smooth spring interpolation
- Slight lag while turning
- Look-ahead based on vehicle direction
- Automatic collision avoidance if possible

### Open World

- One connected explorable map
- Compact overall scale
- Multiple visually distinct districts
- Strong landmarks
- Multiple route choices
- Ramps
- Elevation changes
- Shortcuts
- Hidden areas
- Interior or semi-interior spaces where practical

### Collectibles

Collectibles should:

- Rotate or animate
- Float or bob
- Produce sound feedback
- Produce particles
- Increase progression currency
- Guide the player toward landmarks and secrets

Collectibles should be placed intentionally in:

- Trails
- Arcs over jumps
- Clusters around landmarks
- Secret locations
- Risk/reward routes

### Destructible Environment

Driveable objects may include:

- Signs
- Crates
- Barrels
- Small fences
- Decorative props
- Traffic objects
- Environmental clutter

Collision can:

- Apply physics impulse
- Break or scatter props
- Spawn particles
- Drop collectibles

### Ambient World

Include:

- Moving traffic
- Simple NPCs
- Environmental animation
- Moving vegetation
- Floating particles
- Background creatures
- Audio zones
- Dynamic props

NPC behavior can remain lightweight:

- Idle
- Walk
- Look around
- Wave
- Panic when vehicle approaches

---

## 4. World Structure

Use approximately 5-7 districts.

Example structure:

Neighborhood / Player Spawn\
↓\
Central Downtown\
├── Beach / Boardwalk\
├── Industrial District\
├── Reef / Garden District\
├── Wild Caves / Rocky Zone\
└── Wasteland / Stunt Zone

Each district should have:

- A unique silhouette
- A unique color palette
- Distinct architecture
- Unique environmental props
- One major landmark
- Several minor landmarks
- Collectible routes
- Hidden paths
- At least one major interactive activity

The world should feel like a theme park rather than a realistic city.

---

## 5. Free-Roam Activities

Activities should be optional and accessible directly from the world.

Possible activities:

### Exploration Challenges

- Reach hidden locations
- Find secret collectibles
- Discover alternate routes
- Enter difficult terrain
- Complete environmental puzzles

### Stunt Challenges

- Long jumps
- High jumps
- Drift zones
- Air rotations
- Destruction chains
- Ramp combinations

### Destruction Challenges

- Smash groups of objects
- Destroy special targets
- Trigger chain reactions
- Find hidden breakables

### Collection Challenges

- Collect all items in a district
- Follow collectible trails
- Discover rare collectibles
- Complete themed collectible sets

### Navigation Challenges

No timer.

Examples:

- Reach a landmark using limited route information
- Follow environmental clues
- Find specific hidden locations
- Discover all entrances to a district

### Race Activities

Optional races can still exist, but progression should never depend on timed completion.

Players may freely enter and leave race activities.

---

## 6. Progression

Progress should come mainly from exploration.

Example:

Collectibles Found\
↓\
World Discovery\
↓\
New Districts\
↓\
New Vehicle Abilities\
↓\
New Activities\
↓\
More Exploration

Possible unlock thresholds:

0 Collectibles

- Starting district

25 Collectibles

- Beach district

75 Collectibles

- Industrial district

150 Collectibles

- Reef district

250 Collectibles

- Wasteland

400 Collectibles

- Final hidden zone

Collectibles should function primarily as progression milestones rather than expendable currency.

---

## 7. Vehicle Upgrades

Keep upgrades simple.

### Speed

- Level 1
- Level 2
- Level 3

### Boost

- Level 1
- Level 2
- Level 3

### Handling

- Level 1
- Level 2
- Level 3

Optional later upgrades:

- Improved air control
- Higher jump suspension
- Stronger collision impact
- Longer boost

Avoid heavy RPG systems.

---

## 8. Environment Density

Empty terrain should be avoided.

Each road or open area should contain combinations of:

- Rocks
- Vegetation
- Signs
- Street lights
- Fences
- Crates
- Barrels
- Moving vehicles
- Parked vehicles
- NPCs
- Collectibles
- Ramps
- Animated objects
- Background movement
- Particle effects
- Distinctive landmarks

Use three environmental scales:

### Macro

Large structures visible from far away.

### Mid Scale

Buildings, rock formations, trees, coral, roads.

### Micro

Signs, debris, shells, crates, grass, collectible paths.

---

## 9. Technical Stack

Recommended:

- Vite
- Three.js
- Rapier 3D Physics
- JavaScript or TypeScript
- glTF / GLB assets
- LocalStorage save system
- GitHub Pages hosting

No backend is required for the core game.

---

## 10. Coordinate Standard

Use one coordinate convention globally.

Recommended:

X = Left / Right\
Y = Up / Down\
Z = Forward / Back

Vehicle:

Forward = -Z\
Up = +Y\
Right = +X

Every imported model should be normalized to this orientation.

Never rotate the entire world to compensate for a misoriented asset.

---

## 11. Suggested Repository Structure

```
game/
│
├── index.html
├── package.json
├── vite.config.js
│
├── public/
│   ├── models/
│   ├── textures/
│   ├── audio/
│   └── icons/
│
└── src/
    ├── main.js
    │
    ├── core/
    │   ├── Game.js
    │   ├── Renderer.js
    │   ├── AssetLoader.js
    │   └── SaveManager.js
    │
    ├── world/
    │   ├── World.js
    │   ├── District.js
    │   ├── PropSpawner.js
    │   └── WorldConfig.js
    │
    ├── vehicle/
    │   ├── Vehicle.js
    │   ├── VehicleController.js
    │   ├── VehiclePhysics.js
    │   └── ChaseCamera.js
    │
    ├── collectibles/
    │   ├── Collectible.js
    │   └── CollectibleManager.js
    │
    ├── activities/
    │   ├── ActivityManager.js
    │   ├── StuntActivity.js
    │   ├── CollectionActivity.js
    │   ├── DestructionActivity.js
    │   └── ExplorationActivity.js
    │
    ├── systems/
    │   ├── Input.js
    │   ├── Audio.js
    │   └── CollisionEvents.js
    │
    └── ui/
        ├── HUD.js
        └── ActivityUI.js
```

---

## 12. Game State Structure

Use simple game states:

BOOT\
↓\
MENU\
↓\
WORLD\
↓\
ACTIVITY\
↓\
RESULT\
↓\
WORLD

The player should always return naturally to the open world.

Avoid permanent overlays.

Only display UI relevant to the current state.

---

## 13. HUD

Keep the HUD minimal.

Recommended elements:

- Collectible count
- Optional boost meter
- Current area name
- Contextual interaction prompt
- Optional compass / waypoint marker

Avoid:

- Large instruction blocks
- Persistent mission text
- Developer information
- Theme descriptions
- Long tutorial panels

Gameplay should remain visually dominant.

---

## 14. Save Data

LocalStorage is sufficient.

Example:

```
{
  "version": 1,
  "collectibles": 143,
  "discoveredDistricts": [
    "downtown",
    "beach"
  ],
  "completedActivities": [
    "stunt_01",
    "collection_02"
  ],
  "upgrades": {
    "speed": 1,
    "boost": 0,
    "handling": 1
  }
}
```

---

## 15. Performance Rules

Use:

- InstancedMesh for repeated props
- LOD where useful
- Simple collision geometry
- Texture atlases
- Compressed GLB assets
- Object pooling for particles
- Spatial world cells
- Occlusion / distance-based disabling where practical

Recommended draw-call targets:

Desktop:

- Under \~500 in normal gameplay

Mobile:

- Under \~250 where practical

---

## 16. Development Order

### Phase 1 — Driving

Build:

- Vehicle
- Physics
- Camera
- Reset system

Success condition:\
Driving alone is fun.

### Phase 2 — World

Build:

- Terrain
- Roads
- 3 districts
- Major landmarks
- Ramps
- Dense props

Success condition:\
The world feels intentionally designed.

### Phase 3 — Collectibles

Build:

- Pickup system
- HUD
- Trails
- Secrets
- Save tracking

Success condition:\
Exploration has constant rewards.

### Phase 4 — Destruction

Build:

- Breakable props
- Physics reactions
- Particles
- Collectible drops

Success condition:\
Driving into scenery is entertaining.

### Phase 5 — Activities

Build:

- Stunt activity
- Collection activity
- Destruction activity
- Exploration activity

Success condition:\
The world contains optional things to do without forcing the player into missions.

### Phase 6 — Living World

Build:

- Traffic
- NPCs
- Ambient animation
- Environmental effects
- Area-specific audio

Success condition:\
The world no longer feels static.

### Phase 7 — Expansion

Add:

- Remaining districts
- Additional secrets
- Vehicle upgrades
- Hidden routes
- More activities

### Phase 8 — Polish

Add:

- Sound design
- Particle refinement
- Improved lighting
- UI animation
- Performance optimization
- Mobile controls
- Accessibility

---

## 17. First Playable Vertical Slice

The first serious prototype should include:

- 1 vehicle
- 1 connected overworld
- 3 distinct districts
- 3 major landmarks
- 75-100 collectibles
- 20+ destructible objects
- 5+ ramps
- Moving traffic
- Basic NPCs
- 1 stunt activity
- 1 collection activity
- 1 destruction activity
- Save system
- Minimal HUD

Do not build the entire game before validating this slice.

---

## 18. Design Rules

1. The overworld is the game.
2. Exploration should never require a timer.
3. Activities are optional.
4. Driving must be fun before adding content.
5. The world should be compact and dense.
6. Landmarks should replace excessive navigation UI.
7. Collectibles should teach routes.
8. Destruction should reward experimentation.
9. Avoid empty terrain.
10. Avoid UI clutter.
11. Avoid realistic vehicle physics.
12. Avoid excessive progression systems.
13. Every district needs a distinctive identity.
14. Every major route should contain something worth seeing or interacting with.
15. The player should always be able to ignore objectives and simply drive.

---

# Core Identity

A small, dense, colorful 3D world where the player drives freely, discovers landmarks and secrets, collects progression items, smashes scenery, performs stunts, unlocks new areas, and interacts with optional activities at their own pace.

The world should feel like a playable toy rather than a sequence of missions.\
