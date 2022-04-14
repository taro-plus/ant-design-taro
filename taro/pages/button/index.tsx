import { View } from '@tarojs/components';
import { useRouter } from '@tarojs/taro';
import ButtonDemo1 from 'lib-components/button/demos/demo1';
import ButtonDemo2 from 'lib-components/button/demos/demo2';
import type { FC } from 'react';
import React from 'react';

const ButtonPage: FC = () => {
  const {
    params: { id = '' },
  } = useRouter();
  if (id === 'demo1') {
    return <ButtonDemo1 />;
  }

  if (id === 'demo2') {
    return <ButtonDemo2 />;
  }

  return (
    <View>
      <ButtonDemo1 />

      <ButtonDemo2 />
    </View>
  );
};

export default ButtonPage;
