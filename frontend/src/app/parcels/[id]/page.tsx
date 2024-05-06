'use client'

import { Loader } from '@/components/tracking-service/generic/Loading'
import { Suspense } from 'react'
import { ParcelPageWithSubscription } from '@/components/tracking-service/parcels'

export default function OneParcelPage({ params }: { params: { id: string } }) {
  return (
    <div className={'p-5 min-h-svh'}>
      <Suspense fallback={<Loader />}>
        <ParcelPageWithSubscription parcelId={params.id} />
      </Suspense>
    </div>
  )
}
