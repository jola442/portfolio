import "./index.css"
import { projects} from "../../data/projectData"
import Project from "../../components/Project"
import MobileNavbar from "../../components/MobileNavbar"
import Modal from "../../components/Modal"
import { useEffect, useState } from "react"


export default function Projects(){
    const [projectIndex, setProjectIndex] = useState(-1);
    // const [curProject, setCurProject] = useState(null);

    function toggleProjectVisibility(index){
        if(projectIndex > 0){
            // setCurProject(null);
            setProjectIndex(-1);
        }

        else{
            setProjectIndex(index);
            // setCurProject(projects[index]);
        }

    }

    function getNextIndex(index){
        setProjectIndex(index);
        // setCurProject(projects[index]);
    }

    return(
        <>
        <MobileNavbar/>
        <div className="page-title">
            <h1>Projects</h1>

        </div>
        <div className='projects container animate__animated'>
            {projects.map( (project, index) =>{
                return <Project
                    key = {project.id}
                    title = {project.title}
                    imgLink = {project.imgLink}
                    desc = {project.description}
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
        </div>

        {projectIndex >= 0 && <Modal project={projects[projectIndex]} index={projectIndex} numProjects={projects.length} getNextIndex={getNextIndex} closeModal={toggleProjectVisibility}/>}
        </>
    )
}