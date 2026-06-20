import '../src/index.css'
import SidebarNav from '../src/components/SidebarNav'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Jola Ajayi — Product Manager',
  description: 'Portfolio of Jola Ajayi, CS graduate and Product Manager at Visualping.',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: sets dark class before first paint */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark')})();` }} />
      </head>
      <body>
        <SidebarNav />
        <main className="min-h-screen pt-14 xl:ml-52 xl:pt-0">
          {children}
        </main>
        <div id="modal" />
      </body>
    </html>
  )
}