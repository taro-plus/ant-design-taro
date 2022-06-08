import { Text, View } from '@tarojs/components';
import type { FC } from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';

type CSSProperties = '--color' | '--size';

export type DotLoadingProps = NativeProps<CSSProperties>;

const classPrefix = 'adt-loading';

export const Loading: FC<DotLoadingProps> = (props) => {
  return withNativeProps(
    props,
    <View className={classPrefix}>
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
    </View>,
  );
};
