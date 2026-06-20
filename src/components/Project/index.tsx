"use client"

import { memo, type JSX } from 'react'
import { FaInfoCircle, FaGithub, FaVideo, FaGlobe, FaExternalLinkAlt } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import type { ProjectTool } from '../../data/projectData'

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
}

function Project({ title, imgLink, summary, gitHubLink, videoLink, date, tools, index, demoLink, toggleVisibility }: ProjectProps): JSX.Element {
  function openModal(): void {
    toggleVisibility(index)
  }

  return (
    <div
      className="group grid cursor-pointer overflow-hidden rounded-2xl bg-white/85 shadow-lg ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-xl xl:grid-cols-[240px_1fr_auto]"
      onClick={openModal}
    >
      <div className="h-52 overflow-hidden bg-slate-100 xl:h-full">
        <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={imgLink} alt={title}></img>
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{date}</p>
          {demoLink && (
            <a
              href={demoLink}
              className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/20 px-3 py-1 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5"
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
            >
              Live Demo
              <FaExternalLinkAlt className="text-xs"></FaExternalLinkAlt>
            </a>
          )}
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => {
              return (
                <div key={uuidv4()} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {tool.name}
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-sm leading-6 text-slate-700 sm:text-base">{summary}</div>
      </div>

      <div className="flex items-center gap-4 border-t border-primary/10 px-5 py-4 text-primary xl:flex-col xl:justify-center xl:border-l xl:border-t-0 xl:px-4">
        {gitHubLink && (
          <a href={gitHubLink} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
            <FaGithub className="text-2xl transition hover:scale-110" />
          </a>
        )}

        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
            <FaGlobe className="text-2xl transition hover:scale-110"></FaGlobe>
          </a>
        )}

        {videoLink && (
          <a href={videoLink} target="_blank" rel="noreferrer noopener" onClick={(e) => e.stopPropagation()}>
            <FaVideo className="text-2xl transition hover:scale-110" />
          </a>
        )}

        <FaInfoCircle onClick={openModal} className="text-2xl transition hover:scale-110" />
      </div>
    </div>
  )
}

export default memo(Project)
