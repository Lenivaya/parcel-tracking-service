'use client'

import { Loader } from '@/components/tracking-service/generic/Loading'
import { Suspense } from 'react'
import { isNone } from '@/lib/types'
import { useGetParcelForPageSuspenseQuery } from '@/lib'
import { ParcelPage } from '@/components/tracking-service/parcels'

export default function OneParcelPage({ params }: { params: { id: string } }) {
  return (
    <div className={'p-5 min-h-svh'}>
      <Suspense fallback={<Loader />}>
        <ParcelPageSuspense parcelId={params.id} />
      </Suspense>
    </div>
  )
}

const ParcelPageSuspense = ({ parcelId }: { parcelId: string }) => {
  const { data } = useGetParcelForPageSuspenseQuery({
    variables: { id: parcelId }
  })
  const parcel = data?.parcels?.nodes?.[0]

  return isNone(parcel) || <ParcelPage parcel={parcel} />
}
