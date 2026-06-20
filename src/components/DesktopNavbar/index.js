"use client"

import Link from 'next/link'
import NavLinks from "../NavLinks"

export default function DesktopNavbar() {
  return (
    <nav className="desktop-nav">
        <div className="logo">
            <Link href="/">
                <img src="/logo.png" alt="logo"></img>
            </Link>
        </div>
        <NavLinks isMobile={false}/>
    </nav>
  )
}

