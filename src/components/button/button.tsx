import { Button as TaroButton, View } from '@tarojs/components';
import classNames from 'classnames';
import DotLoading from 'lib-components/dot-loading';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';
import type { TaroButtonProps } from '../../global';

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

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loadingText?: string;
  shape?: 'default' | 'rounded' | 'rectangular';
} & Omit<TaroButtonProps, OmitProps> &
  NativeProps<Var>;

const classPrefix = `adt-button`;

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

  const disabled = props.disabled || props.loading;

  return withNativeProps(
    props,
    <TaroButton
      formType={props.formType}
      onClick={props.onClick}
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: props.size === 'mini',
          [`${classPrefix}-small`]: props.size === 'small',
          [`${classPrefix}-large`]: props.size === 'large',
          [`${classPrefix}-loading`]: props.loading,
        },
        `${classPrefix}-shape-${props.shape}`,
      )}
      disabled={disabled}
    >
      {props.loading ? (
        <View className={`${classPrefix}-loading-wrapper`}>
          <DotLoading color={props.color} />
          {props.loadingText}
        </View>
      ) : (
        props.children
      )}
    </TaroButton>,
  );
};