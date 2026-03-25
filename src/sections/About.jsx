export default function About() {
  return (
    <section id="about" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(59,130,246,0.10)]">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="text-white/60 text-sm">About</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-blue-400">
              Building intelligent systems with a developer-first mindset
            </h2>
            <p className="mt-3 max-w-1xl text-white/70 leading-relaxed">
              I’m an IT undergraduate specializing in Artificial Intelligence, focused on
              engineering practical solutions from predictive models to full-stack applications.
              Alongside academics, I’ve taken leadership roles in AIESEC and contributed to
              volunteering initiatives, strengthening my coordination, teamwork, and execution
              skills.
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/60">Current Focus</p>
            <p className="mt-2 font-semibold">BSc (Hons) IT • AI Specialization</p>
            <p className="mt-2 text-sm text-white/70">
              Growing in AI + full-stack development through academic projects and hands-on builds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/60">Professional Learning</p>
            <p className="mt-2 font-semibold">BCS HEQ</p>
            <p className="mt-2 text-sm text-white/70">
              Covered core computing modules including programming paradigms,
              database management systems, management information systems (MIS),
              systems analysis & design, and software development fundamentals.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-white/60">Leadership & Impact</p>
            <p className="mt-2 font-semibold">AIESEC + Leo Club</p>
            <p className="mt-2 text-sm text-white/70">
              Marketing leadership, campaign coordination, and community volunteering experiences.
            </p>
          </div>
        </div>

        {/* Quick tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "React",
            "Python",
            "Java",
            "MySQL / SQL",
            "Flask / Django",
            "Team Leadership",
            "Graphic Designing & Marketing",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
