import { View } from '@tarojs/components';
import { DemoBlock } from 'antd-taro-demo/src/components';
import { Button, Space } from '../../../index';

export default function () {
  return (
    <View>
      <DemoBlock title="自定义图标">
        <Button>
          <Space>
            <span>搜索</span>
          </Space>
        </Button>
      </DemoBlock>

      <DemoBlock title="形状">
        <Space wrap>
          <Button shape="default" color="primary">
            Default Button
          </Button>
          <Button block shape="rounded" color="primary">
            Rounded Button
          </Button>
          <Button block shape="rectangular" color="primary">
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="加载状态">
        <Space wrap>
          <Button loading color="primary" loadingText="正在加载">
            Loading
          </Button>
          <Button loading>Loading</Button>
          <Button>Auto Loading</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color="primary">
            Disabled
          </Button>
        </Space>
      </DemoBlock>
    </View>
  );
}
