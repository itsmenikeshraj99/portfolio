import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiFastapi,
} from "react-icons/si";

const skillGroups = [
  {
    title: "AI & Generative AI",
    color: "from-cyan-500 to-blue-500",
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
    title: "Frontend",
    color: "from-purple-500 to-cyan-500",
    skills: [
      "React",
      "React Native",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    color: "from-green-500 to-cyan-500",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "SQL",
      "Firebase",
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
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 text-white"
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

          <p className="uppercase tracking-[6px] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
            I build AI-powered applications, intelligent automation,
            modern full-stack software and scalable AI products using
            the latest technologies.
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
              className="rounded-3xl border border-cyan-500/30 bg-white/5 backdrop-blur-xl p-6 md:p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_#00e5ff55] transition duration-300"
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

                    <span className="text-sm md:text-base">
                      {skill}
                    </span>

                    <div className="w-20 md:w-28 h-2 bg-gray-700 rounded-full">

                      <div
                        className="h-2 rounded-full bg-cyan-400"
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

          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
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
                className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-[0_0_25px_#00e5ff55] transition"
              >

                <div className="text-3xl md:text-4xl text-cyan-400">
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