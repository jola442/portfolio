"use client"

import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { useRef, type FormEvent, type JSX } from "react"
import emailjs from "@emailjs/browser"

export default function Contact(): JSX.Element {
  const form = useRef<HTMLFormElement | null>(null)
  const linkedInUrl = "https://www.linkedin.com/in/jola-ajayi/"
  const email = "mailto:benjamen.ajayi@gmail.com"

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm("service_ee1k0c5", "template_8qfebdx", form.current, "4fxbqjNPnDO1Q10oI")
      .then(
        () => {
          alert("Your message has been sent. Thanks for reaching out!")
          window.location.reload()
        },
        () => {
          alert("Something went wrong, please try again")
        }
      )
  }

  const inputClass =
    "w-full border-4 border-white/60 bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-widest text-white placeholder-white/40 outline-none transition focus:border-white focus:bg-white/10"

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="border-b-4 border-white/20 px-6 pt-10 pb-8 xl:px-12 xl:pt-12">
        <div className="mb-2 text-xs font-black uppercase tracking-widest text-white/60">Say Hello</div>
        <h1 className="font-display text-7xl font-black uppercase leading-none text-white xl:text-[9rem]">
          CONTACT<br />ME
        </h1>
      </div>

      {/* Form + info */}
      <div className="grid xl:grid-cols-[2fr_1fr]">
        {/* Form */}
        <div className="border-b-4 border-white/20 p-6 xl:border-b-0 xl:border-r-4 xl:p-12">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input type="text" name="name" placeholder="NAME" required className={inputClass} />
            <input type="email" name="email" placeholder="EMAIL" required className={inputClass} />
            <input type="text" name="subject" placeholder="SUBJECT" required className={inputClass} />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              required
              rows={6}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="border-4 border-white bg-white px-6 py-4 font-display text-xl font-black uppercase tracking-widest text-brand transition-all duration-200 shadow-[6px_6px_0px_rgba(255,255,255,0.5)] hover:skew-y-1 hover:bg-transparent hover:text-white hover:shadow-[10px_10px_0px_rgba(255,255,255,0.6)]"
            >
              SEND MESSAGE &rarr;
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="flex flex-col divide-y-2 divide-white/20 p-6 xl:p-12">
          {[
            { icon: FaMapMarkerAlt, label: 'Location', value: 'Ottawa, ON', href: undefined },
            { icon: FaPhoneAlt, label: 'Phone', value: '778-883-3106', href: undefined },
            { icon: FaEnvelope, label: 'Email', value: 'benjamen.ajayi@gmail.com', href: email },
            { icon: FaLinkedin, label: 'LinkedIn', value: 'Jola Ajayi', href: linkedInUrl },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-white/40">
                  <Icon className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-white/60">{label}</div>
                  <div className="font-bold text-white break-all">{value}</div>
                </div>
              </>
            )
            return href ? (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener"
                className="flex items-center gap-4 py-5 transition hover:bg-white/5 first:pt-0">
                {inner}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-4 py-5 first:pt-0">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
