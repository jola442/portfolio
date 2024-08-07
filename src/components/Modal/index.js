import { memo, useEffect } from 'react'
import ReactDom  from 'react-dom';
import "./index.css"
import {v4 as uuidv4} from "uuid";
import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa"
import DOMPurify from 'dompurify';
import { useMemo } from 'react';


const Modal = ( {project, title, desc, imgLink, closeModal, tools, numProjects, index, getNextIndex}) => {
    // const [className, setClassName] = useState("");
   
    function onCloseClicked(){
        closeModal();
    }

    function increaseIndex(event){
        event.stopPropagation();
        getNextIndex((index+1)%numProjects)
    }

    function decreaseIndex(event){
        event.stopPropagation();
        if(index-1 === -1){
            getNextIndex(numProjects-1)
        }

        else{
            getNextIndex(index-1);
        }
    }

    function parseTitle(title){
        let newTitle = title.toLowerCase();
    
        newTitle = newTitle.replace(/\s/g, "-");
    
        return newTitle;
      }
    
      let projectClassName = useMemo( () => (parseTitle(project.title)), [project.title]);


  return ReactDom.createPortal(
    <>
        <>
        <div className='modal-overlay' onClick={onCloseClicked}>
        <FaAngleLeft className='left-arrow' onClick={decreaseIndex}></FaAngleLeft>
        <FaAngleRight className='right-arrow' onClick={increaseIndex}></FaAngleRight>
        <div className='modal-container' onClick={(e) => {e.stopPropagation()}}>
            <div className='header'>
                <h1 className='title'>{project.title}</h1>
                <p className='close-button' onClick={onCloseClicked}> <FaTimes/></p>
            </div>

            <div className='project-img-container'>
                <img className={"project-img " + projectClassName} src={project.imgLink} alt={project.title}/>
            </div>

            <div className='tools'>
                {project.tools.map( (tool) =>{return (
                    <div key={uuidv4()} className='tool'>
                        {tool.name}
                    </div>)})
                }
            </div>
                   
            <p className="description" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description) }} />



            

            <div className='footer'>

        </div>
            
        </div>
        </div>
        

         </>
      
    </>, 
    document.getElementById("modal"))
}

export default memo(Modal)