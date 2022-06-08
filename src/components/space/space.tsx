import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';

type CSSVariables = '--gap' | '--gap-vertical' | '--gap-horizontal';

export interface SpaceProps extends NativeProps<CSSVariables> {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
  onClick?: ViewProps['onClick'];
}

const classPrefix = `adt-space`;

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
