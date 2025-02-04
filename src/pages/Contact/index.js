import "./index.css"
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import MobileNavbar from "../../components/MobileNavbar";


export default function Contact(){
    const form = useRef();
    const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi/"
    const email = "mailto:benjamen.ajayi@gmail.com"

    function sendEmail(e){
        e.preventDefault();
        // emailjs.sendForm(serviceID, templateID, templateParams, publicKey);
        emailjs
        .sendForm('service_ee1k0c5', 'template_8qfebdx', form.current, "4fxbqjNPnDO1Q10oI")
        .then(
          () => {
            alert('Your message has been sent. Thanks for reaching out!')
            window.location.reload(false)
          },
          () => {
            alert('Something went wrong, please try again')
          }
        )
    }

    return (
    <>
        <MobileNavbar/>
        {/* <div className="page-title">
            <h1>Contact Me</h1>
        </div> */}

        <div className="contact-me container animate__animated">

            <form ref={form} onSubmit={sendEmail}>
                <div className="form-input">
                    <input type="text" id="name" name="name" placeholder="Name" required></input>
                    <input type="email" id="email" name="email" placeholder="Email" required></input>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required></input>
                    <textarea name="message" placeholder="Enter your message here" required/>
                    <input type="submit" value="Send"></input>
                </div>

                <div className="contact-details">
                    <div className="location contact-container">
                        <div className="location icon">
                            <FaMapMarkerAlt/>
                        </div>

                        <div className="location contact-text">
                            Ottawa, ON
                        </div>
                    </div>

                    <div className="phone-number contact-container">
                        <div className="phone-number icon">
                            <FaPhoneAlt/>
                        </div>

                        <div className="phone-number contact-text">
                            778-883-3106
                        </div>
                    </div>

                    <a href={email} className="mail contact-container">
                        <div className="mail icon">
                            <FaEnvelope/>
                        </div>

                        <div className="mail contact-text">
                            benjamen.ajayi@gmail.com
                        </div>
                    </a>

                    <a href={linkedInUrl} className="lk-in contact-container">
                        <div className="lk-in icon">
                            <FaLinkedin/>
                        </div>

                        <div className="lk-in contact-text">
                            Jola Ajayi
                        </div>
                    </a>

                </div>
    
            </form>
        </div>
    </>)
}