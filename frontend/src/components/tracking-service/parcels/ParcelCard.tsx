import { gql } from '@apollo/client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import type { FC } from 'react'
import { ParcelCardItemFragment } from '@/lib'
import { ArrowUp, Clock, PackageIcon } from 'lucide-react'
import { formatMoney } from '@/lib/money'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { truncate } from '@/lib/strings'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { dateFormatterWithHours } from '@/components/tracking-service/generic/dates'

export const ParcelCardFragment = gql`
  fragment ParcelCardItem on Parcel {
    id
    parcelInfo {
      id
      deliveryDestinationAddress
      deliverySourceAddress
      description
      priceToPay
      parcelContentPrice
    }

    currentStatus {
      id
      statusDescription
      updatedAt
    }

    updatedAt
  }
`

export type ParcelCardProps = {
  parcel: ParcelCardItemFragment
}

export const ParcelCard: FC<ParcelCardProps> = ({ parcel }) => {
  const handleCopyParcelId = async () => {
    await navigator.clipboard.writeText(parcel.id)
    toast({
      title: 'Parcel ID copied to clipboard',
      duration: 750
    })
  }

  console.log(parcel.currentStatus?.updatedAt)

  return (
    <Card className='flex flex-col justify-between max-w-80 w-80 !max-h-[26rem]'>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <PackageIcon className={'hover:scale-150 cursor-pointer'} />
            <AppTooltip text={parcel.parcelInfo.description}>
              <p>{truncate(parcel.parcelInfo.description, 20)}</p>
            </AppTooltip>
          </div>

          <button className={'mt-5'} onClick={handleCopyParcelId}>
            <p className='text-[13.5px]  font-light'>{parcel.id}</p>
          </button>
        </CardTitle>
      </CardHeader>

      <Separator className='mb-3' />

      {isSome(parcel.currentStatus) && (
        <div className='flex items-center space-x-4 rounded-md border m-3 p-3'>
          <div className='flex-1 space-y-1'>
            <p className='text-sm font-medium leading-none'>Current status:</p>
            <p className='text-sm text-muted-foreground'>
              <p>{parcel.currentStatus?.statusDescription}</p>
            </p>
          </div>
        </div>
      )}

      <CardContent className='flex-col'>
        <ParcelCardDeliveryPath {...parcel.parcelInfo} />
      </CardContent>

      <CardFooter className={'flex flex-col'}>
        <div className={'flex flex-col justify-between'}>
          <ParcelCardPrice
            price={parcel.parcelInfo.priceToPay}
            label={'Price to pay'}
          />

          <ParcelCardPrice
            price={parcel.parcelInfo.parcelContentPrice}
            label={'Parcel content price'}
          />
        </div>

        <div className={'mt-5 text-sm'}>
          <p>
            <AppTooltip text={'Last updated'}>
              <div className={'flex flex-row gap-3'}>
                <Clock className={'w-5'} />
                <span>
                  {dateFormatterWithHours(
                    new Date(
                      parcel.currentStatus?.updatedAt ?? parcel.updatedAt
                    )
                  )}
                </span>
              </div>
            </AppTooltip>
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

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

export const ParcelCardPrice: FC<{ price: number; label: string }> = ({
  price,
  label
}) => (
  <p className='text-sm'>
    {label}
    <span className='mr-2'>:</span>
    <span className='font-bold'>{formatMoney(price)}</span>
    <span> USD</span>
  </p>
)
