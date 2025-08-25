import React from "react";

function Navbar() {
  return (
    <nav className="bg-[var(--color-nav)] p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-[var(--color-1)] font-bold text-xl">Hello World!!</h1>
          <ul className="flex gap-6">
            <li><a href="#home" className="text-white hover:text-[var(--color-1)]">Home</a></li>
            <li><a href="#about" className="text-white hover:text-[var(--color-1)]">About</a></li>
            <li><a href="#skills" className="text-white hover:text-[var(--color-1)]">Skills</a></li>
            <li><a href="#projects" className="text-white hover:text-[var(--color-1)]">Projects</a></li>
            <li><a href="#blog" className="text-white hover:text-[var(--color-1)]">Blog</a></li>
          </ul>
      </div>
    </nav>

  );
}

export default Navbar;
