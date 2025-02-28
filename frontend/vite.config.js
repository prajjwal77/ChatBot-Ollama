import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8080', // Proxy API calls
    }
  },
  build: {
    outDir: '../src/main/resources/static', // Output directory for production
    emptyOutDir: true,
  }
})
