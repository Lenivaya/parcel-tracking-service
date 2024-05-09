import { FC } from 'react'
import { isNone } from '@/lib/types'
import { PostOfficeCardItemFragment } from '@/lib'
import { PostOfficeCard } from '@/components/tracking-service/post-offices/PostOfficeCard/PostOfficeCard'
import { Option } from '@mobily/ts-belt'

export const PostOfficeCardList: FC<{
  postOffices: Option<PostOfficeCardItemFragment[]>
}> = ({ postOffices }) => {
  if (isNone(postOffices))
    return (
      <p className={'m-auto p-10 text-center font-bold'}>
        No post offices found :(
      </p>
    )

  return (
    <div className='flex flex-shrink flex-grow flex-row flex-wrap justify-center gap-5'>
      {postOffices.map((postOffice) => (
        <PostOfficeCard key={postOffice.id} {...postOffice} />
      ))}
    </div>
  )
}
