"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks( {isMobile, isVisible, toggleNavLinkVisibility}) {
  const pathname = usePathname();

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
    if (toggleNavLinkVisibility) {
      toggleNavLinkVisibility(false);
    }
  }

  function getClassName(path){
    return pathname === path ? "active" : "";
  }


  return (
    <ul className={isMobile?"mobile-navList":"desktop-navList"} style={computeStyle()}>
        <li>
        <Link className={getClassName("/")} href="/" onClick={toggleVisibility}>Home</Link>
        </li>

        <li >
        <Link className={getClassName("/projects")} href="/projects" onClick={toggleVisibility}>Projects</Link>
        </li>

        <li>
        <Link className={getClassName("/contact")} href="/contact" onClick={toggleVisibility}>Contact</Link>
        </li>

    </ul>
  )
}
