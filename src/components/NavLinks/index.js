import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavLinks() {
  return (
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
  )
}
