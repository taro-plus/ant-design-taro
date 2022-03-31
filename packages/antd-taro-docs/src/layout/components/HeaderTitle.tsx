import Logo from '@/assets/favicon.svg';
import { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';
import { Link } from 'react-router-dom';

const HeaderTitle: ProLayoutProps['headerTitleRender'] = () => {
  return (
    <Link className="flex items-center" to="/">
      <img src={Logo} alt="logo" className="w-10 mr-2" style={{ height: '2.5rem' }} />

      <span className="font-medium text-lg text-black">Ant Design Taro</span>
    </Link>
  );
};

export default HeaderTitle;
