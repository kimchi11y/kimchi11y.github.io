import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/', // Since you're using the root GitHub Pages domain (kimchi11y.github.io)
});
