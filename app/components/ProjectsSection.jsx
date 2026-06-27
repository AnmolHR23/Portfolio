export default function ProjectsSection() {
  return (
    <section id="projects" aria-label="Projects">
      <div className="container">
        <div className="eyebrow reveal project-eyebrow">Projects</div>

        <h2 className="section-title reveal project-title">
          Things I've built
        </h2>

        <p className="section-subtitle reveal project-subtitle">
          From academic research to production systems — each project solved a
          real problem.
        </p>

        <div className="projects-grid">

          {/* ── Card 1 — visual RIGHT (content left, visual right) ── */}
          <div className="project-card reverse reveal">
            <div className="project-content">
              <div className="project-number">01 — Client Delivery</div>
              <div className="project-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                Live in production
              </div>
              <h3 className="project-title">
                Adwita Enterprises Interior Platform
              </h3>
              <p className="project-desc">
                A full stack interior design business platform with real-time
                consultation booking, slot management, and automated email
                notifications. Built solo for a paying client — from zero to
                live in production.
              </p>
              <ul className="project-bullets">
                <li>
                  Next.js 16 App Router with REST API routes for bookings,
                  slots, and activity logging
                </li>
                <li>
                  Supabase (PostgreSQL) with custom migrations; Upstash Redis
                  rate limiting on all public endpoints
                </li>
                <li>
                  Google reCAPTCHA v2 + Resend transactional emails for admin
                  and client confirmation
                </li>
                <li>
                  SEO-ready: next-sitemap, robots.txt, Open Graph metadata,
                  Core Web Vitals optimised
                </li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Next.js 16</span>
                <span className="tech-tag">Supabase</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Vercel</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://www.adwitaenterprises.com"
                  target="_blank"
                  rel="noopener"
                  className="btn-sm primary"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live site
                </a>
              </div>
            </div>
            {/* visual is second → renders on RIGHT */}
            <div className="project-visual">
              <div className="project-visual-bg">
                <div className="project-visual-text">AE</div>
              </div>
              <div className="project-visual-icon" aria-hidden="true">🏠</div>
            </div>
          </div>

          {/* ── Card 2 — visual LEFT (visual first, content second) ── */}
          <div className="project-card reveal reveal-delay-1">
            {/* visual is first → renders on LEFT */}
            <div className="project-visual">
              <div className="project-visual-bg">
                <div className="project-visual-text">📈</div>
              </div>
              <div className="project-visual-icon" aria-hidden="true">📊</div>
            </div>
            <div className="project-content">
              <div className="project-number">02 — Published Research</div>
              <div className="project-badge">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
                  <circle cx="4" cy="4" r="4" />
                </svg>
                Springer LNNS 2024
              </div>
              <h3 className="project-title">
                Stock Price Prediction Using LSTM
              </h3>
              <p className="project-desc">
                Peer-reviewed research published in Springer Lecture Notes in
                Networks and Systems. An LSTM neural network for stock price
                forecasting, enhanced with NLP-based financial sentiment
                analysis.
              </p>
              <ul className="project-bullets">
                <li>
                  LSTM architecture trained on historical market data for
                  multi-step stock price forecasting
                </li>
                <li>
                  NLP sentiment analysis on financial news integrated as an
                  input signal to improve prediction accuracy
                </li>
                <li>
                  Published at ICICC 2024, indexed in Springer LNNS vol. 1024 —
                  DOI: 10.1007/978-981-97-3817-5_10
                </li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">TensorFlow/Keras</span>
                <span className="tech-tag">LSTM</span>
                <span className="tech-tag">NLP</span>
              </div>
              <div className="project-actions">
                <a
                  href="https://link.springer.com/chapter/10.1007/978-981-97-3817-5_10"
                  target="_blank"
                  rel="noopener"
                  className="btn-sm primary"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Read on Springer
                </a>
              </div>
            </div>
          </div>

          {/* ── Card 3 — visual RIGHT (content left, visual right) ── */}
          <div className="project-card reverse reveal reveal-delay-2">
            <div className="project-content">
              <div className="project-number">03 — ML Research</div>
              <div
                className="project-badge"
                style={{
                  background: "var(--parchment)",
                  color: "var(--slate)",
                  borderColor: "var(--mist)",
                }}
              >
                99% Accuracy
              </div>
              <h3 className="project-title">
                AI/ML Online Fraud Detection System
              </h3>
              <p className="project-desc">
                A machine learning fraud detection system trained on real-world
                financial transaction data, achieving 99% classification
                accuracy. Comparative benchmarking across multiple architectures.
              </p>
              <ul className="project-bullets">
                <li>
                  Deep learning models trained and evaluated on real-world
                  imbalanced transaction datasets
                </li>
                <li>
                  Feature engineering and data preprocessing pipelines for
                  high-accuracy classification
                </li>
                <li>
                  Benchmarked multiple ML algorithms — neural networks, ensemble
                  models — to reach 99% accuracy
                </li>
              </ul>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">scikit-learn</span>
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">NumPy</span>
                <span className="tech-tag">Pandas</span>
              </div>
            </div>
            {/* visual is second → renders on RIGHT */}
            <div className="project-visual">
              <div className="project-visual-bg">
                <div className="project-visual-text">ML</div>
              </div>
              <div className="project-visual-icon" aria-hidden="true">🛡️</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
