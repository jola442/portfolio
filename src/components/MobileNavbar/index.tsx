"use client"

import Link from 'next/link'
import { useState, type JSX } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import NavLinks from "../NavLinks"


export default function MobileNavbar(): JSX.Element {
    const [navLinksVisible, setNavLinksVisible] = useState(false);
   
    function showNavLinks(): void {
        setNavLinksVisible(!navLinksVisible)
    }

    function toggleNavLinkVisibility(isNavLinkVisible: boolean): void {
        setNavLinksVisible(isNavLinkVisible);
    }

  return (
    <>
    <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between bg-primary/95 px-4 py-2 shadow-md backdrop-blur xl:hidden">
        <div className="flex items-center">
            <Link href="/" onClick={() => {setNavLinksVisible(false)}}>
                <img src="/logo.png" alt="logo" className="h-14 w-auto"></img>
            </Link>
        </div>
        
        {!navLinksVisible && <button className="text-3xl text-white" onClick={showNavLinks} aria-label="Open menu" type="button">
            <FaBars/>
        </button>}

        {navLinksVisible &&<button className="text-3xl text-white" onClick={showNavLinks} aria-label="Close menu" type="button">
            <FaTimes/>
        </button>}
        {/* {navLinksVisible && <NavLinks/>} */}
    </nav>
    <NavLinks isMobile={true} isVisible={navLinksVisible} toggleNavLinkVisibility={toggleNavLinkVisibility}></NavLinks>
    </>

    
  )
}

