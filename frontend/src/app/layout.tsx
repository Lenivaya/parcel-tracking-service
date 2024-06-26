import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'
import { Toaster } from '@/components/ui/toaster'
import { Navbar } from '@/components/tracking-service/layout/navbar/Navbar'
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parcel Tracking Service',
  description: 'Parcel Tracking Service'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <body className={inter.className}>
          <Navbar />

          <Providers>{children}</Providers>

          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  )
}
