function SkillTag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
      {children}
    </span>
  );
}

function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 hover:border-blue-500/25 transition">
      
      {/* Larger Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-white">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s) => (
          <SkillTag key={s}>{s}</SkillTag>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(59,130,246,0.10)]">
        
        <div className="max-w-3xl">
          <p className="text-white/60 text-sm">Skills</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-blue-400">
            Skills & Strengths
          </h2>
          <p className="mt-3 max-w-1xl text-white/70 leading-relaxed">
            A combination of technical expertise and professional strengths developed through academic projects and leadership experiences.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          
          <SkillCard
            title="Programming & Software Development"
            skills={["Python", "Java", "C"]}
          />

          <SkillCard
            title="Artificial Intelligence & Machine Learning"
            skills={["Python", "Scikit-learn", "Django", "Flask"]}
          />

          <SkillCard
            title="Database Systems"
            skills={["MySQL"]}
          />

          <SkillCard
            title="Web Technologies"
            skills={["HTML", "CSS"]}
          />

          <SkillCard
            title="Networking Fundamentals"
            skills={["Computer Networking Basics"]}
          />

          <SkillCard
            title="Professional & Leadership Skills"
            skills={[
              "Teamwork & Collaboration",
              "Time Management",
              "Problem Solving",
              "Leadership & Responsibility",
              "Presentation Skills",
            ]}
          />
        </div>

      </div>
    </section>
  );
}

