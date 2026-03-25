function CertificateCard({ title }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#070B14] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">
      
      {/* Purple Accent Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 opacity-90" />

      {/* Neon Glow Background */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Shine Sweep */}
      <div className="pointer-events-none absolute -left-40 top-0 h-full w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />

      {/* Content */}
      <p className="relative z-10 text-white/85 font-medium leading-relaxed">
        {title}
      </p>
    </div>
  );
}


export default function Certificates() {
  return (
    <section id="certs" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(59,130,246,0.10)]">
        
        <div className="max-w-3xl">
          <p className="text-white/60 text-sm">Certificates</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-blue-400">
            Certifications & Achievements
          </h2>
          <p className="mt-3 max-w-1xl text-white/70 leading-relaxed">
            Academic recognition, competitions, and certified learning milestones.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* Academic */}
          <div className="space-y-4">
            <p className="text-sm text-white/50">Academic & Recognition</p>
            <CertificateCard title="SLIIT Faculty of Computing Dean’s List — Year 1 Semester 2" />
            <CertificateCard title="Emerging Marketer — Legacy 2025 (AIESEC in SLIIT) — Nominee" />
          </div>

          {/* Competitions */}
          <div className="space-y-4">
            <p className="text-sm text-white/50">Competitions & Awards</p>
            <CertificateCard title="ACCA Escape the Challenge — Special Recognition & Participation Award (2022)" />
            <CertificateCard title="3rd Place — Advertisement Competition, Commerce Day (Royal College)" />
          </div>

          {/* English */}
          <div className="space-y-4">
            <p className="text-sm text-white/50">English & Communication</p>
            <CertificateCard title="British Council Key English Test (KET) — Pass with Merit (2016)" />
            <CertificateCard title="CALSDA — Speech, Drama & Communication Skills" />
          </div>

          {/* Music */}
          <div className="space-y-4">
            <p className="text-sm text-white/50">Music</p>
            <CertificateCard title="IWMS — Music Theory & Practical Examinations" />
          </div>

        </div>
      </div>
    </section>
  );
}

