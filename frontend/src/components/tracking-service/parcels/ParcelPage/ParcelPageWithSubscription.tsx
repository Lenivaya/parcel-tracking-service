import { gql } from '@apollo/client'
import {
  GetParcelForPageDocument,
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
  const { data: queryData } = useGetParcelForPageSuspenseQuery({
    variables: { parcelId }
  })
  const parcel = queryData?.parcelById

  useParcelStatusUpdatesSubscription({
    variables: { parcelId },
    onData: ({ data: { data: subscriptionData }, client: { cache } }) => {
      const newStatus = subscriptionData?.parcelStatusUpdated
      if (isNone(newStatus)) return

      cache.writeQuery({
        query: GetParcelForPageDocument,
        data: {
          parcelById: {
            ...parcel,
            parcelStatusHistory: [
              newStatus,
              ...(parcel?.parcelStatusHistory ?? [])
            ]
          }
        }
      })
    }
  })

  return <ParcelPage parcel={parcel} />
}
