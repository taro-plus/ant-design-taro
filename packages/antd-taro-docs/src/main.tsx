import { routes } from '@/routes';
import '@/style/index.css';
import ProProvider from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.variable.min.css';
import { FC, useContext } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

const Element: FC = () => useRoutes(routes);

const App: FC = () => {
  const proComponentContext = useContext(ProProvider);

  return (
    <ConfigProvider>
      <ProProvider.Provider value={proComponentContext}>
        <Element />
      </ProProvider.Provider>
    </ConfigProvider>
  );
};

const RootContainer = document.getElementById('root');

if (RootContainer) {
  const root = ReactDOMClient.createRoot(RootContainer);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
