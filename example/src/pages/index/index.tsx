import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { Button } from 'antd-taro';

definePageConfig({
  navigationBarTitleText: '首页',
});

const Index = () => {
  return (
    <View>
      <Button
        onClick={async () => {
          await navigateTo({ url: '/pages/button/index' });
        }}
      >
        Hello world!
      </Button>
    </View>
  );
};

export default Index;
