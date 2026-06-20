"use client"

import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { useRef, type FormEvent, type JSX } from "react";
import emailjs from '@emailjs/browser'
import MobileNavbar from "../../components/MobileNavbar";


export default function Contact(): JSX.Element {
    const form = useRef<HTMLFormElement | null>(null);
    const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi/"
    const email = "mailto:benjamen.ajayi@gmail.com"

    function sendEmail(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        // emailjs.sendForm(serviceID, templateID, templateParams, publicKey);
        emailjs
        .sendForm('service_ee1k0c5', 'template_8qfebdx', form.current, "4fxbqjNPnDO1Q10oI")
        .then(
          () => {
            alert('Your message has been sent. Thanks for reaching out!')
                        window.location.reload()
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

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 xl:px-10 xl:pt-32">
            <form ref={form} onSubmit={sendEmail} className="grid gap-6 rounded-2xl bg-white/80 p-6 shadow-lg ring-1 ring-primary/10 xl:grid-cols-[2fr_1fr] xl:gap-8 xl:p-10">
                <div className="flex flex-col gap-4">
                    <input type="text" id="name" name="name" placeholder="Name" required className="rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-primary"></input>
                    <input type="email" id="email" name="email" placeholder="Email" required className="rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-primary"></input>
                    <input type="text" id="subject" name="subject" placeholder="Subject" required className="rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-primary"></input>
                    <textarea name="message" placeholder="Enter your message here" required className="min-h-40 rounded-lg border border-primary/20 bg-white px-4 py-3 text-base text-slate-700 outline-none transition focus:border-primary"/>
                    <input type="submit" value="Send" className="cursor-pointer rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90"></input>
                </div>

                <div className="grid content-start gap-3">
                    <div className="flex items-center gap-3 rounded-lg border border-primary/15 bg-page px-4 py-3 text-primary">
                        <FaMapMarkerAlt className="text-xl"/>
                        <div className="text-base font-semibold">Ottawa, ON</div>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg border border-primary/15 bg-page px-4 py-3 text-primary">
                        <FaPhoneAlt className="text-xl"/>
                        <div className="text-base font-semibold">778-883-3106</div>
                    </div>

                    <a href={email} className="flex items-center gap-3 rounded-lg border border-primary/15 bg-page px-4 py-3 text-primary transition hover:border-primary/40 hover:bg-primary/5">
                        <FaEnvelope className="text-xl"/>
                        <div className="text-base font-semibold">benjamen.ajayi@gmail.com</div>
                    </a>

                    <a href={linkedInUrl} className="flex items-center gap-3 rounded-lg border border-primary/15 bg-page px-4 py-3 text-primary transition hover:border-primary/40 hover:bg-primary/5">
                        <FaLinkedin className="text-xl"/>
                        <div className="text-base font-semibold">Jola Ajayi</div>
                    </a>

                </div>
    
            </form>
        </section>
    </>)
}