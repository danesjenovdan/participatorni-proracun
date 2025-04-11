import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  base: process.env.BASE_URL || "/",
  server: {
    port: process.env.PORT || 3000,
    strictPort: true,
  },
  plugins: [
    // viteSSR({
    //   build: {
    //     clientOptions: {
    //       build: {
    //         emptyOutDir: true,
    //       },
    //     },
    //     serverOptions: {
    //       publicDir: "public",
    //     },
    //   },
    // }),
    vue(),
  ],
});
