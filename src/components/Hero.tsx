import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/images/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-cyan-400 text-xl mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-white">Nikesh </span>
            <span className="text-cyan-400">Kumar</span>
          </h1>

          <div className="mt-6 text-xl md:text-2xl text-gray-300 h-16">
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Full Stack AI Developer",
                2000,
                "M.Sc. Mathematics",
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
            I build AI-powered applications, intelligent automation systems,
            modern web applications and scalable software using Python,
            React, TypeScript, LangChain, FastAPI and Generative AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300"
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

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>

            <img
              src={profile}
              alt="Nikesh Kumar"
              className="relative w-64 sm:w-80 lg:w-[430px] rounded-full border-4 border-cyan-400 shadow-[0_0_60px_#22d3ee] hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}