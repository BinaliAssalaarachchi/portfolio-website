import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Extracurricular from "./sections/ExtraCurricular";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 pb-24">
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Extracurricular />

        <Certificates />

        <Contact />
      </main>
    </div>
  );
}






