import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./index.css"

export default function Home(){
    const githubUrl = "https://github.com/jola442";
    const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi-083604216/"
    const email = "mailto:benjamen.ajayi@gmail.com"
    return (
        <div className='home container animate__animated'>
            <div className="intro-image">
                <img src = "../intro-image.jpg" alt="programming"></img>
            </div>
            <div className="intro">
                <h2>Hey there,</h2>
                <h1>I'm Jola Ajayi</h1>
                <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus unde recusandae accusantium obcaecati quam vitae cupiditate vero facilis quod animi veritatis eligendi neque suscipit numquam iste atque architecto, enim tenetur minus consectetur aspernatur officia ex. Aperiam, aspernatur! Architecto, id doloribus?</h3>
                <Link to="/Projects">
                    <button className = "view-work button">View my work</button>
                </Link>
                {/* <button>Download my resume</button> */}
            </div>

            <div className= "contact-menu">
                <a href={githubUrl} target="_blank" rel="noreferrer noopener">
                    <div className = "gh-container">
                        <div className="gh-text">
                            Github
                        </div>
                        <FaGithub className="gh icon"/>      
                    </div>
                </a>
                
              
                <a href={linkedInUrl} target="_blank" rel="noreferrer noopener">
      
                    <div className = "lk-in-container">
                        <div className="lk-in-text">
                            LinkedIn
                        </div>
                        <FaLinkedin className="lk-in icon"/>
                    </div>
                </a>
                 
                <a href={email}>
                    <div className="mail-container">
                        <div className="mail-text">
                            Email
                        </div>   
                        <FaEnvelope className="mail icon"/> 
                    </div>
                </a>
  
                    {/* <div>Download Resume</div> */}
                </div>
       </div>
    )
}