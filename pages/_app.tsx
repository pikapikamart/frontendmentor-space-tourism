import type { AppProps } from 'next/app';
import { Layout } from '@/page-components/layout';
import "../styles/scss/style.scss";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
