import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a
        href="#"
        className="flex items-center gap-3 text-3xl font-bold text-cyan-400"
      >
        <img
          src="/favicon.png"
          alt="Logo"
          className="w-10 h-10 rounded-x1 shadow-[0_0_20px_#00e5ff80]"
        />

        <span>Nikesh Kumar.</span>
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
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
          rel="noopener noreferrer"
          className="icon"
        >
          <FaLinkedin />
        </a>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}