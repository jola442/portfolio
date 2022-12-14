import { useState } from 'react'
import ReactDom  from 'react-dom';
import "./index.css"
import {v4 as uuidv4} from "uuid";
import DOMPurify from 'dompurify';

const Modal = ( {title, description, imgLink, isOpen, closeModal, tools}) => {

    function onCloseClicked(event){
        closeModal();
    }
  return ReactDom.createPortal(
    <>
        {isOpen &&
        <>
        <div className='modal-overlay' onClick={onCloseClicked}>
        <div className='modal-container' onClick={(e) => {e.stopPropagation()}}>
            <div className='header'>
                <h1 className='title'>{title}</h1>
                <p className='close-button' onClick={onCloseClicked}>X</p>
            </div>

            <div className='project-img-container'>
                <img className='project-img' src={imgLink}/>
            </div>

            <div className='tools'>
                {tools.map( (tool) =>{return (
                        <div key={uuidv4()} className='tool' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tool.name)}}>  
                    </div>)})
                }
            </div>

            <div className=''></div>          
            <p className='description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde recusandae accusantium obcaecati quam vitae cupiditate vero facilis quod animi veritatis eligendi neque suscipit numquam iste atque architecto, enim tenetur minus consectetur aspernatur officia ex. Aperiam, aspernatur! Architecto, id doloribus? 
            </p>

            

            <div className='footer'>

        </div>
            
        </div>
        </div>
        

         </>} 
      
    </>, 
    document.getElementById("modal"))
}

export default Modal