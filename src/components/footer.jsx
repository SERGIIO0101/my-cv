import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Izquierda: Nombre y año */}
        <span className="font-semibold">Sergio Severiche © 2025</span>

        {/* Derecha: Iconos */}
        <div className="flex gap-4">
          <a
            href="https://github.com/SERGIIO0101"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5B027] transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/severicheguerrerosergio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5B027] transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
