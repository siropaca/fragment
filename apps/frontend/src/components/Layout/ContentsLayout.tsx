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
        <div
          className='mx-auto'
          style={{ maxWidth: CONTENTS_MAX_WIDTH }}
        >
          {props.children}
        </div>
      </div>

      <Footer />
    </>
  );
};
