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
import { PackageIcon } from 'lucide-react'
import { formatMoney } from '@/lib/money'

export const ParcelCardFragment = gql`
  fragment ParcelCardItem on Parcel {
    id
    parcelInfo {
      deliveryDestinationAddress
      description
      priceToPay
      parcelContentPrice
    }
  }
`

export type ParcelCardProps = {
  parcel: ParcelCardItemFragment
}

export const ParcelCard: FC<ParcelCardProps> = ({ parcel }) => {
  return (
    <Card className='max-w-70 w-70 h-80'>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <PackageIcon />
            <p>{parcel.parcelInfo.description}</p>
          </div>
          <p className='text-sm font-light mt-5'>{parcel.id}</p>
        </CardTitle>
      </CardHeader>

      <Separator className='mb-5' />

      <CardContent>{parcel.parcelInfo.deliveryDestinationAddress}</CardContent>
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
