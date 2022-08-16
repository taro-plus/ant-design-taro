import type { ButtonProps, TextProps, ViewProps } from '@tarojs/components';
import type { NativeProps } from './utils/native-props';

type OmitKey = keyof NativeProps;

export type TaroViewProps = Omit<ViewProps, OmitKey>;
export type TaroTextProps = Omit<TextProps, OmitKey>;
export type TaroButtonProps = Omit<ButtonProps, OmitKey>;
