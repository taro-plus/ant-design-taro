import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Ant Design Taro',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  favicon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/ui/components'],
    passivePreview: true,
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
        children: ['/button/index'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
