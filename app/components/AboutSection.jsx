export default function AboutSection() {
  return (
    <section id="about" aria-label="About me">
      <div className="container">
        <div className="eyebrow reveal">About me</div>
        <h2 className="section-title reveal">A developer who cares<br/>about what ships</h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>I'm a backend and full stack developer with hands-on production experience across two different technology ecosystems — enterprise Microsoft .NET (C#, ASP.NET MVC, VB.NET) and the modern JavaScript/MERN stack (Node.js, React, Next.js, MongoDB). That dual fluency is rare for someone at my career stage, and it means I can contribute meaningfully in most engineering environments a company runs.</p>
        <div className="about-highlight">"Someone trusted me to build their business's entire web presence from scratch — and I delivered it to production."</div>
        <p>I freelanced an end-to-end interior design platform for a paying client — adwitaenterprises.com — independently handling everything from database schema and API design to production deployment, security hardening, and SEO. That experience gave me real ownership and accountability that a classroom or side project can't replicate.</p>
        <p>Outside of work, I research applied machine learning. My work on LSTM-based stock price prediction with sentiment analysis was accepted and published in the Springer Lecture Notes in Networks and Systems series (ICICC 2024). I also built a fraud detection system with 99% classification accuracy on real financial transaction data.</p>
        <p>I'm currently looking for backend or full stack roles at engineering-led teams — places where I can work on systems that genuinely matter, with people who care about how things are built, not just that they ship.</p>
          </div>
          <div className="about-values reveal reveal-delay-2">
            <div className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">⚙️</div>
              <div className="about-value-title">Systems thinking</div>
              <div className="about-value-desc">I design services and schemas that scale and remain maintainable.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">🔐</div>
              <div className="about-value-title">Security as a default</div>
              <div className="about-value-desc">Rate limiting, CAPTCHA, and secure auth patterns are built in from the start.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">📦</div>
              <div className="about-value-title">End-to-end ownership</div>
              <div className="about-value-desc">I take features from idea to production and monitor their behaviour in the wild.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon" aria-hidden="true">📖</div>
              <div className="about-value-title">Research-backed curiosity</div>
              <div className="about-value-desc">I apply rigorous experimentation and evaluation when designing ML-backed features.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
