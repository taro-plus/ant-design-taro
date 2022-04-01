import { Button } from '@antd-taro';
import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import './index.less';

const IndexPage = () => {
  return (
    <View
      onClick={async () => {
        await navigateTo({ url: '/pages/demo/index' });
      }}
    >
      <Button>Button 按钮</Button>
    </View>
  );
};

export default IndexPage;
