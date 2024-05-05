'use client'

import { type FC, Suspense } from 'react'
import { gql } from '@apollo/client'
import { ParcelCardList } from '@/components/tracking-service/Parcels'
import { useGetParcelsSuspenseQuery } from '@/lib'

export const GET_PARCELS = gql`
  query GetParcels {
    parcels {
      nodes {
        ...ParcelCardItem
      }
    }
  }
`

export const HomePage: FC = () => {
  const { data } = useGetParcelsSuspenseQuery()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ParcelCardList parcels={data?.parcels?.nodes} />
    </Suspense>
  )
}
