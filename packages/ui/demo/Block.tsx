import { View } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

export const Block: FC<{ children: ReactNode; title: string }> = ({ children, title }) => {
  return (
    <View>
      {title} {children}
    </View>
  );
};
