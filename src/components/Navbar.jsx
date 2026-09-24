import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Certificates" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  // Cierra el menú y luego desplaza; si se hace a la vez, el cambio de altura cancela el scroll suave
  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    }, 0);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-[#1f1f1f]/90 backdrop-blur-md border-b border-white/5"
      style={{ fontFamily: "var(--font-code)" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <a href="#home" className="shrink-0 text-[var(--color-1)] font-bold text-xl" onClick={() => setOpen(false)}>
          &lt;Sergio /&gt;
        </a>

        {/* Escritorio */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-white hover:text-[var(--color-1)]">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Celular */}
        <button
          type="button"
          className="md:hidden -mr-2 p-2 text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col pt-2 pb-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => goTo(e, link.href)}
                className="block py-3 text-lg text-white border-b border-white/5 active:text-[var(--color-1)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
