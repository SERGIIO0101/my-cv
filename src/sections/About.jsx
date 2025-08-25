import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-1)] text-center"
        style={{ fontFamily: "var(--font-code)" }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-6 text-lg md:text-xl max-w-2xl leading-relaxed text-center"
        style={{ fontFamily: "var(--font-code)" }}
      >
        I am Sergio Severiche, a Systems Engineering student and Web Developer from Cartagena, Colombia. 
        I am passionate about creating clean, efficient solutions and learning new technologies that improve processes. 
        I enjoy working on projects that challenge me, from web development and databases to data analysis and automation. 
        Continuously improving my skills and contributing to meaningful projects is my main goal.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-col md:flex-row gap-6 items-center text-[var(--color-1)]"
        style={{ fontFamily: "var(--font-code)" }}
      >
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="w-6 h-6" />
          <span>sergioseveriche1321@hotmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-6 h-6" />
          <span>(+57) 315 - 2157034</span>
        </div>
      </motion.div>
    </section>
  );
}


