import { useEffect, useMemo, useState } from "react";

export default function Extracurricular() {
  const targets = useMemo(
    () => ({
      campaigns: 10,
      designs: 100,
      events: 3,
    }),
    []
  );

  const [counts, setCounts] = useState({
    campaigns: 0,
    designs: 0,
    events: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        campaigns:
          prev.campaigns < targets.campaigns
            ? prev.campaigns + 1
            : targets.campaigns,
        designs:
          prev.designs < targets.designs
            ? prev.designs + 5
            : targets.designs,
        events:
          prev.events < targets.events ? prev.events + 1 : targets.events,
      }));
    }, 40);

    return () => clearInterval(interval);
  }, [targets]);

  return (
    <section id="extracurricular" className="mt-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-12 shadow-[0_0_80px_rgba(139,92,246,0.12)]">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-white/60 text-sm">
            Leadership • Creativity • Community
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Beyond Code
          </h2>

          <p className="mt-5 text-white/70 leading-relaxed">
            My journey extends beyond technical development. Through leadership
            roles, creative initiatives, and community engagement, I’ve developed
            strategic thinking, coordination, and execution skills.
          </p>
        </div>

        {/* Counters */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Counter label="Campaigns contributed" value={counts.campaigns} />
          <Counter label="Design assets created" value={counts.designs} />
          <Counter label="Events supported" value={counts.events} />
        </div>

        {/* Content */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {/* AIESEC boxed */}
          <div className="group relative rounded-2xl border border-white/10 bg-black/25 p-7 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] transition overflow-hidden">
            

            <h3 className="text-2xl font-semibold text-white mb-6">AIESEC</h3>

            <div className="relative pl-6 border-l border-blue-500/40 space-y-10">
              <TimelineItem
                title="OCVP Marketing – Kokila Rawaya"
                desc="Led marketing strategy, digital campaigns, and execution planning."
                tags={["Campaign Strategy", "Team Coordination", "Content Planning"]}
              />

              <TimelineItem
                title="OGTe Campaign Coordinator"
                desc="Managed outbound campaigns and cross-functional communication."
                tags={["Digital Marketing", "Branding", "Outreach"]}
              />

              <TimelineItem
                title="Marketing Team Leader"
                desc="Supervised marketing members and optimized creative output."
                tags={["Leadership", "Performance Tracking", "Creative Direction"]}
              />
            </div>
          </div>

          {/* Right side cards */}
          <div className="space-y-8">
            <HoverCard
              title="GraphicGurus"
              desc="Founded and managed a creative initiative delivering digital marketing visuals and branding assets."
              tags={["Branding", "Social Media", "Visual Identity"]}
            />

            <HoverCard
              title="Leo Club of SLIIT"
              desc="Contributed to social impact initiatives and community-driven projects."
              tags={["Community Service", "Teamwork", "Event Coordination"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 text-center hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition">
      <p className="text-4xl font-bold text-blue-300">
        {value}
        <span className="text-purple-400">+</span>
      </p>
      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  );
}

function TimelineItem({ title, desc, tags }) {
  return (
    <div className="relative">
      <div className="absolute -left-[14px] top-2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

      <h4 className="text-white font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-white/70">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function HoverCard({ title, desc, tags, image }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-black/25 p-7 transition hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden">
      

      <h4 className="text-white text-xl font-semibold">{title}</h4>
      <p className="mt-3 text-sm text-white/70">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}



