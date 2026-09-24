import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import cv from "../assets/CV.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0d0d0d]/90"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-10 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <p className="font-script text-3xl md:text-4xl text-[var(--color-1)] -rotate-2">Hi, I'm</p>
          <h1 className="font-display mt-2 text-[clamp(4.5rem,13vw,9.5rem)]">
            <span className="block text-white">Sergio</span>
            <span className="block text-[var(--color-1)]">Severiche</span>
          </h1>
          {/* Trazo manuscrito bajo el nombre */}
          <svg viewBox="0 0 300 20" className="w-48 md:w-72 -mt-1" aria-hidden="true">
            <path d="M3 14 C 60 4, 140 4, 200 10 S 280 16, 297 6" fill="none" stroke="var(--color-1)" strokeWidth="4" strokeLinecap="round" />
          </svg>

          <div
            className="mt-6 flex items-end justify-between gap-6 border-t border-white/15 pt-4"
            style={{ fontFamily: "var(--font-code)" }}
          >
            <p className="text-lg md:text-xl font-semibold text-white">
              Full Stack Developer
              <span className="block text-gray-400 text-base font-normal">React · Node.js · FastAPI · SQL</span>
            </p>
            <span className="font-display text-4xl md:text-5xl text-white/90">2026</span>
          </div>

          <p className="mt-6 max-w-xl text-gray-300" style={{ fontFamily: "var(--font-code)" }}>
            Systems Engineer (coursework completed) building real software for real clients — from the interface
            to the database.
          </p>

          <div className="mt-8 flex flex-wrap gap-4" style={{ fontFamily: "var(--font-code)" }}>
            <a
              href={cv}
              download="CV-Sergio-Severiche.pdf"
              className="px-6 py-3 bg-[var(--color-1)] text-[#121212] font-semibold rounded-full shadow-lg hover:bg-white transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-white/30 text-white font-semibold rounded-full hover:border-[var(--color-1)] hover:text-[var(--color-1)] transition"
            >
              View projects
            </a>
          </div>
        </motion.div>

        {/* Foto a color con bloque de acento desplazado detrás */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:col-span-5 flex justify-center"
        >
          <div className="relative w-64 md:w-full max-w-sm aspect-[4/5]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 bg-[var(--color-1)] rounded-2xl"></div>
            <img
              src={profile}
              alt="Portrait of Sergio Severiche"
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <span className="absolute -bottom-4 -left-4 bg-[#0d0d0d] border border-white/15 rounded-full px-4 py-2 text-sm text-white shadow-lg"
              style={{ fontFamily: "var(--font-code)" }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 align-middle"></span>
              Open to work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
