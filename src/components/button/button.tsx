import type { ButtonProps } from '@tarojs/components';
import { Button as TaroButton } from '@tarojs/components';
import type { FC } from 'react';

export const Button: FC<ButtonProps> = (p) => {
  return <TaroButton {...p} />;
};
