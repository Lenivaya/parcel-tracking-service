import { GeneralDeliveryState, ParcelProgressItemFragment } from '@/lib'
import type { FC } from 'react'
import { isNone, Option } from '@/lib/types'
import { Progress } from '@/components/ui'
import { clsx } from 'clsx'
import { gql } from '@apollo/client'

export const ParcelProgressFragment = gql`
  fragment ParcelProgressItem on Parcel {
    currentStatus {
      deliveryStatus {
        generalDeliveryState
      }
    }
  }
`

const DELIVERY_STATES: GeneralDeliveryState[] = [
  'PREPARING',
  'SENT',
  'IN_TRANSIT',
  'DELIVERED'
]

const stateToProgress = (state: Option<GeneralDeliveryState>) =>
  isNone(state) || state === 'RETURNED'
    ? 100
    : (DELIVERY_STATES.indexOf(state) / (DELIVERY_STATES.length - 1)) * 100

export const ParcelDeliveryProgress: FC<ParcelProgressItemFragment> = ({
  currentStatus
}) => {
  const deliveryState = currentStatus?.deliveryStatus?.generalDeliveryState
  const progress = stateToProgress(deliveryState)

  if (isNone(deliveryState)) return null

  return (
    <div className={'m-2'}>
      <Progress
        indicatorColor={clsx('bg-green-400', {
          '!bg-green-600': progress >= 100 && deliveryState != 'RETURNED',
          '!bg-red-500': deliveryState === 'RETURNED'
        })}
        value={progress}
        className={clsx('w-[60%] m-auto')}
      />
    </div>
  )
}
