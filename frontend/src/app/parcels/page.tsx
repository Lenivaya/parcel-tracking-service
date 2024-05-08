'use client'

import { gql } from '@apollo/client'
import {
  ParcelSearchCriteriaInput,
  useGetParcelsSuspenseQuery,
  useGetTrackedParcelsIdsQuery
} from '@/lib'
import { FC, Suspense, useCallback, useEffect, useState } from 'react'
import { ParcelCardList } from '@/components/tracking-service/parcels'
import { Loader } from '@/components/tracking-service/generic/Loading'
import { Input } from '@/components/ui'
import { fieldChanger } from '@/lib/objects/fieldChanger'
import { F } from '@mobily/ts-belt'

const GET_PARCELS = gql`
  query GetParcels(
    $trackedParcelsIds: [UUID]!
    $searchCriteria: ParcelSearchCriteriaInput
  ) {
    parcelsCursor(
      where: { id: { in: $trackedParcelsIds } }
      searchCriteria: $searchCriteria
    ) {
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
  const [searchCriteria, setSearchCriteria] =
    useState<ParcelSearchCriteriaInput>({ matching: null })

  const handleFieldChange = <T = string,>(
    field: keyof ParcelSearchCriteriaInput,
    value: T
  ) => setSearchCriteria({ ...fieldChanger(searchCriteria, field, value) })

  const onInputFieldChange =
    (field: keyof ParcelSearchCriteriaInput) => (value: string) =>
      handleFieldChange(field, value)

  return (
    <main className='flex min-h-screen flex-col gap-5 items-center max-md:p-5 p-7'>
      <div className={'max-lg:w-full w-5/6'}>
        <SearchBar
          search={searchCriteria.matching || ''}
          handleSearch={onInputFieldChange('matching')}
          placeholder='Search for a parcel'
        />
      </div>
      <div className='z-10 w-full max-w-5xl items-center justify-between lg:flex'>
        <Suspense fallback={<Loader />}>
          <ParcelsPageCardListSuspense searchCriteria={searchCriteria} />
        </Suspense>
      </div>
    </main>
  )
}

const ParcelsPageCardListSuspense: FC<{
  searchCriteria: ParcelSearchCriteriaInput
}> = ({ searchCriteria }) => {
  const { data: trackedParcelsData } = useGetTrackedParcelsIdsQuery()
  const { data } = useGetParcelsSuspenseQuery({
    variables: {
      trackedParcelsIds: trackedParcelsData?.trackedParcelsIds,
      searchCriteria
    },
    fetchPolicy: 'cache-and-network'
  })

  return <ParcelCardList parcels={data?.parcelsCursor?.nodes} />
}

const SearchBar: FC<{
  search: string
  handleSearch: (search: string) => void
  placeholder?: string
}> = ({ search, handleSearch, placeholder }) => {
  const [input, setInput] = useState(search)

  const changeHandlerDebounced = useCallback(F.debounce(handleSearch, 300), [
    handleSearch
  ])

  useEffect(() => {
    changeHandlerDebounced(input)
  }, [input])

  return (
    <Input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
      className={'text-center text-lg h-[3em]'}
    />
  )
}
