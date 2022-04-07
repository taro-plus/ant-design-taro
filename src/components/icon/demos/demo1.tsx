/**
 * demoUrl: ?redirect=/pages/icon/index
 */
import { View } from '@tarojs/components';
import type { IconProps } from 'antd-taro';
import { Icon, Space } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import type { FC } from 'react';
import React from 'react';
import { fillIconNames, iconNames } from './constant';

const IconItem: FC<IconProps> = ({ name }) => {
  return (
    <Space direction="vertical" align="center" justify="center">
      <Icon name={name} />

      <View style={{ width: '50px' }} className="text-overflow">
        {name}
      </View>
    </Space>
  );
};

const IconDemo1 = () => {
  return (
    <>
      <DemoBlock title="实底风格">
        <Space wrap justify="between" align="center" style={{ '--gap-vertical': '24px' }}>
          {fillIconNames.map((name) => {
            return <IconItem name={name} key={name} />;
          })}
        </Space>
      </DemoBlock>

      <DemoBlock title="线框风格">
        <Space wrap>
          {iconNames.map((name) => {
            return <Icon name={name} key={name} />;
          })}
        </Space>
      </DemoBlock>
    </>
  );
};

export default IconDemo1;
