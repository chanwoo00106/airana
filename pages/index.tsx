import Head from 'next/head'
import Header from '@components/Header'
import Banner from '@components/Banner'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Spot } from '@types'
import SmallCard from '@components/SmallCard'

interface Props {
  spots?: Spot[]
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const { data } = await axios.get<Spot[]>('https://links.papareact.com/pyp')
    return {
      props: {
        spots: data
      }
    }
  } catch (e) {
    console.log(e)
  }
  return { props: {} }
}

export default function Home({ spots }: Props) {
  console.log(spots)
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {spots?.map((spot, idx) => (
              <SmallCard spot={spot} key={idx} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
