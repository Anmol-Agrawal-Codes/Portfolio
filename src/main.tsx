import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { achievements, education, experience, profile, projects, skillGroups, type Project } from './data'
import './styles.css'

const Icon = ({ children }: { children: string }) => <span className="icon" aria-hidden="true">{children}</span>
const projectStatus = { active: 'Active development', completed: 'Completed', planned: 'Planned' } as const
const configuredUrl = (url?: string) => url && /^https?:\/\//.test(url) ? url : undefined

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [openExperience, setOpenExperience] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const filters = ['All', ...Array.from(new Set(projects.flatMap((project) => project.categories)))]
  const visibleProjects = [...projects]
    .filter((project) => filter === 'All' || project.categories.includes(filter))
    .sort((a, b) => Number(b.featured) - Number(a.featured))
  const currentProject = projects.find((project) => project.featured && project.status === 'active')

  const closeMenu = () => setMenuOpen(false)
  const scrollTo = (id: string) => {
    closeMenu()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Anmol Agrawal home">
          <span className="mark">AA</span><span>Anmol Agrawal</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><Icon>{menuOpen ? '×' : '☰'}</Icon></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {['experience', 'projects', 'skills', 'about', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={closeMenu}>{item[0].toUpperCase() + item.slice(1)}</a>)}
          <a className="nav-external" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="nav-external" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="resume-link" href={profile.resume} target="_blank" rel="noreferrer">Resume <Icon>↗</Icon></a>
        </nav>
        <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><Icon>{theme === 'dark' ? '☼' : '☾'}</Icon></button>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <p className="kicker"><span className="status-dot" /> Software Engineer · Bengaluru</p>
            <h1>Software Engineer building<br /><span>reliable software.</span></h1>
            <p className="hero-lede">Software Engineer at National Instruments building REST APIs and solving production reliability issues. My backend projects focus on Java, Spring Boot, and clear service design.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo('projects')}>View projects <Icon>↗</Icon></button>
              <a className="button button-quiet" href={profile.resume} target="_blank" rel="noreferrer">Download resume <Icon>↓</Icon></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Icon>GH</Icon> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon>in</Icon> LinkedIn</a>
              <a href={profile.coding} target="_blank" rel="noreferrer"><Icon>↗</Icon> LeetCode</a>
              <a href={`mailto:${profile.email}`}><Icon>✉</Icon> Email</a>
            </div>
          </div>
          <div className="hero-aside">
            <div className="snapshot-panel"><div className="snapshot-header"><span className="section-label">Engineering snapshot</span><span className="status-label"><i className="status-dot" /> Open to opportunities</span></div><div className="snapshot-row"><span>Currently</span><strong>Software Engineer @ NI</strong></div><div className="snapshot-row"><span>Focus</span><strong>Backend engineering</strong></div><div className="snapshot-row"><span>Project stack</span><strong>Java · Spring Boot · PostgreSQL</strong></div><div className="snapshot-row"><span>Experience</span><strong>1+ year in production</strong></div><div className="snapshot-row"><span>Problem solving</span><strong>1000+ DSA · 1600+ rating</strong></div></div>
            {currentProject && <div className="hero-note"><span className="section-label">Now building</span><div><strong>{currentProject.title}</strong><p>{currentProject.tags.join(' · ')}</p></div></div>}
          </div>
        </section>

        <section className="signal-strip"><div><strong>01+</strong><span>years building<br />production software</span></div><div><strong>30+</strong><span>production issues<br />resolved</span></div><div><strong>Spring</strong><span>current backend<br />focus</span></div><div><strong>1000+</strong><span>DSA problems<br />solved</span></div></section>

        <section id="about" className="content-section section-shell about-section">
          <div className="section-label">01 / About</div>
          <div className="about-grid"><h2>Engineering is<br /><span>the craft of clarity.</span></h2><div className="about-copy"><p>I’m a Software Engineer at National Instruments, where I build REST APIs consumed by RF panels and client applications supporting 10+ InstrumentStudio features used by 20K+ engineers.</p><p>My work spans production debugging, asynchronous workflows, concurrency, CI/CD, and reliability. Alongside that experience, I build backend systems with Java, Spring Boot, Spring Security, PostgreSQL, and REST API design.</p><div className="signature">Anmol Agrawal <span>— Bengaluru, India</span></div></div></div>
        </section>

        <section id="experience" className="content-section section-shell">
          <div className="section-heading"><div className="section-label">02 / Experience</div><p>Production work, measurable improvements,<br />and lessons that carry forward.</p></div>
          {experience.map((item, index) => <article className="experience-card" key={`${item.company}-${item.role}`}><div className="experience-top"><div><p className="eyebrow">{item.period}</p><h3>{item.role} <span>at {item.company}</span></h3><p className="muted">{item.location}</p></div><button className="text-button" onClick={() => setOpenExperience(openExperience === index ? null : index)}>{openExperience === index ? 'Hide details' : 'View details'} <Icon>{openExperience === index ? '↑' : '↘'}</Icon></button></div><p className="experience-summary">{item.summary}</p><ul className="highlight-list">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>{openExperience === index && <div className="experience-details"><div><b>Problem</b><p>{item.details.problem}</p></div><div><b>What I worked on</b><p>{item.details.work}</p></div><div><b>Technical approach</b><p>{item.details.approach}</p></div><div><b>Impact</b><p>{item.details.impact}</p></div></div>}</article>)}
          <div className="highlights-panel"><div className="section-label">Engineering highlights</div><div className="highlight-grid"><div><span>API PERFORMANCE</span><strong>25% faster</strong><p>Application responsiveness through non-blocking background workflows.</p></div><div><span>PRODUCTION SYSTEMS</span><strong>30+ issues</strong><p>Async failures, concurrency bugs, and reliability problems resolved.</p></div><div><span>QUALITY</span><strong>100+ tests</strong><p>Unit tests authored during internship, increasing module coverage by 8–10%.</p></div><div><span>SCALE</span><strong>20K+ engineers</strong><p>Supported by InstrumentStudio features across RF workflows.</p></div></div></div>
        </section>

        <section id="projects" className="content-section section-shell projects-section">
          <div className="section-heading"><div><div className="section-label">03 / Selected projects</div><h2>Selected <span>work.</span></h2></div><p>Current backend work alongside<br />completed engineering projects.</p></div>
          <div className="filter-row" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <div className="project-grid">{visibleProjects.map((project) => <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.id}><div className="project-card-top"><span className="eyebrow">{project.featured ? 'Featured / ' : ''}{projectStatus[project.status]}</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.featured && project.focus && <div className="project-focus"><span className="section-label">Current focus</span><p>{project.focus}</p></div>}{project.featured && project.architectureFlow && <div className="architecture-line">{project.architectureFlow.map((step, index) => <span key={step}>{index > 0 && <b>→</b>}{step}</span>)}</div>}<div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-footer"><span className={`project-state ${project.status}`}><i className="status-dot" /> {projectStatus[project.status]}</span><span className="project-actions"><button onClick={() => setSelectedProject(project)} aria-label={`View ${project.title} details`}>View details <Icon>↗</Icon></button>{configuredUrl(project.github) && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}>GitHub ↗</a>}{configuredUrl(project.live) && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>Live ↗</a>}</span></div></article>)}</div>
        </section>

        <section id="skills" className="content-section section-shell skills-section"><div className="section-heading"><div className="section-label">04 / Toolkit</div><p>The tools I use to understand problems,<br />build solutions, and ship with confidence.</p></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div><div className="exploring-row"><span className="section-label">Currently exploring</span><div>{['Java', 'Spring Boot', 'PostgreSQL', 'System Design', 'Distributed Systems', 'Backend Architecture'].map((item) => <span key={item}>{item}</span>)}</div></div></section>

        <section className="principles-section section-shell"><div className="section-label">05 / How I build software</div><div className="principles-grid"><h2>Simple is a<br /><span>technical decision.</span></h2><div className="principles-list">{['Prefer simple designs over unnecessary complexity.', 'Design APIs around clear contracts.', 'Understand database behavior instead of treating it as magic.', 'Measure performance before optimizing.', 'Treat production bugs as opportunities to improve reliability.', 'Automate repetitive engineering workflows.'].map((principle, index) => <div key={principle}><span>0{index + 1}</span><p>{principle}</p></div>)}</div></div></section>

        <section className="problem-solving section-shell"><div><div className="section-label">06 / Problem solving</div><h2>Strong fundamentals.<br /><span>Consistent practice.</span></h2></div><div className="solving-stats"><div><strong>1000<span>+</span></strong><p>DSA problems<br />solved</p></div><div><strong>1600<span>+</span></strong><p>LeetCode rating<br /><small>contest rating</small></p></div><a className="outline-link" href={profile.coding} target="_blank" rel="noreferrer">View coding profile <Icon>↗</Icon></a></div></section>

        <section className="credentials-section section-shell"><div className="section-heading"><div className="section-label">07 / Education & recognition</div><p>Foundations built through formal study,<br />practice, and technical communities.</p></div><div className="credentials-grid"><div><p className="eyebrow">{education.period}</p><h3>{education.degree}</h3><p>{education.institution}<br />{education.location} · {education.grade}</p></div><div className="achievement-list">{achievements.map((achievement, index) => <div key={achievement}><span>0{index + 1}</span><p>{achievement}</p></div>)}</div></div></section>

        <section id="contact" className="contact-section section-shell"><div className="section-label">08 / Contact</div><h2>Let's build something<br /><span>reliable together.</span></h2><p>Whether you’re hiring, collaborating, or want to talk engineering, my inbox is open.</p><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <Icon>↗</Icon></a><div className="contact-links"><a href={`mailto:${profile.email}`}>Email <span>{profile.email}</span></a><a href={`tel:${profile.phone.replace(/-/g, '')}`}>Phone <span>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>Connect on LinkedIn ↗</span></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub <span>View repositories ↗</span></a></div></section>
      </main>

      <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Anmol Agrawal</span><span>Built with intention · Bengaluru, India</span><a href="#home">Back to top ↑</a></footer>

      {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button><p className="eyebrow">{projectStatus[selectedProject.status]}</p><h2 id="project-title">{selectedProject.title}</h2><p className="modal-intro">{selectedProject.overview}</p><div className="tags">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-grid">{selectedProject.focus && <div><h4>Current focus</h4><p>{selectedProject.focus}</p></div>}{selectedProject.problem && <div><h4>The problem</h4><p>{selectedProject.problem}</p></div>}{selectedProject.architecture && <div><h4>Architecture</h4><p>{selectedProject.architecture}</p>{selectedProject.architectureFlow && <div className="architecture-line">{selectedProject.architectureFlow.map((step, index) => <span key={step}>{index > 0 && <b>→</b>}{step}</span>)}</div>}</div>}{selectedProject.api && <div><h4>API design</h4><p>{selectedProject.api}</p></div>}{selectedProject.database && <div><h4>Data model</h4><p>{selectedProject.database}</p></div>}{selectedProject.decisions && selectedProject.decisions.length > 0 && <div><h4>Technical decisions</h4><ul>{selectedProject.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>}{selectedProject.challenges && <div><h4>Challenges</h4><p>{selectedProject.challenges}</p></div>}{selectedProject.testing && <div><h4>Testing</h4><p>{selectedProject.testing}</p></div>}{selectedProject.futureImprovements && <div><h4>Future improvements</h4><p>{selectedProject.futureImprovements}</p></div>}</div>{selectedProject.features && selectedProject.features.length > 0 && <div className="feature-status"><h4>Feature status</h4>{selectedProject.features.map((feature) => <span key={feature.name} className={feature.status}><i />{feature.name} · {feature.status}</span>)}</div>}{(selectedProject.learning || configuredUrl(selectedProject.github) || configuredUrl(selectedProject.live)) && <div className="modal-bottom">{selectedProject.learning && <p><b>What I learned:</b> {selectedProject.learning}</p>}<div className="modal-links">{configuredUrl(selectedProject.github) && <a href={selectedProject.github} target="_blank" rel="noreferrer">Open repository ↗</a>}{configuredUrl(selectedProject.live) && <a href={selectedProject.live} target="_blank" rel="noreferrer">Live demo ↗</a>}</div></div>}</article></div>}
    </>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
