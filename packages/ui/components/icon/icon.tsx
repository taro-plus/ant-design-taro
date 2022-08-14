import { Text } from '@tarojs/components';
import classNames from 'classnames';
import type { CSSProperties, FC } from 'react';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';
import { mergeProps } from '../../utils/with-default-props';
import type { IconName } from './iconName';

type CSSVariables = '--adt-icon-size' | '--adt-icon-color';

export interface IconProps extends NativeProps<CSSVariables> {
  name: IconName;
  fontSize?: number | string;
  color?: string;
}

const classPrefix = 'adt-icon';

const defaultProps = {
  name: '',
};

export const Icon: FC<IconProps> = (p) => {
  const props = mergeProps(defaultProps, p);

  return withNativeProps(
    props,
    <Text
      style={
        {
          ...(props.fontSize && {
            '--adt-icon-size': isNaN(Number(props.fontSize)) ? props.fontSize : `${props.fontSize}px`,
          }),
          ...(props.color && {
            '--adt-icon-color': props.color,
          }),
        } as unknown as CSSProperties
      }
      className={classNames(classPrefix, {
        [`${classPrefix}-${props.name}`]: !!props.name,
      })}
    />,
  );
};
