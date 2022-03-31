import ReactMarkdown from 'react-markdown';
import Md from './index.md?raw';

const QuickStartPage = () => {
  return <ReactMarkdown>{Md}</ReactMarkdown>;
};

export default QuickStartPage;
