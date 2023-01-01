import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ApolloProvider } from '@apollo/client';

import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <>
      <Head />

      <ApolloProvider client={client}>
        <Component {...pageProps} />

        <Footer />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
