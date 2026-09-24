import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const stats = [
  { value: "5+", label: "years building software" },
  { value: "500+", label: "hours of specialized study" },
  { value: "100%", label: "data goals met (UdeC & Alcaldía)" },
];

const education = [
  {
    title: "Systems Engineering",
    place: "Universidad de Cartagena",
    period: "2021 – 2026 · Coursework completed",
    detail: "All coursework completed, degree pending. Focus on software architecture, information security and IT project management.",
  },
  {
    title: "English B1/B2",
    place: "Centro Colombo Americano",
    period: "2025 – Present",
    detail: "Comfortable reading complex technical documentation.",
  },
  {
    title: "Intensive training",
    place: "Java (+155 h) · Python (+114 h)",
    period: "Online",
    detail: "Full Stack with Generative AI, FastAPI, React and Flask.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white px-6 py-20"
      style={{ fontFamily: "var(--font-code)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-1)] text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed text-center"
      >
        I'm Sergio Severiche, a Full Stack Developer and founder of GOLDEN, from Cartagena, Colombia.
        I build real web and desktop solutions for clients — from interface design to data modeling and
        deployment — with React, Node.js, FastAPI and databases like MySQL, SQLite and Supabase. I care about
        clean code, pixel-perfect responsive design and personal data protection (Habeas Data, Law 1581).
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full text-center"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="border border-[#F5B027]/20 rounded-xl py-6 px-4">
            <p className="text-4xl font-bold text-[var(--color-1)]">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 grid gap-6 md:grid-cols-3 max-w-5xl w-full"
      >
        {education.map((item) => (
          <div key={item.title} className="bg-[#1f1f1f] rounded-xl p-6">
            <p className="text-sm text-[var(--color-1)]">{item.period}</p>
            <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.place}</p>
            <p className="mt-3 text-gray-300 text-sm leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col md:flex-row gap-6 items-center text-[var(--color-1)]"
      >
        <a href="mailto:sergioseveriche1321@hotmail.com" className="flex items-center gap-2 hover:underline">
          <EnvelopeIcon className="w-6 h-6" />
          <span>sergioseveriche1321@hotmail.com</span>
        </a>
        <a href="tel:+573152157034" className="flex items-center gap-2 hover:underline">
          <PhoneIcon className="w-6 h-6" />
          <span>(+57) 315 215 7034</span>
        </a>
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-6 h-6" />
          <span>Cartagena, Colombia</span>
        </div>
      </motion.div>
    </section>
  );
}
