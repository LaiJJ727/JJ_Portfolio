const education = [
  {
    period: "03/2024 – 09/2025",
    degree: "Master of Cyber Security",
    school: "Universiti Teknologi Malaysia",
    location: "Johor Bahru, Malaysia",
    cgpa: "3.8 / 4.00",
    icon: "🛡️",
  },
  {
    period: "03/2020 – 05/2023",
    degree: "Bachelor of Software Engineering (Honours)",
    school: "Southern University College",
    location: "Johor Bahru, Malaysia",
    cgpa: "3.49 / 4.00",
    icon: "💻",
  },
  {
    period: "01/2014 – 11/2019",
    degree: "High School (Independent)",
    school: "Pei Chun High School",
    location: "Pontian, Malaysia",
    cgpa: "UEC: 2A 6B 2C",
    icon: "🎓",
  },
];

function Education() {
  return (
    <section id="education" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem" }}>
        <div className="section-label">// 04</div>
        <h2 className="section-title">Education</h2>
        <div className="edu-grid">
          {education.map((edu) => (
            <div className="edu-card" key={edu.degree}>
              <div className="edu-icon">{edu.icon}</div>
              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">
                  {edu.school} · {edu.location}
                </div>
              </div>
              <div>
                <div className="edu-cgpa">{edu.cgpa}</div>
                <div className="edu-period">{edu.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
