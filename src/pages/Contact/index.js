import "./index.css"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { useRef } from "react";
import emailjs from '@emailjs/browser'


export default function Contact(){
    const form = useRef();
  

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
        <div className="page-title">
            <h1>Contact Me</h1>
        </div>

        <div className="contact-me container animate__animated">

            <form ref={form} onSubmit={sendEmail}>
                <div className="form-input">
                    <input type="text" id="name" name="name" placeholder="Name" required></input>
                    <input type="text" id="email" name="email" placeholder="Email" required></input>
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
                            Ottawa,ON
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

                    <div className="mail contact-container">
                        <div className="mail icon">
                            <FaEnvelope/>
                        </div>

                        <div className="mail contact-text">
                            benjamen.ajayi@gmail.com
                        </div>
                    </div>

                </div>
    
            </form>
        </div>
    </>)
}