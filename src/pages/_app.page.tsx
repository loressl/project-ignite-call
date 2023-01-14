import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

globalStyles()

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  )
}
