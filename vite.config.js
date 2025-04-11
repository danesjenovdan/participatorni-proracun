import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: process.env.BASE_URL || "/",
  server: {
    port: process.env.PORT || 3000,
    strictPort: true,
  },
  plugins: [vue(), eslint()],
});
