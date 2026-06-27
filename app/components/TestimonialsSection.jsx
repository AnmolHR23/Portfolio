export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-label="Testimonials">
      <div className="container">
        <div className="eyebrow reveal">Testimonials</div>
        <h2 className="section-title reveal">What others say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card reveal">
            <div className="testimonial-quote" aria-hidden="true">"</div>
            <p className="testimonial-text">Anmol delivered our entire website independently — from the first conversation to launch day. The booking system works flawlessly, the site is fast, and he handled everything including the security setup. I didn't have to manage him at all.</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar" aria-hidden="true">AE</div>
              <div>
                <div className="testimonial-name">Adwita Enterprises</div>
                <div className="testimonial-role">Client · Interior Design Business</div>
              </div>
            </div>
          </div>
          <div className="testimonial-placeholder reveal reveal-delay-1">
            <p>More testimonials coming soon.<br/><br/>If you've worked with me and would like to share a recommendation, I'd love to hear from you — <a href="mailto:anmolpoojari23@gmail.com" style={{ color: 'var(--sienna)' }}>reach out here</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
