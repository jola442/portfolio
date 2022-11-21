import "./index.css"
import { projects} from "../../data/projectData"
import Project from "../../components/Project"

export default function Projects(){
    return(
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
    )
}