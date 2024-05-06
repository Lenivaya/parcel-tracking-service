'use client'

import { ParcelPageSuspense } from '@/components/tracking-service/parcels/ParcelPage/ParcelPageSuspense'

export default function ParcelPage({ params }: { params: { id: string } }) {
  return (
    <div className={'p-5 min-h-svh'}>
      <ParcelPageSuspense parcelId={params.id} />
    </div>
  )
}
