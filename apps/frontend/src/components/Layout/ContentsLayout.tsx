import { Footer } from '@/components/Footer';
import { HeadProps, Head } from '@/components/Head';
import { Header } from '@/components/Header';

export const CONTENTS_MAX_WIDTH = '1192px';

interface Props extends HeadProps {
  hero?: React.ReactNode;
  children: React.ReactNode;
}

export const ContentsLayout = ({ hero, children, ...headProps }: Props): JSX.Element => {
  return (
    <>
      <Head {...headProps} />

      <Header />

      <div className='bg-gray-50 dark:bg-zinc-900'>
        {hero}

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
