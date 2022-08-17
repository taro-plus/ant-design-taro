/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    include: [`${path.resolve(__dirname, 'packages', 'ui')}/**/tests/*.{ts,tsx}`],
    alias: {
      '@tarojs/taro': '@tarojs/taro-h5',
      '@tarojs/components': '@tarojs/components/dist-h5/react',
    },
  },
});
