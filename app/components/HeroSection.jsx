export default function HeroSection() {
  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-watermark" id="hero-wm" aria-hidden="true">AHR</div>
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-available reveal">
              <div className="hero-available-dot"></div>
              Available for new opportunities
            </div>
            <h1 className="hero-name reveal reveal-delay-1">
              Anmol <span>H R.</span>
            </h1>
            <p className="hero-role reveal reveal-delay-2">
              <strong>Backend & Full Stack Developer</strong> — building systems that hold up in production
            </p>
            <p className="hero-statement reveal reveal-delay-3">
              I design and ship APIs, web applications, and backend services across .NET and MERN ecosystems. From enterprise codebases to freelance client delivery — I own the full stack, from schema design to deployment. Springer-published researcher. Based in Bengaluru, India.
            </p>
            <div className="hero-actions reveal reveal-delay-4">
              <a href="mailto:anmolpoojari23@gmail.com" className="btn-primary">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                Get in touch
              </a>
              <a href="#projects" className="btn-outline">
                View my work
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
            <div className="hero-stats reveal">
              <div>
                <div className="hero-stat-num">1.5+</div>
                <div className="hero-stat-label">Year production<br/>experience</div>
              </div>
              <div>
                <div className="hero-stat-num">99%</div>
                <div className="hero-stat-label">Model accuracy<br/>on fraud detection</div>
              </div>
              <div>
                <div className="hero-stat-num">Springer</div>
                <div className="hero-stat-label">Published<br/>researcher</div>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap reveal">
            <div className="hero-image-frame">
              <div className="hero-image-initials" aria-hidden="true">AHR</div>
            </div>
            <div className="hero-image-badge">
              <div className="hero-badge-icon" aria-hidden="true">📍</div>
              <div className="hero-badge-text">
                <strong>Bengaluru, India</strong>
                <span>Open to remote & on-site</span>
              </div>
            </div>
            <div className="hero-image-badge2" aria-hidden="true">
              <div className="hero-badge2-num">8.62</div>
              <div className="hero-badge2-label">CGPA / BTech CSE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
