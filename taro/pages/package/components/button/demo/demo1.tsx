/**
 * demoUrl: ?redirect=/pages/index/index
 */

import { View } from '@tarojs/components';
import { Button } from 'antd-taro';
import type { FC } from 'react';
import React from 'react';

const ButtonDemo1: FC = () => {
  return (
    <View>
      <Button>按钮</Button>
    </View>
  );
};

export default ButtonDemo1;