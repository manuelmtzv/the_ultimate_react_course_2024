import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@contexts": "/src/contexts",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@helpers": "/src/helpers",
      "@services": "/src/services",
      "@views": "/src/views",
    },
  },
});
