"use client"

import { memo, type MouseEvent, type JSX } from 'react'
import ReactDom  from 'react-dom';
import {v4 as uuidv4} from "uuid";
import { FaAngleRight, FaAngleLeft, FaTimes } from "react-icons/fa"
import DOMPurify from 'dompurify';
import type { ProjectItem } from '../../data/projectData';


type ModalProps = {
    project: ProjectItem
    closeModal: () => void
    numProjects: number
    index: number
    getNextIndex: (index: number) => void
}

const Modal = ({ project, closeModal, numProjects, index, getNextIndex }: ModalProps): JSX.Element | null => {
   
    function onCloseClicked(): void {
        closeModal();
    }

    function increaseIndex(event: MouseEvent<HTMLElement>): void {
        event.stopPropagation();
        getNextIndex((index+1)%numProjects)
    }

    function decreaseIndex(event: MouseEvent<HTMLElement>): void {
        event.stopPropagation();
        if(index-1 === -1){
            getNextIndex(numProjects-1)
        }

        else{
            getNextIndex(index-1);
        }
    }

    const modalRoot = document.getElementById("modal")
    if (!modalRoot) {
        return null
    }

    return ReactDom.createPortal(
    <>
        <>
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 px-3 py-6' onClick={onCloseClicked}>
        <button className='absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-lg transition hover:bg-white xl:block' onClick={decreaseIndex} aria-label='Previous project' type='button'><FaAngleLeft></FaAngleLeft></button>
        <button className='absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-3 text-primary shadow-lg transition hover:bg-white xl:block' onClick={increaseIndex} aria-label='Next project' type='button'><FaAngleRight></FaAngleRight></button>
        <div className='max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-page p-5 shadow-2xl ring-1 ring-primary/20 sm:p-7' onClick={(e) => {e.stopPropagation()}}>
            <div className='mb-4 flex items-start justify-between gap-4'>
                <h1 className='text-2xl font-bold text-primary sm:text-3xl'>{project.title}</h1>
                <button className='rounded-full p-2 text-xl text-primary transition hover:bg-primary/10' onClick={onCloseClicked} aria-label='Close modal' type='button'> <FaTimes/></button>
            </div>

            <div className='overflow-hidden rounded-xl bg-white ring-1 ring-primary/10'>
                <img className='h-auto w-full object-cover' src={project.imgLink} alt={project.title}/>
            </div>

            <div className='my-5 flex flex-wrap gap-2'>
                {project.tools.map( (tool) =>{return (
                    <div key={uuidv4()} className='rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary'>
                        {tool.name}
                    </div>)})
                }
            </div>
                   
            <p className="max-w-none text-base leading-7 text-slate-700" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.description) }} />



            
            <div className='mt-6 flex items-center justify-center gap-3 xl:hidden'>
                <button className='rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white' onClick={decreaseIndex} type='button'>Previous</button>
                <button className='rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white' onClick={increaseIndex} type='button'>Next</button>
            </div>
            
        </div>
        </div>
        

         </>
      
    </>, 
    modalRoot)
}

export default memo(Modal)