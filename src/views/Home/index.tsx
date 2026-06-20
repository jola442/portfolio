import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa"
import Link from 'next/link'
import MobileNavbar from "../../components/MobileNavbar";
import type { JSX } from 'react'

export default function Home(): JSX.Element {
    const githubUrl = "https://github.com/jola442";
    const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi/"
    const email = "mailto:benjamen.ajayi@gmail.com"
    const resume = "/Jola_Ajayi_Resume.pdf"
    return (
        <>
            <MobileNavbar/>
            <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-24 sm:px-6 xl:grid xl:grid-cols-2 xl:items-center xl:gap-14 xl:px-10 xl:pt-32">
                <div className="order-2 xl:order-1">
                    <div className="space-y-4 rounded-2xl bg-white/70 p-6 shadow-lg ring-1 ring-primary/10 sm:p-8">
                        <p className="text-lg font-semibold text-primary">Hey there,</p>
                        <h1 className="text-4xl font-bold text-primary sm:text-5xl">I'm Jola Ajayi</h1>
                        <p className="text-base leading-7 text-slate-700 sm:text-lg">
                        A Computer Science graduate from Carleton University with a passion for technology and delivering impactful solutions. Currently working as a Customer Success Specialist at Visualping, I bring a strong foundation in software engineering, web development, and quality assurance to my work. I’m dedicated to bridging technical expertise with exceptional client support to ensure polished and effective outcomes.
Beyond technology, you'll find me exploring new skateboarding tricks, strategizing on the chessboard, or diving into the latest video game releases in my spare time.
                        </p>
                        <Link href="/projects" className="inline-flex rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90">
                            View my work
                        </Link>
                        <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
                        <a href={githubUrl} target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/5">
                            <FaGithub className="text-lg"/>
                            <span>Github</span>
                        </a>
                        <a href={linkedInUrl} target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/5">
                            <FaLinkedin className="text-lg"/>
                            <span>LinkedIn</span>
                        </a>
                        <a href={email} target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/5">
                            <FaEnvelope className="text-lg"/>
                            <span>Email</span>
                        </a>
                        <a href={resume} target="_blank" rel="noreferrer noopener" className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/5">
                            <FaFilePdf className="text-lg"/>
                            <span>Resume</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-primary/10 xl:order-2">
                    <img src = "/intro-image2.jpg" alt="programming" className="h-full w-full rounded-xl object-cover"></img>
                </div>
            </section>
        
 
        </>
        
    )
}