/**
 * demoUrl: ?redirect=/pages/package/components/button/demo/index
 */

import { Button } from 'antd-taro';
import { DemoBlock } from 'demo-components';
import type { FC } from 'react';
import React from 'react';

const ButtonDemo1: FC = () => {
  return (
    <DemoBlock title="不同颜色的按钮">
      <Button>按钮</Button>
    </DemoBlock>
  );
};

export default ButtonDemo1;
