import { View } from '@tarojs/components';
import { Button } from 'antd-taro';
import './index.less';

definePageConfig({
  navigationBarTitleText: '首页',
});

const Index = () => {
  return (
    <View className="index">
      <Button>Hello world!</Button>
    </View>
  );
};

export default Index;
