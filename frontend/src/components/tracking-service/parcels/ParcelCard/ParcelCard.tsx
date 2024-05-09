import { gql } from '@apollo/client'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import React, { FC } from 'react'
import {
  ParcelCardItemFragment,
  trackedParcelsIds,
  useGetTrackedParcelsIdsQuery
} from '@/lib'
import { BookX, Clock } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import { truncate } from '@/lib/strings'
import { AppTooltip } from '@/components/tracking-service/generic/AppTooltip'
import { dateFormatterWithHours } from '@/components/tracking-service/generic/dates'
import {
  ParcelCardPrice,
  ParcelCardStatus,
  ParcelDeliveryPath,
  ParcelDeliveryProgress,
  ParcelDeliveryStatusIcon
} from '@/components/tracking-service/parcels'
import { Link } from 'next-view-transitions'
import { isSome } from '@/lib/types'
import { motion } from 'framer-motion'

export const ParcelCardFragment = gql`
  fragment ParcelCardItem on Parcel {
    id
    parcelInfo {
      id
      description
      priceToPay
      parcelContentPrice
    }

    currentStatus {
      date
    }

    updatedAt

    ...ParcelCardStatusItem
    ...ParcelDeliveryPathItem
    ...ParcelProgressItem
  }
`

export type ParcelCardProps = {
  parcel: ParcelCardItemFragment
}

export const ParcelCard: FC<ParcelCardProps> = ({ parcel }) => {
  const { data: trackedParcelsData } = useGetTrackedParcelsIdsQuery()

  const isTracked =
    isSome(trackedParcelsData?.trackedParcelsIds) &&
    trackedParcelsData?.trackedParcelsIds?.includes(parcel.id)

  const handleCopyParcelId = async () => {
    await navigator.clipboard.writeText(parcel.id)
    toast({
      title: 'Parcel ID copied to clipboard',
      duration: 750
    })
  }

  const handleUntrack = () =>
    trackedParcelsIds(trackedParcelsIds().filter((id) => id !== parcel.id))

  return (
    <Card className='flex flex-col justify-between max-w-80 w-80 max-h-full relative'>
      <CardHeader>
        <CardTitle>
          <Link href={'parcels/' + parcel.id}>
            <div className={'flex flex-row gap-3 text-md'}>
              <ParcelDeliveryStatusIcon currentStatus={parcel.currentStatus} />
              <AppTooltip text={parcel.parcelInfo.description}>
                <p>{truncate(parcel.parcelInfo.description, 20)}</p>
              </AppTooltip>
            </div>
          </Link>

          <button className={'mt-5'} onClick={handleCopyParcelId}>
            <p className='text-[13.5px]  font-light'>{parcel.id}</p>
          </button>
        </CardTitle>
      </CardHeader>

      <Separator className='mb-3' />

      <AppTooltip text={parcel.currentStatus?.statusDescription ?? ''}>
        <div>
          <ParcelDeliveryProgress {...parcel} />
        </div>
      </AppTooltip>
      <ParcelCardStatus currentStatus={parcel.currentStatus} />

      <CardContent className='flex-col'>
        <ParcelDeliveryPath {...parcel} />
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
              <div className={'flex justify-center gap-2'}>
                <Clock className={'w-5 my-auto'} />
                <span className={'my-auto'}>
                  {dateFormatterWithHours(
                    new Date(parcel.currentStatus?.date ?? parcel.updatedAt)
                  )}
                </span>
              </div>
            </AppTooltip>
          </p>
        </div>
      </CardFooter>

      {isTracked && (
        <AppTooltip text={'Untrack'}>
          <motion.div
            onClick={handleUntrack}
            className='absolute bottom-3 right-3 cursor-pointer'
            whileHover={{ scale: 1.6, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <BookX />
          </motion.div>
        </AppTooltip>
      )}
    </Card>
  )
}
