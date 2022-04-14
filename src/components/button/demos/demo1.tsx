/**
 * demoUrl: ?redirect=/pages/button/index?id=demo1
 */

import { showToast } from '@tarojs/taro';
import { Button, Space } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import React from 'react';

const ButtonDemo1: React.FC = () => {
  return (
    <>
      <DemoBlock title="不同颜色的按钮">
        <Space wrap>
          <Button
            onClick={async () => {
              await showToast({
                title: 'hello',
                icon: 'none',
              });
            }}
          >
            Default
          </Button>

          <Button color="primary">Primary</Button>

          <Button color="success">Success</Button>

          <Button color="danger">Danger</Button>

          <Button color="warning">Warning</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="块级按钮">
        <Button block color="primary" size="large">
          Block Button
        </Button>
      </DemoBlock>

      <DemoBlock title="填充模式">
        <Space>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="outline">
            Outline
          </Button>
          <Button color="primary" fill="none">
            None
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="不同大小的按钮">
        <Space align="center">
          <Button size="mini" color="primary">
            Mini
          </Button>
          <Button size="small" color="primary">
            Small
          </Button>
          <Button size="middle" color="primary">
            Middle
          </Button>
          <Button size="large" color="primary">
            Large
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};

export default ButtonDemo1;
