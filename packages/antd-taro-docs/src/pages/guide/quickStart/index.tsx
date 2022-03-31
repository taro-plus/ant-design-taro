import { MarkDown } from '@/components';
import Md from './index.md?raw';

const QuickStartPage = () => {
  return <MarkDown>{Md}</MarkDown>;
};

export default QuickStartPage;
