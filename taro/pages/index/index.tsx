import { Text, View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import React from 'react';

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

      <Text
        onClick={async () => {
          await navigateTo({ url: '/pages/icon/index' });
        }}
      >
        Icon 按钮
      </Text>
    </View>
  );
};

export default IndexPage;
