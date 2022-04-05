import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { Button } from 'antd-taro';
import React from 'react';
import './index.less';

const IndexPage = () => {
  return (
    <View
      onClick={async () => {
        await navigateTo({ url: '/pages/demo/index' });
      }}
    >
      <Button loading>Button 按钮</Button>
    </View>
  );
};

export default IndexPage;
