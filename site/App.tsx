import { ConfigProvider } from 'antd';
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App: FC = () => {
  const Element: FC = () => useRoutes(routes);

  return (
    <ConfigProvider>
      <Element />
    </ConfigProvider>
  );
};

export default App;
