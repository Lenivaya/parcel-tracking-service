import type { FC } from 'react'
import type { ParcelCardItemFragment } from '@/lib'
import { ParcelCard } from '@/components/tracking-service/Parcels'
import { isSome, Option } from '@/lib/types'

export type ParcelCardListProps = {
  parcels: Option<ParcelCardItemFragment[]>
}

export const ParcelCardList: FC<ParcelCardListProps> = ({ parcels }) => {
  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {isSome(parcels) &&
        parcels.map((parcel) => <ParcelCard parcel={parcel} key={parcel.id} />)}
    </div>
  )
}
