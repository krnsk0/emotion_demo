import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    checker({ typescript: true }),
  ],
  esbuild: {
    define: {
      // see https://github.com/evanw/esbuild/issues/2328
      this: 'window',
    },
  },
  server: {
    open: true,
  },
});
