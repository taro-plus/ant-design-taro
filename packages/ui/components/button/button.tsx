import { Button as TaroButton, View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Loading } from '../../index';
import type { TaroButtonProps } from '../../typings';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { isPromise } from '../../utils/validate';
import { mergeProps } from '../../utils/with-default-props';

type OmitTaroButtonProps = 'size' | 'type' | 'plain' | 'loading';

export interface ButtonProps extends Omit<TaroButtonProps, OmitTaroButtonProps>, NativeProps {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  fill?: 'solid' | 'outline' | 'none';
  size?: 'mini' | 'small' | 'middle' | 'large';
  block?: boolean;
  loading?: boolean | 'auto';
  loadingText?: string;
  loadingIcon?: ReactNode;
  // type?: 'submit' | 'reset' | 'button';
  shape?: 'default' | 'rounded' | 'rectangular';
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
  const { size, loading, disabled, onClick, ...props } = mergeProps(defaultProps, p);
  const [innerLoading, setInnerLoading] = useState(false);

  const showLoading = loading === 'auto' ? innerLoading : loading;
  const showDisabled = disabled || showLoading;

  const handleClick: TaroButtonProps['onClick'] = async (e) => {
    if (!onClick) return;

    const promise = onClick(e);

    if (isPromise(promise)) {
      try {
        setInnerLoading(true);
        await promise;
        setInnerLoading(false);
      } catch (e) {
        setInnerLoading(false);
        throw e;
      }
    }
  };

  return withNativeProps(
    props,
    <TaroButton
      className={classNames(
        classPrefix,
        props.color ? `${classPrefix}-${props.color}` : null,
        {
          [`${classPrefix}-block`]: props.block,
          [`${classPrefix}-disabled`]: showDisabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: size === 'mini',
          [`${classPrefix}-small`]: size === 'small',
          [`${classPrefix}-large`]: size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${props.shape}`,
      )}
      onClick={handleClick}
      {...props}
    >
      {showLoading ? (
        <View className={`${classPrefix}-loading-wrapper`}>
          {props?.loadingIcon ?? <Loading color="currentColor" size={size} />}
          {props.loadingText}
        </View>
      ) : (
        props.children
      )}
    </TaroButton>,
  );
};
