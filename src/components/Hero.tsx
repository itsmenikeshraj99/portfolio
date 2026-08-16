import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-24 text-[#FAF3E8]"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-amber-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight font-heading">
            <span className="text-[#FAF3E8]">Nikesh </span>
            <span className="text-amber-400">Kumar</span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-gray-300 h-16 font-mono">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "GenAI & LLM Developer",
                2000,
                "AI Agents & RAG Systems",
                2000,
                "Building Intelligent AI Products",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-base md:text-lg text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
            I build AI-powered applications — LLM integrations, RAG pipelines,
            AI Agents and intelligent automation systems using Python,
            LangChain, LangGraph and FastAPI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            <a
              href="#projects"
              className="bg-orange-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-amber-400 blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Nikesh Kumar"
              className="relative w-64 sm:w-80 lg:w-[430px] rounded-full border-4 border-amber-400 shadow-[0_0_60px_#22d3ee] hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}