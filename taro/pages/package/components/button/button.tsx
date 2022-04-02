import * as Components from '@tarojs/components';
import type { FC } from 'react';
import React from 'react';

export const Button: FC = ({ children }) => {
  return <Components.Button>{children}</Components.Button>;
};
