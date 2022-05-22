import { loadMdFile } from '@/site/utils/index';
import type { MenuDataItem } from '@ant-design/pro-layout';
import type { RouteObject } from 'react-router-dom';
import Layout from './layout';

type Route = RouteObject & MenuDataItem;
console.log(loadMdFile('@/docs/quick-start'));
export const routes: Route[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        name: 'Home',
        element: <div>Home</div>,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
    ],
  },
];
