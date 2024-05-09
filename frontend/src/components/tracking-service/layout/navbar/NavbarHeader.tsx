import { FC } from 'react'
import { Link } from 'next-view-transitions'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import { Menu } from 'lucide-react'

export const NavbarHeader: FC = () => {
  return (
    <div className='mr-3 absolute flex-none overflow-hidden text-black dark:text-white md:w-auto'>
      <span className='sr-only'>EmploymentService home page</span>
      <Link href='/' passHref>
        <h1 className='font-bold'>Parcel tracking service</h1>
      </Link>
    </div>
  )
}

export function HeaderMenuWithPopover() {
  return (
    <div className='flex gap-8 absolute right-5 top-0.5'>
      <div className='text-sm/6 font-semibold text-black/50'></div>
      <Popover autoFocus={false}>
        <PopoverButton className='text-sm/6 font-semibold text-black focus:outline-none data-[active]:text-black/50 data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-black'>
          <Menu />
        </PopoverButton>
        <Transition
          enter='transition ease-out duration-200'
          enterFrom='opacity-0 translate-y-1'
          enterTo='opacity-100 translate-y-0'
          leave='transition ease-in duration-150'
          leaveFrom='opacity-100 translate-y-0'
          leaveTo='opacity-0 translate-y-1'
        >
          <PopoverPanel
            anchor='bottom'
            className='z-50 divide-y divide-black/10 rounded-xl bg-white/90 text-sm/6 [--anchor-gap:var(--spacing-5)]'
          >
            <div className='p-3'>
              <Link
                className='block rounded-lg py-2 px-3  hover:bg-black/5'
                href='/parcels'
                passHref
              >
                <p className='font-semibold text-black'>Parcels</p>
                <p className='text-black/50'>Track your parcels here</p>
              </Link>

              <Link
                className='block rounded-lg py-2 px-3  hover:bg-black/5'
                href='/post-offices'
                passHref
              >
                <p className='font-semibold text-black'>Post offices</p>
                <p className='text-black/50'>Find post offices</p>
              </Link>
            </div>

            <div className='p-3'>
              <Link
                className='block rounded-lg py-2 px-3  hover:bg-black/5'
                href='/'
                passHref
              >
                <p className='font-semibold text-black'>Home page</p>
                <p className='text-black/50'>Start from here</p>
              </Link>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  )
}
