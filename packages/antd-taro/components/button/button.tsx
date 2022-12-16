import type { ButtonProps as TaroButtonProps } from '@tarojs/components';
import { Button as TaroButton, View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Loading } from '../../index';
import type { OmitWithNativeProps } from '../../typings';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { isPromise } from '../../utils/validate';
import { mergeProps } from '../../utils/with-default-props';

const ButtonColors = ['default', 'primary', 'success', 'warning', 'danger'] as const;
export type ButtonColor = typeof ButtonColors[number];

const ButtonFills = ['solid', 'outline', 'none'] as const;
export type ButtonFill = typeof ButtonFills[number];

const ButtonSizes = ['mini', 'small', 'middle', 'large'] as const;
export type ButtonSize = typeof ButtonSizes[number];

const ButtonShapes = ['default', 'rounded', 'rectangular'] as const;
export type ButtonShape = typeof ButtonShapes[number];

const ButtonCssVars = [
  '--background-color',
  '--border-color',
  '--border-radius',
  '--border-style',
  '--border-width',
  '--text-color',
] as const;
export type ButtonCssVar = typeof ButtonCssVars[number];

type OmitTaroButtonProps = 'size' | 'type' | 'plain' | 'disabled' | 'loading';
export interface ButtonProps
  extends OmitWithNativeProps<TaroButtonProps, OmitTaroButtonProps>,
    NativeProps<ButtonCssVar> {
  block?: boolean;
  color?: ButtonColor;
  disabled?: boolean;
  fill?: ButtonFill;
  loading?: boolean | 'auto';
  loadingIcon?: ReactNode;
  loadingText?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
}
const defaultProps: ButtonProps = {
  block: false,
  color: 'default',
  disabled: false,
  fill: 'solid',
  loading: false,
  shape: 'default',
  size: 'middle',
};

const classPrefix = 'adt-button';

export const Button: FC<ButtonProps> = (p) => {
  const { size, onClick, loading, disabled, ...props } = mergeProps(defaultProps, p);
  const [innerLoading, setInnerLoading] = useState(false);
  const isLoading = loading === 'auto' ? innerLoading : loading;
  const isDisabled = disabled || isLoading;

  const handleClick: TaroButtonProps['onClick'] = async (e) => {
    if (!onClick || isDisabled) return;

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
          [`${classPrefix}-disabled`]: isDisabled,
          [`${classPrefix}-fill-outline`]: props.fill === 'outline',
          [`${classPrefix}-fill-none`]: props.fill === 'none',
          [`${classPrefix}-mini`]: size === 'mini',
          [`${classPrefix}-small`]: size === 'small',
          [`${classPrefix}-large`]: size === 'large',
          [`${classPrefix}-loading`]: isLoading,
        },
        `${classPrefix}-shape-${props.shape}`,
      )}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? (
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
