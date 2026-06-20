"use client"

import Link from 'next/link'
import NavLinks from "../NavLinks"
import type { JSX } from 'react'

export default function DesktopNavbar(): JSX.Element {
  return (
  <nav className="fixed left-0 top-0 z-40 hidden w-full items-center justify-between bg-primary/95 px-8 py-3 shadow-md backdrop-blur xl:flex">
    <div className="flex items-center">
      <Link href="/" className="inline-flex items-center">
        <img src="/logo.png" alt="logo" className="h-14 w-auto"></img>
      </Link>
    </div>
        <NavLinks isMobile={false}/>
    </nav>
  )
}

