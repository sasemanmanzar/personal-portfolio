import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <header className="header">
        <div className="container nav-container">

          <a href="#home" className="logo">
            Sara<span>.</span>
          </a>

          <nav className="nav-menu">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
          </nav>

          <a href="#contact" className="contact-button">
            Let's Talk <span>↗</span>
          </a>

        </div>
      </header>

      
      <main>
        {/* Hero Section */}
        <section className="hero container" id="home">

          <div className="hero-content">

            <div className="hero-label">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-greeting">Hello, I'm Sara</p>

            <h1>
              Android Developer<span>.</span>
            </h1>

            <p className="hero-description">
              I build thoughtful, user-friendly Android applications
              with Kotlin. I love turning creative ideas into useful
              digital experiences.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work <span>→</span>
              </a>

              <a href="#contact" className="secondary-button">
                Get In Touch
              </a>

              <a href="/Sara-CV.pdf" className="secondary-button" download>
                Download CV <span>↓</span>
              </a>

            </div>

            <div className="hero-social">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>

          </div>

          <div className="hero-decoration">
            <div className="decoration-card">
              <span className="decoration-number">01</span>
              <div className="decoration-line"></div>
              <p>Turning ideas into meaningful applications.</p>
              <span className="decoration-symbol">&lt;/&gt;</span>
            </div>
          </div>


          {/* <div className="hero-decoration">
            <div className="decoration-card">

              <span className="decoration-label">DEVELOPER PROFILE</span>

              <h3>Android Developer</h3>
              <p className="decoration-subtitle">
                Independent App Development
              </p>

              <div className="decoration-divider"></div>

              <div className="decoration-stats">
                <div>
                  <strong>02</strong>
                  <span>Apps Built</span>
                </div>

                <div>
                  <strong>4K+</strong>
                  <span>Installs</span>
                </div>
              </div>

              <div className="decoration-footer">
                JAVA <span>·</span> KOTLIN <span>·</span> ANDROID
              </div>

            </div>
          </div> */}

        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="container about-container">

            <div className="about-heading">
              <span className="section-label">02 / ABOUT ME</span>

              <h2>
                A little about me<span>.</span>
              </h2>

              <p>
                Every great application starts with an idea.
              </p>
            </div>

            <div className="about-content">

              <div className="about-text">
                <h3>
                  Creating meaningful digital experiences.
                </h3>

                <p>
                  I'm an independent Android developer passionate
                  about building useful, creative and user-friendly
                  mobile applications.
                </p>

                <p>
                  I enjoy turning ideas into real products,
                  exploring new technologies and paying attention
                  to the little details that make an application
                  enjoyable to use.
                </p>
              </div>

              <div className="about-cards">

                <div className="about-card">
                  <span className="about-icon">⌨</span>
                  <h4>Kotlin</h4>
                  <p>Android Development</p>
                </div>

                <div className="about-card">
                  <span className="about-icon">▣</span>
                  <h4>Android</h4>
                  <p>Mobile Applications</p>
                </div>

                <div className="about-card">
                  <span className="about-icon">✦</span>
                  <h4>Creative</h4>
                  <p>Problem Solving</p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="container skills-container">

            <div className="skills-heading">
              <span className="section-label">03 / MY SKILLS</span>

              <h2>
                What I work with<span>.</span>
              </h2>

              <p>
                Technologies and tools I use to bring ideas to life.
              </p>
            </div>

            <div className="skills-grid">

              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon">⌘</span>
                  <h3>Android Development</h3>
                </div>

                <div className="skill-tags">
                  <span>Kotlin</span>
                  <span>Android SDK</span>
                  <span>XML</span>
                  <span>Jetpack</span>
                  <span>Material Design</span>
                </div>
              </div>

              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon">⚙</span>
                  <h3>Development Tools</h3>
                </div>

                <div className="skill-tags">
                  <span>Android Studio</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Gradle</span>
                </div>
              </div>

              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon">☁</span>
                  <h3>Backend & Services</h3>
                </div>

                <div className="skill-tags">
                  <span>Firebase</span>
                  <span>REST API</span>
                  <span>JSON</span>
                  <span>DataStore</span>
                </div>
              </div>

              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon">✦</span>
                  <h3>Other Skills</h3>
                </div>

                <div className="skill-tags">
                  <span>UI Design</span>
                  <span>Debugging</span>
                  <span>Problem Solving</span>
                  <span>Responsive UI</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section" id="experience">
          <div className="container experience-container">

            <div className="experience-heading">
              <span className="section-label">04 / EXPERIENCE</span>

              <h2>
                My Journey<span>.</span>
              </h2>

              <p>
                My experience in building mobile applications.
              </p>
            </div>

            <div className="experience-timeline">

              <div className="timeline-item">

                <div className="timeline-marker"></div>

                <div className="experience-card">

                  <div className="experience-top">
                    <span className="experience-badge">
                      PERSONAL PROJECT
                    </span>

                    <span className="experience-type">
                      Independent Work
                    </span>
                  </div>

                  <h3>Independent Android Developer</h3>

                  <p className="experience-tech">
                    Kotlin · Android Studio · Firebase
                  </p>

                  <p className="experience-description">
                    Designed and developed an educational Android
                    application from concept to implementation,
                    focused on helping young children learn phone
                    numbers through interactive games.
                  </p>

                  <ul className="experience-list">
                    <li>
                      Developed Android applications using Kotlin.
                    </li>

                    <li>
                      Designed interactive and child-friendly interfaces.
                    </li>

                    <li>
                      Implemented in-app purchases and reward systems.
                    </li>

                    <li>
                      Integrated Firebase Analytics for application insights.
                    </li>

                    <li>
                      Worked with different Android markets and billing systems.
                    </li>
                  </ul>

                  <div className="experience-project">
                    <span>Featured Project</span>
                    <strong>Know My Number</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Education Section */}
        <section className="education-section" id="education">
          <div className="container education-container">

            <div className="education-heading">
              <span className="section-label">05 / EDUCATION</span>
              <h2>My Education.</h2>
              <p>My academic background and educational journey.</p>
            </div>

            <div className="education-list">

              {/* Master's Degree */}
              <article className="education-card">
                <div className="education-date">
                  20XX – 20XX
                </div>

                <div className="education-details">
                  <span className="education-level">MASTER'S DEGREE</span>
                  <h3>Master of Science in Information Technology Engineering</h3>
                  <h4>K. N. Toosi University of Technology</h4>
                  <p>Tehran, Iran</p>
                  <div className="thesis-info">
                    <span>Master's Thesis</span>
                    <p>Data Mining</p>
                  </div>
                </div>
              </article>

              {/* Bachelor's Degree */}
              <article className="education-card">
                <div className="education-date">
                  20XX – 20XX
                </div>

                <div className="education-details">
                  <span className="education-level">BACHELOR'S DEGREE</span>
                  <h3>[Your Bachelor's Degree]</h3>
                  <h4>[Your University Name]</h4>
                  <p>[City, Country]</p>
                  <div className="thesis-info">
                    <span>Bachelor's Thesis</span>
                    <p>Smart Schools</p>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="publications-section" id="publications">
          <div className="container publications-container">

            <div>
              <span className="section-label">RESEARCH</span>
              <h2>Publications</h2>
            </div>

            <div className="publications-content">
              <h3>8 Research Papers</h3>
              <p>
                Research contributions in Computer Science
                and Software Engineering.
              </p>

              <a
                href="YOUR_PUBLICATIONS_LINK"
                target="_blank"
                rel="noreferrer"
              >
                View all publications <span>↗</span>
              </a>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="container projects-container">

            <div className="section-heading">
              <span className="section-label">05 / MY PROJECTS</span>
              <h2>Things I've built.</h2>
              <p>A selection of my independent Android applications.</p>
            </div>

            <div className="projects-grid">

              <article className="project-card">
                <div className="project-visual blue-pencil-visual">
                  <span className="project-symbol">🎨</span>
                  <span className="project-category">CREATIVE APP</span>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <h3>Blue Pencil</h3>
                    <span className="project-status">PUBLISHED</span>
                  </div>

                  <p>
                    A creative coloring app for children, featuring a large
                    collection of coloring pages and a fun character to make
                    the experience more engaging.
                  </p>

                  <div className="project-tags">
                    <span>Java</span>
                    <span>Android</span>
                    <span>In-App Purchases</span>
                  </div>

                  <div className="project-result">
                    <strong>4,000+</strong>
                    <span>Installs</span>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-visual number-visual">
                  <span className="project-symbol">📞</span>
                  <span className="project-category">EDUCATIONAL GAME</span>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <h3>Know My Number</h3>
                    <span className="project-status">ANDROID APP</span>
                  </div>

                  <p>
                    An educational game that helps children memorize their
                    parents' phone numbers through eight fun mini-games,
                    music and animations.
                  </p>

                  <div className="project-tags">
                    <span>Kotlin</span>
                    <span>Android</span>
                    <span>Firebase</span>
                    <span>In-App Purchases</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container contact-container">
            <span className="section-label">06 / GET IN TOUCH</span>

            <h2>Let's work together.</h2>

            <p>
              Have a project in mind or just want to say hello?
              I'd love to hear from you.
            </p>

            <a
              href="mailto:your.email@example.com"
              className="contact-button"
            >
              Say Hello <span>↗</span>
            </a>
          </div>
        </section>



      </main>


    <footer className="footer">
      <div className="container footer-container">

        <a href="#home" className="footer-logo">
          Sara<span>.</span>
        </a>

        <p>Designed & Built with care by Sara.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sara. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>

      </div>
    </footer>

    </div>
  );
}

export default App;
