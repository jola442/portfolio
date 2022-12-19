import React from 'react'
import { FaInfoCircle, FaGithub, FaVideo } from "react-icons/fa"
import {v4 as uuidv4} from "uuid";
import { useState } from 'react'
import DOMPurify from 'dompurify'
import "./index.css"
import Modal from "../Modal"

function Project( {title, imgLink, description, gitHubLink, videoLink, tools} ) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  function parseTitle(title){
    let newTitle = "";
    newTitle += title[0].toLowerCase();

    for(let i = 1; i < title.length; i++){
      if(title[i-1]==" "){
        newTitle += title[i].toLowerCase();
      }

      else{
        newTitle += title[i];
      }
    }

    newTitle = newTitle.replace(/\s/g, "-");

    
    return newTitle;
  }


  return (
    <>
        <div className='project-container' onClick={openModal}>
          <div className='project-image' /*style={{backgroundImage: "url(" + imgLink + ")"}}*/>
            <img className = {parseTitle(title)} src={imgLink}></img>
          </div>

          <div className="project-text">
              <div className='title-and-date'>
                <h3 className="title">{title}</h3>
                <p className="date">Sept 2020 - Dec 2021</p>
                <div className='tools'>
                  {tools.map( (tool) =>{return (
                  <div key={uuidv4()} className='tool' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tool.name)}}>  
                  </div>)})}
                </div>
              </div>
              <div className='summary'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus magnam nesciunt similique quae repellat voluptates in modi quasi repellendus.
              </div>
          </div>

          <div className='project-links'>
            <a href={gitHubLink} className='source-code' target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
                <FaGithub className="gh icon"/>
            </a>

            {videoLink && <a href={videoLink} target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
              <FaVideo className="video icon"/>
            </a> }

            
            <a>
              <FaInfoCircle onClick={openModal} className="info icon"/>
            </a>
       
       

          </div>

    </div>
      {modalIsOpen && <Modal title={title} imgLink={imgLink} description={description} tools={tools} isOpen = {modalIsOpen} closeModal={closeModal}/>}
    </>                   
    //  key = {project.id}
    // title = {project.title}
    // imgLink = {project.imglink}
    // description = {project.description}
    // gitHubLink = {project.gitHubLink}
    // videoLink = {project.videoLink}
    // tools = {project.tools}
  
  )
}

export default Project