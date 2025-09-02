import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        {/* Left: Avatar and Name */}
        <div className="header-left">
          <img
            src="./assets/avatar.png"
            alt="Glenn Avatar"
            className="avatar"
          />
          <span className="header-name">Glenn</span>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={e => {
            setMenuOpen(!menuOpen);
            e.currentTarget.blur(); // Remove focus instantly
          }}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Center: Tabs (desktop) */}
        <nav className="header-center">
          <a href="#projects" className="header-tab">
            Projects
          </a>
          <a href="#about" className="header-tab">
            About Me
          </a>
        </nav>

        {/* Right: Get in Touch Button (desktop) */}
        <div className="header-right">
          <a href="#contact" className="get-in-touch-btn">
            Get in Touch
          </a>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <button
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <div className="mobile-menu__content">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get in Touch</a>
          </div>
        </nav>
      )}

      <main>
        <section id="projects">
          <h2>My Video Edit Project</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>Travel Vlog Compilation</h3>
              <video width="320" controls>
                <source src="videos/travel-vlog.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>Edited footage from multiple trips into a cohesive story with transitions and music.</p>
            </div>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm Glenn, a passionate video editor with experience in creating engaging content for YouTube, social media, and commercial projects. I love storytelling through visuals and always strive to bring out the best in every clip.
          </p>
          <ul>
            <li>Adobe Premiere Pro</li>
            <li>After Effects</li>
            <li>DaVinci Resolve</li>
            <li>Motion Graphics</li>
            <li>Color Grading</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>
            Interested in working together or have a project in mind? Reach out!
          </p>
          <ul>
            <li>Email: <a href="mailto:glenn@email.com">glenn@email.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/glenn" target="_blank" rel="noopener noreferrer">linkedin.com/in/glenn</a></li>
            <li>Instagram: <a href="https://instagram.com/glennvideo" target="_blank" rel="noopener noreferrer">@glennvideo</a></li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
