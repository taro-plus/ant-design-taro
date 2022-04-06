import { View } from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';
import styles from './index.modules.less';

console.log(styles);
interface Props {
  title: string;
  padding?: string;
  border?: string;
  background?: string;
}

export const DemoBlock: FC<Props> = (props) => {
  return (
    <View className={styles.demoBlock}>
      <View className={styles.title}>{props.title}</View>
      <View
        className={styles.main}
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
