import type { AppProps } from 'next/app';

import { Layout } from '@/page-components/layout';
import { ContextWrapper } from '@/lib/store/context';
import "../styles/scss/style.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </Layout>
  )
}

export default MyApp
