import type { AppProps } from 'next/app'

import { storeWrapper } from "../store";


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default storeWrapper.withRedux(MyApp);
