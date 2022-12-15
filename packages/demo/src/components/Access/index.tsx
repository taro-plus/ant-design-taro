import { useRouter } from '@tarojs/taro';
import type { FC, Key, ReactElement } from 'react';

export const Access: FC<{ demoId: Key; children: ReactElement }> = ({ demoId, children }) => {
  const router = useRouter();

  if (!router.params.demoId) {
    return children;
  }

  if (router.params.demoId === demoId) {
    return children;
  }

  return null;
};
