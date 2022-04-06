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
  headScripts: [{ src: '/docs-dist/scripts/redirect2demo.js' }],
  alias: {
    'antd-taro': join(__dirname, '/taro/pages/package'),
    'demo-components': join(__dirname, '/taro/components'),
  },
  publicPath: '/docs-dist/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/sushi-su/ant-design-taro',
    },
  ],
  define: {
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
  },

  menus: {
    '/components': [
      {
        title: '基础',
        children: ['components/button/index'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
