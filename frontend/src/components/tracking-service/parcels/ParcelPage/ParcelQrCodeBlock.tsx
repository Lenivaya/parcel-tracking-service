import React, { FC } from 'react'
import { ParcelPageItemFragment } from '@/lib'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { QrCodeIcon } from 'lucide-react'
import { Separator } from '@/components/ui'
import { Button } from '@/components/ui/button'
import QRCode from 'react-qr-code'

export const ParcelQrCodeBlock: FC<Pick<ParcelPageItemFragment, 'id'>> = ({
  id
}) => (
  <Drawer>
    <DrawerTrigger>
      <QrCodeIcon className={'w-5 mx-auto my-auto'} />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Parcel qr code</DrawerTitle>
        <DrawerDescription>
          Qr code for the parcel with id: {id}
        </DrawerDescription>

        <Separator className='my-5' />
        <QRCode className={'mx-auto w-full'} value={id} />
        <Separator className='my-5' />
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose>
          <Button variant='outline'>Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)
