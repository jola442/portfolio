"use client"

import type { CSSProperties, JSX } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinksProps = {
  isMobile: boolean
  isVisible?: boolean
  toggleNavLinkVisibility?: (isNavLinkVisible: boolean) => void
}

export default function NavLinks({ isMobile, isVisible, toggleNavLinkVisibility }: NavLinksProps): JSX.Element {
  const pathname = usePathname();

  const visibleNavLinkStyle: CSSProperties = {
    transform:"translateY(0)",
    transition:"transform 0.5s ease-in-out"
  }

  const invisibleNavLinkStyle = {...visibleNavLinkStyle, ...{transform:"translateY(-100%)"}};

  function computeStyle(): CSSProperties | undefined {
    if(isMobile){
      if(isVisible){
        return visibleNavLinkStyle;
      }

      else{
        return invisibleNavLinkStyle;
      }
    }

    else{
      return undefined;
    }
  }

  function toggleVisibility(){
    if (toggleNavLinkVisibility) {
      toggleNavLinkVisibility(false);
    }
  }

  function linkClasses(path: string): string {
    const active = pathname === path;

    if (isMobile) {
      return `rounded-md px-4 py-2 text-3xl font-semibold text-white transition ${active ? 'underline underline-offset-8' : 'hover:opacity-90'}`;
    }

    return `rounded-md px-3 py-2 text-xl font-semibold text-white transition ${active ? 'bg-white/20' : 'hover:bg-white/10'}`;
  }


  return (
    <ul
      className={isMobile
        ? "fixed left-0 top-16 z-30 flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-evenly bg-primary px-0 py-0 transition-transform duration-500 xl:hidden"
        : "hidden items-center gap-8 xl:flex"
      }
      style={computeStyle()}
    >
        <li className={isMobile ? "w-full text-center" : ""}>
        <Link className={linkClasses("/")} href="/" onClick={toggleVisibility}>Home</Link>
        </li>

        <li className={isMobile ? "w-full text-center" : ""}>
        <Link className={linkClasses("/projects")} href="/projects" onClick={toggleVisibility}>Projects</Link>
        </li>

        <li className={isMobile ? "w-full text-center" : ""}>
        <Link className={linkClasses("/contact")} href="/contact" onClick={toggleVisibility}>Contact</Link>
        </li>

    </ul>
  )
}
