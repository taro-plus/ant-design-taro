import { View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import { createElement } from 'react';
import { Icon } from '../../index';
import type { TaroViewProps } from '../../types/taro';
import type { NativeProps } from '../../utils/native-props';
import { withNativeProps } from '../../utils/native-props';

const classPrefix = `adt-list-item`;

export type ListItemProps = {
  title?: ReactNode;
  description?: ReactNode;
  prefix?: ReactNode;
  extra?: ReactNode;
  clickable?: boolean;
  arrow?: boolean | ReactNode;
  disabled?: boolean;
} & TaroViewProps &
  NativeProps<'--prefix-width' | '--align-items' | '--active-background-color'>;

export const ListItem: FC<ListItemProps> = (props) => {
  const clickable = props.clickable ?? !!props.onClick;
  const arrow = props.arrow === undefined ? clickable : props.arrow;

  const content = (
    <View className={`${classPrefix}-content`}>
      {props.prefix && <View className={`${classPrefix}-content-prefix`}>{props.prefix}</View>}
      <View className={`${classPrefix}-content-main`}>
        {props.title && <View className={`${classPrefix}-title`}>{props.title}</View>}
        {props.children}
        {props.description && <View className={`${classPrefix}-description`}>{props.description}</View>}
      </View>
      {props.extra && <View className={`${classPrefix}-content-extra`}>{props.extra}</View>}
      {arrow && (
        <View className={`${classPrefix}-content-arrow`}>{arrow === true ? <Icon name="arrow-right" /> : arrow}</View>
      )}
    </View>
  );

  return withNativeProps(
    props,
    createElement(
      clickable ? 'Navigator' : 'View',
      {
        className: classNames(
          `${classPrefix}`,
          clickable ? ['adm-plain-anchor'] : [],
          props.disabled && `${classPrefix}-disabled`,
        ),
        onClick: props.disabled ? undefined : props.onClick,
      },
      content,
    ),
  );
};
