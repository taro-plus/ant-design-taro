import { useShowDemo } from '@/hooks';
import type { FC, ReactNode } from 'react';
import { createElement, Fragment } from 'react';

export const Access: FC<{ id: string; children: ReactNode }> = ({ id, children }) => {
  const showDemo = useShowDemo(id);

  if (!showDemo) return null;

  return createElement(Fragment, null, children);
};

export default Access;
