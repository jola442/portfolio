"use client"

import { projects } from "../../data/projectData"
import type { ProjectTool } from "../../data/projectData"
import Project from "../../components/Project"
import Modal from "../../components/Modal"
import { useState, type JSX } from "react"

function getCategory(tools: ProjectTool[]): string {
  const n = tools.map(t => t.name.toLowerCase())
  if (n.some(x => x.includes('qt') || x === 'c')) return 'SYSTEMS'
  if (n.includes('javafx')) return 'DESKTOP'
  if (n.includes('python') || n.includes('postgresql')) return 'DATA'
  if (n.some(x => x.includes('react')) && n.some(x => ['nodejs', 'spring', 'express', 'mongodb'].some(k => x.includes(k)))) return 'FULL STACK'
  if (n.some(x => x.includes('react'))) return 'FRONTEND'
  if (n.includes('nodejs') || n.includes('express')) return 'BACKEND'
  return 'WEB'
}

export default function Projects(): JSX.Element {
  const [projectIndex, setProjectIndex] = useState(-1)

  function toggleProjectVisibility(index: number): void {
    setProjectIndex(prev => prev >= 0 ? -1 : index)
  }

  function getNextIndex(index: number): void {
    setProjectIndex(index)
  }

  function closeModal(): void {
    setProjectIndex(-1)
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Page header */}
        <div className="border-b-4 border-white/20 px-6 pt-10 pb-8 xl:px-12 xl:pt-12">
          <div className="mb-2 text-xs font-black uppercase tracking-widest text-white/60">
            {projects.length} Projects
          </div>
          <h1 className="font-display text-7xl font-black uppercase leading-none text-white xl:text-[9rem]">
            <br />PROJECTS
          </h1>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 p-6 xl:grid-cols-2 xl:p-12">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              title={project.title}
              imgLink={project.imgLink}
              summary={project.summary}
              gitHubLink={project.gitHubLink}
              videoLink={project.videoLink}
              date={project.date}
              tools={project.tools}
              index={index}
              toggleVisibility={toggleProjectVisibility}
              demoLink={project.demoLink}
              category={getCategory(project.tools)}
            />
          ))}
        </div>
      </div>

      {projectIndex >= 0 && (
        <Modal
          project={projects[projectIndex]}
          index={projectIndex}
          numProjects={projects.length}
          getNextIndex={getNextIndex}
          closeModal={closeModal}
          category={getCategory(projects[projectIndex].tools)}
        />
      )}
    </>
  )
}
