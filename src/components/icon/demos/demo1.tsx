/**
 * demoUrl: ?redirect=/pages/icon/index
 */
import { View } from '@tarojs/components';
import { setClipboardData, showToast } from '@tarojs/taro';
import type { IconProps } from 'antd-taro';
import { Icon, Space } from 'antd-taro';
import classNames from 'classnames';
import { DemoBlock } from 'demo-components';
import type { FC } from 'react';
import React from 'react';
import { fillIconNames, iconNames } from './constant';
import styles from './demo1.modules.less';

const IconItem: FC<IconProps> = ({ name }) => {
  const onClick = async () => {
    await setClipboardData({
      data: name,
    });

    await showToast({
      title: '复制成功',
      icon: 'none',
    });
  };
  return (
    <Space direction="vertical" align="center" justify="center" onClick={onClick} className={styles['icon-item']}>
      <Icon name={name} />

      <View className={classNames(styles['name-text'], 'text-overflow')}>{name}</View>
    </Space>
  );
};

const IconDemo1 = () => {
  return (
    <View>
      <DemoBlock title="实底风格">
        <Space wrap justify="between" align="center" style={{ '--gap-vertical': '24px' }}>
          {fillIconNames.map((name) => {
            return <IconItem name={name} key={name} />;
          })}
        </Space>
      </DemoBlock>

      <DemoBlock title="线框风格">
        <Space wrap justify="between" align="center" style={{ '--gap-vertical': '24px' }}>
          {iconNames.map((name) => {
            return <IconItem name={name} key={name} />;
          })}
        </Space>
      </DemoBlock>
    </View>
  );
};

export default IconDemo1;
