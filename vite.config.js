import { defineConfig } from "vite";
import vue2 from "@vitejs/plugin-vue2";

// https://cn.vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  plugins: [vue2()],
});
