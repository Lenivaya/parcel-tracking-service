import { FC } from 'react'
import { Link } from 'next-view-transitions'

export const NavbarHeader: FC = () => {
  return (
    <div className='mr-3 absolute flex-none overflow-hidden text-black dark:text-white md:w-auto'>
      <Link href='/' passHref>
        <h1 className='font-bold'>Parcel tracking service</h1>
      </Link>
    </div>
  )
}
