"use client"

import { useState, useRef, type FormEvent, type JSX } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import { projects } from '../../data/projectData'
import type { ProjectTool } from '../../data/projectData'
import Project from '../../components/Project'
import Modal from '../../components/Modal'
import Reveal from '../../components/Reveal'
import emailjs from '@emailjs/browser'

const githubUrl = 'https://github.com/jola442'
const linkedInUrl = 'https://www.linkedin.com/in/jola-ajayi/'
const emailAddress = 'benjamen.ajayi@gmail.com'
const resume = '/Jola_Ajayi_Resume.pdf'

// Theme-sensitive class fragments — full strings so Tailwind tree-shakes them correctly
const D = 'border-ink/15 dark:border-white/20'
const P = 'text-ink dark:text-white'
const M = 'text-ink/50 dark:text-white/50'
const S = 'text-ink/70 dark:text-white/70'
const Bdr = 'border-ink/20 dark:border-white/25'
const Srf = 'bg-ink/5 dark:bg-white/5'
const Dv = 'divide-ink/15 dark:divide-white/20'

function getCategory(tools: ProjectTool[]): string {
  const n = tools.map(t => t.name.toLowerCase())
  if (n.some(x => x.includes('qt') || x === 'c')) return 'SYSTEMS'
  if (n.includes('javafx')) return 'DESKTOP'
  if (n.includes('python') || n.includes('postgresql')) return 'DATA'
  if (n.some(x => x.includes('react')) && n.some(x => ['nodejs', 'spring', 'express', 'mongodb'].some(k => x.includes(k))))
    return 'FULL STACK'
  if (n.some(x => x.includes('react'))) return 'FRONTEND'
  if (n.includes('nodejs') || n.includes('express')) return 'BACKEND'
  return 'WEB'
}

export default function Home(): JSX.Element {
  const [projectIndex, setProjectIndex] = useState(-1)
  const form = useRef<HTMLFormElement | null>(null)

  function toggleProjectVisibility(index: number): void {
    setProjectIndex(prev => (prev >= 0 ? -1 : index))
  }
  function getNextIndex(index: number): void { setProjectIndex(index) }
  function closeModal(): void { setProjectIndex(-1) }

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (!form.current) return
    emailjs
      .sendForm('service_ee1k0c5', 'template_8qfebdx', form.current, '4fxbqjNPnDO1Q10oI')
      .then(
        () => { alert('Your message has been sent. Thanks for reaching out!'); form.current?.reset() },
        () => alert('Something went wrong, please try again')
      )
  }

  const inputClass = [
    'w-full border-2 rounded-sm px-4 py-3 text-sm font-medium outline-none transition-all duration-200',
    'border-ink/25 bg-ink/5 text-ink placeholder-ink/40',
    'focus:border-ink focus:bg-ink/10 focus:shadow-[0_0_0_3px_rgba(10,10,26,0.08)]',
    'dark:border-white/30 dark:bg-white/5 dark:text-white dark:placeholder-white/40',
    'dark:focus:border-white dark:focus:bg-white/10 dark:focus:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]',
  ].join(' ')

  return (
    <>
      {/* HOME */}
      <section id="home">
        <div className="relative overflow-hidden px-6 pt-10 pb-0 xl:px-12 xl:pt-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, currentColor 0%, transparent 65%)' }}
          />
          <div className="relative">
            <div className="flex-1">
              <div
                className={`mb-6 inline-flex items-center gap-2 border-2 px-4 py-2 backdrop-blur-sm animate-fade-up ${Bdr} ${Srf} shadow-[3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.4)] transition-transform duration-200 hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] dark:hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]`}
                style={{ animationDelay: '0ms' }}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                <span className={`text-xs font-semibold uppercase tracking-widest ${M}`}>
                  Building Impactful Products &middot; Shipping with Engineering + Data
                </span>
              </div>

              <h1 className={`font-display font-black uppercase leading-none ${P}`}>
                <span className="block text-8xl animate-fade-up xl:text-[11rem] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)] transition-all duration-300 hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)] dark:hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]" style={{ animationDelay: '80ms' }}>JOLA</span>
                <span className="block text-8xl animate-fade-up xl:text-[11rem] drop-shadow-[4px_4px_0px_rgba(0,0,0,0.15)] dark:drop-shadow-[4px_4px_0px_rgba(0,0,0,0.4)] transition-all duration-300 hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.2)] dark:hover:drop-shadow-[8px_8px_0px_rgba(0,0,0,0.5)]" style={{ animationDelay: '200ms' }}>AJAYI</span>
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '320ms' }}>
                {/* <span className="border-2 border-brand bg-brand px-3 py-1.5 text-sm font-black uppercase tracking-widest text-white shadow-[3px_3px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.4)] transition-all duration-200 hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)] dark:hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                  Computer Science
                </span>
                <span className={`font-semibold ${M}`}>Graduate &amp;</span> */}
                <span className="border-2 border-brand bg-brand px-3 py-1.5 text-sm font-black uppercase tracking-widest text-white shadow-[3px_3px_0px_rgba(0,0,0,0.2)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.4)] transition-all duration-200 hover:skew-y-1 hover:shadow-[5px_5px_0px_rgba(0,0,0,0.25)] dark:hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
                  Product Manager
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Reveal className={`mt-10 border-y-4 ${D}`}>
          <div className="flex overflow-x-auto">
            {[
              { value: '10', label: 'Projects' },
              { value: '2', label: 'Years Exp' },
              { value: 'B.C.S.', label: 'CS Degree' },
              { value: 'Ottawa', label: 'Based In' },
            ].map(({ value, label }) => (
              <div key={label} className={`shrink-0 border-r px-6 py-5 last:border-r-0 ${D}`}>
                <div className={`font-display text-3xl font-black uppercase xl:text-4xl ${P}`}>{value}</div>
                <div className={`text-xs font-bold uppercase tracking-widest ${M}`}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Quick-nav tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {([
            { href: '#projects', label: 'Projects', sublabel: '9+ engineering projects', tag: 'Explore', bg: 'bg-emerald-400', tp: 'text-black', ts: 'text-black/60', external: false },
            { href: '#contact', label: 'Contact Me', sublabel: "Let's build something", tag: 'Reach Out', bg: 'bg-pink-500', tp: 'text-white', ts: 'text-white/70', external: false },
            { href: githubUrl, label: 'GitHub', sublabel: 'Open source repositories', tag: 'View Code', bg: 'bg-ink', tp: 'text-white', ts: 'text-white/50', external: true },
          ] as { href: string; label: string; sublabel: string; tag: string; bg: string; tp: string; ts: string; external: boolean }[]).map(({ href, label, sublabel, tag, bg, tp, ts, external }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer noopener' : undefined}
                className={`group flex flex-col justify-between border-b-4 ${D} ${bg} p-6 transition-all duration-300 hover:brightness-110 sm:border-r-4 last:sm:border-r-0`}
              >
                <div>
                  <div className={`text-xs font-black uppercase tracking-widest ${ts}`}>{tag}</div>
                  <h3 className={`font-display mt-1 text-2xl font-black uppercase ${tp}`}>{label}</h3>
                  <div className={`text-sm font-medium ${ts}`}>{sublabel}</div>
                </div>
                <div className={`mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-widest ${tp}`}>
                  <span>MORE</span>
                  <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bio + Info */}
        <div className="grid xl:grid-cols-2">
          <Reveal className={`border-b-4 p-6 xl:border-b-0 xl:border-r-4 xl:p-12 ${D}`}>
            <div className={`mb-3 text-xs font-black uppercase tracking-widest ${M}`}>About</div>
            <p className={`text-base leading-7 xl:text-lg ${S}`}>
Software developer with experience in product management and customer-facing roles. I specialize in bridging technical execution with user needs, using customer insights to build practical solutions that deliver measurable impact.
            </p>
            <p className={`mt-4 text-base leading-7 xl:text-lg ${S}`}>
At Visualping, I contribute to product strategy while building internal tools, improving workflows, and delivering technical solutions that help teams operate more efficiently and customers achieve better outcomes.

            </p>

            <p className={`mt-4 text-base leading-7 xl:text-lg ${S}`}>
Beyond technology, I'm passionate about competition, strategy, and continuous learning.
 Chess is a major interest of mine, which led me to create <a href="https://chessmask.com" target="_blank" rel="noreferrer noopener" className="text-blue-500 underline">Chessmask</a>,
  a platform for blindfold chess training. Outside of work, you'll usually find me playing video games with friends, skateboarding, or watching football.
   I'm a longtime Chelsea F.C. supporter and I like to stay active by playing football (soccer), among other sports.
            </p>
          </Reveal>

          <div className={`grid grid-cols-1 divide-y-4 ${Dv}`}>
            {[
              { label: 'Education', title: 'Carleton University', sub: 'Bachelor of Computer Science Honours with High Distinction, Minor in Psychology' },
              { label: 'Current Role', title: 'Visualping', sub: 'Product Manager (May 2026 - Present)' },
              { label: 'Engineering Scope', title: 'Visualping', sub: 'Technical PM focused on developing features for internal tools and boosting Customer Success team efficiency' },
            ].map(({ label, title, sub }, i) => (
              <Reveal key={label} delay={i * 100} className="p-6">
                <div className={`mb-1 text-xs font-black uppercase tracking-widest ${M}`}>{label}</div>
                <div className={`font-display text-xl font-black uppercase ${P}`}>{title}</div>
                <div className={`text-sm font-medium ${S}`}>{sub}</div>
              </Reveal>
            ))}
            <Reveal className="p-6">
              <div className={`mb-2 text-xs font-black uppercase tracking-widest ${M}`}>Links</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: githubUrl, label: 'GitHub', icon: FaGithub, external: true },
                  { href: linkedInUrl, label: 'LinkedIn', icon: FaLinkedin, external: true },
                  { href: `mailto:${emailAddress}`, label: 'Email', icon: FaEnvelope },
                  { href: resume, label: 'Resume', icon: FaFilePdf, external: true },
                ].map(({ href, label, icon: Icon, external }) => (
                  <a
                    key={href}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className={`inline-flex items-center gap-2 border-2 px-3 py-2 text-xs font-semibold uppercase transition-all duration-200 ${Bdr} ${Srf} ${P} shadow-[3px_3px_0px_rgba(0,0,0,0.15)] dark:shadow-[3px_3px_0px_rgba(0,0,0,0.4)] hover:skew-y-1 hover:border-ink hover:bg-ink hover:text-white hover:shadow-[5px_5px_0px_rgba(0,0,0,0.2)] dark:hover:border-white dark:hover:bg-white dark:hover:text-brand dark:hover:shadow-[5px_5px_0px_rgba(0,0,0,0.5)]`}
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Experience */}
        <Reveal className={`border-t-4 ${D}`}>
          <div className={`border-b-4 px-6 pt-10 pb-8 xl:px-12 xl:pt-12 ${D}`}>
            <div className={`mb-2 text-xs font-black uppercase tracking-widest ${M}`}>Career</div>
            <h2 className={`font-display text-6xl font-black uppercase leading-none xl:text-8xl ${P}`}>
              EXPERIENCE
            </h2>
          </div>
          <div className="px-6 py-6 xl:px-12 xl:py-10">
            <div className="relative">
              {/* Mobile: left vertical line */}
              <div className="xl:hidden absolute left-4 top-1 bottom-1 w-px bg-ink/20 dark:bg-white/20" />
              {/* XL: center vertical line */}
              <div className="hidden xl:block absolute left-1/2 top-1 bottom-1 w-px -translate-x-px bg-ink/20 dark:bg-white/20" />

              {[
                {
                  date: 'May 2026 - Present',
                  title: 'Product Manager',
                  company: 'Visualping',
                  summary:
                    'Drive execution for customer and internal workflow improvements with a technical PM approach. Oversee implementation quality, support internal tool development, and improve Customer Success team efficiency through process and tooling.',
                  tone: 'bg-emerald-400',
                },
                {
                  date: 'Nov 2024 - May 2026',
                  title: 'Customer Success Specialist',
                  company: 'Visualping',
                  summary:
                    'Developed Next.js API endpoints to support internal tools, helping improve ticket-resolution speed and boosting overall efficiency company-wide. Partnered with enterprise customers and internal teams to diagnose issues across frontend, APIs, backend logs, and crawling workflows.',
                  tone: 'bg-violet-400',
                },
                {
                  date: 'June 2024',
                  title: 'B.C.S. Honours, Minor in Psychology',
                  company: 'Carleton University',
                  summary:
                    'Graduated with High Distinction, maintained Dean\'s Honour Roll, and received Carleton\'s entrance scholarship.',
                  tone: 'bg-sky-400',
                },
              ].map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <Reveal
                    key={item.date}
                    delay={index * 120}
                    className={[
                      'relative mb-6 pl-12',
                      'xl:pl-0 xl:w-1/2 xl:mb-10',
                      isLeft ? 'xl:pr-10' : 'xl:pl-10 xl:ml-auto',
                    ].join(' ')}
                  >
                    <span className={[
                      'absolute top-2 z-10 h-8 w-8 rounded-full border-4 border-white shadow-sm',
                      item.tone,
                      'dark:border-[#0F3460]',
                      'left-0',
                      isLeft ? 'xl:left-auto xl:-right-4' : 'xl:-left-4',
                    ].join(' ')} />
                    <div className={`rounded-none border-4 p-6 shadow-[6px_6px_0px_rgba(0,0,0,0.3)] dark:shadow-[6px_6px_0px_rgba(0,0,0,0.6)] ${Bdr} bg-ink/10 dark:bg-white/10 transition-transform duration-200 hover:skew-y-1 hover:shadow-[10px_10px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[10px_10px_0px_rgba(0,0,0,0.7)]`}>
                      <div className={`text-xs font-black uppercase tracking-widest ${M}`}>{item.date}</div>
                      <h3 className={`mt-2 font-display text-3xl font-black uppercase leading-tight ${P}`}>
                        {item.title}
                      </h3>
                      <div className={`mt-1 text-sm font-semibold uppercase tracking-wide ${S}`}>{item.company}</div>
                      <p className={`mt-4 text-sm leading-7 ${S}`}>{item.summary}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={`border-t-4 ${D}`}>
        <Reveal className={`border-b-4 px-6 pt-10 pb-8 xl:px-12 xl:pt-12 ${D}`}>
          <div className={`mb-2 text-xs font-black uppercase tracking-widest ${M}`}>{projects.length} Projects</div>
          <h2 className={`font-display text-7xl font-black uppercase leading-none xl:text-[9rem] ${P}`}>
            ALL<br />PROJECTS
          </h2>
        </Reveal>
        <div className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-3 xl:p-10">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 70}>
              <Project
                title={project.title}
                imgLink={project.imgLink}
                summary={project.summary}
                gitHubLink={project.gitHubLink}
                videoLink={project.videoLink}
                date={project.date}
                tools={project.tools}
                index={index}
                toggleVisibility={toggleProjectVisibility}
                demoLink={project.demoLink}
                category={getCategory(project.tools)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`border-t-4 ${D}`}>
        <Reveal className={`border-b-4 px-6 pt-10 pb-8 xl:px-12 xl:pt-12 ${D}`}>
          <div className={`mb-2 text-xs font-black uppercase tracking-widest ${M}`}>Say Hello</div>
          <h2 className={`font-display text-7xl font-black uppercase leading-none xl:text-[9rem] ${P}`}>
            CONTACT<br />ME
          </h2>
        </Reveal>
        <div className="grid xl:grid-cols-[2fr_1fr]">
          <Reveal className={`border-b-4 p-6 xl:border-b-0 xl:border-r-4 xl:p-12 ${D}`}>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" name="name" placeholder="Name" required className={inputClass} />
                <input type="email" name="email" placeholder="Email" required className={inputClass} />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className={inputClass} />
              <textarea name="message" placeholder="Your message..." required rows={6} className={`${inputClass} resize-none`} />
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 border-4 px-6 py-4 font-display text-lg font-black uppercase tracking-widest transition-all duration-200 border-ink bg-ink text-white shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:skew-y-1 hover:bg-transparent hover:text-ink hover:shadow-[10px_10px_0px_rgba(0,0,0,0.4)] dark:border-white dark:bg-white dark:text-brand dark:shadow-[6px_6px_0px_rgba(0,0,0,0.5)] dark:hover:bg-transparent dark:hover:text-white dark:hover:shadow-[10px_10px_0px_rgba(0,0,0,0.7)]"
              >
                <span>SEND MESSAGE</span>
                <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={100} className={`flex flex-col divide-y p-6 xl:p-12 ${Dv}`}>
            {[
              { icon: FaMapMarkerAlt, label: 'Location', value: 'Ottawa, ON', href: undefined },
              { icon: FaPhoneAlt, label: 'Phone', value: '778-883-3106', href: undefined },
              { icon: FaEnvelope, label: 'Email', value: emailAddress, href: `mailto:${emailAddress}` },
              { icon: FaLinkedin, label: 'LinkedIn', value: 'Jola Ajayi', href: linkedInUrl },
            ].map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center border ${Bdr} ${Srf}`}>
                    <Icon className={P} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-widest ${M}`}>{label}</div>
                    <div className={`break-all font-semibold ${P}`}>{value}</div>
                  </div>
                </>
              )
              return href ? (
                <a key={label} href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  className={`flex items-center gap-4 py-5 transition-colors duration-200 first:pt-0 hover:bg-ink/5 dark:hover:bg-white/5`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 py-5 first:pt-0">{inner}</div>
              )
            })}
          </Reveal>
        </div>
      </section>

      {projectIndex >= 0 && (
        <Modal
          project={projects[projectIndex]}
          index={projectIndex}
          numProjects={projects.length}
          getNextIndex={getNextIndex}
          closeModal={closeModal}
          category={getCategory(projects[projectIndex].tools)}
        />
      )}
    </>
  )
}
