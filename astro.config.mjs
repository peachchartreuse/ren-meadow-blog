import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable content collections
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
});