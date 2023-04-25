import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className='overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
