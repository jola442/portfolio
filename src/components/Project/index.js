import React from 'react'
import { FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom'
import "./index.css"

function Project( {title, imgLink, description, gitHubLink, videoLink, tools} ) {
  return (
    <div className='project-container'>
        <div className='project-info-container'>
          <div className='project-info-image' /*style={{backgroundImage: "url(" + imgLink + ")"}}*/>
            <img src={imgLink}></img>
          </div>
          <div className="project-info-text">
            <p className="value">{title}</p>
            <Link to={gitHubLink} className='source-code'>
              Source Code
              <FaGithub />
              </Link>
          </div>
   
        </div>
        <div className="project-details-container">
            <div className='project-buttons'>
              <button className='description-button'>Description</button>
              <button className='video-button'>Video</button>
            </div>
  
            <div className='project-description'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde recusandae accusantium obcaecati quam vitae cupiditate vero facilis quod animi veritatis eligendi neque suscipit numquam iste atque architecto, enim tenetur minus consectetur aspernatur officia ex. Aperiam, aspernatur! Architecto, id doloribus?</p>
            </div>
            <div className='project-video'>
              <video controls>
                <source src= {videoLink} type="video/mp4"></source>
                Your browser does not support this video
              </video>
            </div>
        </div>

    </div>
  )
}

export default Project