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
      { find: /^@\/site\/utils/, replacement: path.resolve(__dirname, 'site/utils') },
      { find: /^@\/docs/, replacement: path.resolve(__dirname, 'site/docs') },
      { find: /^@\/components-docs/, replacement: path.resolve(__dirname, 'src/components') },
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
