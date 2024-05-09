import { Button, Input, toast, ToastAction } from '@/components/ui'
import React, { useCallback, useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import { useGetParcelForSearchLazyQuery } from '@/lib'
import { isNone, isSome } from '@/lib/types'
import { Loader } from '@/components/tracking-service/generic/Loading'
import { trackedParcelsIds } from '@/lib/graphql/ApolloClient/cache/policies/trackedParcelIdsTypePolicy'
import { Link } from 'next-view-transitions'

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
    toast({
      title: 'Parcel search',
      description: `Parcel was added to tracking list`,
      action: (
        <Link href={'/parcels/' + parcelId}>
          <ToastAction altText='Goto schedule to undo'>View</ToastAction>
        </Link>
      )
    })
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
        className={'truncate'}
        value={searchInput}
        type='text'
        placeholder='Id of parcel you want to track'
        onChange={onInputChange}
      />
      <Button type='submit' onClick={onSearchButtonClick}>
        Track parcel
      </Button>
    </div>
  )
}
