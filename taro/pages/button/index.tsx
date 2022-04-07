import { View } from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';
import ButtonDemo1 from '../../../src/components/button/demos/demo1';
import ButtonDemo2 from '../../../src/components/button/demos/demo2';

const ButtonPage: FC = () => {
  return (
    <View>
      <ButtonDemo1 />

      <ButtonDemo2 />
    </View>
  );
};

export default ButtonPage;
