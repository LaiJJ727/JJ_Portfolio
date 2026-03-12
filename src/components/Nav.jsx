import { useState, useEffect, useRef } from "react";

function Nav() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  function NavLink({ href, label, active, onClick }) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`nav-link ${active ? "nav-link-active" : ""}`}
      >
        {label}
      </a>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = [
        "about",
        "experience",
        "skills",
        "education",
        "contact",
      ];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a className="nav-logo" href="#about">
        JJ Portfolio
      </a>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        {navItems.map(({ href, label }) => (
          <li key={label}>
            <NavLink
              href={href}
              label={label}
              active={activeSection === href.slice(1)}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(href.slice(1));
              }}
            />
          </li>
        ))}
      </ul>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Nav;
