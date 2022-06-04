import { View,Button } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';

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
