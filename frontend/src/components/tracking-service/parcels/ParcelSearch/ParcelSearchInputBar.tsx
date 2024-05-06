import { Button, Input, toast } from '@/components/ui'
import React, { useCallback, useEffect, useState } from 'react'
import { gql } from '@apollo/client'
import { useGetParcelForSearchLazyQuery } from '@/lib'
import { isNone, isSome } from '@/lib/types'
import { redirect } from 'next/navigation'

export const GET_PARCEL_FOR_SEARCH_BY_ID = gql`
  query GetParcelForSearch($id: UUID!) {
    parcels(where: { id: { eq: $id } }) {
      nodes {
        id
      }
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

    const nodes = data?.parcels?.nodes
    const parcel = nodes?.at(0)
    if (
      isSome(error) ||
      isNone(nodes) ||
      isNone(parcel) ||
      nodes.length === 0
    ) {
      toast({
        title: 'Parcel search',
        description: 'Parcel not found'
      })
      return
    }

    redirect('/parcels/' + parcel!.id)
  }, [data, loading, error, searchHappened])

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value)
    },
    []
  )

  const onSearchButtonClick = useCallback(
    async (_event: React.MouseEvent<HTMLButtonElement>) => {
      await getParcel({ variables: { id: searchInput } })
      setSearchHappened(true)
    },
    [getParcel, searchInput]
  )

  if (loading) return <div>Loading...</div>

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
