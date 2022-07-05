import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://thiagopabreu.github.io/tic-tac-toe/",
  build: {
  outDir: 'build'
  }
})
