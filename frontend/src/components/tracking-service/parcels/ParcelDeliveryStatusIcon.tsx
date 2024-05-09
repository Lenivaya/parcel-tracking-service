import { cn, GeneralDeliveryState } from '@/lib'
import { AppTooltip } from '@/components/tracking-service/generic'
import { motion } from 'framer-motion'
import { PackageIcon } from 'lucide-react'
import React from 'react'
import { Option } from '@mobily/ts-belt'

export function ParcelDeliveryStatusIcon(props: {
  currentStatus: Option<{
    statusDescription: string
    deliveryStatus?: Option<{
      generalDeliveryState: GeneralDeliveryState
    }>
  }>
}) {
  return (
    <AppTooltip text={props.currentStatus?.statusDescription ?? ''}>
      <motion.div
        whileHover={{ scale: 1.6, transition: { duration: 0.5 } }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <PackageIcon
          className={cn('my-auto cursor-pointer', {
            'text-green-500':
              props.currentStatus?.deliveryStatus?.generalDeliveryState ===
              'DELIVERED',
            'text-red-500':
              props.currentStatus?.deliveryStatus?.generalDeliveryState ===
              'RETURNED'
          })}
        />
      </motion.div>
    </AppTooltip>
  )
}
