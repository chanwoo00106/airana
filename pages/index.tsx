import Head from 'next/head'
import Header from '@components/Header'
import Banner from '@components/Banner'
import { GetServerSideProps } from 'next'
import api from 'lib/api'

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await api.get('/hello')
    console.log(data)
  } catch (e) {
    console.log('error')
  }
  return { props: {} }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirAnA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  )
}
