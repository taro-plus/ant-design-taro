/**
 * demoUrl: ?redirect=/pages/icon/index
 */
import { Text } from '@tarojs/components';
import type { IconProps } from 'antd-taro';
import { Icon, Space } from 'antd-taro';
import type { FC } from 'react';
import React from 'react';
import { fillIconNames } from './constant';

const IconItem: FC<IconProps> = ({ name }) => {
  return (
    <Space direction="vertical" align="center" justify="between">
      <Icon name={name} />

      <Text style={{ fontSize: '12px' }}>{name}</Text>
    </Space>
  );
};

const IconDemo1 = () => {
  return (
    <Space wrap>
      {fillIconNames.map((name) => {
        return <IconItem name={name} key={name} />;
      })}
    </Space>
  );
};

export default IconDemo1;
