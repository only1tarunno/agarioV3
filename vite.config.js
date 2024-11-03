// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Set src as the root directory
  build: {
    outDir: '../dist', // Output build files to the dist folder at the project root
  },
});
