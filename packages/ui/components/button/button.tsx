import { Button as TaroButton, View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { Loading } from '../../index';
import type { TaroButtonProps } from '../../typings';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

type OmitTaroButtonProps = 'size' | 'type' | 'plain';

export interface ButtonProps extends Omit<TaroButtonProps, OmitTaroButtonProps>, NativeProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  shape?: 'default' | 'rounded' | 'rectangular';
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
  const props = mergeProps(defaultProps, p);
  console.log(props);
  const loading = props.loading;
  const disabled = props.disabled || loading;

  return withNativeProps(
    props,
    <TaroButton
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
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`,
      )}
      onClick={props.onClick}
    >
      {loading ? (
        <View className={`${classPrefix}-loading-wrapper`}>
          {props?.loadingIcon ?? <Loading color="currentColor" size={props.size} />}
          {props.loadingText}
        </View>
      ) : (
        props.children
      )}
    </TaroButton>,
  );
};
