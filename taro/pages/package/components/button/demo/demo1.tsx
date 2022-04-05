/**
 * demoUrl: ?redirect=/pages/package/components/button/demo/index
 */

import { DemoBlock } from '@/components';
import { Button } from 'antd-taro';
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
