import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Aurora from "./components/Aurora";
import About from "./components/About"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Aurora />
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}