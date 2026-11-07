import './App.css';
import content from "./content";

import codeIcon from "./assets/icons/code.svg";
import favoriteIcon from "./assets/icons/favorite.svg";
import hubIcon from "./assets/icons/hub.svg";
import androidIcon from "./assets/icons/android.svg";
import webIcon from "./assets/icons/web.svg";
import handymanIcon from "./assets/icons/handyman.svg";
import dashboardCustomizeIcon from "./assets/icons/dashboard_customize.svg";
import callIcon from "./assets/icons/call.svg";
import paletteIcon from "./assets/icons/palette.svg";


function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="visual-orbit orbit-one"></div>
      <div className="visual-orbit orbit-two"></div>

      <div className="visual-main-card">
        <div className="visual-card-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span>app.kt</span>
        </div>

        <div className="code-content">
          <div><span className="code-purple">class</span> <span className="code-blue">MyApp</span> {`{`}</div>
          <div className="code-indent">
            <span className="code-purple">fun</span> <span className="code-blue">create</span>() {`{`}
          </div>
          <div className="code-indent code-indent-two">
            <span className="code-green">"Ideas"</span>
          </div>
          <div className="code-indent">{`}`}</div>
          <div>{`}`}</div>
        </div>

        <div className="visual-card-footer">
          <span className="footer-dot"></span>
          Building something meaningful
        </div>
      </div>

      <div className="visual-ui-card">
        <div className="ui-card-top">
          <span></span>
          <span></span>
        </div>
        <div className="ui-card-line"></div>
        <div className="ui-card-line short"></div>
        <div className="ui-card-button"></div>
      </div>

      <div className="visual-code-symbol">&lt;/&gt;</div>
      <div className="visual-plus">+</div>
    </div>
  );
}


function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <header className="header">
        <div className="container nav-container">

          <a href="#home" className="logo">{content.navigation.logo}
            <span>.</span>
          </a>

          <nav className="nav-menu">
            <a href="#home" className="active">{content.navigation.home}</a>
            <a href="#about">{content.navigation.about}</a>
            <a href="#skills">{content.navigation.skills}</a>
            <a href="#experience">{content.navigation.experience}</a>
            <a href="#projects">{content.navigation.projects}</a>
            <a href="#education">{content.navigation.education}</a>
            {/* <a href="#publications">{content.navigation.publications}</a> */}
            {/* <a href="#contact">{content.navigation.contact}</a> */}
          </nav>

          <a href="#contact" className="contact-button-header">
            {content.navigation.contact} <span>↗</span>
          </a>

        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero container" id="home">

          <div className="hero-content">

            <div className="hero-label">
              <span className="status-dot"></span>
              {content.hero.label}
            </div>

            <p className="hero-greeting">{content.hero.greeting}</p>

            <h1>
              {content.hero.title}<span>.</span>
            </h1>

            <p className="hero-description">
              {content.hero.description}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                {content.hero.actions} <span>→</span>
              </a>

              <a href="#contact" className="secondary-button">
                {content.hero.contact}
              </a>

              <a href="/Sara-CV.pdf" className="secondary-button" download>
                 {content.hero.CV} <span>↓</span>
              </a>

            </div>

            <div className="hero-social">
              <a href="https://github.com/sasemanmanzar" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/sara-asemanmanzar" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>

          </div>

          {/* <div className="hero-decoration">
            <div className="decoration-card">
              <span className="decoration-number">01</span>
              <div className="decoration-line"></div>
              <p>Turning ideas into meaningful applications.</p>
              <span className="decoration-symbol">&lt;/&gt;</span>
            </div>
          </div> */}


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

          <HeroVisual />

        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="container about-container">

            <div className="about-heading">
              <span className="section-label">{content.about.label}</span>

              <h2>
                {content.about.heading}<span>.</span>
              </h2>

              <p>
                {content.about.headingText}
              </p>
            </div>

            <div className="about-content">

              <div className="about-text">
                <h3>
                  {content.about.content1}
                </h3>

                <p>
                  {content.about.content2}
                </p>

                <p>
                  {content.about.content3}
                </p>
              </div>

              <div className="about-cards">

                <div className="about-card">
                  {/* <span className="about-icon">⌨</span> */}
                  {/* <span className="about-icon">&lt;/&gt;</span> */}
                  {/* <span className="about-icon" style={{ fontSize: "18px" }}>&lt;/&gt;</span> */}
                  <span className="about-icon"><img src={codeIcon} alt="" /></span>
                  <h4>{content.about.card1_title}</h4>
                  <p>{content.about.card1_content}</p>
                </div>

                <div className="about-card">
                  {/* <span className="about-icon">▣</span> */}
                  {/* <span className="about-icon">✧</span> */}
                  {/* <span className="about-icon">✎</span> */}
                  <span className="about-icon"><img src={favoriteIcon} alt="" /></span>
                  <h4>{content.about.card2_title}</h4>
                  <p>{content.about.card2_content}</p>
                </div>

                <div className="about-card">
                  {/* <span className="about-icon">✦</span> */}
                  {/* <span className="about-icon">⚙</span> */}
                  {/* <span className="about-icon">⇄</span> */}
                  {/* <span className="about-icon">⛓</span> */}
                  <span className="about-icon"><img src={hubIcon} alt="" /></span>
                  <h4>{content.about.card3_title}</h4>
                  <p>{content.about.card3_content}</p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <div className="container skills-container">

            <div className="skills-heading">
              <span className="section-label">{content.skill.label}</span>

              <h2>
                {content.skill.heading1}<span>.</span>
              </h2>

              <p>
                {content.skill.heading2}
              </p>
            </div>

            <div className="skills-grid">

              {/* Android Development */}
              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon"><img src={androidIcon} alt="" /></span>
                  <h3>Android Development</h3>
                </div>

                <div className="skill-tags">
                  <span>Kotlin</span>
                  <span>Java</span>
                  <span>Android SDK</span>
                  {/* <span>Android Jetpack(DataStore, Lifecycle)</span> */}
                  <span>Android Jetpack</span>
                  {/* <span>Android XML Layouts</span> */}
                  <span>XML Layouts</span>
                  <span>Kotlin Coroutines</span>
                  <span>Firebase Analytics</span>
                  <span>In-App Billing & Ads Integration</span>
                </div>
              </div>

              {/* Web Development */}
              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon"><img src={webIcon} alt="" /></span>
                  <h3>Web Development</h3>
                </div>

                <div className="skill-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>Responsive Web Design</span>
                </div>
              </div>

              {/* Libraries & Technologies */}
              {/* <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon">✦</span>
                  <h3>Libraries & Technologies</h3>
                </div>

                <div className="skill-tags">
                  <span>DataStore</span>
                  <span>Coroutines</span>
                  <span>Firebase Analytics</span>
                  <span>Gradle</span>
                  <span>MediaPlayer</span>
                  <span>SoundPool</span>
                </div>
              </div> */}

              {/* Development & Design Tools */}
              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon"><img src={handymanIcon} alt="" /></span>
                  <h3>Development & Design Tools</h3>
                </div>

                <div className="skill-tags">
                  <span>Android Studio</span>
                  <span>Visual Studio Code</span>
                  <span>Git & GitHub</span>
                  <span>Photopea</span>
                </div>
              </div>

              {/* Backend & Services */}
              {/* <div className="skill-box">
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
              </div> */}

              {/* Design & Creative Development */}
              {/* Other Skills */}
              {/* UI & Game Development */}
              <div className="skill-box">
                <div className="skill-title">
                  <span className="skill-icon"><img src={dashboardCustomizeIcon} alt="" /></span>
                  <h3>UI & Game Development</h3>
                </div>

                <div className="skill-tags">
                  <span>UI Design</span>
                  <span>Game Logic</span>
                  {/* <span>UI & Interaction Design</span> */}
                  <span>Interaction Design</span>
                  {/* <span>Debugging</span> */}
                  {/* <span>Problem Solving</span> */}
                  {/* <span>Responsive UI</span> */}
                  {/* <span>UI Animations</span> */}
                  {/* <span>Audio Integration</span> */}
                  {/* <span>Graphic Editing</span> */}
                  {/* <span>Interaction & Animation Design</span> */}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section" id="experience">
          <div className="container experience-container">

            <div className="experience-heading">
              <span className="section-label">{content.experience.label}</span>

              <h2>
                {content.experience.heading}<span>.</span>
              </h2>

              <p>
                {content.experience.headingText}
                {/* My journey in designing, developing, and publishing Android applications.               */}
              </p>
            </div>

            <div className="experience-timeline">

              <div className="timeline-item">

                <div className="timeline-marker"></div>

                <div className="experience-card">

                  <div className="experience-top">
                    <span className="experience-badge">
                      INDEPENDENT DEVELOPMENT
                    </span>

                    <span className="experience-type">
                      2019 – Present
                    </span>
                  </div>

                  <h3>Independent Software Developer</h3>

                  <p className="experience-tech">
                    Kotlin · Java · Android Studio · React · Firebase
                  </p>

                  <p className="experience-description">
                    Independently developed Android applications and web projects, taking ideas from initial design through implementation and release.
                  </p>

                  <ul className="experience-list">
                    <li>
                      Developed Android applications using Java and Kotlin.
                    </li>

                    <li>
                      Built responsive web applications using React.
                    </li>

                    <li>
                      Designed user interfaces and implemented interactive features across mobile and web platforms.
                    </li>

                    <li>
                      Integrated Firebase services, in-app purchases and rewarded advertisements.
                    </li>

                    <li>
                      Managed application development, testing and publishing.
                    </li>

                    {/* 

                    <li>
                      Implemented in-app purchases and reward systems.
                    </li>

                    <li>
                      Integrated Firebase Analytics for application insights.
                    </li>

                    <li>
                      Worked with different Android markets and billing systems.
                    </li> */}
                  </ul>

                  {/* <div className="experience-project">
                    <span>Featured Project</span>
                    <strong>Know My Number</strong>
                    <strong>Blue Pencil</strong>
                  </div> */}

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="container projects-container">

            <div className="projects-heading">
              <span className="section-label">{content.projects.label}</span>
              <h2>{content.projects.heading}<span>.</span></h2>
              <p>{content.projects.headingText}</p>
            </div>

            <div className="projects-grid">

              {/* ‌Bule Pencil Project */}
              <article className="project-card">
                <div className="project-visual blue-pencil-visual">
                  {/* <span className="project-symbol">🎨</span> */}
                  {/* <span className="project-symbol"><img src={paletteIcon} alt="" /></span> */}
                  <img src="/images/icon_bluepencil.webp" alt="Blue Pencil app icon" className="project-app-icon"/>
                  <span className="project-category">KIDS COLORING APP</span>
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
                    <span>Firebase</span>
                    <span>In-App Purchases</span>
                  </div>

                  <div className="project-result">
                    <strong>4,000+</strong>
                    <span>Installs</span>
                  </div>

                  <div className="project-links">
                    <a href="https://cafebazaar.ir/app/com.example.BluePencil?l=en" target="_blank" rel="noreferrer">
                      View on Bazaar ↗
                    </a>

                    {/* <a href="https://myket.ir/app/your-app-id" target="_blank" rel="noreferrer">
                      View on Myket ↗
                    </a> */}

                    <a href="/downloads/blue-pencil.apk" download>
                      Download APK ↓
                    </a>

                  </div>

                </div>
              </article>

              {/* Know My Number Project */}
              <article className="project-card">
                <div className="project-visual number-visual">
                  {/* <span className="project-symbol">📞</span> */}
                  <img src="/images/icon_knowmynumber.webp" alt="Know My Number app icon" className="project-app-icon"/>
                  <span className="project-category">EDUCATIONAL KIDS GAME</span>
                </div>

                <div className="project-info">
                  <div className="project-title-row">
                    <h3>Know My Number</h3>
                    <span className="project-status">PUBLISHED</span>
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

                  <div className="project-links">
                    <a href="https://cafebazaar.ir/app/com.asemanmanzar.memorizingphonenumbers?l=en" target="_blank" rel="noreferrer">
                      View on Bazaar ↗
                    </a>

                    <a href="https://myket.ir/app/com.asemanmanzar.memorizingphonenumbers" target="_blank" rel="noreferrer">
                      View on Myket ↗
                    </a>

                    <a href="/downloads/know-my-number.apk" download>
                      Download APK ↓
                    </a>

                  </div>

                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section" id="education">
          <div className="container education-container">

            <div className="education-heading">
              <span className="section-label">06 / EDUCATION</span>
              <h2>My Education.</h2>
              <p>My academic background and educational journey.</p>
            </div>

            <div className="education-list">

              {/* Master's Degree */}
              <article className="education-card">
                <div className="education-date">
                  2013 – 2015
                </div>

                <div className="education-details">
                  <span className="education-level">MASTER'S DEGREE</span>
                  <h3>Master of Science in Information Technology Engineering</h3>
                  <h4>Taali Higher Education Information Technology Institute</h4>
                  <p>Gom, Iran</p>
                  {/* <div className="thesis-info">
                    <span>Master's Thesis</span>
                    <p>Data Mining</p>
                  </div> */}
                </div>
              </article>

              {/* Bachelor's Degree */}
              <article className="education-card">
                <div className="education-date">
                  2007 - 2012
                </div>

                <div className="education-details">
                  <span className="education-level">BACHELOR'S DEGREE</span>
                  <h3>Bachelor of Science in Information Technology Engineering</h3>
                  <h4>K. N. Toosi University of Technology</h4>
                  <p>Tehran, Iran</p>
                  {/* <div className="thesis-info">
                    <span>Bachelor's Thesis</span>
                    <p>Smart Schools</p>
                  </div> */}
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section className="publications-section" id="publications">
          <div className="container">

            <div className="publications-heading">
              <div>
                <span className="section-label">{content.publication.label}</span>
                <h2>{content.publication.heading}</h2>
              </div>

              <p>
                {content.publication.headingText}
              </p>
            </div>

            <div className="publications-list">
              {content.publications.map((paper, index) => (
                <article className="publication-item" key={index}>

                  <span className="publication-number" style={{ fontSize: "16px" }}>✦
                    {/* {String(index + 1).padStart(2, "0")} */}
                  </span>

                  <div className="publication-details">

                    <h3>{paper.title}</h3>

                    <p className="publication-authors">
                      {paper.authors}
                    </p>

                    <div className="publication-meta">
                      <span>{paper.venue}</span>
                      <span className="publication-year">{paper.year}</span>
                    </div>

                  </div>

                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noreferrer"
                      className="publication-link"
                      aria-label={`Read ${paper.title}`}
                    >
                      ↗
                    </a>
                  )}

                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container contact-container">
            <span className="section-label">{content.contact.label}</span>

            <h2>{content.contact.heading}</h2>

            <p>
              {content.contact.headingText}
            </p>

            <a
              href="mailto:s.asemanmanzar@gmail.com"
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

        {/* <p>Designed & Built with care by Sara.</p> */}
        <p>Designed & developed by Sara Aseman-Manzar.</p>

        <div className="footer-links">
          {/* <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a> */}

          <a href="#home">{content.navigation.home}</a>
          <a href="#about">{content.navigation.about}</a>
          <a href="#skills">{content.navigation.skills}</a>
          <a href="#experience">{content.navigation.experience}</a>
          <a href="#projects">{content.navigation.projects}</a>
          <a href="#education">{content.navigation.education}</a>
          <a href="#publications">{content.navigation.publications}</a>
          
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sara Aseman-Manzar. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>

      </div>
    </footer>

    </div>
  );
}

export default App;
