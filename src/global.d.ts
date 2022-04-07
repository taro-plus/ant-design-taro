import type { ViewProps } from '@tarojs/components';
import type { NativeProps } from 'lib-utils/native-props';

export type TaroViewProps = Omit<ViewProps, keyof NativeProps>;
