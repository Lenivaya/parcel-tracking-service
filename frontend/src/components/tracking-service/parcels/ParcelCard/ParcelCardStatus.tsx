import type { FC } from 'react'
import { ParcelCardStatusItemFragment } from '@/lib'
import { isNone } from '@/lib/types'
import { clsx } from 'clsx'
import { gql } from '@apollo/client'

export const ParcelCardStatusFragment = gql`
  fragment ParcelCardStatusItem on Parcel {
    currentStatus {
      deliveryStatus {
        generalDeliveryState
      }
      statusDescription
    }
  }
`

export const ParcelCardStatus: FC<ParcelCardStatusItemFragment> = ({
  currentStatus
}) => {
  if (isNone(currentStatus)) return null

  return (
    <div
      className={clsx('flex items-center space-x-4 rounded-md border m-3 p-3', {
        'border-green-500 bg-green-50':
          currentStatus?.deliveryStatus?.generalDeliveryState === 'DELIVERED',
        'border-red-500 bg-red-50':
          currentStatus?.deliveryStatus?.generalDeliveryState === 'RETURNED'
      })}
    >
      <div className='flex-1 space-y-1'>
        <p className='text-sm font-medium leading-none'>Current status:</p>
        <p className='text-sm text-muted-foreground'>
          <p>{currentStatus.statusDescription}</p>
        </p>
      </div>
    </div>
  )
}
