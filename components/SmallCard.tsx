import { Spot } from '@types'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
  spot: Spot
}

const SmallCard: NextPage<Props> = ({ spot }) => {
  return (
    <div className="relative">
      <Image src={spot.img} alt="img" layout="fill" />
    </div>
  )
}

export default SmallCard
