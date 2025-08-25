import { motion } from "framer-motion";
import PythonCert from "../assets/certificates/python_total.pdf";
import pythonImg from "../assets/certificates/image/python.png";
import officeImg from "../assets/certificates/image/ofimatica.png";
import wordpressImg from "../assets/certificates/image/wordpress.png";
import marketingImg from "../assets/certificates/image/marketing.png";
import learningImg from "../assets/certificates/image/learning.png";
import inglesImg from "../assets/certificates/image/ingles.png";
import powerbiImg from "../assets/certificates/image/powerbi.png";
import eduversioImg from "../assets/certificates/image/Eduversio.png";
import utbImg from "../assets/certificates/image/UTB.png";

export default function Blog() {
  const posts = [
    { title: "Python Total - Advanced Programmer", date: "Apr 2025", excerpt: "Udemy - Federico Garay, 30.5h", link: PythonCert, img: pythonImg },
    { title: "Power BI Course", date: "2025", excerpt: "Acelerador IA + Power BI", link: null, img: powerbiImg },
    { title: "WordPress Development", date: "2025", excerpt: "Raiola - WordPress course", link: null, img: wordpressImg },
    { title: "Digital Marketing", date: "2025", excerpt: "Neetwork - Online marketing", link: null, img: marketingImg },
    { title: "Cybersecurity", date: "2025", excerpt: "UTB - Fundamentals", link: null, img: utbImg },
    { title: "Project Management", date: "2025", excerpt: "EDUVERSIO - Project methodology", link: null, img: eduversioImg },
    { title: "English Language", date: "2025", excerpt: "Colombo Americano - B2 level", link: null, img: inglesImg },
    { title: "Office Automation", date: "2025", excerpt: "Coursera - University of Barcelona", link: null, img: officeImg },
    { title: "Learning Theories & Pedagogical Models", date: "2025", excerpt: "Politécnico de Colombia", link: null, img: learningImg },
  ];

  return (
    <section id="blog" className="min-h-screen px-6 py-20 flex flex-col items-center bg-[#121212] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-[var(--color-1)] mb-12"
        style={{ fontFamily: "var(--font-code)" }}
      >
        Certificates & Courses
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(245,176,39,0.6)" }}
            className="relative bg-[var(--color-nav)]/30 border border-[var(--color-1)] rounded-xl p-6 flex flex-col justify-between transition-all cursor-pointer group"
          >
            <img src={post.img} alt={post.title} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-1)]">{post.title}</h3>
            <p className="mt-1 text-gray-300 text-sm">{post.date}</p>
            <p className="mt-3 text-gray-200">{post.excerpt}</p>

            {post.link ? (
              <a
                href={post.link}
                download
                className="mt-5 inline-block bg-[var(--color-1)] text-[var(--color-bg)] font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-[var(--color-5)] transition"
              >
                Download Certificate
              </a>
            ) : (
              <div className="relative mt-5 group">
                <span className="inline-block bg-gray-700 text-gray-200 font-semibold px-4 py-2 rounded-lg shadow-lg cursor-not-allowed opacity-80 group-hover:opacity-100 transition">
                  Coming Soon
                </span>
                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Certificate not available yet
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
