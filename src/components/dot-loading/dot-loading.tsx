import { Text, View } from '@tarojs/components';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';
import type { TaroViewProps } from '../../global';

const classPrefix = 'adt-dot-loading';

export type DotLoadingProps = TaroViewProps & NativeProps;

const defaultProps = {
  color: 'default',
};

export const DotLoading: FC<DotLoadingProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
    </View>,
  );
};
