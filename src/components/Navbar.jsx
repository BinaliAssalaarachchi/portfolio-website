import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "extracurricular", label: "Beyond Code" },
  { id: "certs", label: "Certificates" },
];

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

        {/* Left title */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-blue-300/90">Portfolio</span>
          <span className="text-white/30">•</span>
          <span className="font-semibold tracking-wide">
            Binali Assalaarachchi
          </span>
        </div>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <nav className="flex flex-col items-center gap-4 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-white/80 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

