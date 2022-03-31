import { lazyload } from '@/utils';
import { MenuDataItem } from '@ant-design/pro-layout';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

type Route = MenuDataItem & RouteObject;

const guideRoutes = [
  {
    path: 'quickStart',
    element: lazyload(() => import('./pages/guide/quickStart')),
    name: '快速上手',
  },
];

const componentsRoutes = [
  {
    path: 'quickStart',
    element: lazyload(() => import('./pages/guide/quickStart')),
    name: 'Button 按钮',
  },
];

export const menuRoutes: Route[] = [
  {
    path: '/guide',
    name: '指南',
    routes: guideRoutes,
    children: guideRoutes,
  },
  {
    path: '/components',
    name: '组件',
    element: <Outlet />,
    routes: componentsRoutes,
    children: componentsRoutes,
  },
  {
    path: '*',
    element: lazyload(() => import('./pages/404')),
  },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyload(() => import('./layout')),
    children: menuRoutes,
  },
];
