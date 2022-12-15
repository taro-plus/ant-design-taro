import { Access } from '@/components';
import { View } from '@tarojs/components';
import type { FC } from 'react';
import Demo1 from './demos/demo1';
import Demo2 from './demos/demo2';

const PageButton: FC = () => {
  return (
    <View>
      <Access demoId="1">
        <Demo1 />
      </Access>

      <Access demoId="2">
        <Demo2 />
      </Access>
    </View>
  );
};

export default PageButton;
