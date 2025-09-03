import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/protfolio-website/',   // 👈 match your repo name exactly
})
