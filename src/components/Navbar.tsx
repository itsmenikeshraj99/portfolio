import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a
        href="#"
        className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-amber-400"
      >
        <img
          src="/favicon.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover shadow-[0_0_20px_#E07A3E80]"
        />

        <span>Nikesh Kumar.</span>
      </a>

      {/* Desktop Menu */}
      <div className="nav-links desktop-menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right desktop-menu">
        <a
          href="https://github.com/itsmenikeshraj99"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nikesh-kumar-4a5425187"
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>

        <a href="/resume.pdf" download className="resume-btn">
          Resume
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a href="/resume.pdf" download>
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}