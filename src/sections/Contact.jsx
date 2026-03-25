export default function Contact() {
  return (
    <section id="contact" className="mt-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-[0_0_60px_rgba(139,92,246,0.15)]">

        <div className="max-w-3xl">
          <p className="text-white/60 text-sm">Contact</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-blue-400">
            Let’s Connect
          </h2>
          <p className="mt-3 max-w-1xl text-white/70 leading-relaxed">
            Interested in collaboration, projects, or opportunities?
          </p>
          <p className="mt-1 max-w-1xl text-white/70 leading-relaxed">
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/binali-assalaarachchi/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)]"
          >
            <h3 className="text-lg font-semibold text-blue-400">LinkedIn</h3>
            <p className="mt-2 text-sm text-white/60">
              Professional profile, leadership & achievements.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BinaliAssalaarachchi"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
          >
            <h3 className="text-lg font-semibold text-blue-400">GitHub</h3>
            <p className="mt-2 text-sm text-white/60">
              AI projects, repositories & development work.
            </p>
          </a>

          {/* Marketing Portfolio */}
          <a
            href="https://drive.google.com/file/d/191EBLuiDe3Icj9m5TxSeC0oehNvngu3i/view"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              Marketing Portfolio
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Creative campaigns, branding & design work.
            </p>
          </a>

          {/* Email */}
<a
  href="mailto:binaliassalaarachchi@gmail.com?subject=Portfolio Inquiry&body=Hi Binali,"
  className="group rounded-2xl border border-white/10 bg-black/25 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
>
  <h3 className="text-lg font-semibold text-blue-400">Email</h3>

  <p className="mt-2 text-sm text-white/60">
    Click to send me a direct message.
  </p>

  <p className="mt-3 text-sm text-cyan-300 group-hover:text-cyan-200">
    binaliassalaarachchi@gmail.com
  </p>
</a>

        </div>
      </div>
    </section>
  );
}
