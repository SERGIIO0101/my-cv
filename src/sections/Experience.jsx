import { motion } from "framer-motion";

const jobs = [
  {
    role: "Technical Consultant & Web Developer",
    company: "FreshHidrojacuzz",
    place: "Freelance · Medellín",
    period: "Jan 2026 – Present",
    points: [
      "Led the design, development and administration of the corporate website, focused on UX/UI and the brand's digital presence.",
      "Designed and built custom software with its own database to systematize the company's internal processes.",
      "Provided strategic technical advice as an independent contractor, aligning technology architecture with business goals.",
    ],
  },
  {
    role: "Founder, Development Lead & Software Consultant",
    company: "GOLDEN",
    place: "Independent",
    period: "Jun 2021 – Present",
    points: [
      "Built DevGuard 4.0, automated pricing software with database integration for budget calculation.",
      "Turned business requirements into working solutions with React, Tailwind and PHP, keeping code clean and scalable.",
      "Developed the full website for author Jenny Montoya (#SomosDelMundo) with a high-fidelity responsive interface.",
    ],
  },
  {
    role: "Biometric Authentication Specialist",
    company: "Prosegur Procesos S.A.S",
    place: "Cartagena",
    period: "Jan 2026 – Jun 2026",
    points: [
      "On-site technical support and operation of biometric kits at polling stations during mission-critical election days.",
      "Ran identity capture and validation protocols under Colombia's personal data protection law (Law 1581 of 2012).",
      "Reported milestones and kept critical hardware in good condition, ensuring activities ran without incidents.",
    ],
  },
  {
    role: "Data Analyst & Field Researcher",
    company: "Universidad de Cartagena & Alcaldía",
    place: "Cartagena",
    period: "Oct 2025 – Jan 2026",
    points: [
      "Captured and validated field data on productive transformation and the labor market, meeting 100% of the inter-administrative contract goals.",
      "Selected for the technical team of the Cartagena strategic studies project for technical excellence (CILRS 095-01-2026).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#1a1a1a] px-6 py-24 text-white">
      <div className="max-w-4xl mx-auto" style={{ fontFamily: "var(--font-code)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm text-gray-400">// where I've worked</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-1)]">Experience</h2>
        </motion.div>

        <ol className="relative border-l border-[#F5B027]/30">
          {jobs.map((job, index) => (
            <motion.li
              key={job.role + job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-[var(--color-1)]" />
              <p className="text-sm text-[var(--color-1)]">{job.period}</p>
              <h3 className="mt-1 text-xl md:text-2xl font-bold">{job.role}</h3>
              <p className="text-gray-400">
                {job.company} · {job.place}
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[var(--color-1)]">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
