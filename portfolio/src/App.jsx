import { useEffect, useState } from 'react'
import LogoScene from './components/LogoScene'
import './index.css'

const navLinks = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projets' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'process', label: 'Processus' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  {
    index: '01',
    title: "Applications web React",
    text: "Interfaces modernes, responsives, pensées pour le desktop et le mobile. Des parcours clairs, rapides et agréables à utiliser.",
  },
  {
    index: '02',
    title: 'APIs et backends Python',
    text: "APIs solides pour relier un frontend, automatiser des tâches ou structurer des données, avec Django ou Flask.",
  },
  {
    index: '03',
    title: 'Prototypes et MVP',
    text: "Une première version fonctionnelle pour tester une idée de produit, de startup ou d'outil interne, sans attendre des mois.",
  },
  {
    index: '04',
    title: "Refonte d'applications",
    text: "Performance, interface et corrections. Une base existante peut redevenir claire, rapide et simple à faire évoluer.",
  },
]

const steps = [
  {
    title: 'Discussion',
    text: "Un échange pour clarifier l'objectif, les contraintes et ce que le projet doit vraiment changer.",
  },
  {
    title: 'Proposition',
    text: 'Une solution technique, un délai et un budget lisibles avant de commencer.',
  },
  {
    title: 'Construction',
    text: 'Des étapes courtes et des démos régulières, pour valider au fur et à mesure.',
  },
  {
    title: 'Livraison',
    text: 'Mise en ligne, ajustements et un support après la livraison.',
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      const sections = navLinks.map((link) => link.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(section)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a
            href="#hero"
            className="logo"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('hero')
            }}
          >
            <span className="logo-mark">MK</span>
            <span>Mawougnon</span>
          </a>
          <nav className={`nav-links ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={activeSection === link.id ? 'is-active' : ''}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.id)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Développeur web fullstack</p>
              <h1>
                Des produits web nets, rapides, et faits pour durer.
              </h1>
              <p className="lede">
                Je conçois des applications React et Python, de l'idée jusqu'à la mise en ligne.
                Interfaces claires, backends fiables, et un suivi simple.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  Voir les projets
                </button>
                <button type="button" className="btn btn-ghost" onClick={() => scrollToSection('contact')}>
                  Discuter d'un besoin
                </button>
              </div>
              <p className="availability">Disponible pour des missions freelance.</p>
            </div>
            <div className="stage">
              <div className="stage-frame">
                <LogoScene />
              </div>
              <p className="stage-caption">Logos 3D — React, Python, JavaScript, SQL, Git</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <figure className="portrait">
              <img src="/5953761856054824246.jpg" alt="Mawougnon Marie-Prudence Kpodji" />
            </figure>
            <div>
              <p className="eyebrow">À propos</p>
              <h2>Mawougnon Marie-Prudence Kpodji</h2>
              <p>
                Développeur web fullstack, je travaille surtout avec React et Python.
                J'aime les interfaces précises et les applications qu'on peut faire évoluer sans tout casser.
              </p>
              <p>
                Mes projets académiques et personnels, dont une plateforme d'orientation pour les bacheliers,
                m'ont habitué à résoudre des problèmes concrets pour de vrais utilisateurs.
              </p>
              <p>
                Je cherche à aider entreprises, startups et indépendants à lancer des outils fiables,
                en restant proche du besoin réel.
              </p>
              <ul className="skill-row">
                {['React', 'Python', 'JavaScript', 'Django', 'API REST', 'SQL'].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Services</p>
              <h2>Ce que je peux construire</h2>
            </div>
            <div className="card-grid">
              {services.map((service) => (
                <article key={service.index} className="card">
                  <span className="index">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Projets</p>
              <h2>Une réalisation récente</h2>
            </div>
            <article className="project">
              <div className="project-visual" aria-hidden="true">
                <span>Orientation</span>
                <strong>Bacheliers</strong>
              </div>
              <div className="project-body">
                <h3>Plateforme d'orientation des bacheliers</h3>
                <p>
                  Une plateforme qui aide les nouveaux bacheliers à trouver des filières et des bourses
                  adaptées à leurs notes et à leurs intérêts. Un seul endroit pour comparer et décider.
                </p>
                <ul className="skill-row">
                  {['React', 'Python', 'Flask', 'Filtrage'].map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <a className="btn btn-primary" href="https://m2jorientation.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
                  Ouvrir le projet
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="parcours" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Parcours</p>
              <h2>Formation et stages</h2>
            </div>
            <ol className="timeline">
              <li>
                <h3>Licence professionnelle en Génie électrique et Informatique, option Informatique et Télécommunications</h3>
                <p className="meta">GEI / IT · 2023–2026</p>
                <p>Études en télécommunications et informatique, avec des projets académiques et personnels autour du web et des solutions numériques.</p>
              </li>
              <li>
                <h3>Stage en maintenance réseau</h3>
                <p className="meta">REGO MAINTENANCE · Août 2024</p>
                <p>Maintenance et installation de systèmes de vidéosurveillance. Réseaux informatiques et électriques.</p>
              </li>
              <li>
                <h3>Stage en développement web</h3>
                <p className="meta">HGTECH SARL · Août 2025</p>
                <p>Contribution au développement d'une plateforme d'orientation pour les nouveaux bacheliers. Travail d'équipe, délais et besoins clients.</p>
              </li>
              <li>
                <h3>Stage académique en développement web</h3>
                <p className="meta">DIGITAL SERVICE TELECOM · Mars 2026 – Juin 2026</p>
                <p>Préparation du TFE. Travail d'équipe, maintenance GSM et initiation à la fibre optique.</p>
              </li>
              <li>
                <h3>Projets académiques</h3>
                <p className="meta">Université et projets personnels · 2023 – présent</p>
                <p>Applications de gestion et plateformes interactives pour mettre en pratique les cours.</p>
              </li>
              <li>
                <h3>Compétences techniques</h3>
                <p className="meta">Autoformation · en continu</p>
                <p>React, Python, Django, Flask, SQL, API REST, qualité de code et méthodes agiles.</p>
              </li>
            </ol>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Processus</p>
              <h2>Comment un projet avance</h2>
            </div>
            <ol className="steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-panel">
              <p className="eyebrow">Contact</p>
              <h2>Un projet, une question, une mission.</h2>
              <p>Écrivez-moi. Je réponds directement, sans formulaire interminable.</p>
              <a className="email" href="mailto:kmarieprudo@outlook.com">kmarieprudo@outlook.com</a>
              <div className="socials">
                <a href="https://github.com/mawougnonkpodji-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/marie-prudence-kpodji-639903308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://wa.me/qr/7NON2BSITETYL1" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© 2026 Mawougnon Marie-Prudence Kpodji</p>
          <p>Développeur web fullstack</p>
        </div>
      </footer>
    </>
  )
}

export default App
