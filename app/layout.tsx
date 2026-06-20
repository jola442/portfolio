import '../src/index.css'
import DesktopNavbar from '../src/components/DesktopNavbar'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Jola Ajayi's Portfolio",
  description: 'Portfolio Website',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-page text-ink">
        <DesktopNavbar />
        {children}
        <div id="modal" />
      </body>
    </html>
  )
}