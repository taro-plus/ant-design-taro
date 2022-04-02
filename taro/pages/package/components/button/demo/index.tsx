import { View } from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';
import ButtonDemo1 from './demo1';

definePageConfig({
  navigationBarTitleText: 'Button 按钮',
});

const ButtonPage: FC = () => {
  return (
    <View>
      <ButtonDemo1 />
    </View>
  );
};

export default ButtonPage;