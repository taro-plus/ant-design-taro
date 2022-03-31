import { Spin } from 'antd';
import type { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
};

export const Loading: FC = () => <Spin size="large" style={style} />;
