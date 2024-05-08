'use client'

import { gql } from '@apollo/client'
import {
  ParcelSearchCriteriaInput,
  useGetParcelsSuspenseQuery,
  useGetTrackedParcelsIdsQuery
} from '@/lib'
import {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useCallback,
  useEffect,
  useState
} from 'react'
import { ParcelCardList } from '@/components/tracking-service/parcels'
import { Loader } from '@/components/tracking-service/generic/Loading'
import { Input } from '@/components/ui'
import { fieldChanger } from '@/lib/objects/fieldChanger'
import { F } from '@mobily/ts-belt'
import {
  IOffsetPagination,
  IOffsetPaginationProps,
  OffsetPagination
} from '@/components/tracking-service/generic/pagination/OffsetPagination'

const GET_PARCELS = gql`
  query GetParcels(
    $trackedParcelsIds: [UUID]!
    $searchCriteria: ParcelSearchCriteriaInput
    $pageSize: Int!
    $offset: Int
  ) {
    parcelsOffset(
      where: { id: { in: $trackedParcelsIds } }
      searchCriteria: $searchCriteria
      take: $pageSize
      skip: $offset
    ) {
      items {
        ...ParcelCardItem
      }

      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

const GET_TRACKED_PARCELS_IDS = gql`
  query GetTrackedParcelsIds {
    trackedParcelsIds @client
  }
`

const DEFAULT_PAGE_SIZE = 5

export default function ParcelsPage() {
  const [searchCriteria, setSearchCriteria] =
    useState<ParcelSearchCriteriaInput>({ matching: null })

  const [pagination, setPagination] = useState<IOffsetPagination>({
    currentPage: 1,
    offset: null,
    pageSize: DEFAULT_PAGE_SIZE
  })

  const [paginationProps, setPaginationProps] = useState<
    Omit<IOffsetPaginationProps, 'pagination' | 'setPagination'>
  >({
    totalCount: 0,
    hasNextPage: false,
    hasPreviousPage: false
  })

  useEffect(
    () =>
      setPagination({
        offset: null,
        currentPage: 1,
        pageSize: DEFAULT_PAGE_SIZE
      }),
    [searchCriteria]
  )

  const handleFieldChange = <T = string,>(
    field: keyof ParcelSearchCriteriaInput,
    value: T
  ) => setSearchCriteria({ ...fieldChanger(searchCriteria, field, value) })

  const onInputFieldChange =
    (field: keyof ParcelSearchCriteriaInput) => (value: string) =>
      handleFieldChange(field, value)

  return (
    <main className='flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6'}>
        <SearchBar
          search={searchCriteria.matching || ''}
          handleSearch={onInputFieldChange('matching')}
          placeholder='Search for a parcel'
        />
      </div>

      <div className='w-max min-h-[80vh] flex justify-start'>
        <Suspense fallback={<Loader />}>
          <ParcelsPageCardListSuspense
            searchCriteria={searchCriteria}
            pagination={pagination}
            setPaginationProps={setPaginationProps}
          />
        </Suspense>
      </div>

      <div className='sticky bottom-0 mt-3 h-[5vh] w-full overflow-hidden bg-neutral-100/80 transition-all hover:h-[12vh] dark:bg-transparent/60'>
        <OffsetPagination
          {...paginationProps}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
    </main>
  )
}

const ParcelsPageCardListSuspense: FC<{
  searchCriteria: ParcelSearchCriteriaInput
  pagination: IOffsetPagination
  setPaginationProps: Dispatch<
    SetStateAction<Omit<IOffsetPaginationProps, 'setPagination' | 'pagination'>>
  >
}> = ({ searchCriteria, pagination, setPaginationProps }) => {
  const { data: trackedParcelsData } = useGetTrackedParcelsIdsQuery()
  const { data } = useGetParcelsSuspenseQuery({
    variables: {
      trackedParcelsIds: trackedParcelsData?.trackedParcelsIds,
      searchCriteria,
      ...pagination
    },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setPaginationProps((props) => ({
      ...props,
      hasNextPage: data?.parcelsOffset?.pageInfo.hasNextPage ?? false,
      hasPreviousPage: data?.parcelsOffset?.pageInfo.hasPreviousPage ?? false,
      totalCount: data?.parcelsOffset?.totalCount ?? 0
    }))
  }, [data])

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <ParcelCardList parcels={data?.parcelsOffset?.items} />
    </div>
  )
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
