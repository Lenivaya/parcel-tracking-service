'use client'

import { gql } from '@apollo/client'
import { useGetTrackedParcelsIdsQuery, useGetParcelsSuspenseQuery } from '@/lib'
import { Suspense } from 'react'
import { ParcelCardList } from '@/components/tracking-service/parcels'
import { Loader } from '@/components/tracking-service/generic/Loading'

const GET_PARCELS = gql`
  query GetParcels($trackedParcelsIds: [UUID]!) {
    parcels(where: { id: { in: $trackedParcelsIds } }) {
      nodes {
        ...ParcelCardItem
      }
    }
  }
`

const GET_TRACKED_PARCELS_IDS = gql`
  query GetTrackedParcelsIds {
    trackedParcelsIds @client
  }
`

export default function ParcelsPage() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between max-md:p-5 p-20'>
      <div className='z-10 w-full max-w-5xl items-center justify-between lg:flex'>
        <Suspense fallback={<Loader />}>
          <ParcelsPageCardListSuspense />
        </Suspense>
      </div>
    </main>
  )
}

const ParcelsPageCardListSuspense = () => {
  const { data: trackedParcelsData } = useGetTrackedParcelsIdsQuery()
  const { data } = useGetParcelsSuspenseQuery({
    variables: {
      trackedParcelsIds: trackedParcelsData?.trackedParcelsIds
    }
  })

  return <ParcelCardList parcels={data?.parcels?.nodes} />
}
