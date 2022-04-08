/**
 * demoUrl: ?redirect=/pages/icon/index
 */
import { Icon, Space } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import React from 'react';
import styles from './demo2.modules.less';

const IconDemo2 = () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Space className={styles['icon-container']}>
          <Icon name="meh" />

          <Icon name="favorite" />
        </Space>
      </DemoBlock>

      <DemoBlock title="大小">
        <Space align="center">
          <Icon name="meh" style={{ '--adt-icon-size': '12px' }} />

          <Icon name="meh" style={{ '--adt-icon-size': '24px' }} />

          <Icon name="meh" style={{ '--adt-icon-size': '36px' }} />
        </Space>
      </DemoBlock>

      <DemoBlock title="颜色">
        <Space className={styles['icon-container']}>
          <Icon name="meh" style={{ '--adt-icon-color': '#76c6b8' }} />

          <Icon name="meh" style={{ '--adt-icon-color': 'var(--adt-color-primary)' }} />

          <Icon name="meh" style={{ '--adt-icon-color': 'var(--adt-color-weak)' }} />

          <Icon name="meh" style={{ '--adt-icon-color': 'var(--adt-color-danger)' }} />
        </Space>
      </DemoBlock>
    </>
  );
};

export default IconDemo2;
