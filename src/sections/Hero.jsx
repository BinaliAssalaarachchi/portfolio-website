import AIAssistant from "../components/AIAssistant";

export default function Hero() {
  return (
    <section id="home" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-14 shadow-[0_0_80px_rgba(59,130,246,0.12)]">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-white/60 text-sm">
              Initializing portfolio…
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Binali Assalaarachchi
            </h1>

            <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
              AI-focused IT undergraduate engineering intelligent systems,
              training predictive models, and building full-stack applications
              with modern technologies.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-blue-400 transition text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — HOLOGRAM PROFILE */}
          <div className="relative flex justify-center items-center">

            {/* Glow Background */}
            <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Rotating Ring */}
            <div className="absolute w-64 h-64 border-2 border-blue-500/40 rounded-full animate-rotateSlow"></div>

            {/* Photo Container */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.5)]">
              
              <img
                src="/me.jpg"
                alt="Binali"
                className="w-full h-full object-cover"
              />

              {/* Scan Line */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-scan"></div>
            </div>

          </div>
        </div>

        {/* AI Assistant Below */}
        <div className="mt-16">
          <AIAssistant />
        </div>

      </div>
    </section>
  );
}








