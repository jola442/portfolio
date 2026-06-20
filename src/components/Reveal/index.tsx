"use client"

import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

/**
 * Fades children up into view when they scroll into the viewport.
 * Uses fill-mode: both on the animation so elements stay invisible (via
 * the `from` keyframe) until their delay has elapsed.
 */
export default function Reveal({ children, delay = 0, className = '', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${mounted ? (visible ? 'animate-fade-up' : 'opacity-0') : ''} ${className}`}
      style={{ ...style, animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
