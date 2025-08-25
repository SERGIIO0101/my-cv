import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import cv from "../assets/CV.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#F5B027]/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-1)]">
            Sergio Severiche
          </h1>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
            Software Developer <span className="text-[var(--color-1)]">Junior</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
            Systems Engineering Student · Web Developer · Data Enthusiast
          </p>
          <a
            href={cv}
            download="CV-Sergio-Severiche.pdf"
            className="mt-6 inline-block px-6 py-3 bg-[var(--color-1)] text-[var(--color-2)] font-semibold rounded-lg shadow-lg hover:bg-[var(--color-5)] transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Foto con mancha detrás */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative home-photo-container">
            <div className="background-splash"></div>
            <motion.img
              src={profile}
              alt="Portrait of Sergio Severiche"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[var(--color-1)] shadow-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

