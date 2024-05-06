import { FC } from 'react'
import { ParcelPageStatusesListItemFragment } from '@/lib'
import { ParcelPageStatusBlock } from '@/components/tracking-service/parcels/ParcelPage/ParcelPageStatusBlock'
import { gql } from '@apollo/client'

const ParcelPageStatusesListFragment = gql`
  fragment ParcelPageStatusesListItem on Parcel {
    parcelStatusHistory {
      ...ParcelPageStatusBlockItem
    }
  }
`

export const ParcelPageStatusesList: FC<ParcelPageStatusesListItemFragment> = ({
  parcelStatusHistory
}) => (
  <div className='flex flex-col justify-between w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mx-auto my-auto'>
    {parcelStatusHistory.map((status, idx) => (
      <div className='mx-auto my-auto w-full' key={status.id}>
        <ParcelPageStatusBlock
          key={status.id}
          status={status}
          isCurrent={idx === 0}
        />
      </div>
    ))}
  </div>
)
