import React from 'react'
import { FaInfoCircle, FaGithub, FaVideo } from "react-icons/fa"
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
import DOMPurify from 'dompurify'
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

  function parseTitle(title){
    console.log("I ran");
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

    // console.log("Final:",newTitle)
    return newTitle;
  }

  console.log(parseTitle("Movie Database Platform"))

  return (
    <div className='project-container'>
        <div className='project-info-container'>
          <div className='project-info-image' /*style={{backgroundImage: "url(" + imgLink + ")"}}*/>
            <img className = {parseTitle(title)} src={imgLink}></img>
          </div>

          <div className="project-info-text">
              <div className='title-and-date'>
                <h3 className="title">{title}</h3>
                <p className="date">Sept 2020 - Dec 2021</p>
                <div className='tools'>
                  {tools.map( (tool) =>{return (
                  <div className='tool' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tool.name)}}>  
                  </div>)})}
                </div>
              </div>
              <div className='summary'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque accusamus magnam nesciunt similique quae repellat voluptates in modi quasi repellendus.
              </div>
          </div>

          <div className='project-links'>
            <a href={gitHubLink} className='source-code' target="_blank" rel="noreferrer noopener">
                <FaGithub className="gh icon"/>
            </a>

            {videoLink && <a href={videoLink}>
              <FaVideo className="video icon"/>
            </a> }

            
            <a>
              <FaInfoCircle className="info icon"/>
            </a>
       
       

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