import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaRobot,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaGraduationCap size={28} />,
      title: "Education",
      text: "M.Sc. Mathematics",
    },
    {
      icon: <FaRobot size={28} />,
      title: "AI Engineer",
      text: "GenAI • AI Agents • LangChain",
    },
    {
      icon: <FaLaptopCode size={28} />,
      title: "LLM Engineering",
      text: "RAG • LangGraph • Python",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Open To Work",
      text: "Remote AI Engineer Roles",
    },
  ];

  return (
    <section
      id="about"
      className="flex items-center justify-center px-6 py-20 text-[#123425]"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-emerald-700 uppercase tracking-[6px] mb-4 font-mono">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 font-heading text-teal-600">
            Passionate About
            <br />
            <span className="text-emerald-700">
              Artificial Intelligence
            </span>
          </h2>

          <p className="text-gray-800 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
            I'm <strong>Nikesh Kumar</strong>, an AI Engineer with an
            <strong> M.Sc. Mathematics</strong>.

            <br /><br />

            I specialize in building AI Agents, RAG pipelines,
            LLM-powered applications and intelligent automation
            systems using LangChain, LangGraph and Python.

            <br /><br />

            My goal is to design and ship AI systems
            that solve real-world business problems —
            and I'm actively looking for AI Engineer roles.
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >

          {cards.map((card, index) => (

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -5,
              }}
              key={index}
              className="rounded-3xl border-4 border-emerald-600/30 bg-emerald-50/60 backdrop-blur-xl p-8 hover:border-green-400 hover:shadow-[0_0_30px_#22C55E55] transition duration-300"
            >

              <div className="text-emerald-700 text-3xl mb-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 font-heading">
                {card.title}
              </h3>

              <p className="text-gray-800 leading-7">
                {card.text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}