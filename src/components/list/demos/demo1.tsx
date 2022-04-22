/**
 * demoUrl: /pages/list/index?id=demo1
 */
import { Switch } from '@tarojs/components';
import { Icon, List } from 'antd-taro';
import React from 'react';

export default () => {
  return (
    <>
      <List header="基础用法">
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item>3</List.Item>
      </List>

      <List header="可点击的功能列表">
        <List.Item prefix={<Icon name="setting" />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<Icon name="setting" />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<Icon name="setting" />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

      <List header="复杂布局">
        <List.Item extra={<Switch />}>新消息通知</List.Item>
        <List.Item extra="未开启" clickable>
          大字号模式
        </List.Item>
        <List.Item description="管理已授权的产品和设备" clickable>
          授权管理
        </List.Item>
        <List.Item title="副标题信息A" description="副标题信息B" clickable>
          这里是主信息
        </List.Item>
      </List>

      <List header="列表项禁用">
        <List.Item disabled clickable prefix={<Icon name="setting" />}>
          账单
        </List.Item>
        <List.Item disabled prefix={<Icon name="setting" />}>
          总资产
        </List.Item>
      </List>
    </>
  );
};
