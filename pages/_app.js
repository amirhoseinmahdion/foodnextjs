import Layout from '@amirmahdion/components/layout/Layout'
import '@amirmahdion/styles/globals.css'


export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
