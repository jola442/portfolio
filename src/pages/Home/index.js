import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./index.css"
import MobileNavbar from "../../components/MobileNavbar";

export default function Home(){
    const githubUrl = "https://github.com/jola442";
    const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi/"
    const email = "mailto:jolaajayi@cmail.carleton.ca"
    const resume = "./Jola Ajayi's Resume.pdf"
    return (
        <>
            <MobileNavbar/>
            <div className='home container animate__animated'>
                <div className="intro-image">
                    <img src = "../intro-image.jpg" alt="programming"></img>
                </div>

                <div className="intro-container">
                    <div className="intro">
                        <p>Hey there,</p>
                        <h1>I'm Jola Ajayi</h1>
                        <p>
                            A recent Computer Science graduate from Carleton University with a passion for web development and quality assurance. 
                            With a strong belief in delivering complete and polished products, I'm eager to bring my skills to a dynamic team as a Software Engineer. 
                            Beyond coding, you'll find me exploring new skateboarding tricks, strategizing on the chessboard, or diving into the latest video game releases in my spare time. 
                        </p>
                        <Link to="/projects">
                            <button className = "view-work button">View my work</button>
                        </Link>
                        {/* <button>Download my resume</button> */}
                    </div>
                    <div className= "contact-menu">
                        <a href={githubUrl} target="_blank" rel="noreferrer noopener">
                            <div className = "gh icon-container">
                                <div className="gh icon-text">
                                    Github
                                </div>
                                <FaGithub className="gh icon"/>      
                            </div>
                        </a>
                        
                    
                        <a href={linkedInUrl} target="_blank" rel="noreferrer noopener">
            
                            <div className = "lk-in icon-container">
                                <div className="lk-in icon-text">
                                    LinkedIn
                                </div>
                                <FaLinkedin className="lk-in icon"/>
                            </div>
                        </a>
                        
                        <a href={email} target="_blank" rel="noreferrer noopener">
                            <div className="mail icon-container">
                                <div className="mail icon-text">
                                    Email
                                </div>   
                                <FaEnvelope className="mail icon"/> 
                            </div>
                        </a>
        
                        <a href={resume} target="_blank" rel="noreferrer noopener">
                            <div className="resume icon-container">
                                <div className="resume icon-text">
                                    Resume
                                </div>   
                                <FaFilePdf className="resume icon"/> 
                            </div>
                        </a>
                    </div>
                    </div>


        </div>
        
 
        </>
        
    )
}