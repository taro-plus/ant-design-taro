/**
 * demoUrl: /pages/button/index?id=demo1
 */

import { View } from '@tarojs/components';
import { Block } from '../../../demos';
import { Button, Space } from '../../../index';

export default function () {
  return (
    <View>
      <Block title="填充模式">
        <Space wrap>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="outline">
            Outline
          </Button>
          <Button color="primary" fill="none">
            None
          </Button>
        </Space>
      </Block>

      <Block title="块级按钮">
        <Button block color="primary" size="large">
          Block Button
        </Button>
      </Block>

      <Block title="按钮尺寸">
        <Space wrap direction="horizontal" align="center">
          <Button size="mini" color="primary">
            Mini
          </Button>
          <Button size="small" color="primary">
            Small
          </Button>
          <Button size="middle" color="primary">
            Middle
          </Button>
          <Button size="large" color="primary">
            Large
          </Button>
        </Space>
      </Block>

      <Block title="语义按钮">
        <Space wrap>
          <Button>Default</Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
        </Space>
      </Block>
    </View>
  );
}
