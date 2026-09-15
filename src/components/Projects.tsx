import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Data Analyst Agent",
    description:
      "A self-correcting LangGraph agent that writes and executes pandas code to answer natural-language questions about uploaded data, with structured (Pydantic) outputs and automatic retry on execution errors.",
    tech: ["LangGraph", "Python", "Pandas", "Pydantic"],
    github: "https://github.com/itsmenikeshraj99/ai_data_analyst_agent",
    demo: "https://aidataanalystagent.streamlit.app",
    status: "Completed",
  },
  {
    title: "Interview Prep",
    description:
      "A 3-agent mock interviewer — interviewer, evaluator, and coach agents working together, with question difficulty that adapts round by round based on answer quality.",
    tech: ["LangGraph", "Python", "Pydantic", "Streamlit"],
    github: "https://github.com/itsmenikeshraj99/Interview_Prep",
    demo: "https://interviewprep-1.streamlit.app",
    status: "Completed",
  },
  {
    title: "AI Job-Match Agent",
    description:
      "A 4-node LangGraph agent (extract resume → extract JD → match & score → suggest) that scores resume-to-job-description fit and generates actionable improvement suggestions, using structured (Pydantic) outputs at every step.",
    tech: ["LangGraph", "Python", "Pydantic", "Streamlit"],
    github: "https://github.com/itsmenikeshraj99/ai-job-match-agent",
    demo: "https://ai-job-match-agent.streamlit.app",
    status: "Completed",
  },
  {
    title: "Reel Generator",
    description:
      "An end-to-end content pipeline that turns a topic into a captioned short-form video: LangGraph-driven script generation, automated voiceover, and video assembly.",
    tech: ["LangGraph", "Python", "MoviePy", "Streamlit"],
    github: "https://github.com/itsmenikeshraj99/Reel_Generator",
    demo: "https://reelgenerator-1.streamlit.app",
    status: "In Progress",
  },
  {
    title: "Innera",
    description:
      "An ed-tech mobile app for CBSE/NCERT and competitive exam students (JEE, SSC, Bank, Railway, UGC NET), built on a feature-based modular architecture with a fully Firestore-driven syllabus system and AI-driven personalized learning.",
    tech: ["React Native", "Firebase", "TypeScript", "AI"],
    github: "https://github.com/itsmenikeshraj99/innera",
    demo: "#",
    status: "In Progress",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 text-[#123425]"
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
          <p className="uppercase tracking-[6px] text-emerald-700 font-mono">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-heading text-teal-600">
            Featured Projects
          </h2>

          <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
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
              className="rounded-3xl border-4 border-emerald-600/20 bg-emerald-50/60 backdrop-blur-xl overflow-hidden hover:border-green-400 hover:shadow-[0_0_30px_#22C55E55] transition duration-300"
            >

              {/* Image Placeholder */}

              <div className="h-56 bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 flex items-center justify-center text-6xl">
                🚀
              </div>

              <div className="p-8">

                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5 ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-emerald-700"
                      : project.status === "Completed"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : project.status === "In Progress"
                      ? "bg-lime-500/20 text-lime-400"
                      : "bg-emerald-800/20 text-emerald-700"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold font-heading">
                  {project.title}
                </h3>

                <p className="text-gray-700 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-700 text-sm font-mono"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-green-400 text-black font-semibold transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl border border-green-400 hover:bg-emerald-600/20 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}