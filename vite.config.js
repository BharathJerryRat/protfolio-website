import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/protfolio-website/", // 👈 must match your repo name exactly
});
