import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { Header } from '@/components/Header';

const CONTENTS_MAX_WIDTH = '1192px';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const ContentsLayout = (props: Props): JSX.Element => {
  return (
    <>
      <Head title={props.title} />

      <Header />

      <div className='bg-gray-50'>
        <main
          className='mx-auto py-6 px-8'
          style={{ maxWidth: CONTENTS_MAX_WIDTH }}
        >
          {props.children}
        </main>
      </div>

      <Footer />
    </>
  );
};
