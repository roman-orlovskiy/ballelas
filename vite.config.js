import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // Раскомментируйте эту строку, если репозиторий НЕ называется username.github.io
  // base: '/ballelas/',
});

