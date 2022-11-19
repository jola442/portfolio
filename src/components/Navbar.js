import { NavLink } from "react-router-dom"
import { useEffect, useRef} from "react"

export default function Navbar() {
  return (
    <nav>
        <div className="logo">
            <NavLink to = "/">
                <img src="../../logo.png" style={{width: "80px", height:"64px"}}></img>
            </NavLink>
        </div>
        <ul>
            <li>
                <NavLink className={ ({isActive})=>{return isActive?"active":""} } to = "/">Home</NavLink>
            </li>

            <li >
                <NavLink className={ ({isActive})=>{return isActive?"active":""} } to= "/Projects">Projects</NavLink>
            </li>

            <li>
                <NavLink className={ ({isActive})=>{return isActive?"active":""} } to= "/Contact">Contact</NavLink>
            </li>
    
        </ul>
    </nav>
  )
}

