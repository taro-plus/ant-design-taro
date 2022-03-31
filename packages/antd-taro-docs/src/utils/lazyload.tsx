import { Loading } from '@/components';
import loadable from '@loadable/component';

type loadableProps = Parameters<typeof loadable>;

export const lazyload = (fn: any, options?: loadableProps[1]) => {
  const Component = loadable(fn, { ...options, fallback: <Loading /> });

  Component.preload = fn.requireAsync || fn;

  return <Component />;
};
