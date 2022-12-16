import { Text, View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC } from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

type CSSProperties = '--color' | '--size';

export interface DotLoadingProps extends NativeProps<CSSProperties> {
  color?: 'default' | 'primary' | 'white' | (string & {});
  size?: 'mini' | 'small' | 'middle' | 'large';
}

const classPrefix = 'adt-loading';

const defaultProps = {
  color: 'default',
};

const colorRecord: Record<string, string> = {
  default: 'var(--adt-color-weak)',
  primary: 'var(--adt-color-primary)',
  white: 'var(--adt-color-white)',
};

export const Loading: FC<DotLoadingProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, `${classPrefix}-${props.size}`)}
      style={
        {
          '--color': colorRecord?.[props.color] ?? props.color,
        } as unknown as CSSProperties
      }
    >
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
      <Text className={`${classPrefix}__dot`} />
    </View>,
  );
};
