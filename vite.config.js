import yaml from "@rollup/plugin-yaml";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: process.env.BASE_URL || "/",
  server: {
    host: true,
    port: process.env.PORT || 3000,
    strictPort: true,
  },
  plugins: [yaml(), vue(), eslint()],
});
