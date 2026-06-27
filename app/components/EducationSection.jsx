export default function EducationSection() {
  return (
    <section id="education" aria-label="Education">
      <div className="container">
        <div className="eyebrow reveal">Education</div>
        <h2 className="section-title reveal">Academic background</h2>
        <div className="education-card reveal">
          <div>
            <div className="edu-school">M S Ramaiah University of Applied Sciences</div>
            <div className="edu-degree">Bachelor of Technology — Computer Science and Engineering</div>
            <div className="edu-years">Bengaluru, India · 2020 – 2024</div>
          </div>
          <div className="edu-cgpa">
            <div className="edu-cgpa-num">8.62</div>
            <div className="edu-cgpa-label">CGPA / 10</div>
          </div>
        </div>
      </div>
    </section>
  );
}
