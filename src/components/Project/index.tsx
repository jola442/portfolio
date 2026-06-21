"use client"

import { memo, type JSX, type MouseEvent } from "react"
import { FaGithub, FaVideo, FaGlobe, FaInfoCircle } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import type { ProjectTool } from "../../data/projectData"

type ProjectProps = {
  title: string
  imgLink: string
  summary: string
  gitHubLink?: string
  videoLink?: string
  date: string
  tools: ProjectTool[]
  index: number
  demoLink?: string
  toggleVisibility: (index: number) => void
  category?: string
}

// Full Tailwind class strings must appear in source to avoid purging
const CATEGORY_META: Record<string, { header: string; text: string }> = {
  'FULL STACK': { header: 'bg-emerald-500', text: 'text-white' },
  'FRONTEND': { header: 'bg-sky-500', text: 'text-white' },
  'BACKEND': { header: 'bg-amber-500', text: 'text-ink' },
  'DATA': { header: 'bg-violet-500', text: 'text-white' },
  'SYSTEMS': { header: 'bg-rose-500', text: 'text-white' },
  'DESKTOP': { header: 'bg-pink-500', text: 'text-white' },
  'WEB': { header: 'bg-teal-500', text: 'text-white' },
}
const DEFAULT_META = { header: 'bg-brand', text: 'text-white' }

function Project({
  title,
  imgLink,
  gitHubLink,
  videoLink,
  date,
  tools,
  index,
  demoLink,
  toggleVisibility,
  category,
}: ProjectProps): JSX.Element {
  const meta = (category ? CATEGORY_META[category] : undefined) ?? DEFAULT_META

  function openModal(): void {
    toggleVisibility(index)
  }

  return (
    <div
      className="group flex cursor-pointer flex-col overflow-hidden border-4 border-ink bg-white shadow-[5px_5px_0px_rgba(0,0,0,0.25)] transition-all duration-300 hover:skew-y-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,0.35)]"
      onClick={openModal}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openModal()}
    >
      {/* Colored category header */}
      <div className={`${meta.header} flex items-center justify-between px-3 py-2.5`}>
        <span className={`text-xs font-black uppercase tracking-widest ${meta.text}`}>
          {category ?? 'PROJECT'}
        </span>
        <span className={`text-xs font-bold uppercase opacity-75 ${meta.text}`}>{date}</span>
      </div>

      {/* Image with hover overlay */}
      <div className="relative h-44 overflow-hidden border-b-2 border-ink">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imgLink}
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/65">
          <span className="font-display text-sm font-black uppercase tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            View Details →
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-3 pb-1">
        <h3 className="font-display text-xl font-black uppercase leading-tight text-ink">
          {title}
        </h3>
      </div>

      {/* Tech chips */}
      <div className="flex-1 px-4 pb-3 pt-2">
        <div className="mb-1.5 text-xs font-black uppercase tracking-widest" style={{ color: 'currentcolor', opacity: 0.45 }}>
          Stack
        </div>
        <div className="flex flex-wrap gap-1">
          {tools.map((tool) => (
            <span
              key={uuidv4()}
              className="border border-ink/30 bg-ink/5 px-2 py-0.5 text-xs font-semibold text-ink/70"
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div
        className="flex items-center gap-3 border-t-2 border-ink/10 bg-gray-50 px-4 py-2.5"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {gitHubLink && (
          <a
            href={gitHubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-bold uppercase text-ink/60 transition-colors hover:text-ink"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-bold uppercase text-ink/60 transition-colors hover:text-ink"
          >
            <FaGlobe />
            <span>Live Demo</span>
          </a>
        )}
        {videoLink && (
          <a
            href={videoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-xs font-bold uppercase text-ink/60 transition-colors hover:text-ink"
          >
            <FaVideo />
            <span>Video</span>
          </a>
        )}
        <button
          type="button"
          onClick={(e: MouseEvent) => { e.stopPropagation(); openModal() }}
          className="ml-auto flex items-center gap-1.5 text-xs font-bold uppercase text-ink/60 transition-colors hover:text-ink"
        >
          <FaInfoCircle />
          <span>Details</span>
        </button>
      </div>
    </div>
  )
}

export default memo(Project)
