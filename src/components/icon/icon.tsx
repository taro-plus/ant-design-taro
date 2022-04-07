import type { TextProps } from '@tarojs/components';
import { Text } from '@tarojs/components';
import classNames from 'classnames';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';

export type IconProps = {
  name: string;
  size?: string;
  color?: string;
} & TextProps;

const classPrefix = 'adt-icon';

const defaultProps = {};

export const Icon: FC<IconProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <Text
      className={classNames(classPrefix, {
        [`${classPrefix}-${props.name}`]: props.name,
      })}
    />,
  );
};
