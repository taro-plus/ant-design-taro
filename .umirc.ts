import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Ant Design Taro',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/ui/components'],
  },
  // more config: https://d.umijs.org/config
});
