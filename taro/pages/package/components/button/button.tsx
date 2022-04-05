import type { ButtonProps as TButtonProps } from '@tarojs/components';
import { Button as TButton } from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

type Var =
  | '--text-color'
  | '--background-color'
  | '--border-radius'
  | '--border-width'
  | '--border-style'
  | '--border-color';

/**
 * @displayName 忽略 Taro 组件的默认属性
 * @desc size -> size | type -> color | plain -> fill
 */
type OmitProps = 'size' | 'type' | 'plain';

type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loadingText?: string;
  shape?: 'default' | 'rounded' | 'rectangular';
} & Omit<TButtonProps, OmitProps> &
  NativeProps<Var>;

const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  type: 'button',
  shape: 'default',
  size: 'middle',
};

export const Button: FC<ButtonProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(props, <TButton>{props.children}</TButton>);
};
