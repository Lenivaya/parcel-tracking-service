import { FC } from 'react'
import type { ParcelCardItemFragment } from '@/lib'
import { ParcelCard } from '@/components/tracking-service/parcels'
import { isNone, isSome, Option } from '@/lib/types'

export type ParcelCardListProps = {
  parcels: Option<ParcelCardItemFragment[]>
}

export const ParcelCardList: FC<ParcelCardListProps> = ({ parcels }) => {
  if (isNone(parcels))
    return (
      <p className={'m-auto p-10 text-center font-bold'}>No parcels found :(</p>
    )

  const parcelsSorted = [...parcels].sort(
    (a, b) =>
      new Date(b.currentStatus?.date || b.updatedAt).getTime() -
      new Date(a.currentStatus?.date || b.updatedAt).getTime()
  )

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {parcelsSorted.map((parcel) => (
        <ParcelCard parcel={parcel} key={parcel.id} />
      ))}
    </div>
  )
}
