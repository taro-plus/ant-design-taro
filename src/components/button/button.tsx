import type { ButtonProps as TaroButtonProps } from '@tarojs/components';
import { Button as TaroButton } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

type OmitTaroButtonProps = 'size' | 'type' | 'plain';

type Color = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type Fill = 'solid' | 'outline' | 'none';
type Size = 'mini' | 'small' | 'middle' | 'large';
type Shape = 'default' | 'rounded' | 'rectangular';

export interface ButtonProps extends Omit<TaroButtonProps, OmitTaroButtonProps> {
  color?: Color;
  fill?: Fill;
  size?: Size;
  shape?: Shape;
  block?: boolean;
  loadingText?: string;
  loadingIcon?: ReactNode;
}

const classPrefix = 'adt-button';

const defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  shape: 'default',
  size: 'middle',
};

export const Button: FC<ButtonProps> = (p) => {
  const { size, ...props } = p;

  return <TaroButton {...props}>222</TaroButton>;
};
