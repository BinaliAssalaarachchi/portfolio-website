import { useMemo, useState } from "react";
import robot from "../assets/robot.png";

export default function AIAssistant() {
  const presets = useMemo(
    () => [
      { label: "Show my AI/ML project", q: "Tell me about your AI/ML project" },
      { label: "What tech do you use?", q: "What is your tech stack?" },
      { label: "Best projects to view first", q: "Which projects should I check first?" },
    ],
    []
  );

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "Hi! I’m your portfolio assistant. Ask me about projects, skills, or my AI work."
  );

  // Robot reaction state
  const [reacting, setReacting] = useState(false);

  function triggerRobotReact() {
    setReacting(true);
    window.setTimeout(() => setReacting(false), 700);
  }

  function respond(qRaw) {
    const q = (qRaw || "").trim();
    if (!q) return;

    triggerRobotReact();

    const text = q.toLowerCase();

    if (text.includes("ai") || text.includes("ml") || text.includes("machine")) {
      setAnswer(
        "My key AI-focused work is the Student Performance Prediction & Study Schedule project. Built with Python + ML, and integrated with backend + database."
      );
      return;
    }

    if (text.includes("tech") || text.includes("stack") || text.includes("tools")) {
      setAnswer(
        "Tech highlights: React (frontend), Python + Flask (backend), MySQL/SQL (databases), plus Java & C from university modules."
      );
      return;
    }

    if (text.includes("first") || text.includes("best") || text.includes("recommend")) {
      setAnswer(
        "Start with: (1) AI project (Student Performance Prediction), (2) Travel Itinerary + Booking system (React + Flask), (3) Java modules (Order/Payment) for SE skills."
      );
      return;
    }

    if (text.includes("contact") || text.includes("hire")) {
      setAnswer("You can reach me from the Contact section below — I’m open to collaboration and opportunities.");
      return;
    }

    setAnswer("Try asking: “Show my AI/ML project” or “What tech do you use?”");
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#070B14] p-6 shadow-[0_0_40px_rgba(59,130,246,0.16)]">
      {/* Tech grid / dots background */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      {/* Scan line */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 animate-scan bg-gradient-to-b from-transparent via-blue-500/10 to-transparent blur-sm" />

      {/* Glow corners */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10">
        {/* Header with robot avatar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* robot avatar */}
            <div
              className={[
                "grid h-10 w-10 place-items-center rounded-full border border-blue-500/25 bg-black/30",
                reacting ? "animate-robotReact shadow-[0_0_25px_rgba(59,130,246,0.45)]" : "",
              ].join(" ")}
            >
              <img
                src={robot}
                alt="Robot"
                className="h-8 w-8 object-contain"
              />
            </div>

            <div>
              <p className="font-semibold text-blue-300 tracking-wide leading-tight">
                AI Assistant
              </p>
              <p className="text-xs text-white/45">Prototype • rule-based demo</p>
            </div>
          </div>

          {/* tiny status dot */}
          <span className="inline-flex items-center gap-2 text-xs text-white/45">
            <span className={["h-2 w-2 rounded-full bg-blue-400", reacting ? "animate-pulse" : ""].join(" ")} />
            online
          </span>
        </div>

        {/* Answer bubble */}
        <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
          <p className="text-sm text-white/75 leading-relaxed">{answer}</p>
        </div>

        {/* Preset chips */}
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

        {/* Input row */}
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


