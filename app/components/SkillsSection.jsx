export default function SkillsSection() {
  return (
    <section id="skills" aria-label="Technical skills">
      <div className="container">
        <div className="eyebrow reveal">Skills</div>
        <h2 className="section-title reveal">What I work with</h2>
        <p className="section-subtitle reveal">Technologies I've used in production — not just tutorials.</p>
        <div className="skills-grid">
          <div className="skill-group reveal">
            <div className="skill-group-icon" aria-hidden="true">⚙️</div>
            <div>
              <div className="skill-group-title">Backend</div>
              <p className="skill-group-desc">Backend systems, APIs, and auth flows built for production reliability.</p>
            </div>
            <div className="skill-pills">
              <span className="skill-pill">C#</span>
              <span className="skill-pill">ASP.NET MVC</span>
              <span className="skill-pill">Entity Framework</span>
              <span className="skill-pill">REST API Design</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">VB.NET</span>
            </div>
          </div>

          <div className="skill-group reveal reveal-delay-1">
            <div className="skill-group-icon" aria-hidden="true">🖥️</div>
            <div>
              <div className="skill-group-title">Frontend</div>
              <p className="skill-group-desc">Modern interface work with React, Next.js, and production-ready CSS tooling.</p>
            </div>
            <div className="skill-pills">
              <span className="skill-pill">Angular</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Next.js 16 App Router</span>
              <span className="skill-pill">JavaScript (ES6+)</span>
            </div>
          </div>

          <div className="skill-group reveal reveal-delay-2">
            <div className="skill-group-icon" aria-hidden="true">🗄️</div>
            <div>
              <div className="skill-group-title">Databases</div>
              <p className="skill-group-desc">Data models and persistence for scalable applications.</p>
            </div>
            <div className="skill-pills">
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">PostgreSQL (Supabase)</span>
              <span className="skill-pill">Redis (Upstash)</span>
            </div>
          </div>

          <div className="skill-group reveal reveal-delay-4">
            <div className="skill-group-icon" aria-hidden="true">💬</div>
            <div>
              <div className="skill-group-title">Languages</div>
              <p className="skill-group-desc">Programming languages used to build backend, frontend, and research projects.</p>
            </div>
            <div className="skill-pills">
              <span className="skill-pill">C#</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">Java</span>
              <span className="skill-pill">Python</span>
              <span className="skill-pill">VB.NET</span>
            </div>
          </div>

          <div className="skill-group reveal reveal-delay-5">
            <div className="skill-group-icon" aria-hidden="true">🛠️</div>
            <div>
              <div className="skill-group-title">DevOps & Tools</div>
              <p className="skill-group-desc">Tooling and delivery practices that keep projects shipping and stable.</p>
            </div>
            <div className="skill-pills">
              <span className="skill-pill">Git / GitHub</span>
              <span className="skill-pill">Vercel</span>
              <span className="skill-pill">Docker (basic)</span>
              <span className="skill-pill">Agile / Scrum</span>
              <span className="skill-pill">Postman</span>
              <span className="skill-pill">Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
