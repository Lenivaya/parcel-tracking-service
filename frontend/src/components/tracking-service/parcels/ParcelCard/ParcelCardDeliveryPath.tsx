import type { FC } from 'react'
import { ParcelCardItemFragment } from '@/lib'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { truncate } from '@/lib/strings'
import { ArrowUp } from 'lucide-react'

export const ParcelCardDeliveryPath: FC<
  Pick<
    ParcelCardItemFragment['parcelInfo'],
    'deliveryDestinationAddress' | 'deliverySourceAddress'
  > & { maxAddressLength?: number }
> = ({
  deliveryDestinationAddress,
  deliverySourceAddress,
  maxAddressLength = 30
}) => {
  return (
    <div className={'flex flex-col text-center gap-3'}>
      <AppTooltip text={deliveryDestinationAddress}>
        <p>{truncate(deliveryDestinationAddress, maxAddressLength)}</p>
      </AppTooltip>
      <ArrowUp className={'mx-auto my-auto'} />
      <AppTooltip text={deliverySourceAddress}>
        <p>{truncate(deliverySourceAddress, maxAddressLength)}</p>
      </AppTooltip>
    </div>
  )
}
