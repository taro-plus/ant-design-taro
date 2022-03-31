import Actions from '@/layout/components/Actions';
import HeaderTitle from '@/layout/components/HeaderTitle';
import { menuRoutes } from '@/routes';
import ProCard from '@ant-design/pro-card';
import { PageContainer, ProLayout } from '@ant-design/pro-layout';
import { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const route = {
  path: '/',
  routes: menuRoutes,
};

const Layout = () => {
  const [pathname, setPathname] = useState('/');

  const navigate = useNavigate();
  const location = useLocation();

  const menuItemRender: ProLayoutProps['menuItemRender'] = (item, dom) => (
    <a
      onClick={() => {
        const path = item?.path ?? '/';
        setPathname(path);
        navigate(path);
      }}
    >
      {dom}
    </a>
  );

  useEffect(() => {
    setPathname(location.pathname);
  }, []);

  return (
    <ProLayout
      route={route}
      layout="mix"
      headerTitleRender={HeaderTitle}
      menuItemRender={menuItemRender}
      location={{ pathname }}
      menu={{
        type: 'group',
      }}
      actionsRender={Actions}
    >
      <PageContainer breadcrumb={undefined}>
        <ProCard>
          <Outlet />
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
};

export default Layout;
