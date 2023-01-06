import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  markdown: string;
  className?: string;
}

export const Markdown = ({ markdown, className }: Props): JSX.Element => {
  const markdownText = markdown.replace(/\n/g, '  \n');

  return (
    <div className={clsx('react-markdown', className)}>
      <ReactMarkdown
        children={markdownText}
        components={{
          code({ inline, className, children, ...props }) {
            const matchLang = /language-(\w+)/.exec(className || '');
            const fileName = (className || '').replace(/language-(\w+):?/, '');

            return (
              <div className='rounded-md bg-zinc-700 px-5 py-3'>
                {fileName && (
                  <div className='mb-4'>
                    <span className='inline-block underline underline-offset-8 opacity-50'>
                      {fileName}
                    </span>
                  </div>
                )}

                {!inline && matchLang ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={vscDarkPlus}
                    language={matchLang[1]}
                    PreTag='div'
                  />
                ) : (
                  <code
                    className={className}
                    {...props}
                  >
                    {children}
                  </code>
                )}
              </div>
            );
          },
        }}
      />
    </div>
  );
};
