import { FC } from 'react'
import { gql } from '@apollo/client'
import { PostOfficeCardItemFragment } from '@/lib'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { Warehouse } from 'lucide-react'

export const PostOfficeCardFragment = gql`
  fragment PostOfficeCardItem on PostOffice {
    id
    code
    address
    updatedAt
  }
`

export const PostOfficeCard: FC<PostOfficeCardItemFragment> = ({
  id,
  code,
  address,
  updatedAt
}) => {
  return (
    <Card className={'w-[30em]'}>
      <CardHeader>
        <CardTitle>
          <div className={'flex flex-row gap-3 text-md'}>
            <Warehouse />
            <p className={'text-base'}>{code}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>{address}</CardContent>
    </Card>
  )
}
