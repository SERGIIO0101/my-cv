import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "PHP",
    "MySQL", "PostgreSQL", "Python", "Django", "TailwindCSS",
    "Git", "Power BI", "Excel"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-[#1a1a1a] text-white px-6 py-20"
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(245, 176, 39, 0.6)" }}
            className="px-5 py-3 bg-[#2a2a2a]/80 text-[var(--color-1)] font-medium rounded-lg shadow-md cursor-default transition-all"
            style={{ fontFamily: "var(--font-code)" }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

