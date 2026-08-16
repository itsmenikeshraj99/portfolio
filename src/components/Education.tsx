import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "M.Sc. Mathematics",
    institution: "Sikkim University",
    duration: "2024 - 2026",
    location: "Sikkim, India",
    description:
      "Focused on Advanced Mathematics, Linear Algebra, Statistics, Real Analysis and Problem Solving. Developed strong analytical and logical thinking skills that now support my work in AI and software development.",
  },
  {
    degree: "B.Sc. Mathematics",
    institution: "Tilka Manjhi Bhagalpur University",
    duration: "2017 - 2020",
    location: "Bhagalpur, Bihar",
    description:
      "Built a strong foundation in Algebra, Calculus, Geometry and Mathematical Reasoning, strengthening quantitative and problem-solving abilities.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen py-24 px-6 text-[#FAF3E8]"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-amber-400 font-mono">
            Education
          </p>

          <h2 className="text-5xl font-bold mt-4 font-heading">
            Academic Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My academic background in Mathematics has built the analytical
            thinking and problem-solving mindset that I now apply to Artificial
            Intelligence and Full Stack Development.
          </p>
        </motion.div>

        <div className="space-y-10">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-orange-500/20 bg-white/5 backdrop-blur-xl p-8 hover:border-amber-400 hover:shadow-[0_0_30px_#E07A3E55] transition-all duration-300"
            >

              <div className="flex items-start gap-6">

                <div className="bg-orange-500/20 p-4 rounded-2xl">
                  <GraduationCap
                    size={34}
                    className="text-amber-400"
                  />
                </div>

                <div className="flex-1">

                  <h3 className="text-3xl font-bold font-heading">
                    {item.degree}
                  </h3>

                  <p className="text-amber-400 mt-2 text-lg">
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap gap-6 mt-5 text-gray-400">

                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      {item.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      {item.location}
                    </div>

                  </div>

                  <p className="text-gray-300 mt-6 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}