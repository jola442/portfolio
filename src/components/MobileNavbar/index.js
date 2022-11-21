import { NavLink } from "react-router-dom"
import { useState, useEffect, useRef} from "react"
import { FaBars } from "react-icons/fa"
import NavLinks from "../NavLinks"


export default function MobileNavbar() {
    const [navLinksVisible, setNavLinksVisible] = useState(false);

    function showNavLinks(){
        setNavLinksVisible(!navLinksVisible)
    }

  return (
    <nav className="mobile-nav">
        <div className="logo">
            <NavLink to = "/">
                <img src="../../logo.png" alt="logo" style={{width: "80px", height:"64px"}}></img>
            </NavLink>
        </div>
        <div className="bars-icon" onClick={showNavLinks}>
            <FaBars/>
        </div>
        {navLinksVisible && <NavLinks/>}
    </nav>
  )
}

