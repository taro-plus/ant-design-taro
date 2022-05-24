import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

const assetsDir = new Date().getTime().toString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~antd/, replacement: 'antd' },
      { find: /^@site/, replacement: path.resolve(__dirname, 'site/') },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: `./dist-docs`,
    assetsDir,
    rollupOptions: {
      output: {
        entryFileNames: `${assetsDir}/entry.js`,
        chunkFileNames: `${assetsDir}/chunk/[name].js`,
        assetFileNames: `${assetsDir}/assets/[name].[ext]`,
      },
    },
  },
});
