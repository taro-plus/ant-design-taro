import { ProLayout } from '@ant-design/pro-components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ProLayout>
      <Outlet />
    </ProLayout>
  );
};

export default Layout;
