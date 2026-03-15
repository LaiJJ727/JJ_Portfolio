const experiences = [
  {
    period: "03/2026 – Present",
    role: "Software Engineer",
    company: "United Microelectronics Corporation (UMC)",
    location: "Singapore",
    points: [
      "Modernized legacy enterprise systems by developing and enhancing applications using C# WebForms, improving user interface usability and system maintainability.",
      "Integrated multiple internal systems into a unified platform, enabling users to access and manage different functions more efficiently within a single interface.",
      "Participated in the full Software Development Life Cycle (SDLC) including requirement analysis, development, testing, and deployment within the semiconductor fabrication (FAB) environment.",
      "Analyzed existing processes and identified optimization opportunities, developing new tools and system features to support fab productivity improvements.",
    ],
    accent: "#00e5ff",
  },
  {
    period: "06/2023 – 02/2026",
    role: "Software Developer",
    company: "HITEC – United Microelectronics Corporation (UMC)",
    location: "Singapore",
    points: [
      "Updated legacy codebases to modern development standards, improving functionality.",
      "Enhanced UX by delivering intelligent automation solutions and streamlining workflows through AI-driven web applications.",
      "Designed and implemented RESTful API integrations to connect external services.",
      "Developed and maintained a unified company portal using C# WebForms.",
    ],
    accent: "#4b68ea",
  },
  {
    period: "03/2023 – 05/2023",
    role: "Full Stack Developer (Internship)",
    company: "eTracking SDN BHD",
    location: "Malaysia",
    points: [
      "Built front-end and back-end features using Vue.js and Laravel.",
      "Demonstrated deep understanding of latest technologies and best practices.",
      `Can be able to adapt to changing technologies and programming languages, 
       as well as adjust their development style to meet the needs of different projects.`,
    ],
    accent: "#7c3aed",
  },
  {
    period: "03/2021 – 02/2023",
    role: "Coding Instructor (Part-time)",
    company: "Zenius Tech SDN BHD",
    location: "Malaysia",
    points: [
      "Guided students through coding challenges and creative problem-solving.",
      "Communicated complex coding concepts to students of varying skill levels.",
      "Developed strong communication and teaching abilities.",
    ],
    accent: "#10b981",
  },
];

function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem" }}>
        <div className="section-label">// 02</div>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.role}>
              <div
                className="timeline-dot"
                style={{ background: exp.accent }}
              />
              <div className="timeline-period" style={{ color: exp.accent }}>
                {exp.period}
              </div>
              <div className="timeline-role">{exp.role}</div>
              <div className="timeline-company">
                {exp.company} · {exp.location}
              </div>
              <ul className="timeline-points">
                {exp.points.map((p) => (
                  <li
                    className="timeline-point"
                    style={{ "--accent": exp.accent }}
                    key={p}
                  >
                    <style>{`.timeline-point::before { color: ${exp.accent}; }`}</style>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
