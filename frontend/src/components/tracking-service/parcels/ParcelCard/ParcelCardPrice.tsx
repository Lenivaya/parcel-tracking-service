import type { FC } from 'react'
import { formatMoney } from '@/lib/money'

export const ParcelCardPrice: FC<{ price: number; label: string }> = ({
  price,
  label
}) => (
  <p className='text-sm'>
    {label}
    <span className='mr-2'>:</span>
    <span className='font-bold'>{formatMoney(price)}</span>
    <span> USD</span>
  </p>
)
