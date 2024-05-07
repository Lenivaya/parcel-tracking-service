import { Button, Input, toast } from '@/components/ui'
import React, { useCallback, useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import { useGetParcelForSearchLazyQuery } from '@/lib'
import { isNone, isSome } from '@/lib/types'
import { redirect } from 'next/navigation'
import { Loader } from '@/components/tracking-service/generic/Loading'

import { trackedParcelsIds } from '@/lib/graphql/ApolloClient/cache/policies/trackedParcelIdsTypePolicy'

export const GET_PARCEL_FOR_SEARCH_BY_ID = gql`
  query GetParcelForSearch($parcelId: UUID!) {
    parcelById(parcelId: $parcelId) {
      id
    }
  }
`

export const ParcelSearchInputBar = () => {
  const [getParcel, { loading, data, error }] = useGetParcelForSearchLazyQuery()
  const [searchHappened, setSearchHappened] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    if (!searchHappened) return
    if (loading) return

    const parcelId = data?.parcelById?.id
    if (isSome(error) || isNone(parcelId)) {
      toast({
        title: 'Parcel search',
        description: 'Parcel not found'
      })
      return
    }

    trackedParcelsIds([...trackedParcelsIds(), parcelId])
    redirect('/parcels/' + parcelId)
  }, [data, loading, error, searchHappened])

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value)
    },
    []
  )

  const onSearchButtonClick = useCallback(
    async (_event: React.MouseEvent<HTMLButtonElement>) => {
      await getParcel({ variables: { parcelId: searchInput } })
      setSearchHappened(true)
    },
    [getParcel, searchInput]
  )

  if (loading) return <Loader />

  return (
    <div className='flex w-full max-w-md items-center space-x-2'>
      <Input
        value={searchInput}
        type='text'
        placeholder='Id of parcel you want to track'
        onChange={onInputChange}
      />
      <Button type='submit' onClick={onSearchButtonClick}>
        Search parcel
      </Button>
    </div>
  )
}
