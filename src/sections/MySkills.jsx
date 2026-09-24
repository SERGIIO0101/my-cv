import { motion } from "framer-motion";

const skillGroups = [
  { title: "Frontend", skills: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS", "Responsive UX/UI"] },
  { title: "Backend", skills: ["Node.js", "Express", "FastAPI", "PHP"] },
  { title: "Databases", skills: ["SQLite", "Supabase (PostgreSQL)", "MySQL", "SQL"] },
  { title: "Other", skills: ["Python", "Java", "C", "C++", "Electron", "Git", "CI/CD", "Generative AI", "Power BI"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-1)] mb-12"
        style={{ fontFamily: "var(--font-code)" }}
      >
        My Skills
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl w-full">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1f1f1f] border border-[#F5B027]/20 rounded-xl p-6"
            style={{ fontFamily: "var(--font-code)" }}
          >
            <h3 className="text-sm text-gray-400 mb-4">// {group.title}</h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08, boxShadow: "0 0 15px rgba(245, 176, 39, 0.6)" }}
                  className="px-4 py-2 bg-[#2a2a2a] text-[var(--color-1)] font-medium rounded-lg cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
