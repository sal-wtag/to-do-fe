import { defineConfig } from 'vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

export default defineConfig({
  plugins: [viteCommonjs()],
  test: {
    // Test options go here
    globals: true,
    environment: 'jsdom',
  },
});
