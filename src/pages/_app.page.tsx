import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '../styles/global'

globalStyles()

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
})

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <div className={roboto.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}
