import { useGetParcelForPageQuery } from '@/lib'
import { Suspense } from 'react'
import { isNone } from '@/lib/types'
import { ParcelPage } from '@/components/tracking-service/parcels/ParcelPage/ParcelPage'

export const ParcelPageSuspense = ({ parcelId }: { parcelId: string }) => {
  const { data } = useGetParcelForPageQuery({ variables: { id: parcelId } })

  const parcel = data?.parcels?.nodes?.[0]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isNone(parcel) || <ParcelPage parcel={parcel} />}
    </Suspense>
  )
}
