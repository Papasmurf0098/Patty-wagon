import { roadPaths } from "./Terrain.js";
import { discoveryPaths } from "./DiscoveryPlan.js";
import { driftPaths } from "./DriftPlan.js";
const distance = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
// Build once. Cross-route links join nearby samples at actual road junctions.
export function buildNavigation(
  paths = [...roadPaths, ...discoveryPaths, ...driftPaths],
) {
  const nodes = [],
    edges = [],
    cells = new Map();
  const link = (a, b) => {
    const length = distance(nodes[a], nodes[b]);
    edges[a].push({ to: b, length });
    edges[b].push({ to: a, length });
  };
  for (const path of paths) {
    let prior = null,
      first = nodes.length;
    for (const p of path.nodes) {
      const id = nodes.length;
      nodes.push({ ...p, path: path.id });
      edges.push([]);
      if (prior !== null) link(prior, id);
      prior = id;
      const gx = Math.floor(p.x / 16),
        gz = Math.floor(p.z / 16);
      for (let x = gx - 1; x <= gx + 1; x++)
        for (let z = gz - 1; z <= gz + 1; z++)
          for (const n of cells.get(`${x},${z}`) ?? [])
            if (nodes[n].path !== path.id && distance(p, nodes[n]) < 12)
              link(id, n);
      const key = `${gx},${gz}`;
      if (!cells.has(key)) cells.set(key, []);
      cells.get(key).push(id);
    }
    if (path.closed && prior !== null && prior !== first) link(prior, first);
  }
  return { nodes, edges };
}
const graph = buildNavigation();
export function planRoute(start, target, network = graph) {
  const { nodes, edges } = network;
  if (!nodes.length) return null;
  const nearest = (p) =>
    nodes.reduce(
      (best, n, i) => (distance(p, n) < distance(p, nodes[best]) ? i : best),
      0,
    );
  const source = nearest(start),
    finish = nearest(target),
    cost = new Float64Array(nodes.length).fill(Infinity),
    prev = new Int32Array(nodes.length).fill(-1),
    visited = new Uint8Array(nodes.length);
  cost[source] = 0;
  for (let n = 0; n < nodes.length; n++) {
    let current = -1;
    for (let i = 0; i < nodes.length; i++)
      if (!visited[i] && (current < 0 || cost[i] < cost[current])) current = i;
    if (current < 0 || !Number.isFinite(cost[current])) return null;
    if (current === finish) break;
    visited[current] = 1;
    for (const e of edges[current])
      if (cost[current] + e.length < cost[e.to]) {
        cost[e.to] = cost[current] + e.length;
        prev[e.to] = current;
      }
  }
  const indices = [];
  for (let i = finish; i !== -1; i = prev[i]) indices.push(i);
  indices.reverse();
  return {
    points: indices.map((i) => nodes[i]),
    length: cost[finish],
    approach: distance(start, nodes[source]),
    arrival: distance(target, nodes[finish]),
    target: { ...target },
  };
}
