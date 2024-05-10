import { gql } from '@apollo/client'
import {
  useGetParcelForPageSuspenseQuery,
  useParcelStatusUpdatesSubscription
} from '@/lib'
import { isNone } from '@/lib/types'
import React from 'react'
import { ParcelPage } from '@/components/tracking-service/parcels'

const PARCEL_STATUS_UPDATES_SUBSCRIPTION = gql`
  subscription ParcelStatusUpdates($parcelId: UUID!) {
    parcelStatusUpdated(parcelId: $parcelId) {
      ...ParcelPageStatusBlockItem
      updatedAt
    }
  }
`

export const ParcelPageWithSubscription = ({
  parcelId
}: {
  parcelId: string
}) => {
  const { data: queryData, refetch } = useGetParcelForPageSuspenseQuery({
    variables: { parcelId },
    fetchPolicy: 'cache-and-network'
  })
  const parcel = queryData?.parcelById

  useParcelStatusUpdatesSubscription({
    variables: { parcelId },
    onData: () => {
      refetch()
    }
  })

  return isNone(parcel) || <ParcelPage parcel={parcel} />
}
