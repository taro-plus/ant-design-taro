import { Text, View } from '@tarojs/components';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';
import type { TaroViewProps } from '../../global';

const classPrefix = 'adt-dot-loading';

const colorRecord: Record<string, string> = {
  default: 'var(--adt-color-weak)',
  primary: 'var(--adt-color-primary)',
  white: 'var(--adt-color-white)',
};

export type DotLoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {});
} & TaroViewProps &
  NativeProps;

const defaultProps = {
  color: 'default',
};

export const DotLoading: FC<DotLoadingProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    // @ts-ignore
    <View className={classPrefix} style={{ '--adt-dot-loading-color': colorRecord[props.color] ?? props.color }}>
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
    </View>,
  );
};
