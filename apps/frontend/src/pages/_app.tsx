import '@/styles/globals.css';
import { ApolloProvider } from '@apollo/client';

import { Head } from '@/components/Head';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <>
      <Head />

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
