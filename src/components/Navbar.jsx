import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="navbar-container max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="logo">Hello World!!</h1>

        {/* Links */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
