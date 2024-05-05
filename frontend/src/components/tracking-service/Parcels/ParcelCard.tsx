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
import { Copy, PackageIcon } from 'lucide-react'
import { formatMoney } from '@/lib/money'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'

export const ParcelCardFragment = gql`
  fragment ParcelCardItem on Parcel {
    id
    parcelInfo {
      deliveryDestinationAddress
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
    <Card className='max-w-80 w-80 h-80'>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <PackageIcon />
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
        {parcel.parcelInfo.deliveryDestinationAddress}
      </CardContent>
      <CardFooter className={'flex flex-col justify-between'}>
        <ParcelCardPrice price={parcel.parcelInfo.priceToPay} />
        <ParcelCardPrice price={parcel.parcelInfo.parcelContentPrice} />
      </CardFooter>
    </Card>
  )
}

export const ParcelCardPrice: FC<{ price: number }> = ({ price }) => {
  return (
    <p className='text-sm'>
      <span className='font-bold'>{formatMoney(price)}</span>
      <span> USD</span>
    </p>
  )
}
