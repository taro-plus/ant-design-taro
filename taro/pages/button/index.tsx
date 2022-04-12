import { View } from '@tarojs/components';
import ButtonDemo1 from 'lib-components/button/demos/demo1';
import ButtonDemo2 from 'lib-components/button/demos/demo2';
import type { FC } from 'react';
import React from 'react';

const ButtonPage: FC = () => {
  return (
    <View>
      <ButtonDemo1 />

      <ButtonDemo2 />
    </View>
  );
};

export default ButtonPage;
