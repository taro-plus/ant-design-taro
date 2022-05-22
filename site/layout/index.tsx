import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ProLayout route>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  );
};

export default Layout;
