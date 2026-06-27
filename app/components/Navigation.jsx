"use client";

export default function Navigation() {
  return (
    <>
      <nav id="main-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-inner container">
          <a href="#hero" className="nav-logo">Anmol <span>H R</span></a>
          <div className="nav-links" role="menubar">
            <a href="#about" role="menuitem">About</a>
            <a href="#experience" role="menuitem">Experience</a>
            <a href="#projects" role="menuitem">Projects</a>
            <a href="#skills" role="menuitem">Skills</a>
            <a href="#contact" role="menuitem">Contact</a>
          </div>
          <a href="#contact" className="nav-cta btn-primary">Let's Talk</a>
          <button className="nav-hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}
