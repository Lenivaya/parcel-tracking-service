import { FC } from 'react'
import { ParcelPageStatusBlockItemFragment } from '@/lib'
import { isNone } from '@/lib/types'
import { clsx } from 'clsx'
import {
  AppTooltip,
  dateFormatter,
  dateFormatterWithHours
} from '@/components/tracking-service/generic'
import { ClockIcon } from 'lucide-react'
import { gql } from '@apollo/client'
import { Separator } from '@/components/ui'

const ParcelPageStatusBlockFragment = gql`
  fragment ParcelPageStatusBlockItem on ParcelStatus {
    id
    date
    statusDescription
    deliveryStatus {
      generalDeliveryState
    }
  }
`

export const ParcelPageStatusBlock: FC<{
  status: ParcelPageStatusBlockItemFragment
  isCurrent?: boolean
}> = ({ status, isCurrent }) => {
  if (isNone(status)) return null

  const statusString = isCurrent ? 'Current' : 'Previous'
  const date = new Date(status.date)

  return (
    <div
      className={clsx(
        'flex max-md:items-start items-center rounded-md border m-3 p-3 relative max-md:flex-col',
        {
          'border-green-500 bg-green-50':
            status?.deliveryStatus?.generalDeliveryState === 'DELIVERED',
          'border-red-500 bg-red-50':
            status?.deliveryStatus?.generalDeliveryState === 'RETURNED'
        }
      )}
    >
      <div className='flex-1 space-y-1'>
        <p className='text-sm font-medium leading-none'>
          {statusString} status:
        </p>
        <p className='text-sm text-muted-foreground'>
          <p>{status.statusDescription}</p>
        </p>
      </div>

      <Separator className='hidden max-md:block my-3' />

      <div className='absolute right-5 flex gap-2 justify-center max-md:static'>
        <AppTooltip text={dateFormatterWithHours(date)}>
          <ClockIcon className={'w-4 my-auto hover:scale-150'} />
        </AppTooltip>
        <p className='text-sm text-muted-foreground my-auto max-md:text-xs'>
          {dateFormatter(date)}
        </p>
      </div>
    </div>
  )
}
