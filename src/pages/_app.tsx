import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { storeWrapper } from "../store"
import GlobalStyle from '../styles/global/globalStyles'


config.autoAddCss = false
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default storeWrapper.withRedux(MyApp);
