import { defineConfig } from "vite";
import viteSSR from "vite-ssr/plugin.js";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: process.env.BASE_URL || "/",
  plugins: [
    viteSSR({
      build: {
        clientOptions: {
          build: {
            emptyOutDir: true,
          },
        },
        serverOptions: {
          publicDir: "public",
        },
      },
    }),
    vue(),
    eslintPlugin(),
  ],
});
