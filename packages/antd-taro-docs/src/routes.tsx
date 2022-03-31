import { lazyload } from '@/utils';
import type { RouteObject } from 'react-router-dom';

export const menuRoutes: RouteObject[] = [];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyload(() => import('./layout')),
    children: menuRoutes,
  },
];
