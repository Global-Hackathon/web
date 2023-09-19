import './globals.css'
import type { Metadata } from 'next'

import NavBar from '@/components/Nav';

export const metadata: Metadata = {
  title: 'The "Gossip" Newspaper',
  description: 'The Inter-School Gossip Newspaper',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
        <div className="">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  )
}
