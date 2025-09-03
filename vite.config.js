import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/protfolio-website/',   // 👈 exactly same as repo name
})
