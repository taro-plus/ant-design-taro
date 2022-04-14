import { Text } from '@tarojs/components';
import classNames from 'classnames';
import type { NativeProps } from 'lib-utils/native-props';
import { withNativeProps } from 'lib-utils/native-props';
import { mergeProps } from 'lib-utils/with-default-props';
import type { FC } from 'react';
import React from 'react';
import type { TaroTextProps } from '../../global';
import type { IconName } from './IconName';

type IconVar = '--adt-icon-size' | '--adt-icon-color';

export type IconProps = {
  name: IconName;
  fontSize?: number | string;
  color?: string;
} & TaroTextProps &
  NativeProps<IconVar>;

const classPrefix = 'adt-icon';

const defaultProps = {
  name: '',
};

export const Icon: FC<IconProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <Text
      // @ts-ignore
      style={{
        ...(props.fontSize && {
          '--adt-icon-size': isNaN(Number(props.fontSize)) ? props.fontSize : `${props.fontSize}px`,
        }),
        ...(props.color && {
          '--adt-icon-color': props.color,
        }),
      }}
      className={classNames(classPrefix, {
        [`${classPrefix}-${props.name}`]: !!props.name,
      })}
    />,
  );
};
