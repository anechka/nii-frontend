import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '$':     fileURLToPath(new URL('./src',            import.meta.url)),
      '@':     fileURLToPath(new URL('./src/components', import.meta.url))
    }
  }
})
