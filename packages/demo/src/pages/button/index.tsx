import Access from '@/components/Access';
import { View } from '@tarojs/components';
import Demo1 from 'antd-taro/components/button/demos/demo1';
import Demo2 from 'antd-taro/components/button/demos/demo2';
import type { FC } from 'react';

const ButtonPage: FC = () => {
  return (
    <View>
      <Access id="demo1">
        <Demo1 />
      </Access>

      <Access id="demo2">
        <Demo2 />
      </Access>
    </View>
  );
};

export default ButtonPage;
