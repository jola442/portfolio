"use client"

import { useState, useEffect, type JSX } from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFilePdf, FaEnvelope } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import ThemeToggle from '../ThemeToggle'

const NAV_LINKS = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const SOCIAL_LINKS: Array<{
  href: string
  label: string
  icon: IconType
  external?: boolean
}> = [
  { href: 'https://github.com/jola442', label: 'GitHub', icon: FaGithub, external: true },
  { href: 'https://www.linkedin.com/in/jola-ajayi/', label: 'LinkedIn', icon: FaLinkedin, external: true },
  { href: 'mailto:benjamen.ajayi@gmail.com', label: 'Email', icon: FaEnvelope },
  { href: '/Jola_Ajayi_Resume.pdf', label: 'Resume', icon: FaFilePdf, external: true },
]

const SKILLS = [
  'JavaScript', 'TypeScript', 'Java', 'Python', 'HTML/CSS',
  'Next.js', 'Node.js', 'Express', 'Spring Boot', 'React',
  'Tailwind', 'JUnit', 'Selenium', 'Cucumber', 'SQL',
  'MongoDB', 'Mongoose', 'Git', 'Docker', 'Jira',
  'Figma', 'Postman', 'Cursor',
]

export default function SidebarNav(): JSX.Element {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.id)
    const observers: IntersectionObserver[] = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25, rootMargin: '-56px 0px 0px 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  function navClass(id: string): string {
    const active = activeSection === id
    return `flex items-center border-2 px-3 py-2 text-xs font-black uppercase tracking-widest transition-all duration-200 shadow-[2px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] ${
      active
        ? 'bg-brand text-white border-brand hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]'
        : 'bg-white border-ink text-ink hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:bg-[#0B223D] dark:border-white/25 dark:text-white dark:hover:bg-brand dark:hover:text-white dark:hover:border-brand dark:hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]'
    }`
  }

  const SidebarContent = (
    <div className="flex h-full w-full flex-col overflow-y-auto border-r-0 bg-white text-ink dark:bg-[#0B223D] dark:text-white xl:border-r-4 xl:border-ink dark:xl:border-white/25">
      {/* Logo */}
      <a
        href="#home"
        className="block border-b-4 border-ink p-4 transition hover:bg-gray-50 dark:border-white/25 dark:hover:bg-white/10"
        onClick={() => setOpen(false)}
      >
        <div className="font-display text-4xl font-black uppercase leading-none text-brand">JA</div>
        <div className="text-xs font-black uppercase tracking-widest text-ink dark:text-white">Jola Ajayi</div>
        <div className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-white/65">Product Manager</div>
      </a>

      {/* NAVIGATE */}
      <div className="border-b-2 border-ink p-3 dark:border-white/20">
        <div className="mb-2 text-xs font-black uppercase tracking-widest text-muted dark:text-white/55">Navigate</div>
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(({ href, id, label }) => (
            <a key={id} href={href} className={navClass(id)} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* CONNECT */}
      <div className="border-b-2 border-ink p-3 dark:border-white/20">
        <div className="mb-2 text-xs font-black uppercase tracking-widest text-muted dark:text-white/55">Connect</div>
        <div className="flex flex-col gap-1">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              className="flex items-center gap-2 border-2 border-ink px-3 py-2 text-xs font-black uppercase tracking-widest text-ink transition-all duration-200 shadow-[2px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:border-white/25 dark:text-white dark:hover:bg-brand dark:hover:text-white dark:hover:border-brand dark:hover:shadow-[4px_4px_0px_rgba(0,0,0,0.4)]"
            >
              <Icon className="shrink-0 text-base" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* STACK */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="mb-2 text-xs font-black uppercase tracking-widest text-muted dark:text-white/55">Stack</div>
        <div className="flex flex-wrap gap-1">
          {SKILLS.map((skill) => (
            <span key={skill} className="border border-ink px-2 py-0.5 text-xs font-bold uppercase text-ink dark:border-white/25 dark:text-white/85">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* THEME TOGGLE */}
      <div className="border-t-2 border-ink p-3 dark:border-white/20">
        <ThemeToggle />
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-52 xl:block">{SidebarContent}</div>

      {/* Mobile: top bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center border-b-4 border-ink bg-white xl:hidden dark:border-white/25 dark:bg-[#0B223D]">
        <a
          href="#home"
          className="flex h-full items-center border-r-4 border-ink px-4 dark:border-white/25"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl font-black uppercase leading-none text-brand">JA</span>
        </a>
        <span className="flex-1 px-4 text-xs font-black uppercase tracking-widest text-ink dark:text-white">
          Jola Ajayi
        </span>
        <ThemeToggle compact />
        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-full items-center border-l-4 border-ink px-4 dark:border-white/25"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FaTimes className="text-xl text-ink dark:text-white" />
          ) : (
            <FaBars className="text-xl text-ink dark:text-white" />
          )}
        </button>
      </div>

      {/* Mobile: drawer overlay — full width */}
      {open && (
        <div className="fixed inset-0 z-40 animate-fade-in xl:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-10 flex h-full w-full flex-col pt-14">{SidebarContent}</div>
        </div>
      )}
    </>
  )
}
