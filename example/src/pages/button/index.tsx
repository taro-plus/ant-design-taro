import { View } from '@tarojs/components';
import Demo1 from 'antd-taro/components/button/demos/demo1';

definePageConfig({ navigationBarTitleText: '按钮' });

const ButtonPage = () => {
  return (
    <View>
      <Demo1 />
    </View>
  );
};

export default ButtonPage;
