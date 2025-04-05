import path from 'path-browserify';
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss()],
  resolve: {
    alias: {
      path: 'path-browserify',
      '@': path.resolve('./src')
    },
    extensions: ['*', '.js', '.svelte', '.css']
  }
})
