// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome'
    }
  }
});
