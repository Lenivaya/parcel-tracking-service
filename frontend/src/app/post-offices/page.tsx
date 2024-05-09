'use client'

import { gql } from '@apollo/client'
import {
  Dispatch,
  FC,
  SetStateAction,
  Suspense,
  useEffect,
  useState
} from 'react'
import {
  fieldChanger,
  ParcelSearchCriteriaInput,
  PostOfficeSearchCriteriaInput,
  useGetPostOfficesSuspenseQuery
} from '@/lib'
import {
  IOffsetPagination,
  IOffsetPaginationProps,
  Loader,
  OffsetPagination,
  SearchBar
} from '@/components/tracking-service/generic'
import { PostOfficeCardList } from '@/components/tracking-service/post-offices'
import { motion } from 'framer-motion'

const GET_POST_OFFICES = gql`
  query GetPostOffices(
    $searchCriteria: PostOfficeSearchCriteriaInput
    $pageSize: Int!
    $offset: Int
  ) {
    postOfficesOffset(
      searchCriteria: $searchCriteria
      take: $pageSize
      skip: $offset
    ) {
      items {
        ...PostOfficeCardItem
      }

      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`

const DEFAULT_PAGE_SIZE = 5

export default function PostOfficesPage() {
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
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className={'max-lg:w-full w-5/6 pr-2 pl-2'}>
        <SearchBar
          search={searchCriteria.matching || ''}
          handleSearch={onInputFieldChange('matching')}
          placeholder='Search for a post-office'
        />
      </div>

      <div className='w-full min-h-[90vh] flex justify-center pb-5'>
        <Suspense fallback={<Loader />}>
          <PostOfficesPageCardListSuspense
            searchCriteria={searchCriteria}
            pagination={pagination}
            setPaginationProps={setPaginationProps}
          />
        </Suspense>
      </div>

      <motion.div
        className='sticky bottom-0 mt-3 h-[5vh] w-full overflow-hidden bg-neutral-100/80 transition-all hover:h-[12vh] dark:bg-transparent/60'
        whileHover={{
          height: '12vh',
          type: 'spring',
          speed: 1.5
        }}
      >
        <OffsetPagination
          {...paginationProps}
          alwaysShowPagination
          pagination={pagination}
          setPagination={setPagination}
        />
      </motion.div>
    </main>
  )
}

const PostOfficesPageCardListSuspense: FC<{
  searchCriteria: PostOfficeSearchCriteriaInput
  pagination: IOffsetPagination
  setPaginationProps: Dispatch<
    SetStateAction<Omit<IOffsetPaginationProps, 'setPagination' | 'pagination'>>
  >
}> = ({ searchCriteria, pagination, setPaginationProps }) => {
  const { data } = useGetPostOfficesSuspenseQuery({
    variables: {
      searchCriteria,
      ...pagination
    },
    fetchPolicy: 'cache-and-network'
  })

  useEffect(() => {
    setPaginationProps((props) => ({
      ...props,
      hasNextPage: data?.postOfficesOffset?.pageInfo.hasNextPage ?? false,
      hasPreviousPage:
        data?.postOfficesOffset?.pageInfo.hasPreviousPage ?? false,
      totalCount: data?.postOfficesOffset?.totalCount ?? 0
    }))
  }, [data])

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <PostOfficeCardList postOffices={data?.postOfficesOffset?.items} />
    </div>
  )
}
