import type { AppProps } from 'next/app'

import { storeWrapper } from "../store"
import GlobalStyle from '../styles/global/globalStyles'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default storeWrapper.withRedux(MyApp);
