import { View } from '@tarojs/components';
import Demo1 from 'antd-taro/components/button/demos/demo1';
import Demo2 from 'antd-taro/components/button/demos/demo2';

definePageConfig({ navigationBarTitleText: '按钮' });

const ButtonPage = () => {
  return (
    <View>
      <Demo1 />

      <Demo2 />
    </View>
  );
};

export default ButtonPage;
