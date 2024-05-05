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
import { ArrowUp, PackageIcon, Route } from 'lucide-react'
import { formatMoney } from '@/lib/money'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'

export const ParcelCardFragment = gql`
  fragment ParcelCardItem on Parcel {
    id
    parcelInfo {
      deliveryDestinationAddress
      deliverySourceAddress
      description
      priceToPay
      parcelContentPrice
    }

    currentStatus {
      statusDescription
    }
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

  return (
    <Card className='max-w-80 w-80 min-h-80'>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <PackageIcon className={'hover:scale-150 cursor-pointer'} />
            <p>{parcel.parcelInfo.description}</p>
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

      <CardFooter className={'flex flex-col justify-between'}>
        <ParcelCardPrice
          price={parcel.parcelInfo.priceToPay}
          label={'Price to pay'}
        />

        <ParcelCardPrice
          price={parcel.parcelInfo.parcelContentPrice}
          label={'Parcel content price'}
        />
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
      <p>{deliveryDestinationAddress}</p>
      <ArrowUp className={'mx-auto my-auto'} />
      {deliverySourceAddress}
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