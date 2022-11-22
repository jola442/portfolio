import React from 'react'
import { FaInfoCircle, FaGithub, FaVideo } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./index.css"

function Project( {title, imgLink, description, gitHubLink, videoLink, tools} ) {

  // const [videoButtonClicked, setVideoButtonClicked] = useState(false);
  // const [descriptionButtonClicked, setDescriptionButtonClicked] = useState(true);

  // function showDescription(){
  //   setDescriptionButtonClicked(true);
  // }

  // function showVideo(){
  //   setDescriptionButtonClicked(false);
  // }

  return (
    <div className='project-container'>
        <div className='project-info-container'>
          <div className='project-info-image' /*style={{backgroundImage: "url(" + imgLink + ")"}}*/>
            <img src={imgLink}></img>
          </div>

          <div className="project-info-text">
              <div className='title-and-date'>
                <h3 className="title">{title}</h3>
                <p className="date">Sept 2020 - Dec 2021</p>
                <div className='tools'>
                  <div className='tool'>Github</div>
                  <div className='tool'>MongoDB</div>
                  <div className='tool'>Nodejs</div>
                  <div className='tool'>Mongoose</div>
                  <div className='tool'>HTML</div>
                  <div className='tool'>CSS</div>
                  <div className='tool'>React</div>
                </div>
              </div>
              <div className='summary'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde recusandae accusantium obcaecati quam vitae cupiditate vero facilis quod animi veritatis eligendi neque suscipit numquam iste atque architecto, enim tenetur minus consectetur aspernatur officia ex. Aperiam, aspernatur! Architecto, id doloribus?
              </div>
          </div>

          <div className='project-links'>
            <Link to={gitHubLink} className='source-code'>
                <FaGithub className="gh icon"/>
            </Link>

            <Link>
              <FaVideo className="video icon"/>
            </Link>

            
            <Link>
              <FaInfoCircle className="info icon"/>
            </Link>
       
       

          </div>

   
        </div>
        {/* <div className="project-details-container">
            <div className='project-buttons'>
              <button className='description-button' onClick={showDescription}>Description</button>
            <div/>
              <button className='video-button' onClick={showVideo}>Video</button>
            </div>
  
            {descriptionButtonClicked && <div className='project-description'>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde recusandae accusantium obcaecati quam vitae cupiditate vero facilis quod animi veritatis eligendi neque suscipit numquam iste atque architecto, enim tenetur minus consectetur aspernatur officia ex. Aperiam, aspernatur! Architecto, id doloribus?</p>
            </div>}

            {!descriptionButtonClicked &&<div className='project-video'>
              <video controls>
                <source src= {videoLink} type="video/mp4"></source>
                Your browser does not support this video
              </video>
            </div>
            }
        </div> */}

    </div>
  )
}

export default Project