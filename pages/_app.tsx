import '../styles/globals.css'
import '../styles/global-var.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <Link href="/">
          <h1>あいすのブログ２</h1>
        </Link>
        <p>いろんなことを書くよ</p>
      </header>
      <main>
        <Component {...pageProps} />
        <Sidebar />
      </main>
      <footer>(C)2022 @avaice_</footer>
    </div>
  )
}
