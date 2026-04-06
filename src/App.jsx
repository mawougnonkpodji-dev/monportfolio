import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'parcours', 'process', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projets' },
    { id: 'parcours', label: 'Parcours' },
    { id: 'process', label: 'Processus' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Mawougnon
          </a>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  style={{ color: activeSection === link.id ? 'var(--primary)' : '' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Développeur web fullstack</h1>
              <p>Je conçois des applications web modernes et performantes pour transformer vos idées en solutions digitales concrètes.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  Voir mes projets
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                  Me contacter
                </button>
              </div>
              <div className="availability">
                Disponible pour toutes missions freelance.
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-icon">⚡</div>
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>À propos de moi</h2>
            <p>Découvrez mon parcours et mes compétences</p>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-box">
                <img src="/5953761856054824246.jpg" alt="Mawougnon" />
              </div>
            </div>
            <div className="about-text">
              <p>
                Je m'appelle <strong>Mawougnon Marie-Prudence Kpodji</strong>, développeur web fullstack spécialisé en Python et React. 
                Je conçois des applications web modernes, ergonomiques et maintenables, depuis l'idée jusqu'au déploiement.
              </p>
              <p>
                Grâce à mes projets académiques et personnels ( plateforme d'orientation des bacheliers), 
                j'ai l'habitude de résoudre des problèmes concrets pour des utilisateurs réels.
              </p>
              <p>
                Mon objectif est d'aider les entreprises, startups et entrepreneurs à lancer rapidement des solutions fiables, 
                tout en restant à l'écoute de leurs besoins.
              </p>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">API REST</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Ce que je peux faire pour vous</h2>
            <p>Des solutions personnalisées pour vos projets digitaux</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Développement d'applications web React</h3>
              <p>Interfaces modernes, responsives, optimisées pour desktop et mobile. Création d'expériences utilisateur fluides et intuitives.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔌</div>
              <h3>APIs et backends en Python</h3>
              <p>Conception d'APIs robustes pour connecter vos frontends, automatiser des tâches ou gérer vos données avec Django ou Flask.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>Prototypes et MVP rapides</h3>
              <p>Création de premières versions fonctionnelles pour tester vos idées de startup ou projets internes. Validation rapide de vos concepts.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Refonte ou amélioration d'applications</h3>
              <p>Optimisation de performances, refonte d'interface, corrections de bugs. Donnez une nouvelle vie à vos projets existants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <h2>Mes projets</h2>
            <p>Découvrez mes réalisations récentes</p>
          </div>
          <div className="projects-grid">


            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">📚</div>
              <div className="project-content">
                <h3>Plateforme d'orientation des bacheliers</h3>
                <p>
                  Plateforme web qui aide les nouveaux bacheliers à trouver des filières et des bourses 
                  adaptées à leurs notes et à leurs intérêts. Solution centralisée pour simplifier la prise de décision.
                </p>
                <div className="project-details">
                  <h4>Détails</h4>
                </div>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Python</span>
                  <span className="tag">Flask</span>
                  <span className="tag">Filtrage</span>
                </div>
                <div className="project-links">
                  <a href="https://m2jorientation.pythonanywhere.com/" className="project-link demo">Voir le projet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours Section */}
      <section id="parcours" className="parcours">
        <div className="container">
          <div className="section-header">
            <h2>Mon parcours</h2>
            <p>Mon expérience et ma formation</p>
          </div>
          <div className="parcours-content">
            <div className="parcours-card">
              <h3>Formation en Informatique et Télécommunications</h3>
              <div className="entreprise">GEI / IT</div>
              <div className="date">2023-2026</div>
              <p>Étudiant en télécommunications et informatique, travail sur plusieurs projets académiques et personnels autour du développement web et des solutions numériques.</p>
            </div>
            <div className="parcours-card">
              <h3>Stage en maintenance réseau</h3>
              <div className="entreprise">REGO MAINTENANCE</div>
              <div className="date">Août 2024</div>
              <p>Maintence et installation des systèmes de vidéo surveillances</p>
            </div>
            <div className="parcours-card">
              <h3>Stage en développement web</h3>
              <div className="entreprise">HGTECH SARL</div>
              <div className="date">Août 2025</div>
              <p>Contribution au développement d'une plateforme d'orientation pour les nouveaux bacheliers. Expérience en travail d'équipe, respect des délais et des besoins clients.</p>
            </div>
            <div className="parcours-card">
              <h3>Stage académique en développement web</h3>
              <div className="entreprise">DIGITAL SERVICE TELECOM</div>
              <div className="date">Mars 2026 - présent</div>
              <p>Préparation du TFE(Travaux de fin d'études). Expérience en travail d'équipe, Maintenace GSM.</p>
            </div>
            <div className="parcours-card">
              <h3>Projets académiques</h3>
              <div className="entreprise">Université / Projets personnels</div>
              <div className="date">2023 - présent</div>
              <p>Développement de plusieurs projets web (applications de gestion, plateformes interactives) pour mettre en pratique les connaissances théoriques.</p>
            </div>
            <div className="parcours-card">
              <h3>Compétences techniques</h3>
              <div className="entreprise">Autoformation continue</div>
              <div className="date">Permanente</div>
              <p>Formation continue en React, Python, Django, Flask, bases de données SQL, API REST, bonnes pratiques de code et méthodologies Agiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-header">
            <h2>Ma façon de travailler</h2>
            <p>Un processus clair pour des résultats garantis</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">1</div>
              <h3>Discussion & compréhension</h3>
              <p>Appel ou échange écrit pour clarifier vos objectifs, contraintes et attentes du projet.</p>
            </div>
            <div className="process-card">
              <div className="process-number">2</div>
              <h3>Proposition & planning</h3>
              <p>Je vous propose une solution technique adaptée, avec un délai et un budget clairs.</p>
            </div>
            <div className="process-card">
              <div className="process-number">3</div>
              <h3>Développement agile</h3>
              <p>Travail par petites étapes, avec des démos régulières pour valider les avancées.</p>
            </div>
            <div className="process-card">
              <div className="process-number">4</div>
              <h3>Livraison & support</h3>
              <p>Mise en ligne, corrections et amélioration si besoin. Support post-livraison inclus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Me contacter</h2>
            <p>Vous avez un projet en tête ou une question ?</p>
          </div>
          <div className="contact-content">
            <p>N'hésitez pas à me contacter pour discuter de votre projet. Je suis toujours ouvert aux nouvelles opportunités!</p>
            <div className="email-box">
              <span>📧</span>
              <a href="mailto:kmarieprudo@outlook.com">kmarieprudo@outlook.com</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/mawougnonkpodji-dev" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                🐙
              </a>
              <a href="https://www.linkedin.com/in/marie-prudence-kpodji-639903308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                💼
              </a>
              <a href="https://wa.me/qr/7NON2BSITETYL1" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                💬
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2026 Mawougnon Marie-Prudence Kpodji - Développeur Web Freelance</p>
        </div>
      </footer>
    </>
  );
}

export default App;

