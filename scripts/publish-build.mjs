import {
  cp,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const html = await readFile(resolve(dist, "game.html"), "utf8");
if (html.includes("/src/") || !html.includes("./assets/")) {
  throw new Error("The published page must load relative, compiled assets.");
}
for (const match of html.matchAll(/(?:src|href)="(\.\/assets\/[^"]+)"/g)) {
  await readFile(resolve(dist, match[1]));
}
// Keep the root deployable even when Pages serves main directly.
await rename(resolve(dist, "game.html"), resolve(dist, "index.html"));
await writeFile(resolve(dist, ".nojekyll"), "");
await rm(resolve(root, "assets"), { recursive: true, force: true });
await mkdir(resolve(root, "assets"), { recursive: true });
await cp(resolve(dist, "assets"), resolve(root, "assets"), { recursive: true });
await writeFile(resolve(root, "index.html"), html);
await writeFile(resolve(root, ".nojekyll"), "");
console.log(
  `Published index.html and ${(await readdir(resolve(root, "assets"))).length} bundled assets.`,
);
