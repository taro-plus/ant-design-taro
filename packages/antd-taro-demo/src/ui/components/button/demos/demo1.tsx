import { FC } from 'react';
import { Button } from '../button';

definePageConfig({
  navigationBarTitleText: 'Button',
});

const Demo1: FC = () => {
  return <Button>按钮</Button>;
};

export default Demo1;
