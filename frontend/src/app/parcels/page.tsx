'use client'

import { gql } from '@apollo/client'
import { useGetParcelsSuspenseQuery } from '@/lib'
import { Suspense } from 'react'
import { ParcelCardList } from '@/components/tracking-service/parcels'
import { Loader } from '@/components/tracking-service/generic/Loading'

const GET_PARCELS = gql`
  query GetParcels {
    parcels {
      nodes {
        ...ParcelCardItem
      }
    }
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
  const { data } = useGetParcelsSuspenseQuery()
  return <ParcelCardList parcels={data?.parcels?.nodes} />
}
