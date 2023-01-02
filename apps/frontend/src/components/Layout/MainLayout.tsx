import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { Header } from '@/components/Header';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout = (props: Props): JSX.Element => {
  return (
    <>
      <Head title={props.title} />

      <Header />

      <div>{props.children}</div>

      <Footer />
    </>
  );
};
