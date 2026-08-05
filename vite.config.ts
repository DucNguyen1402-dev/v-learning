import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
      "@providers": fileURLToPath(new URL("./src/providers", import.meta.url)),
      "@routes": fileURLToPath(new URL("./src/routes", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      
    },
  },
});
