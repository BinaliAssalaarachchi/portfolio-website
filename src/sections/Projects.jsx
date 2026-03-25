const projects = [
  {
    title: "Travel Itinerary Planning & Vehicle Booking System",
    meta: "Year 2 Semester 2 • Ongoing",
    stack: ["React.js", "Python (Flask)", "MySQL", "API Integration"],
    desc:
      "A full-stack system for generating travel itineraries and enabling vehicle booking through an integrated workflow.",
    image: "/projects/travel.jpg",
    repo: "#", // ✅ use "#" not "Coming Soon"
  },
  {
    title: "Student Performance Prediction & Customized Study Schedule Generation",
    meta: "BCS PGD • Individual • Completed & Passed",
    stack: ["Python (Django)", "Scikit-learn", "Flutter", "MySQL", "API Integration"],
    desc:
      "Predicts student performance and generates a personalized study schedule using an ML model + backend APIs.",
    image: "/projects/student.png",
    repo: "https://github.com/BinaliAssalaarachchi/student-performance-prediction",
  },
  {
    title: "Payment Module & Database — Laundry Management System",
    meta: "Year 2 Semester 1 • Group Project",
    stack: ["Java", "MySQL", "SSMS"],
    desc:
      "Designed and implemented the payment module and database layer as part of a larger laundry management system.",
    image: "/projects/laundry.png",
    repo: "https://github.com/BinaliAssalaarachchi/Laundry-Management-System",
  },
  {
    title: "Heart Disease Prediction (Machine Learning Model)",
    meta: "Year 2 Semester 1 • AI/ML • Group Project",
    stack: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    desc:
      "Built a machine learning model to predict heart disease risk using medical attributes, focusing on model training, evaluation, and result interpretation.",
    image: "/projects/heart.png",
    repo: "https://github.com/BinaliAssalaarachchi/Heart-Disease-Prediction",
  },
  {
    title: "Order Management Component — Inventory Management System",
    meta: "Year 1 Semester 2 • Group Project",
    stack: ["Java", "OOP Principles"],
    desc:
      "Built an order management component with strong object-oriented design and clean modular structure.",
    image: "/projects/order.jpg",
    repo: "#", // ✅ no code yet
  },
  {
    title: "IoT Water Level Management System",
    meta: "Year 1 Semester 1 • Group Project",
    stack: ["Arduino", "Sensors", "IoT Concepts"],
    desc:
      "An IoT-based system to monitor and manage water levels using sensors and Arduino-based control logic.",
    image: "/projects/iot.jpeg",
    repo: "https://github.com/BinaliAssalaarachchi/IoT-Water-Level-Management-System",
  },
  {
    title: "Network Setup using Cisco",
    meta: "Year 1 Semester 1 • Group Project",
    stack: ["Cisco Packet Tracer", "Networking Fundamentals"],
    desc:
      "Planned and simulated a network setup using Cisco Packet Tracer, applying core networking concepts.",
    image: "/projects/cisco.jpg",
    repo: "https://github.com/BinaliAssalaarachchi/network-setup-cisco",
  },
];

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(59,130,246,0.10)]">

        <div className="max-w-3xl">
          <p className="text-white/60 text-sm">Projects</p>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-blue-400">
            Projects That Power My AI Journey
          </h2>

          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            A snapshot of academic and professional learning projects, ordered as listed in my CV.
            Each includes a demo image and repository link.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 transition hover:border-blue-500/25 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            >

              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden border-b border-white/10 bg-black/30">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-90 transition group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs text-white/50">{p.meta}</span>
                </div>

                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {/* FIXED BUTTON SECTION */}
                <div className="mt-5 flex items-center justify-between">
                  {p.repo === "#" ? (
                    <span className="text-sm font-semibold text-yellow-400">
                      🚧 Coming Soon
                    </span>
                  ) : (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-blue-300 hover:text-blue-200"
                    >
                      GitHub Repo →
                    </a>
                  )}

                  <span className="text-xs text-white/40 group-hover:text-white/50">
                    View details
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}