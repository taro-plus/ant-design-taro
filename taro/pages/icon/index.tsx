import { useRouter } from '@tarojs/taro';
import IconDemo1 from 'lib-components/icon/demos/demo1';
import IconDemo2 from 'lib-components/icon/demos/demo2';
import React from 'react';

const IconPage = () => {
  const {
    params: { id = '' },
  } = useRouter();

  if (id === 'demo1') {
    return <IconDemo1 />;
  }

  if (id === 'demo2') {
    return <IconDemo2 />;
  }

  return null;
};

export default IconPage;
