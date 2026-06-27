export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Work experience">
      <div className="container">
        <div className="eyebrow reveal">Experience</div>
        <h2 className="section-title reveal">Where I've worked</h2>
        <p className="section-subtitle reveal">
          Production experience building reliable enterprise services, improving
          legacy systems, and shipping customer-facing full stack products.
        </p>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot" aria-hidden="true"></div>

            <div className="timeline-meta">
              <span className="timeline-badge">Current</span>
              <span className="timeline-date">Oct 2024 – Present</span>
            </div>

            <div className="timeline-company">Yucca Scalian Group</div>

            <div className="timeline-role">
              Software Engineer — Full Stack & Backend · Bengaluru
            </div>

            <p className="timeline-desc">
              Driving backend reliability and modern frontend delivery for
              enterprise applications. I contribute to system design, delivery
              cadence, and measurable improvements in performance and stability.
            </p>

            <ul className="timeline-bullets">
              <li>
                Developed and maintained enterprise web applications using C#,
                ASP.NET MVC, Entity Framework, and a layered architecture,
                building scalable backend services and RESTful APIs.
              </li>
              <li>
                Developed responsive frontend features using Angular,
                TypeScript, React, and jQuery, improving user experience and
                accelerating feature delivery.
              </li>
              <li>
                Designed and optimized MySQL databases, wrote complex SQL
                queries, and collaborated with business and data access layers
                to deliver reliable application functionality.
              </li>
              <li>
                Used Git for version control, participated in Agile development,
                code reviews, and production support while enhancing legacy
                VB.NET modules.
              </li>
            </ul>

            <div className="timeline-tech">
              <span className="tech-tag">C#</span>
              <span className="tech-tag">ASP.NET MVC</span>
              <span className="tech-tag">Entity Framework</span>
              <span className="tech-tag">Angular</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">VB.NET</span>
              <span className="tech-tag">MySQL</span>
            </div>
          </div>

          <div className="timeline-item reveal reveal-delay-1">
            <div className="timeline-dot" aria-hidden="true"></div>

            <div className="timeline-meta">
              <span
                className="timeline-badge"
                style={{
                  background: "var(--sage-pale)",
                  color: "#3D7A57",
                }}
              >
                Freelance
              </span>
              <span className="timeline-date">Apr 2026 – May 2026</span>
            </div>

            <div className="timeline-company">Adwita Enterprises</div>

            <div className="timeline-role">
              Freelance Full Stack Developer · Remote
            </div>

            <p className="timeline-desc">
              Built a full stack business platform end-to-end for a paying
              client, owning architecture, development, deployment, and customer
              handoff.
            </p>

            <ul className="timeline-bullets">
              <li>
                Designed and shipped a Next.js 16 application with bookings,
                slot management, and transactional email flows.
              </li>
              <li>
                Built Supabase-backed data models for orders, customers, and
                availability while enforcing validation and security best
                practices.
              </li>
              <li>
                Improved production readiness with rate limiting, reCAPTCHA, and
                deployment automation for a fast, reliable launch.
              </li>
            </ul>

            <div className="timeline-tech">
              <span className="tech-tag">Next.js 16</span>
              <span className="tech-tag">Supabase</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">Redis</span>
              <span className="tech-tag">Resend</span>
              <span className="tech-tag">Shadcn/ui</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
