import React from "react";

function Navbar() {
  return (
    <nav className="bg-[var(--color-nav)] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <a href="#home" className="shrink-0 text-[var(--color-1)] font-bold text-xl" style={{ fontFamily: "var(--font-code)" }}>&lt;Sergio /&gt;</a>
          <ul className="flex gap-4 md:gap-6 overflow-x-auto whitespace-nowrap text-sm md:text-base">
            <li><a href="#home" className="text-white hover:text-[var(--color-1)]">Home</a></li>
            <li><a href="#about" className="text-white hover:text-[var(--color-1)]">About</a></li>
            <li><a href="#experience" className="text-white hover:text-[var(--color-1)]">Experience</a></li>
            <li><a href="#skills" className="text-white hover:text-[var(--color-1)]">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-[var(--color-1)]">Projects</a></li>
            <li><a href="#blog" className="text-white hover:text-[var(--color-1)]">Certificates</a></li>
          </ul>
      </div>
    </nav>

  );
}

export default Navbar;
