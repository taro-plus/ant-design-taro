import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';
import type { TaroViewProps } from '../../global';

const classPrefix = `adt-space`;

type SpaceProps = {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
} & TaroViewProps &
  NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>;

const defaultProps = {
  direction: 'horizontal',
};

export const Space: FC<SpaceProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const { direction, onClick } = props;
  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, (child) => {
        return child !== null && child !== undefined && <View className={`${classPrefix}-item`}>{child}</View>;
      })}
    </View>,
  );
};
