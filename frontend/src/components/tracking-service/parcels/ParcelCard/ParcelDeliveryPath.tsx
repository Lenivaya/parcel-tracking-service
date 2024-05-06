import type { FC } from 'react'
import { ParcelDeliveryPathItemFragment } from '@/lib'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { truncate } from '@/lib/strings'
import { ArrowUp } from 'lucide-react'
import { gql } from '@apollo/client'

export const ParcelDeliveryPathFragment = gql`
  fragment ParcelDeliveryPathItem on Parcel {
    parcelInfo {
      deliveryDestinationAddress
      deliverySourceAddress
    }
  }
`

export const ParcelDeliveryPath: FC<
  ParcelDeliveryPathItemFragment & { maxAddressLength?: number }
> = ({
  parcelInfo: { deliveryDestinationAddress, deliverySourceAddress },
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
