import classNames from 'classnames';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { cloneElement } from 'react';

export interface NativeProps<S extends string = never> {
  className?: string;
  style?: CSSProperties & Partial<Record<S, string>>;
}

export interface NativePropsWithChildren<S extends string = never> extends NativeProps<S> {
  children?: ReactNode;
}

export function withNativeProps<P extends NativeProps>(props: P, element: ReactElement) {
  const p = {
    ...props,
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
  return cloneElement(element, p);
}
