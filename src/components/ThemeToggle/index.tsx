"use client"

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

type ThemeToggleProps = {
  /** compact = icon-only button for mobile top bar */
  compact?: boolean
}

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    setDark(isDark)
  }

  // Render a placeholder with the same dimensions to avoid layout shift
  if (!mounted) {
    return compact
      ? <div className="flex h-full w-14 items-center border-l-4 border-ink px-4 dark:border-white/25" />
      : <div className="h-10 w-full" />
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle light/dark mode"
        className="flex h-full items-center border-l-4 border-ink px-4 transition-colors hover:bg-gray-50 dark:border-white/25 dark:hover:bg-white/10"
      >
        {dark
          ? <FaSun className="text-xl text-amber-500" />
          : <FaMoon className="text-xl text-ink/60 dark:text-white/70" />
        }
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      className="flex w-full items-center justify-between border-2 border-ink px-3 py-2 text-xs font-black uppercase tracking-widest text-ink transition-all hover:bg-brand hover:text-white hover:border-brand dark:border-white/25 dark:text-white dark:hover:bg-brand dark:hover:text-white dark:hover:border-brand"
    >
      <span>{dark ? 'Light Mode' : 'Dark Mode'}</span>
      {dark
        ? <FaSun className="text-amber-400" />
        : <FaMoon />
      }
    </button>
  )
}
