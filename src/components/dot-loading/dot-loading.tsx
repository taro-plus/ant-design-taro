import { Text, View } from '@tarojs/components';
import type { FC } from 'react';
import type { TaroViewProps } from '../../types/taro';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

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
