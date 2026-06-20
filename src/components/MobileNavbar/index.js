"use client"

import Link from 'next/link'
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import NavLinks from "../NavLinks"


export default function MobileNavbar() {
    const [navLinksVisible, setNavLinksVisible] = useState(false);
   
    function showNavLinks(){
        setNavLinksVisible(!navLinksVisible)
    }

    function toggleNavLinkVisibility(isNavLinkVisible){
        setNavLinksVisible(isNavLinkVisible);
    }

  return (
    <>
    <nav className="mobile-nav">
        <div className="logo">
            <Link href="/" onClick={() => {setNavLinksVisible(false)}}>
                <img src="/logo.png" alt="logo" style={{width: "80px", height:"64px"}}></img>
            </Link>
        </div>
        
        {!navLinksVisible && <div className="bars nav-icon" onClick={showNavLinks}>
            <FaBars/>
        </div>}

        {navLinksVisible &&<div className="x nav-icon" onClick={showNavLinks}>
            <FaTimes/>
        </div>}
        {/* {navLinksVisible && <NavLinks/>} */}
    </nav>
    <NavLinks isMobile={true} isVisible={navLinksVisible} toggleNavLinkVisibility={toggleNavLinkVisibility}></NavLinks>
    </>

    
  )
}

