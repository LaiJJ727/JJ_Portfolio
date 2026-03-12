import { useState, useEffect, useRef } from "react";
import { skills } from "../data/skills";


function AnimatedBar({ level, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="skill-bar-bg">
      <div
        className="skill-bar-fill"
        style={{
          width: `${width}%`,
          background: color,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}

function Skills(){
  return (
      <section id="skills" >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem" }}>
          <div className="section-label">// 03</div>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map(({ name, level }, i) => (
              <div className="skill-item" key={name}>
                <div className="skill-header">
                  <span className="skill-name">{name}</span>
                  <span className="skill-pct">{level}%</span>
                </div>
                <AnimatedBar
                  level={level}
                  color={i % 3 === 0 ? "var(--cyan)" : i % 3 === 1 ? "var(--purple)" : "var(--green)"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Skills