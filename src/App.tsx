import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Building2, BrainCircuit, MapPinned, Layers3, Wrench, FileSearch,
  Workflow, ExternalLink, CheckCircle2
} from 'lucide-react'

const projects = [
  {
    number: '01', name: 'AI Construction OS', type: 'CONSTRUCTION TECHNOLOGY',
    description: 'An AI-centered operating platform connecting project planning, engineering quantities, BOQ, cost estimation, field operations and project intelligence.',
    tags: ['React', 'AI', 'GIS', 'Supabase'], icon: Workflow,
    url: 'https://github.com/chandem/ai-construction-os', live: ''
  },
  {
    number: '02', name: 'RoadMI', type: 'ROAD ASSET MANAGEMENT',
    description: 'A road asset management system for inventory, road sections, GPS-based asset tracking, inspections, defects and condition assessment.',
    tags: ['React', 'TypeScript', 'GIS', 'Supabase'], icon: MapPinned,
    url: 'https://github.com/chandem/road-asset-management-system', live: ''
  },
  {
    number: '03', name: 'AI-RMMS', type: 'AI-POWERED ROAD MAINTENANCE',
    description: 'A road maintenance management platform bringing road assets, machinery, finance, human resources and general assets into coordinated, department-specific workflows, with GIS capabilities.',
    tags: ['React', 'TypeScript', 'Supabase', 'GIS', 'AI'], icon: MapPinned,
    url: 'https://github.com/chandem/road-maintenance-management-system', live: 'https://road-maintenance-management-system.vercel.app'
  },
  {
    number: '04', name: 'AI Document Processing', type: 'DOCUMENT INTELLIGENCE',
    description: 'A document intelligence workflow for extracting, organizing and reviewing construction information, including BOQ data and searchable knowledge.',
    tags: ['Python', 'AI', 'React', 'Supabase'], icon: FileSearch,
    url: 'https://github.com/chandem/ai-document-processing', live: ''
  },
  {
    number: '05', name: 'Construction Cost Estimation', type: 'ESTIMATION & QUANTITY',
    description: 'A digital tool for construction quantity and cost estimation, supporting more structured estimating workflows.',
    tags: ['Python', 'React', 'Engineering'], icon: Layers3,
    url: 'https://github.com/chandem/construction-cost-estimation', live: ''
  },
  {
    number: '06', name: 'Machinery Maintenance Management', type: 'EQUIPMENT & MAINTENANCE',
    description: 'A maintenance management application for equipment records, work orders and operational visibility.',
    tags: ['React', 'TypeScript', 'Operations'], icon: Wrench,
    url: 'https://github.com/chandem/Machinery-maintenance-management-system', live: ''
  },
]

const skills = [
  { title: 'Frontend development', items: 'React · TypeScript · JavaScript · HTML · CSS', icon: Code2 },
  { title: 'AI & intelligent systems', items: 'Python · AI/ML foundations · Document AI · AI workflows', icon: BrainCircuit },
  { title: 'Civil & construction', items: 'Road works · Site supervision · BOQ · Quantity & cost estimation', icon: Building2 },
  { title: 'Platforms & tools', items: 'Supabase · GitHub · Vercel · Render · GIS', icon: Layers3 },
]

const nav = [['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">CE</span><span>CHANE ESHETU<span className="brand-sub">ENGINEERING / SOFTWARE / AI</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO MEANINGFUL OPPORTUNITIES</div>
            <h1>Building at the intersection of <em>engineering</em>, software & <span className="accent">AI.</span></h1>
            <p className="hero-lede">I'm Chane Eshetu — a Civil Engineer and Software Engineer turning real-world construction challenges into practical digital solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta"><span>BASED IN ETHIOPIA</span><span className="meta-line" /><span>ENGINEERING TOOLS FOR THE REAL WORLD</span></div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-grid" />
            <div className="art-card main-art-card">
              <div className="art-top"><span className="art-index">CE / 01</span><span className="live-indicator">● LIVE</span></div>
              <div className="monogram">CE</div>
              <div className="art-bottom">CIVIL ENGINEER · SOFTWARE ENGINEER · AI BUILDER</div>
            </div>
            <div className="chip chip-top">AI × CONSTRUCTION</div>
            <div className="chip chip-bottom">ROADS · BOQ · ESTIMATION</div>
          </div>
          <div className="scroll-cue">SCROLL <ArrowDown size={14} /></div>
        </section>

        <section className="intro-strip">
          <div className="strip-inner section-wrap">
            <span>PROFILE</span>
            <p>Civil Engineer · ALX Software Engineering graduate · Building practical tools for infrastructure and construction.</p>
            <span className="strip-symbol">◇</span>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 — ABOUT</span>
            <h2>Engineer by training.<br /><em>Builder</em> by practice.</h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <p className="large-copy">I work where civil engineering meets software and AI — designing tools that make project planning, estimation, asset management and field operations more reliable and transparent.</p>
              <p>My background spans road works, site supervision, BOQ preparation and quantity/cost estimation, combined with modern web development and applied AI workflows.</p>
            </div>
            <div className="about-side">
              <div className="info-card">
                <span className="mono-label">FOCUS</span>
                <p>Construction technology, road asset management, document intelligence and estimation systems.</p>
              </div>
              <div className="info-card">
                <span className="mono-label">APPROACH</span>
                <p>Practical products grounded in real engineering workflows — not demos for their own sake.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-inner section-wrap">
            <div>
              <span className="section-kicker">02 — EXPERIENCE</span>
              <h2>From site to <em>system</em>.</h2>
            </div>
            <div className="experience-detail">
              <div className="timeline-marker" /><div className="timeline-marker second" />
              <div className="exp-block">
                <span className="mono-label">CIVIL ENGINEERING</span>
                <h3>Road works & construction practice</h3>
                <p>Hands-on experience with road construction, site supervision, quantity take-off, BOQ and cost estimation — the domain knowledge that shapes the tools I build.</p>
              </div>
              <div className="exp-block">
                <span className="mono-label">SOFTWARE ENGINEERING</span>
                <h3>ALX Africa · Full-stack development</h3>
                <p>Intensive software engineering training focused on modern web technologies, problem-solving and shipping production-ready applications.</p>
              </div>
              <div className="exp-block">
                <span className="mono-label">PRODUCT BUILDING</span>
                <h3>AI-powered construction tools</h3>
                <p>Designing and developing platforms that connect planning, estimation, asset data and operations for infrastructure and construction teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="projects-heading">
            <div>
              <span className="section-kicker">03 — SELECTED WORK</span>
              <h2>Projects that solve real problems.</h2>
            </div>
            <p>Selected work across construction technology, road maintenance, asset management, document intelligence and estimation.</p>
          </div>
          <div className="project-list">
            {projects.map((p) => {
              const Icon = p.icon
              return (
                <article className="project-row" key={p.number}>
                  <span className="project-number">{p.number}</span>
                  <div className="project-icon"><Icon size={20} /></div>
                  <div className="project-info">
                    <div className="card-top"><span>{p.type}</span></div>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  </div>
                  <div className="project-links">
                    {p.url && <a href={p.url} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live</a>}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading">
            <span className="section-kicker">04 — CAPABILITIES</span>
            <h2>Skills across the stack and the site.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((s) => {
              const Icon = s.icon
              return (
                <div className="skill-card" key={s.title}>
                  <Icon size={22} />
                  <h3>{s.title}</h3>
                  <p>{s.items}</p>
                </div>
              )
            })}
          </div>
          <p className="skills-note"><CheckCircle2 size={16} /> Comfortable moving between domain engineering, product thinking and implementation.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-wrap">
            <span className="section-kicker">05 — CONTACT</span>
            <h2>Let's build something <em>useful</em>.</h2>
            <p className="contact-copy">Open to collaborations, roles and projects at the intersection of infrastructure, software and AI.</p>
            <div className="social-links">
              <a href="mailto:chaneeshetu93@gmail.com"><Mail size={18} /> chaneeshetu93@gmail.com</a>
              <a href="https://github.com/chandem" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/chane-eshetu-4a1688171/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner section-wrap">
          <span className="footer-brand">CHANE ESHETU</span>
          <span>ENGINEERING × SOFTWARE × AI</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
