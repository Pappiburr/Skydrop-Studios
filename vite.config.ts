/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true, // optional: use Jest-like `describe`, `it`, `expect` without importing them
    environment: 'jsdom', // for DOM support in tests
    setupFiles: './src/setupTest.ts', // optional: if you want global test setup
    include: ['src/**/*.{test,spec}.{ts,tsx}'], // optional: file matching
  },
});