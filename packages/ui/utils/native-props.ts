import classNames from 'classnames';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

export interface NativeProps<S extends string = never> {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
  tabIndex?: number;
}

export interface NativePropsWithChildren<S extends string = never> extends NativeProps<S> {
  children?: ReactNode;
}

export function withNativeProps<P extends NativeProps>(props: P, element: ReactElement) {
  const p = {
    ...element.props,
  };
  if (props.className) {
    p.className = classNames(element.props.className, props.className);
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    };
  }
  if (props.tabIndex !== undefined) {
    p.tabIndex = props.tabIndex;
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue;
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }
  return cloneElement(element, p);
}
