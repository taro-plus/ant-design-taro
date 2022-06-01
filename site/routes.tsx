import type { MenuDataItem } from '@ant-design/pro-layout';
import { MarkDownComponent } from '@site/components';
import quickStart from '@site/docs/quick-start.md?raw';
import type { RouteObject } from 'react-router-dom';
import Layout from './layout';

type Route = RouteObject & MenuDataItem;

export const routes: Route[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        name: 'Home',
        element: <MarkDownComponent content={quickStart} />,
      },
      {
        path: '/about',
        element: <div>About</div>,
      },
    ],
  },
];
