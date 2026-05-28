import { useState, useEffect } from "react";

const projects = [
  {
    title: "Driver Dashboard — Travel Itinerary Planning & Vehicle Booking System",
    meta: "Year 2 Semester 2 • Group Project",
    stack: ["React.js", "MySQL", "API Integration", "Python (AI component)"],
    desc:
      "A full-stack system for generating travel itineraries and enabling vehicle booking through an integrated workflow.",
    image: "/projects/travel.jpg",
    gallery: [
      "/projects/travel.jpg",
      "/projects/travel-profile.png",
      "/projects/travel-trips.png",
      "/projects/travel-fleet.png"
    ],
    contributions: [
      "Developed the interactive 'Driver Profile' management screen to handle driver credentials and professional details.",
      "Designed and integrated the 'Trip Assignments' module, allowing drivers to accept or decline bookings in real-time.",
      "Built the 'Your Island Fleet' section displaying available vehicles (Nissan Patrol, Toyota Prius, Van) with a sleek booking layout.",
      "Managed front-end routing, application state, and UI polish using React.js."
    ],
    repo: "https://github.com/BinaliAssalaarachchi/trip-planning-system",
  },
  {
    title: "Driver Dashboard — Travel Planning App (Wonderway)",
    meta: "Year 2 Semester 2 • Group Project",
    stack: ["React Native", "MongoDB", "Frontend/Backend deployment"],
    desc:
      "A cross-platform mobile application providing dynamic travel itinerary planning, real-time tracking, and frontend/backend services.",
    image: "/projects/wonderway-home.png",
    gallery: [
      "/projects/wonderway-home.png",
      "/projects/wonderway-profile.png",
      "/projects/wonderway-trips.png",
      "/projects/wonderway-fleet.png"
    ],
    contributions: [
      "Developed a cross-platform mobile React Native interface branded as 'Wonderway' tailored for Sri Lankan travel routes.",
      "Created the mobile 'Driver Profile' screen for managing Kasun Perera's credentials and verified partner status.",
      "Built the mobile 'Trip Assignments' view featuring LKR pricing and quick accept/decline action buttons.",
      "Implemented the mobile 'Island Fleet' section showcasing transport options (Prius, KDH Luxury Van) with daily rates."
    ],
    repo: "https://github.com/BinaliAssalaarachchi/trip-app",
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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(59,130,246,0.10)]">

        <div className="max-w-4xl">
          <p className="text-white/60 text-sm">Projects</p>

          <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-blue-400">
            Projects That Power My AI Journey
          </h2>

          <p className="mt-4 max-w-none text-white/70 leading-relaxed">
            A snapshot of academic and professional learning projects, ordered as listed in my CV.
            Each includes a demo image and repository link.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/25 transition hover:border-blue-500/25 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)] cursor-pointer"
            >

              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-gradient-to-b from-black/20 to-black/40 p-4 pb-0 flex items-end justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-auto object-contain rounded-t-lg opacity-90 shadow-md transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{p.meta}</p>
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
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-semibold text-blue-300 hover:text-blue-200"
                    >
                      GitHub Repo →
                    </a>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(p);
                    }}
                    className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg border border-blue-500/30 transition-all shadow-[0_0_12px_rgba(59,130,246,0.25)] hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]"
                  >
                    View Details
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(project.gallery ? project.gallery[0] : project.image);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8 shadow-2xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition z-10"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content Split: Left Gallery, Right Details */}
        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Gallery Column */}
          <div className="flex flex-col gap-3">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-black/35 border border-white/10 p-2 flex items-center justify-center">
              <img
                src={activeImage}
                alt={project.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Thumbnails */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.gallery.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border transition p-1 bg-black/20 ${
                      activeImage === img ? "border-blue-400" : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="h-full w-full object-contain rounded" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{project.meta}</span>
              <h2 className="text-2xl font-bold mt-1 text-white leading-tight">{project.title}</h2>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white/90">Project Description</h4>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{project.desc}</p>
              </div>

              {project.contributions && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white/90">My Contributions</h4>
                  <ul className="mt-2 text-sm text-white/70 space-y-2 list-disc list-inside">
                    {project.contributions.map((c, i) => (
                      <li key={i} className="leading-relaxed">{c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              {project.repo === "#" ? (
                <span className="text-sm font-semibold text-yellow-400">
                  🚧 Coming Soon
                </span>
              ) : (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
                >
                  GitHub Repository
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}