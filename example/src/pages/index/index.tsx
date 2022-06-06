import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { Button } from 'antd-taro/index';

definePageConfig({
  navigationBarTitleText: '首页',
});

const Index = () => {
  return (
    <View>
      <Button
        onClick={async () => {
          console.log(1);
          await navigateTo({ url: '/pages/button/index' });
        }}
      >
        Hello world!
      </Button>
    </View>
  );
};

export default Index;
