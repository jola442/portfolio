import { useState, useEffect, useRef} from "react"
import { NavLink } from "react-router-dom"
import NavLinks from "../NavLinks"

export default function DesktopNavbar() {
  return (
    <nav className="desktop-nav">
        <div className="logo">
            <NavLink to = "/">
                <img src="../../logo.png" alt="logo" style={{width: "80px", height:"64px"}}></img>
            </NavLink>
        </div>
        <NavLinks isMobile={false}/>
    </nav>
  )
}

