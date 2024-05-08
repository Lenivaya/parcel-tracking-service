import { FC } from 'react'
import type { ParcelCardItemFragment } from '@/lib'
import { ParcelCard } from '@/components/tracking-service/parcels'
import { isSome, Option } from '@/lib/types'

export type ParcelCardListProps = {
  parcels: Option<ParcelCardItemFragment[]>
}

export const ParcelCardList: FC<ParcelCardListProps> = ({ parcels }) => {
  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {isSome(parcels) && parcels.length > 0 ? (
        parcels.map((parcel) => <ParcelCard parcel={parcel} key={parcel.id} />)
      ) : (
        <p className={'m-auto p-10 text-center font-bold'}>
          No parcels found :(
        </p>
      )}
    </div>
  )
}
