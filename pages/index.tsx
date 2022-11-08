import Head from 'next/head'
import Header from '@components/Header'
import Banner from '@components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirAnA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <p className="font-bold text-9xl flex justify-center items-center h-screen">
        Hello World
      </p>
    </div>
  )
}
