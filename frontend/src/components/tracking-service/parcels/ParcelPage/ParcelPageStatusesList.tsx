import { FC } from 'react'
import { ParcelPageItemFragment } from '@/lib'
import { ParcelPageStatusBlock } from '@/components/tracking-service/parcels/ParcelPage/ParcelPageStatusBlock'

export const ParcelPageStatusesList: FC<{
  statusHistory: ParcelPageItemFragment['parcelStatusHistory']
}> = ({ statusHistory }) => (
  <div className='flex flex-col justify-between w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mx-auto my-auto'>
    {statusHistory.map((status, idx) => (
      <div className='mx-auto my-auto w-full'>
        <ParcelPageStatusBlock
          key={status.id}
          status={status}
          isCurrent={idx === 0}
        />
      </div>
    ))}
  </div>
)
