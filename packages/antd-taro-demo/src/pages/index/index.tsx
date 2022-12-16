import { View } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { Button } from 'antd-taro';
import type { FC } from 'react';

const PageIndex: FC = () => {
  return (
    <View className="index">
      <Button
        onClick={() =>
          navigateTo({
            url: '/pages/button/index',
          })
        }
      >
        按钮
      </Button>
    </View>
  );
};

export default PageIndex;
