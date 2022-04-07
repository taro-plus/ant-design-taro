/**
 * demoUrl: ?redirect=/pages/button/index
 */

import { Button, Icon, Space } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import type { FC } from 'react';
import React from 'react';

const ButtonDemo2: FC = () => {
  return (
    <>
      <DemoBlock title="带图标的按钮">
        <Button>
          <Space>
            <Icon name="search" />
            <span>搜索</span>
          </Space>
        </Button>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color="primary">
            Disabled
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="加载状态">
        <Space wrap>
          <Button loading color="primary" loadingText="正在加载">
            Loading
          </Button>
          <Button loading>Loading</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="不同类型圆角">
        <Space wrap>
          <Button shape="default" color="primary">
            Default Button
          </Button>
          <Button block shape="rounded" color="primary">
            Rounded Button
          </Button>
          <Button block shape="rectangular" color="primary">
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};

export default ButtonDemo2;
