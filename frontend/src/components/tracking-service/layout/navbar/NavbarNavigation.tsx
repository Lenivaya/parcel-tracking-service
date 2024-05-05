import { FC } from 'react'
import { clsx } from 'clsx'
import styles from '@/components/tracking-service/layout/navbar/Navbar.module.scss'
import { Link } from 'next-view-transitions'

export const NavbarNavigation: FC = () => {
  return (
    <div className='mr-auto ml-auto hidden lg:flex'>
      <nav
        className={clsx(
          'text-sm leading-6 font-semibold text-slate-700',
          styles.stroke
        )}
      >
        <ul className='flex items-center space-x-8'>
          <li className='hover:text-sky-500'>
            <Link href='/parcels'>Parcels</Link>
          </li>
          <li className='hover:text-sky-500'>
            <Link href='/post-offices'>Post offices</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
