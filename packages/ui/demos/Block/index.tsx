import { View } from '@tarojs/components';
import type { FC, ReactNode } from 'react';
import './index.less';

interface BlockProps {
  title: string;
  padding?: string;
  background?: string;
  children?: ReactNode;
}

export const Block: FC<BlockProps> = (props) => {
  return (
    <View className="demo-block">
      <View className="title">{props.title}</View>
      <View
        className="main"
        style={{
          padding: props.padding,
          background: props.background,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

Block.defaultProps = {
  padding: '12px 12px',
  background: 'var(--adt-color-background)',
};
