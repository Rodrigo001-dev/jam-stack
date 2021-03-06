import { Provider } from 'urql'
import { client, ssrCache } from '../lib/urql'

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // se eu já fiz uma query pelo lado ServerSide da minha aplicação e eu estiver
  // utilizando os mesmos dados dessa query no clientSide ele não faz a query de
  // novo
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  
  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
