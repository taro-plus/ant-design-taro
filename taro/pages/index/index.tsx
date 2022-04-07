import { Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import React from 'react';
import './index.less';

const IndexPage = () => {
  return (
    <View>
      <Text
        onClick={async () => {
          await navigateTo({ url: '/pages/button/index' });
        }}
      >
        Button 按钮
      </Text>
    </View>
  );
};

export default IndexPage;
