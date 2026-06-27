export default function CommandMenu() {
  return (
    <div className="cmd-overlay" id="cmd-overlay" role="dialog" aria-modal="true" aria-label="Command menu">
      <div className="cmd-box">
        <div className="cmd-input-wrap">
          <span className="cmd-input-icon">⌘</span>
          <input className="cmd-input" id="cmd-input" placeholder="Type a command or search…" autoComplete="off" />
          <span className="cmd-kbd">ESC</span>
        </div>
        <div className="cmd-results" id="cmd-results">
          <div className="cmd-section-label">Navigate</div>
          <div className="cmd-item" data-action="about"><span className="cmd-item-icon">👤</span> About</div>
          <div className="cmd-item" data-action="experience"><span className="cmd-item-icon">💼</span> Experience</div>
          <div className="cmd-item" data-action="projects"><span className="cmd-item-icon">🚀</span> Projects</div>
          <div className="cmd-item" data-action="skills"><span className="cmd-item-icon">⚡</span> Skills</div>
          <div className="cmd-item" data-action="contact"><span className="cmd-item-icon">✉️</span> Contact</div>
          <div className="cmd-section-label">Actions</div>
          <div className="cmd-item" data-action="resume"><span className="cmd-item-icon">📄</span> Download Resume</div>
          <div className="cmd-item" data-action="email"><span className="cmd-item-icon">📋</span> Copy Email</div>
          <div className="cmd-item" data-action="linkedin"><span className="cmd-item-icon">🔗</span> Open LinkedIn</div>
          <div className="cmd-item" data-action="github"><span className="cmd-item-icon">💻</span> Open GitHub</div>
        </div>
      </div>
    </div>
  );
}
