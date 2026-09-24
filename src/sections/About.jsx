import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const milestones = [
  { value: "5+", label: "Years building software" },
  { value: "7", label: "Featured projects" },
  { value: "500+", label: "Hours of specialized study" },
  { value: "100%", label: "Data goals met · UdeC & Alcaldía" },
];

const education = [
  {
    title: "Systems Engineering",
    place: "Universidad de Cartagena",
    period: "2021 – 2026 · Coursework completed",
  },
  {
    title: "English B1/B2",
    place: "Centro Colombo Americano",
    period: "2025 – Present",
  },
  {
    title: "Java (+155 h) · Python (+114 h)",
    place: "Full Stack with Generative AI, FastAPI, React and Flask",
    period: "Intensive training",
  },
];

const stack = ["React", "Node.js", "FastAPI", "PHP", "MySQL", "SQLite", "Supabase", "Tailwind", "Electron", "Python"];

// Animación compartida para cada tarjeta del bento
const card = (delay) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
  viewport: { once: true },
});

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#121212] text-white px-6 py-16 md:py-24"
      style={{ fontFamily: "var(--font-code)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div {...card(0)} className="mb-12">
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl">
            About <span className="text-[var(--color-1)]">Me</span>
          </h2>
          <p className="font-script text-3xl text-[var(--color-1)] -rotate-1 mt-1">Think. Build. Deliver.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-6">
          {/* Bio */}
          <motion.div {...card(0.1)} className="bento-card md:col-span-4">
            <p className="text-sm text-gray-400">// who I am</p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">
              I'm a <span className="text-[var(--color-1)]">Full Stack Developer</span> and founder of GOLDEN, from
              Cartagena, Colombia. I build real web and desktop solutions for clients — from interface design to data
              modeling and deployment.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              I care about clean code, pixel-perfect responsive design and personal data protection (Habeas Data, Law
              1581).
            </p>
          </motion.div>

          {/* Cifras */}
          <motion.div {...card(0.2)} className="bento-card md:col-span-2 md:row-span-2 bg-[#F5B027] border-none text-[#121212]">
            <p className="font-script text-3xl font-bold">Milestones</p>
            <ul className="mt-4 space-y-5">
              {milestones.map((m) => (
                <li key={m.label}>
                  <p className="font-display text-5xl">{m.value}</p>
                  <p className="text-sm font-semibold">{m.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stack */}
          <motion.div {...card(0.3)} className="bento-card md:col-span-2">
            <p className="text-sm text-gray-400">// daily stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="text-sm px-3 py-1 rounded-full bg-white/5 text-[var(--color-1)]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contacto */}
          <motion.div {...card(0.35)} className="bento-card md:col-span-2">
            <p className="text-sm text-gray-400">// contact</p>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:sergioseveriche1321@hotmail.com" className="flex items-center gap-3 hover:text-[var(--color-1)] break-all">
                <EnvelopeIcon className="w-5 h-5 shrink-0 text-[var(--color-1)]" />
                sergioseveriche1321@hotmail.com
              </a>
              <a href="tel:+573152157034" className="flex items-center gap-3 hover:text-[var(--color-1)]">
                <PhoneIcon className="w-5 h-5 shrink-0 text-[var(--color-1)]" />
                (+57) 315 215 7034
              </a>
              <p className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 shrink-0 text-[var(--color-1)]" />
                Cartagena, Colombia
              </p>
              <div className="flex gap-4 pt-1">
                <a href="https://github.com/SERGIIO0101" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--color-1)]">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/severicheguerrerosergio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-1)]">
                  <FaLinkedin size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div {...card(0.4)} className="bento-card md:col-span-6">
            <p className="text-sm text-gray-400">// education</p>
            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {education.map((item) => (
                <div key={item.title} className="border-l-2 border-[var(--color-1)] pl-4">
                  <p className="text-xs text-[var(--color-1)]">{item.period}</p>
                  <h3 className="mt-1 font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.place}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
