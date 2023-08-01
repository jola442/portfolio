import { memo } from 'react'
import ReactDom  from 'react-dom';
import "./index.css"
import {v4 as uuidv4} from "uuid";
import { FaTimes } from "react-icons/fa"
import DOMPurify from 'dompurify';

const Modal = ( {title, desc, imgLink, isOpen, closeModal, tools}) => {

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
                <p className='close-button' onClick={onCloseClicked}> <FaTimes/></p>
            </div>

            <div className='project-img-container'>
                <img className='project-img' src={imgLink} alt={title}/>
            </div>

            <div className='tools'>
                {tools.map( (tool) =>{return (
                    <div key={uuidv4()} className='tool'>
                        {tool.name}
                    </div>)})
                }
            </div>

            <div className=''></div>          
            <p className='description'>{desc}</p>


            

            <div className='footer'>

        </div>
            
        </div>
        </div>
        

         </>} 
      
    </>, 
    document.getElementById("modal"))
}

export default memo(Modal)