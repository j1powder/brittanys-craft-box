import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';





export default function App({ Component, pageProps }) {
  return <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Arima&display=swap" rel="stylesheet" />
  <SSRProvider>
  <Component {...pageProps} />
  </SSRProvider>
  </>
}
