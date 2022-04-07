import { View } from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';
import ButtonDemo1 from './demo1';
import ButtonDemo2 from './demo2';

const ButtonPage: FC = () => {
  return (
    <View>
      <ButtonDemo1 />

      <ButtonDemo2 />
    </View>
  );
};

export default ButtonPage;
