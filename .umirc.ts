import { defineConfig } from 'dumi';
import { join } from 'path';

export default defineConfig({
  title: 'Ant Design Taro',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'src/components'],
    passivePreview: true,
  },
  alias: {
    'antd-taro': join(__dirname, '/src'),
    'lib-utils': join(__dirname, '/src/utils'),
    'lib-components': join(__dirname, '/src/components'),
    'demo-components': join(__dirname, '/taro/components'),
  },
  publicPath: '/docs-dist/',
  define: {
    ENABLE_INNER_HTML: true,
    ENABLE_ADJACENT_HTML: true,
    ENABLE_CLONE_NODE: true,
    ENABLE_CONTAINS: true,
    ENABLE_SIZE_APIS: true,
    ENABLE_TEMPLATE_CONTENT: true,
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '发布日志',
      path: 'https://github.com/sushi-su/ant-design-taro/releases',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/sushi-su/ant-design-taro',
    },
  ],
  menus: {
    '/components': [
      {
        title: '基础',
        children: ['/button/index', '/icon/index'],
      },
    ],
  },
});
