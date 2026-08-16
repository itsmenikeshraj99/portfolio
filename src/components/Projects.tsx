import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Innera",
    description:
      "An ed-tech mobile app for CBSE/NCERT and competitive exam students (JEE, SSC, Bank, Railway, UGC NET), built on a feature-based modular architecture with a fully Firestore-driven syllabus system and AI-driven personalized learning.",
    tech: ["React Native", "Firebase", "TypeScript", "AI"],
    github: "https://github.com/itsmenikeshraj99/innera",
    demo: "#",
    status: "In Progress",
  },
  {
    title: "n8n Business Automation",
    description:
      "A set of n8n automation workflows deployed via Docker — a Gmail sender triggered by Google Sheets rows, Zoom registration auto-emails via webhook, and Gmail attachment delivery through Google Drive.",
    tech: ["n8n", "Docker", "Automation", "Webhooks"],
    github: "#",
    demo: "#",
    status: "Completed",
  },
  {
    title: "LangChain Fundamentals",
    description:
      "Hands-on LangChain projects covering LLMs, Chat Models (OpenAI, Gemini, HuggingFace), embeddings, document similarity and structured output using Pydantic and TypedDict.",
    tech: ["LangChain", "Python", "Pydantic", "Embeddings"],
    github: "https://github.com/itsmenikeshraj99/langchain_structured_output",
    demo: "#",
    status: "Completed",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 text-[#FAF3E8]"
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
          <p className="uppercase tracking-[6px] text-amber-400 font-mono">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-heading">
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
              className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-amber-400 hover:shadow-[0_0_30px_#E07A3E55] transition duration-300"
            >

              {/* Image Placeholder */}

              <div className="h-56 bg-gradient-to-br from-orange-500/20 to-amber-900/20 flex items-center justify-center text-6xl">
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
                      : "bg-orange-700/20 text-orange-600"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold font-heading">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-amber-300 text-sm font-mono"
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
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-500 hover:bg-amber-400 text-black font-semibold transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-amber-400 hover:bg-orange-500/20 transition"
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