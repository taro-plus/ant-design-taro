import { ProCard } from '@ant-design/pro-components';
import type { FC, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

const DemoComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return <ProCard>{children}</ProCard>;
};

const Code: SpecialComponents['code'] = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');

  if (inline || !match)
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );

  const p: Omit<SyntaxHighlighterProps, 'children'> = {
    language: match[1],
    PreTag: 'div',
    ...props,
    children: String(children).replace(/\n$/, ''),
  };

  const context = String(children).replace(/\n$/, '');

  console.log(context);

  if (context)
    return (
      <DemoComponent>
        <SyntaxHighlighter style={oneLight} {...p}>
          {context}
        </SyntaxHighlighter>
      </DemoComponent>
    );

  return (
    <SyntaxHighlighter style={oneDark} {...p}>
      {context}
    </SyntaxHighlighter>
  );
};

export const MarkDownComponent: FC<{ content: string }> = ({ content }) => {
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
