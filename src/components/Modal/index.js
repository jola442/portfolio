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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio distinctio voluptatibus quod hic pariatur. Error, nemo dicta modi optio sapiente laborum illo? Saepe provident quis eius eligendi cum alias cumque voluptatum iure vitae inventore reiciendis aspernatur, obcaecati facilis tempora? Enim veritatis doloremque nemo quibusdam asperiores labore, assumenda aliquid! Quos accusamus sunt laudantium vel voluptatum molestiae veniam, possimus perspiciatis nostrum voluptatibus dolore placeat nobis, ducimus voluptates suscipit nihil, consequatur ratione. A velit fugiat voluptas repellendus voluptatibus deserunt quae nemo harum architecto, quod quas distinctio doloremque commodi illo laborum est, consectetur ipsum error nostrum suscipit optio iusto itaque. Eius ab natus quas iure ex veritatis? Tenetur autem reprehenderit obcaecati incidunt sunt unde in rem nulla fugit earum. Commodi sunt veritatis fuga excepturi quos reprehenderit culpa ab minima explicabo nisi, debitis doloremque perferendis dolorem corrupti inventore beatae doloribus molestiae natus labore modi ipsum officia veniam. Corrupti consequuntur aut praesentium veritatis ea sed deserunt velit dolor voluptatum, repudiandae doloremque culpa nobis, nulla dolores fuga dolore laudantium voluptas dolorem beatae officia amet. Delectus voluptatum rerum placeat labore quibusdam obcaecati eaque alias tempore sit voluptates? Labore voluptas accusantium tenetur nobis saepe delectus ea reprehenderit quo laboriosam inventore odit perspiciatis, facere vitae nostrum. Maxime perferendis sit placeat?
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