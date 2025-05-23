import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    // Activation de la génération de HTML pour chaque route
    ssrManifest: true,
  }
})
