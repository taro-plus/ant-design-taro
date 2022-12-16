import { useRouter } from '@tarojs/taro';

export const useShowDemo = (id: string): boolean => {
  const router = useRouter();

  return !router.params?.id || router.params.id === id;
};
