import { useMemo, useState } from "react";
import robot from "../assets/robot.png";

export default function AIAssistant() {

  const presets = useMemo(
    () => [
      { label: "Show my AI/ML project", q: "ai project" },
      { label: "What tech do you use?", q: "tech stack" },
      { label: "Best projects to view first", q: "best projects" },
    ],
    []
  );

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Hi! I'm Binali's AI portfolio assistant. Ask me about projects, skills, AI work, or certifications."
  );

  const [reacting, setReacting] = useState(false);

  function triggerRobotReact() {
    setReacting(true);
    window.setTimeout(() => setReacting(false), 700);
  }

  // smooth scroll function
  function goTo(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function respond(qRaw) {
    const q = (qRaw || "").trim();
    if (!q) return;

    triggerRobotReact();
    const text = q.toLowerCase();

    const intents = [
      {
        keywords: ["ai", "ml", "machine", "model"],
        section: "projects",
        answer:
          "Here is my AI/ML project: Student Performance Prediction with Study Schedule generation. Scroll to the Projects section to explore it."
      },
      {
        keywords: ["project", "work", "portfolio", "build"],
        section: "projects",
        answer:
          "Scrolling to my Projects section where you can explore my AI system, Travel Itinerary Planner, and Java modules."
      },
      {
        keywords: ["best", "recommend", "first"],
        section: "projects",
        answer:
          "I recommend starting with my AI project, then the Travel Itinerary Planning system, and finally the Java-based modules."
      },
      {
        keywords: ["tech", "stack", "skill", "technology", "tools"],
        section: "skills",
        answer:
          "My main technologies include React, Python, Flask, MySQL, Java, and C. I'm particularly interested in AI-driven systems."
      },
      {
        keywords: ["certificate", "cert", "achievement"],
        section: "certificates",
        answer:
          "Here are my certifications related to technology and AI learning."
      },
      {
        keywords: ["about", "background", "who are you"],
        section: "about",
        answer:
          "Scrolling to the About section where you can learn more about my background and interests in AI and software engineering."
      },
      {
        keywords: ["contact", "hire", "reach", "email"],
        section: "contact",
        answer:
          "You can reach me through the Contact section below. I'm open to collaborations and opportunities."
      }
    ];

    for (const intent of intents) {
      if (intent.keywords.some((k) => text.includes(k))) {
        goTo(intent.section);
        setAnswer(intent.answer);
        return;
      }
    }

    setAnswer(
      "I can help you explore my portfolio. Try asking about projects, skills, AI work, or certifications."
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#070B14] p-6 shadow-[0_0_40px_rgba(59,130,246,0.16)]">

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">

            <div
              className={[
                "grid h-10 w-10 place-items-center rounded-full border border-blue-500/25 bg-black/30",
                reacting ? "animate-robotReact shadow-[0_0_25px_rgba(59,130,246,0.45)]" : ""
              ].join(" ")}
            >
              <img src={robot} alt="Robot" className="h-8 w-8 object-contain" />
            </div>

            <div>
              <p className="font-semibold text-blue-300 tracking-wide leading-tight">
                AI Assistant
              </p>
              <p className="text-xs text-white/45">
                Prototype • rule-based demo
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 text-xs text-white/45">
            <span
              className={[
                "h-2 w-2 rounded-full bg-blue-400",
                reacting ? "animate-pulse" : ""
              ].join(" ")}
            />
            online
          </span>
        </div>

        {/* Answer bubble */}
        <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
          <p className="text-sm text-white/75 leading-relaxed">{answer}</p>
        </div>

        {/* Preset buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => respond(p.q)}
              className="rounded-full border border-blue-500/25 bg-blue-500/5 px-3 py-1 text-xs text-blue-200 hover:bg-blue-500/10 hover:border-blue-400 transition"
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="mt-5 flex gap-2">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                respond(question);
                setQuestion("");
              }
            }}
            placeholder="Ask about projects, skills, AI..."
            className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/35 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20"
          />

          <button
            onClick={() => {
              respond(question);
              setQuestion("");
            }}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500 transition shadow-[0_0_18px_rgba(59,130,246,0.35)]"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}