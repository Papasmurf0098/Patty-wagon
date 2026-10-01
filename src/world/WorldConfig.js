export const WORLD_SEED = 200411;
export const WORLD_VERSION = 2;
export const WORLD_SIZE = 1800;
export const CHUNK_SIZE = 128;
export const districts = [
  {
    id: "conch",
    name: "Conch Street",
    x: -440,
    z: 420,
    color: "#eec46f",
    accent: 0xf4a32d,
  },
  {
    id: "commons",
    name: "Restaurant Commons",
    x: -60,
    z: 30,
    color: "#d6bf78",
    accent: 0xdb8872,
  },
  {
    id: "fields",
    name: "Jellyfish Fields",
    x: -600,
    z: -180,
    color: "#b8c992",
    accent: 0xed97c9,
  },
  {
    id: "lagoon",
    name: "Goo Lagoon",
    x: 400,
    z: 450,
    color: "#84c9b7",
    accent: 0x73d1c6,
  },
  {
    id: "wreck",
    name: "Wreck Cove",
    x: 650,
    z: -140,
    color: "#c8b3a0",
    accent: 0xd08e68,
  },
  {
    id: "ridge",
    name: "Sand Mountain",
    x: 140,
    z: -650,
    color: "#e9bb8b",
    accent: 0xedc499,
  },
  {
    id: "neptune",
    name: "Neptune Terrace",
    x: -360,
    z: -630,
    color: "#a9c9cf",
    accent: 0x83d7d2,
  },
];
// Main ring plus independent cross-town connections. Coordinates are X/Z; Y is up.
export const routes = [
  {
    id: "town-loop",
    width: 24,
    closed: true,
    points: [
      [-440, 440],
      [-60, 650],
      [400, 500],
      [730, 310],
      [700, -140],
      [450, -460],
      [140, -720],
      [-360, -710],
      [-700, -420],
      [-720, -100],
      [-570, 210],
    ],
  },
  {
    id: "conch-commons",
    width: 20,
    points: [
      [-440, 440],
      [-400, 250],
      [-250, 140],
      [-60, 30],
    ],
  },
  {
    id: "fields-commons",
    width: 20,
    points: [
      [-720, -100],
      [-540, -130],
      [-310, -110],
      [-60, 30],
    ],
  },
  {
    id: "lagoon-commons",
    width: 22,
    points: [
      [400, 500],
      [330, 300],
      [140, 210],
      [-60, 30],
    ],
  },
  {
    id: "wreck-commons",
    width: 22,
    points: [
      [700, -140],
      [490, -160],
      [280, -50],
      [-60, 30],
    ],
  },
  {
    id: "ridge-commons",
    width: 20,
    points: [
      [140, -720],
      [210, -450],
      [80, -200],
      [-60, 30],
    ],
  },
  {
    id: "palace-commons",
    width: 20,
    points: [
      [-360, -710],
      [-300, -460],
      [-180, -250],
      [-60, 30],
    ],
  },
];
export const landmarks = [
  { id: "pineapple", type: "pineapple", x: -468, z: 295, radius: 21 },
  { id: "squidward", type: "head", x: -386, z: 350, radius: 19 },
  { id: "patrick", type: "rock", x: -335, z: 390, radius: 18 },
  { id: "krusty", type: "krusty", x: -51, z: -85, radius: 30 },
  { id: "chum", type: "bucket", x: 110, z: 110, radius: 25 },
  { id: "goober", type: "goober", x: 440, z: 350, radius: 32 },
  { id: "wreck", type: "ship", x: 765, z: -265, radius: 35 },
  { id: "castle", type: "castle", x: -400, z: -595, radius: 45 },
];
export const ramps = [
  {
    id: "conch-hop",
    x: -480,
    z: 470,
    width: 16,
    length: 25,
    height: 5,
    heading: 0,
  },
  {
    id: "fields-leap",
    x: -590,
    z: -255,
    width: 20,
    length: 34,
    height: 9,
    heading: -0.5,
  },
  {
    id: "lagoon-jump",
    x: 515,
    z: 440,
    width: 20,
    length: 32,
    height: 7,
    heading: -Math.PI / 2,
  },
  {
    id: "wreck-launch",
    x: 660,
    z: -60,
    width: 18,
    length: 30,
    height: 9,
    heading: Math.PI,
  },
  {
    id: "ridge-flight",
    x: 130,
    z: -595,
    width: 22,
    length: 38,
    height: 13,
    heading: 0,
  },
  {
    id: "ridge-return",
    x: 300,
    z: -630,
    width: 20,
    length: 36,
    height: 11,
    heading: Math.PI / 2,
  },
  {
    id: "palace-rise",
    x: -470,
    z: -670,
    width: 18,
    length: 28,
    height: 7,
    heading: Math.PI / 2,
  },
  {
    id: "commons-stunt",
    x: -140,
    z: 55,
    width: 16,
    length: 24,
    height: 6,
    heading: Math.PI / 2,
  },
  {
    id: "southern-dune",
    x: 20,
    z: 610,
    width: 22,
    length: 34,
    height: 8,
    heading: -Math.PI / 2,
  },
];
export const secrets = [
  { id: "coral-grotto", name: "The coral grotto", x: -780, z: -340 },
  { id: "pearl-garden", name: "The pearl garden", x: 550, z: 640 },
  { id: "sunken-treasure", name: "Sunken treasure", x: 800, z: -320 },
  { id: "ridge-lookout", name: "The mountain lookout", x: 310, z: -780 },
  { id: "royal-garden", name: "The royal garden", x: -560, z: -780 },
  { id: "kelp-arch", name: "The kelp arch", x: -760, z: 290 },
  { id: "sand-circle", name: "The sand circle", x: 90, z: 760 },
];
export function districtAt(x, z) {
  let best = districts[0],
    distance = Infinity;
  for (const d of districts) {
    const n = (x - d.x) ** 2 + (z - d.z) ** 2;
    if (n < distance) {
      best = d;
      distance = n;
    }
  }
  return best;
}
export function inRampCorridor(x, z, ramp) {
  const dx = x - ramp.x,
    dz = z - ramp.z,
    c = Math.cos(ramp.heading),
    s = Math.sin(ramp.heading);
  const lateral = c * dx - s * dz,
    along = s * dx + c * dz;
  // Boosted flights off high dunes need a long clear runout, not just a ramp apron.
  return (
    Math.abs(lateral) < ramp.width / 2 + 8 &&
    along < ramp.length / 2 + 30 &&
    along > -ramp.length / 2 - 230
  );
}
export function spawnFor(id = "conch") {
  const d = districts.find((d) => d.id === id) ?? districts[0];
  const spawns = {
    conch: [-440, 435, 0],
    commons: [-60, 90, 0],
    fields: [-600, -130, Math.PI / 2],
    lagoon: [400, 510, 0],
    wreck: [700, -100, 0],
    ridge: [140, -740, Math.PI],
    neptune: [-360, -735, Math.PI],
  };
  const [x, z, heading] = spawns[d.id];
  return { x, z, heading };
}
