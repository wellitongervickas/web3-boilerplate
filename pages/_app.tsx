import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

import appConfig from '@app.config'
import head from '@modules/utils/head'

import { LayoutDefault } from '@components/layouts/Default'
import useDappInitializer from '@modules/hooks/useDappInitializer'

export default function App({ Component, pageProps }: AppProps) {
  useDappInitializer()

  return (
    <>
      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      </style>
      <Head>
        <title>{head.parseTitle(appConfig.name, pageProps)}</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='description'
          content={pageProps.description || appConfig.meta.description}
        />
      </Head>
      <LayoutDefault className={'h-full bg-gray-900'}>
        <Component {...pageProps} />
      </LayoutDefault>
    </>
  )
}
