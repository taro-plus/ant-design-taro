import { ConfigProvider } from 'antd';
import type { FC } from 'react';
import Layout from './layout';

const App: FC = () => {
  return (
    <ConfigProvider>
      <Layout />
    </ConfigProvider>
  );
};

export default App;
