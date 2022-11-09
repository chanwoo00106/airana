import '../styles/globals.css'
import type { AppProps } from 'next/app'

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   import('../mocks')
// }

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
