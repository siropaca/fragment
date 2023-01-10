import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactMarkdown from 'react-markdown';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  markdown: string;
  className?: string;
}

/**
 * Markdown
 */
export const Markdown = ({ markdown, className }: Props): JSX.Element => {
  const markdownText = markdown.replace(/\n/g, '  \n');

  return (
    <div className={clsx('react-markdown', className)}>
      <ReactMarkdown
        children={markdownText}
        components={{
          code: MarkdownCode,
        }}
      />
    </div>
  );
};

/**
 * MarkdownCode
 */
export const MarkdownCode = ({ inline, className, children, ...props }: CodeProps): JSX.Element => {
  const codeText = children.toString().replace(/ {2}\n/g, '\n');
  const matchLang = /language-(\w+)/.exec(className || '');
  const fileName = (className || '').replace(/language-(\w+):?/, '');

  const [showCopied, setShowCopied] = useState(false);

  const handleCopyClick = () => {
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  if (inline) {
    return (
      <code
        className={clsx(
          'inline-block rounded-lg bg-gray-200 px-2 leading-relaxed dark:bg-zinc-700',
          className,
        )}
        {...props}
      >
        {codeText}
      </code>
    );
  }

  return (
    <div className='relative rounded-lg bg-zinc-700 px-5 py-3 leading-normal'>
      <CopyToClipboard
        text={codeText}
        onCopy={handleCopyClick}
      >
        <span className='absolute top-3 right-3 inline-block'>
          {showCopied && <span className='mr-2 opacity-80'>Copied!</span>}
          <FontAwesomeIcon
            icon={faCopy}
            className='cursor-pointer opacity-50 hover:opacity-80'
            size='lg'
          />
        </span>
      </CopyToClipboard>

      {fileName && (
        <div className='mb-4'>
          <span className='inline-block underline underline-offset-8 opacity-50'>{fileName}</span>
        </div>
      )}

      {matchLang ? (
        <SyntaxHighlighter
          children={codeText}
          style={vscDarkPlus}
          // FIXME: tsが本番環境でハイライトされないので一時対応
          language={matchLang[1] === 'ts' ? 'tsx' : matchLang[1]}
          PreTag='div'
        />
      ) : (
        <code
          className={className}
          {...props}
        >
          {codeText}
        </code>
      )}
    </div>
  );
};
