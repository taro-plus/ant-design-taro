import { ConfigProvider } from 'antd';
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App: FC = () => {
  const element = useRoutes(routes);

  return <ConfigProvider>{element}</ConfigProvider>;
};

export default App;
