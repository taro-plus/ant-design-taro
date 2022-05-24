import type { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';

const Code: SpecialComponents['code'] = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  console.log(match);
  return !inline && match ? (
    // @ts-ignore
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export const MarkDownComponent: FC<{ content: string }> = ({ content }) => {
  console.log(content);
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: Code,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
