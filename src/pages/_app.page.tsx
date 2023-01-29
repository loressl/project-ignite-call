import '../lib/dayjs'

import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { globalStyles } from '../styles/global'
import { queryClient } from '../lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
})

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={roboto.className}>
        <SessionProvider session={session}>

          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'pt_BR',
              url: 'https://ignite-call.rocketseat.com.br',
              siteName: 'Ignite Call',
            }}
          />

          <Component {...pageProps} />
        </SessionProvider>
      </div>

    </QueryClientProvider>
  )
}
