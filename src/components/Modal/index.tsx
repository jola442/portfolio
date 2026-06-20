"use client"

import { memo, type MouseEvent, type JSX } from "react"
import ReactDom from "react-dom"
import { v4 as uuidv4 } from "uuid"
import { FaAngleRight, FaAngleLeft, FaTimes, FaGithub, FaGlobe, FaVideo } from "react-icons/fa"
import DOMPurify from "dompurify"
import type { ProjectItem } from "../../data/projectData"

type ModalProps = {
  project: ProjectItem
  closeModal: () => void
  numProjects: number
  index: number
  getNextIndex: (index: number) => void
  category?: string
}

const Modal = ({
  project,
  closeModal,
  numProjects,
  index,
  getNextIndex,
  category,
}: ModalProps): JSX.Element | null => {
  function increaseIndex(e: MouseEvent<HTMLElement>): void {
    e.stopPropagation()
    getNextIndex((index + 1) % numProjects)
  }

  function decreaseIndex(e: MouseEvent<HTMLElement>): void {
    e.stopPropagation()
    getNextIndex(index - 1 === -1 ? numProjects - 1 : index - 1)
  }

  const modalRoot = document.getElementById("modal")
  if (!modalRoot) return null

  return ReactDom.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 animate-fade-in backdrop-blur-sm"
      onClick={closeModal}
    >
      {/* Prev */}
      <button
        type="button"
        aria-label="Previous project"
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 border-2 border-white/60 bg-white/10 p-3 text-white transition-all duration-200 shadow-[3px_3px_0px_rgba(255,255,255,0.3)] hover:border-white hover:bg-white hover:text-ink hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(255,255,255,0.4)] xl:block"
        onClick={decreaseIndex}
      >
        <FaAngleLeft className="text-xl" />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Next project"
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 border-2 border-white/60 bg-white/10 p-3 text-white transition-all duration-200 shadow-[3px_3px_0px_rgba(255,255,255,0.3)] hover:border-white hover:bg-white hover:text-ink hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(255,255,255,0.4)] xl:block"
        onClick={increaseIndex}
      >
        <FaAngleRight className="text-xl" />
      </button>

      {/* Panel */}
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border-4 border-ink bg-white shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-scale-in"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b-4 border-ink px-6 py-5">
          <div>
            <div className="mb-1 text-xs font-black uppercase tracking-widest text-brand">
              {category ?? 'Project'}
            </div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight text-ink xl:text-4xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            className="ml-4 mt-1 shrink-0 border-2 border-ink p-2 text-ink transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)]"
            onClick={closeModal}
          >
            <FaTimes className="text-base" />
          </button>
        </div>

        {/* Image */}
        <div className="border-b-4 border-ink bg-gray-50">
          <img
            className="max-h-72 w-full object-cover"
            src={project.imgLink}
            alt={project.title}
          />
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 border-b-2 border-ink px-6 py-4">
          {project.tools.map((tool) => (
            <span
              key={uuidv4()}
              className="border-2 border-ink px-2 py-0.5 text-xs font-black uppercase tracking-wide text-ink"
            >
              {tool.name}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="px-6 py-5">
          <div className="mb-3 text-xs font-black uppercase tracking-widest text-brand">The Project</div>
          <div
            className="text-sm leading-7 text-gray-700"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description) }}
          />
        </div>

        {/* Links */}
        {(project.gitHubLink || project.demoLink || project.videoLink) && (
          <div className="flex flex-wrap gap-3 border-t-2 border-ink px-6 py-4">
            {project.gitHubLink && (
              <a
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 text-xs font-bold uppercase text-ink transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)]"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 text-xs font-bold uppercase text-ink transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)]"
              >
                <FaGlobe /> Live Demo
              </a>
            )}
            {project.videoLink && (
              <a
                href={project.videoLink}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-2 border-ink px-4 py-2 text-xs font-bold uppercase text-ink transition-all duration-200 shadow-[3px_3px_0px_rgba(0,0,0,0.15)] hover:bg-brand hover:text-white hover:border-brand hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)]"
              >
                <FaVideo /> Video
              </a>
            )}
          </div>
        )}

        {/* Mobile prev/next */}
        <div className="flex items-center justify-between border-t-2 border-ink/10 bg-gray-50 px-6 py-4 xl:hidden">
          <button
            type="button"
            onClick={decreaseIndex}
            className="border-2 border-ink px-5 py-3 text-xs font-black uppercase text-ink transition-all duration-200 hover:bg-ink hover:text-white"
          >
            &larr; PREV
          </button>
          <button
            type="button"
            onClick={increaseIndex}
            className="border-2 border-ink px-5 py-3 text-xs font-black uppercase text-ink transition-all duration-200 hover:bg-ink hover:text-white"
          >
            NEXT &rarr;
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  )
}

export default memo(Modal)
