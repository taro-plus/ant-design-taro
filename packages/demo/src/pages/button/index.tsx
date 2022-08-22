import { View } from '@tarojs/components';
import Demo1 from 'antd-taro/components/button/demos/demo1';
import Demo2 from 'antd-taro/components/button/demos/demo2';
import type { FC } from 'react';

const ButtonPage: FC = () => {
  return (
    <View>
      <Demo1 />

      <Demo2 />
    </View>
  );
};

export default ButtonPage;
