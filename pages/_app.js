import '../styles/globals.css'
import HeadTag from './components/HeadTag'
import Navbar from './components/Navbar'


function MyApp({ Component, pageProps }) {
  return <>
    <HeadTag />
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
