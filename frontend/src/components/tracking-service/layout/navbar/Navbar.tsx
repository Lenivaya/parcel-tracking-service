'use client'

import { FC } from 'react'
import { NavbarHeader } from '@/components/tracking-service/layout/navbar/NavbarHeader'
import { NavbarNavigation } from '@/components/tracking-service/layout/navbar/NavbarNavigation'

export const Navbar: FC = () => {
  return (
    <div className='sticky top-0 z-40 w-full flex-none bg-white/95 transition-colors duration-500 dark:bg-neutral-900/70 lg:border-b lg:border-slate-900/10'>
      <div className='max-w-8xl mx-auto'>
        <div className='mx-4 border-b border-slate-900/10 py-4 lg:mx-0 lg:border-0 lg:px-8'>
          <div className='relative flex items-center gap-5'>
            <NavbarHeader />
            <NavbarNavigation />
          </div>
        </div>
      </div>
    </div>
  )
}
