/**
 * demoUrl: ?redirect=/pages/icon/index?id=demo2
 */
import { Icon, Space } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import React from 'react';
import styles from './demo2.modules.less';

console.log(styles);
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
          <Icon name="meh" fontSize="13" />

          <Icon name="meh" fontSize="26px" />

          <Icon name="meh" fontSize="39" />
        </Space>
      </DemoBlock>

      <DemoBlock title="颜色">
        <Space className={styles['icon-container']}>
          <Icon name="meh" color="#76c6b8" />

          <Icon name="meh" color="var(--adt-color-primary)" />

          <Icon name="meh" style={{ '--adt-icon-color': 'var(--adt-color-weak)' }} />

          <Icon name="meh" style={{ '--adt-icon-color': 'var(--adt-color-danger)' }} />
        </Space>
      </DemoBlock>
    </>
  );
};

export default IconDemo2;
