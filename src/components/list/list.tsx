import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC, ReactNode } from 'react';
import React from 'react';
import type { TaroViewProps } from '../../global';

const classPrefix = `adt-list`;

export type ListProps = {
  header?: ReactNode;
  mode?: 'default' | 'card'; // 默认是整宽的列表，card 模式下展示为带 margin 和圆角的卡片
} & TaroViewProps &
  NativeProps<
    | '--header-font-size'
    | '--prefix-width'
    | '--prefix-padding-right'
    | '--align-items'
    | '--active-background-color'
    | '--border-inner'
    | '--border-top'
    | '--border-bottom'
    | '--padding-left'
    | '--padding-right'
    | '--font-size'
  >;

const defaultProps = {
  mode: 'default',
};

export const List: FC<ListProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-${props.mode}`)}>
      {props.header && <View className={`${classPrefix}-header`}>{props.header}</View>}
      <View className={`${classPrefix}-body`}>
        <View className={`${classPrefix}-body-inner`}>{props.children}</View>
      </View>
    </View>,
  );
};
