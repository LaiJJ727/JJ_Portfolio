import { useState, useEffect, useRef } from "react";
import profilePhoto from "../assets/profileImg.jpg";

function Introduction() {
  return (
    <section id="about" style={{ paddingTop: 0, maxWidth: "none" }}>
      <div className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content hero-layout" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          {/* Left: Text */}
          <div>
            <div className="hero-tag">Software Engineer</div>
            <h1 className="hero-name">
              LAI
              <br />
              <span className="hero-name-span">JUN JIE</span>
            </h1>
            <p className="hero-desc">
              Software Developer & Cyber Security Graduate. Building intelligent
              systems, RESTful APIs, and full-stack web applications. Based in
              Singapore.
            </p>
            <div className="hero-cta-row">
              <a className="btn-primary" href="mailto:jjlai0112@gmail.com">
                Get In Touch
              </a>
              <a
                className="btn-secondary"
                href="https://github.com/LaiJJ727/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div>
                <div className="stat-num">3.8</div>
                <div className="stat-label">Master's CGPA</div>
              </div>
              <div>
                <div className="stat-num">12+</div>
                <div className="stat-label">Tech Skills</div>
              </div>
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            {/* Rotating border ring */}
            <div
              style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                border: "1px dashed rgba(0,229,255,0.4)",
                animation: "spin 12s linear infinite",
              }}
            />
            {/* Cyan corner accent */}
            <div
              style={{
                position: "absolute",
                top: -4,
                right: -4,
                width: 24,
                height: 24,
                borderTop: "2px solid var(--cyan)",
                borderRight: "2px solid var(--cyan)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: -4,
                width: 24,
                height: 24,
                borderBottom: "2px solid var(--cyan)",
                borderLeft: "2px solid var(--cyan)",
              }}
            />
            {/* Photo */}
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid var(--cyan)",
                boxShadow:
                  "0 0 40px rgba(0,229,255,0.2), 0 0 80px rgba(0,229,255,0.08)",
              }}
            >
              <img
                src={profilePhoto}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "bottom",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
