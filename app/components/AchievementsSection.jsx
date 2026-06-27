export default function AchievementsSection() {
  return (
    <section id="achievements" aria-label="Achievements and certifications">
      <div className="container">
        <div className="eyebrow reveal">Recognition</div>
        <h2 className="section-title reveal">Achievements & Research</h2>
        <div className="achievements-grid">
          <div className="achievement-card reveal">
            <div className="achievement-icon" aria-hidden="true">📖</div>
            <div className="achievement-title">Springer LNNS Publication</div>
            <p className="achievement-desc">Co-authored peer-reviewed research published in Springer Lecture Notes in Networks and Systems — ICICC 2024 conference. One of the most selective venues for applied computing research.</p>
            <a href="https://link.springer.com/chapter/10.1007/978-981-97-3817-5_10" target="_blank" rel="noopener" className="achievement-link">
              Read the paper →
            </a>
          </div>
          <div className="achievement-card reveal reveal-delay-1">
            <div className="achievement-icon" aria-hidden="true">🛡️</div>
            <div className="achievement-title">99% Fraud Detection Accuracy</div>
            <p className="achievement-desc">Built an AI/ML fraud detection system that achieved 99% classification accuracy on real-world financial transaction data — using deep learning and feature engineering on imbalanced datasets.</p>
          </div>
          <div className="achievement-card reveal reveal-delay-2">
            <div className="achievement-icon" aria-hidden="true">🚀</div>
            <div className="achievement-title">Live Client Delivery</div>
            <p className="achievement-desc">Designed and shipped a full stack production web application independently for a paying client — Next.js 16, Supabase, Redis rate limiting, reCAPTCHA, and Resend. Live at adwitaenterprises.com.</p>
            <a href="https://www.adwitaenterprises.com" target="_blank" rel="noopener" className="achievement-link">
              Visit site →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
