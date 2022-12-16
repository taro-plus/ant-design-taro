import { Block } from '@/components';
import { Text, View } from '@tarojs/components';
import { Button, Icon, Space } from 'antd-taro';
import { sleep } from 'antd-taro/utils/sleep';

export default function () {
  return (
    <View>
      <Block title="自定义图标">
        <Button>
          <Space align="center">
            <Icon name="search" />
            <Text>搜索</Text>
          </Space>
        </Button>
      </Block>

      <Block title="形状">
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
      </Block>

      <Block title="加载状态">
        <Space wrap>
          <Button loading color="primary" size="mini" loadingText="正在加载">
            Loading
          </Button>
          <Button loading color="primary" size="small" loadingText="正在加载">
            Loading
          </Button>
          <Button loading color="primary" loadingText="正在加载">
            Loading
          </Button>
          <Button loading color="primary" size="large" loadingText="正在加载">
            Loading
          </Button>

          <Button loading>Loading</Button>
          <Button
            loading="auto"
            onClick={async () => {
              await sleep(1500);
            }}
          >
            Auto Loading
          </Button>
        </Space>
      </Block>

      <Block title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color="primary">
            Disabled
          </Button>
        </Space>
      </Block>
    </View>
  );
}
