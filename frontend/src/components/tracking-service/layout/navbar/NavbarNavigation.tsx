import React, { FC } from 'react'
import styles from '@/components/tracking-service/layout/navbar/Navbar.module.scss'
import { Link } from 'next-view-transitions'
import { NavigationMenuLink } from '@/components/ui'
import { cn } from '@/lib'

export const NavbarNavigation: FC = () => {
  return (
    <div className='mr-auto ml-auto hidden lg:flex'>
      <nav
        className={cn(
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

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
