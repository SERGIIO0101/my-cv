import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectArt from "../components/ProjectArt";

// Para mostrar una captura, importa la imagen y asígnala en `image`
// (ej: import aviImg from "../assets/projects/avi.png").
// Si un proyecto tiene demo publicada, agrega su URL en `demo`.
const projects = [
  {
    title: "MiGestorLocal",
    art: "desktop",
    category: "Desktop app · Local businesses",
    description:
      "Management software for local businesses: order tracking, invoicing with PDF generation and automatic email delivery.",
    tech: ["Electron", "React", "SQLite"],
  },
  {
    title: "Fresh Hidrojacuzz",
    art: "mail",
    category: "Desktop app · Client project",
    description:
      "Sales automation system for Fresh Jacuzzis: generates encrypted PDF quotes and sends transactional emails securely through Resend.",
    tech: ["React", "FastAPI", "Python", "TailwindCSS"],
    repo: "https://github.com/SERGIIO0101/fresh-hidrojacuzz-app",
  },
  {
    title: "DevGuard 4.0",
    art: "quote",
    category: "Web app · Own product",
    description:
      "Smart quoting tool for freelance developers: prices projects by hours and complexity, exports technical proposals to PDF and sends summaries via WhatsApp. Includes legal data protection (Law 1581).",
    tech: ["React", "TailwindCSS", "jsPDF"],
    repo: "https://github.com/SERGIIO0101/cotizador-sergio",
  },
  {
    title: "AviSistema",
    art: "dashboard",
    category: "Full stack web app",
    description:
      "Poultry farm management: bird batches, egg and meat production, supply inventory, health records and real-time reports with charts.",
    tech: ["React", "Node.js", "Express", "MySQL", "JWT"],
    repo: "https://github.com/SERGIIO0101/avi_sistema",
  },
  {
    title: "Somos del Mundo",
    art: "website",
    category: "Website · Client project",
    description:
      "Full website for author Jenny Montoya — psychology, migration and graphology — with a high-fidelity responsive interface.",
    tech: ["React", "TailwindCSS"],
    repo: "https://github.com/SERGIIO0101/somos-del-mundo",
  },
  {
    title: "GOLDEN",
    art: "brand",
    category: "Website · Own brand",
    description:
      "Premium brand site for software engineering and design services, with CSS glitch effects, interactive service nodes and a Habeas Data compliance flow.",
    tech: ["React", "TailwindCSS", "Lucide"],
    repo: "https://github.com/SERGIIO0101/golden-web",
  },
  {
    title: "SIE - Academic Platform",
    art: "school",
    category: "Web system",
    description:
      "School platform with multi-role login, grade management and dashboards for students, teachers and administrators.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    repo: "https://github.com/SERGIIO0101/Plataforma_notas",
  },
];

function Cover({ project, number }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  // Ilustración SVG mientras no haya captura
  return (
    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
      <ProjectArt variant={project.art} />
      <span className="absolute top-3 left-4 font-display text-4xl text-white/80 select-none">{number}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#121212] px-6 py-16 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
          style={{ fontFamily: "var(--font-code)" }}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">Selected <span className="text-[var(--color-1)]">Projects</span></h2>
          <p className="font-script text-3xl text-[var(--color-1)] -rotate-1 mt-1">real software, real clients</p>
        </motion.div>

        <div className="flex flex-col gap-14 md:gap-28">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`group grid md:grid-cols-2 gap-5 md:gap-12 items-center ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <a
                  href={project.demo || project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[16/10] overflow-hidden rounded-xl border border-[#F5B027]/30 group-hover:border-[var(--color-1)] transition-colors"
                  aria-label={project.demo || project.repo ? `Open ${project.title}` : undefined}
                >
                  <Cover project={project} number={number} />
                </a>

                <div style={{ fontFamily: "var(--font-code)" }}>
                  <div className="flex items-baseline gap-4 text-sm">
                    <span className="text-[var(--color-1)] font-semibold">{number}</span>
                    <span className="text-gray-400">{project.category}</span>
                  </div>
                  <h3 className="font-display mt-2 text-4xl md:text-6xl text-white group-hover:text-[var(--color-1)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#F5B027]/15 text-[var(--color-1)] text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-6">
                    {project.repo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-white hover:text-[var(--color-1)] transition-colors"
                      >
                        <FaGithub /> Code
                      </a>
                    ) : (
                      <span className="text-gray-500">Private repository</span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[var(--color-1)] hover:underline"
                      >
                        Live demo <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.a
          href="https://github.com/SERGIIO0101?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 inline-flex items-center gap-2 text-[var(--color-1)] font-semibold hover:underline"
          style={{ fontFamily: "var(--font-code)" }}
        >
          See all repositories on GitHub <FiArrowUpRight />
        </motion.a>
      </div>
    </section>
  );
}
