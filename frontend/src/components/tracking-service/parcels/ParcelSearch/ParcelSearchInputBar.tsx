import { Button, Input } from '@/components/ui'

export const ParcelSearchInputBar = () => {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit'>Subscribe</Button>
    </div>
  )
}
