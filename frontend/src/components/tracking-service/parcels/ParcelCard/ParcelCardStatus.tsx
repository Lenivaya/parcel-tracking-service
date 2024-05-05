import type { FC } from 'react'
import { ParcelCardItemFragment } from '@/lib'
import { isSome } from '@/lib/types'

export const ParcelCardStatus: FC<{
  currentStatus: ParcelCardItemFragment['currentStatus']
}> = ({ currentStatus }) =>
  isSome(currentStatus) && (
    <div className='flex items-center space-x-4 rounded-md border m-3 p-3'>
      <div className='flex-1 space-y-1'>
        <p className='text-sm font-medium leading-none'>Current status:</p>
        <p className='text-sm text-muted-foreground'>
          <p>{currentStatus.statusDescription}</p>
        </p>
      </div>
    </div>
  )
