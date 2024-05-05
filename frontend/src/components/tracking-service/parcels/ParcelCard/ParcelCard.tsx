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
import { Clock, PackageIcon } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { truncate } from '@/lib/strings'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { dateFormatterWithHours } from '@/components/tracking-service/generic/dates'
import {
  ParcelCardDeliveryPath,
  ParcelCardPrice,
  ParcelCardStatus
} from '@/components/tracking-service/parcels/ParcelCard'
import { clsx } from 'clsx'

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
      deliveryStatus {
        generalDeliveryState
      }
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
    <Card className='flex flex-col justify-between max-w-80 w-80 !max-h-[28rem]'>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <PackageIcon
              className={clsx('hover:scale-150 cursor-pointer', {
                'text-green-500':
                  parcel.currentStatus?.deliveryStatus?.generalDeliveryState ===
                  'DELIVERED',
                'text-red-500':
                  parcel.currentStatus?.deliveryStatus?.generalDeliveryState ===
                  'RETURNED'
              })}
            />
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

      <ParcelCardStatus currentStatus={parcel.currentStatus} />

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
