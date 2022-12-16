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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque esse soluta doloribus accusantium a voluptatibus quisquam excepturi debitis! Commodi hic corrupti nostrum ipsum. Blanditiis aut odio, facilis dolores adipisci qui exercitationem unde illum necessitatibus aspernatur rem dolore nulla cupiditate ipsa, corporis vero, numquam ab modi non temporibus omnis? Nobis, aut placeat? Voluptatem dignissimos ipsam reprehenderit temporibus explicabo, minus voluptas fugit itaque quia repudiandae laudantium nostrum earum, quasi neque blanditiis, non quisquam veniam accusantium dolore veritatis nihil quae amet dolorum illum. Quos animi cum assumenda, veritatis deleniti pariatur reiciendis nulla nam voluptate rem doloribus! Iste, illum pariatur error perspiciatis, dicta minus, eaque totam provident ullam doloribus ipsa. Maiores odit voluptatibus sunt eos repellat quam doloribus dolor earum, blanditiis fugit harum itaque culpa impedit. Modi quibusdam eveniet tempore consequuntur dolorum in porro ad neque animi sed quo maxime delectus sunt mollitia aut voluptate iusto quasi, a, adipisci, placeat accusantium laborum itaque fugiat. Aperiam quaerat distinctio voluptate mollitia qui totam magni! Rem eveniet alias aut neque accusantium quibusdam. Alias, distinctio. Voluptatem repellat atque, nisi, nesciunt, deleniti nihil labore quasi odio alias laboriosam doloribus qui! Repudiandae quos impedit laboriosam voluptatibus, nulla perferendis expedita nisi a ab, odio illo amet laudantium doloribus odit inventore itaque aut cum dicta. Eaque laboriosam doloremque hic quam cupiditate reiciendis soluta sunt aut nulla exercitationem tenetur, odio debitis, delectus labore nisi in libero. Doloremque nam eaque explicabo nemo sit adipisci cumque! Quam quisquam, autem consequatur, doloribus ducimus rerum quibusdam ratione officia veritatis iste nostrum minima est tempora atque quo voluptates ullam optio. Alias adipisci rerum quam iusto quaerat fuga dignissimos pariatur exercitationem laboriosam recusandae. Minima dolores voluptatem quam, eius explicabo vitae laudantium culpa odit dignissimos cumque distinctio. Voluptate rerum explicabo eius odio accusantium incidunt asperiores et fuga cumque, itaque praesentium commodi ad quod quis ex facilis perspiciatis architecto laboriosam a deleniti? Tempora, adipisci tenetur tempore distinctio in repellat, dignissimos eaque minima consequatur deserunt velit nam perspiciatis ad exercitationem aliquam sint sunt eveniet! Asperiores fugit reprehenderit, tempora perferendis aspernatur quas perspiciatis magnam, autem totam molestias earum inventore in quibusdam recusandae ab ipsum animi provident modi laboriosam. Laudantium, quibusdam omnis iste vitae nulla fugit error! Consectetur reiciendis possimus iusto optio perspiciatis temporibus rem, animi tempora aliquid voluptatem est minus numquam voluptates deserunt recusandae id corrupti vitae, doloribus similique? Quibusdam cumque tenetur aliquam unde praesentium odit exercitationem, veniam dolorem odio voluptate ducimus quidem assumenda ipsum temporibus hic. At iusto facere numquam accusamus quasi obcaecati ipsa eaque quam culpa sunt assumenda, praesentium similique minus magnam hic, esse officiis pariatur veniam repudiandae facilis. Inventore nihil soluta labore eos quae vero facilis laudantium, et perspiciatis! Fuga vitae dolor officiis ab totam pariatur incidunt aspernatur quibusdam labore, molestias animi officia dolore vero ipsum, modi commodi ut doloribus? Provident reiciendis voluptas earum rerum, aspernatur inventore ex est deserunt minus asperiores veritatis cumque quaerat voluptates quae, labore rem fugiat incidunt. Doloremque beatae corporis, accusantium neque porro ipsam laudantium quis natus at, dolores, fuga aliquid sint sed odit accusamus ipsum modi doloribus iusto officia. Animi cumque consequuntur veritatis numquam blanditiis.
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