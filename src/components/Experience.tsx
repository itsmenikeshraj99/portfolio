import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Innera",
    role: "Founder | AI Engineer",
    duration: "2026 – Present",
    description:
      "Building an ed-tech platform for CBSE/NCERT and competitive exam students with a feature-based modular architecture and a fully Firestore-driven content system, so classes, subjects and exam tracks scale without code changes. Actively integrating AI-driven personalization into the learning experience.",
    skills: [
      "AI Agents",
      "React Native",
      "Firebase",
      "TypeScript",
    ],
  },

  {
    company: "Business Automation",
    role: "AI Automation Developer",
    duration: "2026",
    description:
      "Built and debugged n8n automation workflows end-to-end — Gmail sender triggered by Google Sheets rows, Zoom registration auto-emails via webhook, and Gmail attachment delivery through Google Drive — deployed via Docker for persistent, always-on automation.",
    skills: [
      "n8n",
      "Python",
      "Docker",
      "Automation",
    ],
  },

  {
    company: "Self-Directed Learning",
    role: "AI Engineering Track",
    duration: "2026",
    description:
      "Structured, hands-on LangChain learning path covering LLMs, Chat Models (OpenAI, Gemini, HuggingFace), embeddings, document similarity and structured output with Pydantic and TypedDict. Currently progressing into LangGraph — multi-agent systems, ReAct loops and checkpointing.",
    skills: [
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Pydantic",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Building AI-Powered Systems
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
            My experience is focused on AI Engineering — LLM integrations,
            AI Agents and intelligent automation systems.
          </p>
        </div>

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_#00e5ff55] transition"
            >

              <div className="flex justify-between flex-wrap gap-4">

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="text-cyan-400 text-lg mt-2">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  {exp.duration}
                </div>

              </div>

              <p className="text-gray-300 mt-6 leading-8">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {exp.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}