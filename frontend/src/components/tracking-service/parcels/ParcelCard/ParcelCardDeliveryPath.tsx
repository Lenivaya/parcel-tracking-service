import type { FC } from 'react'
import { ParcelCardItemFragment } from '@/lib'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { truncate } from '@/lib/strings'
import { ArrowUp } from 'lucide-react'

export const ParcelCardDeliveryPath: FC<
  Pick<
    ParcelCardItemFragment['parcelInfo'],
    'deliveryDestinationAddress' | 'deliverySourceAddress'
  >
> = ({ deliveryDestinationAddress, deliverySourceAddress }) => {
  return (
    <div className={'flex flex-col text-center gap-3'}>
      <AppTooltip text={deliveryDestinationAddress}>
        <p>{truncate(deliveryDestinationAddress, 30)}</p>
      </AppTooltip>
      <ArrowUp className={'mx-auto my-auto'} />
      <AppTooltip text={deliverySourceAddress}>
        <p>{truncate(deliverySourceAddress, 30)}</p>
      </AppTooltip>
    </div>
  )
}
