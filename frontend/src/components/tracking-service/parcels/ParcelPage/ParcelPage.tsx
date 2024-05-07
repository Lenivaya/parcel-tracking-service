import { gql } from '@apollo/client'
import React, { FC, useEffect, useMemo } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  toast
} from '@/components/ui'
import { AppTooltip } from '@/components/tracking-service/generic'
import { truncate } from '@/lib/strings'
import {
  ParcelCardPrice,
  ParcelDeliveryPath
} from '@/components/tracking-service/parcels'
import { ParcelPageItemFragment } from '@/lib'
import { PackageIcon } from 'lucide-react'
import { clsx } from 'clsx'
import {
  ParcelPageStatusesList,
  ParcelQrCodeDrawer
} from '@/components/tracking-service/parcels/ParcelPage'
import { isNone, Option } from '@/lib/types'

const GET_PARCEL_FOR_PAGE = gql`
  query GetParcelForPage($parcelId: UUID!) {
    parcelById(parcelId: $parcelId) {
      ...ParcelPageItem
    }
  }
`

export const ParcelPageFragment = gql`
  fragment ParcelPageItem on Parcel {
    id
    parcelInfo {
      id
      description
      priceToPay
      parcelContentPrice
    }

    parcelStatusHistory {
      updatedAt
    }
    updatedAt

    ...ParcelPageStatusesListItem
    ...ParcelQrCodeDrawerItem
    ...ParcelDeliveryPathItem
  }
`

export type ParcelPageProps = {
  parcel: ParcelPageItemFragment
  subscribeToUpdates?: () => void
}

export const ParcelPage: FC<ParcelPageProps> = ({
  parcel,
  subscribeToUpdates
}) => {
  const statusHistory = useMemo(() => {
    return [...parcel.parcelStatusHistory].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  }, [parcel.parcelStatusHistory])
  const currentStatus = useMemo(() => statusHistory.at(0), [statusHistory])

  useEffect(() => {
    subscribeToUpdates?.()
  }, [])

  const handleCopyParcelId = async () => {
    await navigator.clipboard.writeText(parcel.id)
    toast({
      title: 'Parcel ID copied to clipboard',
      duration: 750
    })
  }

  return (
    <Card className={'h-max'}>
      <CardHeader>
        <CardTitle className={'relative'}>
          <div className='absolute left-0 flex justify-center gap-3 my-auto'>
            <AppTooltip text={currentStatus?.statusDescription ?? ''}>
              <PackageIcon
                className={clsx('my-auto hover:scale-150 cursor-pointer', {
                  'text-green-500':
                    currentStatus?.deliveryStatus?.generalDeliveryState ===
                    'DELIVERED',
                  'text-red-500':
                    currentStatus?.deliveryStatus?.generalDeliveryState ===
                    'RETURNED'
                })}
              />
            </AppTooltip>

            <AppTooltip text={parcel.id}>
              <button className={'my-auto'} onClick={handleCopyParcelId}>
                <p className='text-[14px] font-light max-lg:hidden'>
                  {parcel.id}
                </p>
              </button>
            </AppTooltip>
          </div>

          <AppTooltip text={parcel.parcelInfo.description}>
            <p className={'text-center z-10'}>
              {truncate(parcel.parcelInfo.description, 70)}
            </p>
          </AppTooltip>

          <div className='absolute m-auto right-0 top-1'>
            <AppTooltip text={'Create qr code for the parcel'}>
              <ParcelQrCodeDrawer {...parcel} />
            </AppTooltip>
          </div>
        </CardTitle>
      </CardHeader>

      <Separator />

      <CardContent className={'mt-5'}>
        <ParcelDeliveryPath {...parcel} maxAddressLength={80} />

        <Separator className='my-5' />

        <div className='flex items-center justify-center'>
          <div className={'flex flex-col justify-center'}>
            <ParcelCardPrice
              price={parcel.parcelInfo.priceToPay}
              label={'Price to pay'}
            />

            <ParcelCardPrice
              price={parcel.parcelInfo.parcelContentPrice}
              label={'Parcel content price'}
            />
          </div>
        </div>

        <Separator className='my-5' />
      </CardContent>

      <CardFooter>
        <ParcelPageStatusesList parcelStatusHistory={statusHistory} />
      </CardFooter>
    </Card>
  )
}
