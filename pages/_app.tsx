import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from "../components/Header/header"
import FooterComponent from "../components/Footer/footer"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <HeaderComponent />
    <Component {...pageProps} />
    <FooterComponent />
  </>
}

export default MyApp
