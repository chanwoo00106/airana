import { Spot } from '@types'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
  spot: Spot
}

const SmallCard: NextPage<Props> = ({ spot }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative w-16 h-16">
        <Image src={spot.img} alt="img" layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h2>{spot.location}</h2>
        <h3 className="text-gray-500">{spot.distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
