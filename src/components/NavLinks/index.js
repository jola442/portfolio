import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavLinks( {isMobile, isVisible, toggleNavLinkVisibility}) {

  const visibleNavLinkStyle = {
    transform:"translateY(0)",
    transition:"transform 0.5s ease-in-out"
  }

  const invisibleNavLinkStyle = {...visibleNavLinkStyle, ...{transform:"translateY(-100%)"}};

  function computeStyle(){
    if(isMobile){
      if(isVisible){
        return visibleNavLinkStyle;
      }

      else{
        return invisibleNavLinkStyle;
      }
    }

    else{
      return null;
    }
  }

  function toggleVisibility(){
    toggleNavLinkVisibility(false);
  }


  return (
    <ul className={isMobile?"mobile-navList":"desktop-navList"} style={computeStyle()}>
        <li>
            <NavLink className={ ({isActive})=>{return isActive?"active":""} } to = "/" onClick={toggleVisibility}>Home</NavLink>
        </li>

        <li >
            <NavLink className={ ({isActive})=>{return isActive?"active":""} } to= "/projects" onClick={toggleVisibility}>Projects</NavLink>
        </li>

        <li>
            <NavLink className={ ({isActive})=>{return isActive?"active":""} } to= "/contact" onClick={toggleVisibility}>Contact</NavLink>
        </li>

    </ul>
  )
}
