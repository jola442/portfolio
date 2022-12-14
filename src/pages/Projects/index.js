import "./index.css"
import { projects} from "../../data/projectData"
import Project from "../../components/Project"
import MobileNavbar from "../../components/MobileNavbar"

export default function Projects(){
    return(
        <>
        <MobileNavbar/>
        <div className="page-title">
            <h1>Projects</h1>

        </div>
        <div className='projects container animate__animated'>
            {projects.map( (project) =>{
                return <Project
                    key = {project.id}
                    title = {project.title}
                    imgLink = {project.imglink}
                    description = {project.description}
                    gitHubLink = {project.gitHubLink}
                    videoLink = {project.videoLink}
                    tools = {project.tools}
                    >   
                </Project>
            })}
        </div>
        </>
    )
}