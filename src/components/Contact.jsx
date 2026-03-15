function Contact() {
  return (
    <section id="contact">
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 2rem" }}>
        <div className="section-label">// 05</div>
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <a className="contact-card" href="mailto:jjlai0112@gmail.com">
            <span className="contact-icon">✉️</span>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-val">jjlai0112@gmail.com</div>
            </div>
          </a>
          <a
            className="contact-card"
            href="https://github.com/LaiJJ727/"
            target="_blank"
            rel="noreferrer"
          >
        {/* <span className="contact-icon">🐙</span> */}   
            <span className="contact-img"><img src="/src/assets/github-logo.png" alt="GitHub" /></span>  
            <div>
              <div className="contact-label">GitHub</div>
              <div className="contact-val">github.com/LaiJJ727</div>
            </div>
          </a>
          <a
            className="contact-card"
            href="https://www.linkedin.com/in/lai-junjie-04a724219/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">💼</span>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-val">+6586955919</div>
              <div className="contact-val">+60143886279</div>
            </div>
          </a>
          <div className="contact-card" style={{ cursor: "default" }}>
            <span className="contact-icon">📍</span>
            <div>
              <div className="contact-label">Location</div>
              <div className="contact-val">Singapore 510759</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
