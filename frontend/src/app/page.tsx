'use client'

import { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { Link } from 'next-view-transitions'
import { ParcelSearchInputBar } from '@/components/tracking-service/parcels'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center max-md:p-2 p-10'>
      <ParcelSearchInputBar />

      <div className='w-full justify-center m-auto flex gap-10 flex-row flex-wrap'>
        <HomeCard
          title='Parcels tracker'
          description='Track your parcels'
          link='/parcels'
        />

        <HomeCard
          title={'Post offices'}
          description={'Find post offices'}
          link='/post-offices'
        />
      </div>
    </main>
  )
}

const HomeCard: FC<{ title: string; description: string; link: string }> = ({
  title,
  description,
  link
}) => (
  <div className='max-xl:w-full w-1/3'>
    <Link href={link}>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </Link>
  </div>
)
