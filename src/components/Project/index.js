import React from 'react'
import { FaInfoCircle, FaGithub, FaVideo, FaGlobe, FaExternalLinkAlt } from "react-icons/fa"
import {v4 as uuidv4} from "uuid";
import { memo, useState, useMemo } from 'react'
import DOMPurify from 'dompurify'
import "./index.css"
import Modal from "../Modal"
import { useCallback } from 'react';

function Project( {title, imgLink, desc, summary, gitHubLink, videoLink, date, tools, index, demoLink, toggleVisibility} ) {

  function openModal(){
    toggleVisibility(index);
  }

  function parseTitle(title){
    let newTitle = title.toLowerCase();

    newTitle = newTitle.replace(/\s/g, "-");

    return newTitle;
  }

  const projectClassName = useMemo( () => (parseTitle(title)), [title]);


  return (
    <>
        <div className='project-container' onClick={openModal}>
          <div className='project-image' /*style={{backgroundImage: "url(" + imgLink + ")"}}*/>
            <img className = {projectClassName} src={imgLink} alt={title}></img>
          </div>

          <div className="project-text">
              <div className='project-middle'>
                <h3 className="title">{title}</h3>
                <p className="date" >{date}</p>
                {demoLink && 
                <a href={demoLink} className="demo-link" target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
                  Live Demo
                  <FaExternalLinkAlt className='external-link icon'></FaExternalLinkAlt>
                </a>}
                <div className='tools'>
                  {tools.map( (tool) =>{return (
                    <div key={uuidv4()} className='tool'> 
                      {tool.name} 
                    </div>)})}
                </div>
              </div>
              <div className='summary'>
                  {summary}
              </div>
          </div>

          <div className='project-links'>
            <a href={gitHubLink} target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
                <FaGithub className="gh icon"/>
            </a>

            {demoLink && <a href={demoLink} target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
                <FaGlobe className='desktop icon'></FaGlobe>
            </a>}

            {videoLink && <a href={videoLink} target="_blank" rel="noreferrer noopener" onClick={(e)=>e.stopPropagation()}>
              <FaVideo className="video icon"/>
            </a> }

            
           
            <FaInfoCircle onClick={openModal} className="info icon"/>
          
       
       

          </div>

    </div>
      {/* {modalIsOpen && <Modal title={title} imgLink={imgLink} summary={summary} desc = {desc} tools={tools} isOpen = {modalIsOpen} closeModal={closeModal}/>} */}
    </>                   
    //  key = {project.id}
    // title = {project.title}
    // imgLink = {project.imglink}
    // summary = {project.summary}
    // gitHubLink = {project.gitHubLink}
    // videoLink = {project.videoLink}
    // tools = {project.tools}
  
  )
}

export default memo(Project)