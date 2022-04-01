import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Ant Design Taro',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/antd-taro-demo/src/pages/package'],
  },
  copy: [
    {
      from: 'scripts/redirectDemo.js',
      to: 'scripts/redirectDemo.js',
    },
  ],
  headScripts: [{ src: '/scripts/redirectDemo.js' }],
  // more config: https://d.umijs.org/config
});
