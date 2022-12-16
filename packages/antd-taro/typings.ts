import type { ButtonProps, ViewProps } from '@tarojs/components';
import type { NativeProps } from './utils/native-props';

export type OmitWithNativeProps<T, K extends string | number | symbol> = Omit<T, K | keyof NativeProps>;

type OmitKey = keyof NativeProps;
export type TaroViewProps = Omit<ViewProps, OmitKey>;
export type TaroButtonProps = Omit<ButtonProps, OmitKey>;
