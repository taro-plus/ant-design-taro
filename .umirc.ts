import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'Ant Design Taro',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'taro/pages/package'],
  },
  copy: [
    {
      from: 'scripts/redirect2demo.js',
      to: 'scripts/redirect2demo.js',
    },
  ],
  headScripts: [{ src: '/scripts/redirect2demo.js' }],
  alias: {
    'antd-taro': join(__dirname, '/taro/pages/package'),
  },
  // more config: https://d.umijs.org/config
});
