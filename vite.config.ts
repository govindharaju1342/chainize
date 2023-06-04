import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "public/index.html", dest: "dist" },
        { src: "public/assets", dest: "dist" },
      ],
      flatten: false,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 500,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) { 
            return 'vendor';
          } 
          return 'app';
        },
      },
    },
  },
});
