import type { ButtonProps, TextProps, ViewProps } from '@tarojs/components';
import type { NativeProps } from 'lib-utils/native-props';

export type TaroViewProps = Omit<ViewProps, keyof NativeProps>;
export type TaroTextProps = Omit<TextProps, keyof NativeProps>;
export type TaroButtonProps = Omit<ButtonProps, keyof NativeProps>;
