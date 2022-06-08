import { Button as TaroButton } from '@tarojs/components';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import type { TaroButtonProps } from '../../types/taro';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

type OmitTaroButtonProps = 'size' | 'type' | 'plain';

type Color = 'default' | 'primary' | 'success' | 'warning' | 'danger';
type Fill = 'solid' | 'outline' | 'none';
type Size = 'mini' | 'small' | 'middle' | 'large';
type Shape = 'default' | 'rounded' | 'rectangular';

export interface ButtonProps extends Omit<TaroButtonProps, OmitTaroButtonProps>, NativeProps {
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
  const { size, ...props } = mergeProps(defaultProps, p);

  const loading = props.loading;
  const disabled = props.disabled || loading;

  return withNativeProps(
    props,
    <TaroButton
      {...props}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: size === 'mini',
          [`${classPrefix}-small`]: size === 'small',
          [`${classPrefix}-large`]: size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`,
      )}
    >
      {props.children}
    </TaroButton>,
  );
};
