import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "A modern personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. Designed with glassmorphism, responsive layouts and smooth animations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/itsmenikeshraj99/portfolio",
    demo: "#",
    status: "Live",
  },
  {
    title: "Innera",
    description:
      "An AI-powered education platform focused on personalized learning, student management and future AI-powered features.",
    tech: ["React Native", "Firebase", "TypeScript", "AI"],
    github: "https://github.com/itsmenikeshraj99/innera",
    demo: "#",
    status: "In Progress",
  },
  {
  title: "MBA Paanwali",
  description:
    "A modern business website developed for MBA Paanwali with a responsive UI, brand-focused design, product showcase and optimized user experience.",
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
  ],
  github: "#",
  demo: "#",
  status: "Completed",
  },
  {
    title: "AI Business Automation",
    description:
      "Business workflow automation using n8n, APIs and AI to automate repetitive business tasks and improve productivity.",
    tech: ["n8n", "Python", "Automation", "AI"],
    github: "#",
    demo: "#",
    status: "In Progress",
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot built using LangChain, RAG and OpenAI APIs for contextual conversations.",
    tech: ["LangChain", "RAG", "Python", "OpenAI"],
    github: "#",
    demo: "#",
    status: "Coming Soon",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
            A collection of projects showcasing my skills in Artificial
            Intelligence, Full Stack Development and Automation.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-cyan-400 hover:shadow-[0_0_30px_#00e5ff55] transition duration-300"
            >

              {/* Image Placeholder */}

              <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 flex items-center justify-center text-6xl">
                🚀
              </div>

              <div className="p-8">

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "Completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-500/20 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}