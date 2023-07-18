import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { Footer, Navbar } from '@/components'

import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarHub',
  description: 'Discover the best cars in the world.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
