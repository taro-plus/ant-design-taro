/**
 * demoUrl: ?redirect=/pages/package/components/button/demo/index
 */

import type { FC } from 'react';
import React from 'react';
import { Button } from '../../../index';
import { DemoBlock } from '../../demo';

const ButtonDemo1: FC = () => {
  return (
    <DemoBlock title="不同颜色的按钮">
      <Button>按钮</Button>
    </DemoBlock>
  );
};

export default ButtonDemo1;
