import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
  build: { emptyOutDir: true, rollupOptions: { input: "game.html" } },
});
