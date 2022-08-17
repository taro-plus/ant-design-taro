import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { Button } from 'antd-taro';
import type { FC } from 'react';

const IndexPage: FC = () => {
  return (
    <View>
      <Button
        onClick={() => {
          navigateTo({
            url: '/pages/button/index',
          });
        }}
      >
        Button
      </Button>
    </View>
  );
};

export default IndexPage;
