import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiDjango } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "SIE - Academic Platform",
      description:
        "Web system with multi-role login, grade management, and dashboards for students, teachers, and administrators.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"],
      link: "#",
    },
    {
      title: "EstetikApp",
      description:
        "Appointment booking app for beauty centers with carousel, forms, and local storage.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "#",
    },
    {
      title: "FacturaFácil",
      description:
        "Invoice generator with PDF export, modern UI, validations, and local storage.",
      tech: ["JavaScript", "TailwindCSS"],
      link: "#",
      status: "En proceso",
    },
    {
      title: "Parking Monitoring System",
      description:
        "Model for smart parking management, access traceability, and payments.",
      tech: ["Java", "UML", "SQL"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#121212] px-6 py-20 flex flex-col items-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-1)] mb-12"
        style={{ fontFamily: "var(--font-code)" }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-[var(--color-nav)]/20 border border-[var(--color-1)] rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer"
          >
            {project.status && (
              <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-full">
                {project.status}
              </span>
            )}

            <div>
              <h3 className="text-xl font-semibold text-[var(--color-1)]">{project.title}</h3>
              <p className="mt-2 text-gray-200">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[var(--color-1)]/20 text-[var(--color-1)] text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-[var(--color-1)] font-semibold hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
