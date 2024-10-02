import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const __dirname = path.resolve();

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
