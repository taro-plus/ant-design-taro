import { GithubFilled } from '@ant-design/icons';
import { ProLayoutProps } from '@ant-design/pro-layout/es/ProLayout';

const Actions: ProLayoutProps['actionsRender'] = () => {
  return [
    <GithubFilled
      key="GithubFilled"
      onClick={() => {
        window.open('https://github.com/sushi-su/ant-design-taro', '_blank');
      }}
    />,
  ];
};

export default Actions;
