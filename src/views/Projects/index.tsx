"use client"

import { projects} from "../../data/projectData"
import Project from "../../components/Project"
import MobileNavbar from "../../components/MobileNavbar"
import Modal from "../../components/Modal"
import { useState, type JSX } from "react"


export default function Projects(): JSX.Element {
    const [projectIndex, setProjectIndex] = useState(-1);
    // const [curProject, setCurProject] = useState(null);

    function toggleProjectVisibility(index: number): void {
        if(projectIndex > 0){
            // setCurProject(null);
            setProjectIndex(-1);
        }

        else{
            setProjectIndex(index);
            // setCurProject(projects[index]);
        }

    }

    function getNextIndex(index: number): void {
        setProjectIndex(index);
        // setCurProject(projects[index]);
    }

    function closeModal(): void {
        setProjectIndex(-1);
    }

    return(
        <>
        <MobileNavbar/>
        <section className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 pt-24 sm:px-6 xl:px-10 xl:pt-32'>
            {/* <div className="page-title">
                <h1>Projects</h1>

            </div> */}
            {projects.map( (project, index) =>{
                return <Project
                    key = {project.id}
                    title = {project.title}
                    imgLink = {project.imgLink}
                    summary = {project.summary}
                    gitHubLink = {project.gitHubLink}
                    videoLink = {project.videoLink}
                    date = {project.date}
                    tools = {project.tools}
                    index={index}
                    toggleVisibility={toggleProjectVisibility}
                    demoLink = {project.demoLink}
                    // type = {project.type}
                    >   
                </Project>
            })}
        </section>

        {projectIndex >= 0 && <Modal project={projects[projectIndex]} index={projectIndex} numProjects={projects.length} getNextIndex={getNextIndex} closeModal={closeModal}/>}
        </>
    )
}