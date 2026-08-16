import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaCogs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiFastapi,
} from "react-icons/si";

const skillGroups = [
  {
    title: "AI & Generative AI",
    color: "from-orange-500 to-orange-700",
    skills: [
      "Generative AI",
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
    ],
  },

  {
    title: "ML / Backend for AI",
    color: "from-purple-500 to-orange-500",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQL",
      "Vector Embeddings",
      "Firebase",
    ],
  },

  {
    title: "Tools & Automation",
    color: "from-green-500 to-orange-500",
    skills: [
      "n8n",
      "Docker",
      "Git & GitHub",
      "React (for AI UIs)",
      "TypeScript",
      "API Integration",
    ],
  },
];

const tools = [
  { icon: <FaPython />, name: "Python" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <FaDatabase />, name: "SQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaCogs />, name: "n8n" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 text-[#FAF3E8]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-amber-400 font-mono">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 font-heading">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
            I build AI Agents, RAG pipelines, LLM-powered applications
            and intelligent automation systems using the latest
            AI engineering tools.
          </p>

        </motion.div>

        {/* Skill Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillGroups.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-3xl border border-orange-500/30 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-amber-400 hover:shadow-[0_0_30px_#E07A3E55] transition duration-300"
            >

              <div
                className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${group.color} mb-6`}
              >
                {group.title}
              </div>

              <div className="space-y-4">

                {group.skills.map((skill, i) => (

                  <div
                    key={i}
                    className="flex justify-between items-center gap-4"
                  >

                    <span className="text-sm md:text-base font-mono">
                      {skill}
                    </span>

                    <div className="w-20 md:w-28 h-2 bg-gray-700 rounded-full">

                      <div
                        className="h-2 rounded-full bg-amber-400"
                        style={{
                          width: `${85 + (i % 3) * 5}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Tech Stack */}

        <div className="mt-24">

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 font-heading">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-5">

            {tools.map((tool, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                className="bg-white/5 border border-orange-500/20 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-[0_0_25px_#E07A3E55] transition"
              >

                <div className="text-3xl md:text-4xl text-amber-400">
                  {tool.icon}
                </div>

                <p className="text-xs md:text-sm text-center">
                  {tool.name}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}