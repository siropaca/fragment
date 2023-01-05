import { Footer, Header } from '@/components/Navigation';
import { HeadProps, Head } from '@/components/Utils';

export const CONTENTS_MAX_WIDTH = '1192px';

interface Props extends HeadProps {
  heroImage?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentsLayout = ({ heroImage, children, ...headProps }: Props): JSX.Element => {
  return (
    <>
      <Head {...headProps} />

      <Header />

      <div className='bg-gray-50 dark:bg-zinc-900'>
        {heroImage}

        <main
          className='mx-auto py-6 px-4 md:px-8'
          style={{ maxWidth: CONTENTS_MAX_WIDTH }}
        >
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
};
