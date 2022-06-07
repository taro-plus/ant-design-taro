import type { ViewProps } from '@tarojs/components';
import { View } from '@tarojs/components';
import type { FC } from 'react';
import './index.less';

interface Props extends ViewProps {
  title: string;
  padding?: string;
  border?: string;
  background?: string;
}

export const DemoBlock: FC<Props> = (props) => {
  return (
    <View className="demo-block">
      <View className="title">{props.title}</View>
      <View
        className="main"
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
};
