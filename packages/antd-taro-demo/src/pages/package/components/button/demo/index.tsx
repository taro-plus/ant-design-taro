import { View } from '@tarojs/components';
import { FC } from 'react';
import ButtonDemo1 from './demo1';

definePageConfig({
  navigationBarTitleText: 'Button 按钮',
});

const ButtonPage: FC = () => {
  return (
    <View>
      <ButtonDemo1 />
    </View>
  );
};

export default ButtonPage;
