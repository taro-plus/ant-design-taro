import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

const classPrefix = `adt-space`;

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
} & ViewProps &
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
        console.log(child !== null && child !== undefined);

        return child !== null && child !== undefined && <View className={`${classPrefix}-item`}>{child}</View>;
      })}
    </View>,
  );
};
