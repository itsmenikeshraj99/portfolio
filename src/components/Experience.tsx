import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    company: "Innerra",
    role: "Founder | AI Engineer & Full Stack Developer",
    duration: "2026 – Present",
    description:
      "Designed and developed an educational platform for students. Built web and mobile applications using React Native, Firebase and modern technologies with future AI integration.",
    skills: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo",
      "Git",
    ],
  },

  {
    company: "MBA Paanwali",
    role: "Full Stack Developer",
    duration: "2026",
    description:
      "Designed and developed a modern responsive business website focused on branding, performance and user experience.",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    company: "ChaiOM",
    role: "Full Stack Developer",
    duration: "2026",
    description:
      "Developed a responsive business website with modern UI, optimized performance and mobile-first design.",
    skills: [
      "React",
      "Tailwind CSS",
      "UI/UX",
    ],
  },

  {
    company: "Business Automation",
    role: "AI Automation Developer",
    duration: "2026",
    description:
      "Created AI-powered automation workflows using n8n, APIs and Python to streamline business processes.",
    skills: [
      "Python",
      "n8n",
      "Automation",
      "AI",
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
            Building Real-World Products
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
            My experience includes AI Engineering, Full Stack Development,
            modern web applications and intelligent automation solutions.
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