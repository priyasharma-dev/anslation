import React from "react";
import anupamPhoto from "../../assets/AnupamJain.jpeg";

export default function EmployeeWellbeing({
  title = "Employee Wellbeing",
  intro = "We craft an inclusive, energising workplace that sparks creativity and supports real-life balance. From wellness days and learning budgets to team offsites, we optimise for a mindful pace and lasting impact.",
  person = { name: "Anupam Jain", role: "Full Stack Developer" },
  story = "At Anslation I own the stack end-to-end—from API contracts to UI performance. We ship in short cycles, learn from real usage, and keep quality high with strong reviews and good tooling. It’s the right balance of speed, craft, and user impact.",
  // ✅ correct default value syntax (no JSX here)
  imageSrc = anupamPhoto,
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0A1224] via-[#0B1730] to-[#0B1428]" />
      {/* Soft auroras */}
      <div className="pointer-events-none absolute -top-48 -left-40 -z-20 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.40),transparent_55%)] blur-3xl opacity-50" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-20 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.35),transparent_55%)] blur-3xl opacity-40" />

      {/* Animated geometric motif (triangles) */}
      <div className="pointer-events-none absolute left-8 top-10 sm:left-16 sm:top-16">
        <div style={{ animation: "drift 14s ease-in-out infinite" }} className="relative">
          <svg width="120" height="100" viewBox="0 0 120 100" className="opacity-80" style={{ animation: "orbit 18s linear infinite" }}>
            <polygon points="60,5 115,90 5,90" fill="transparent" stroke="rgba(255,255,255,.55)" strokeWidth="3" />
          </svg>
          <svg width="64" height="56" viewBox="0 0 64 56" className="absolute left-10 top-6 drop-shadow" style={{ animation: "float 6s ease-in-out infinite, spin 16s linear infinite" }}>
            <polygon points="32,2 62,54 2,54" fill="#F59E0B" stroke="rgba(255,255,255,.7)" strokeWidth="3" />
          </svg>
          <div className="absolute -right-2 top-12 h-2 w-2 rounded-full bg-sky-300" style={{ animation: "blink 2.2s ease-in-out infinite" }} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
            Culture
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.02em] sm:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
          <p className="mx-auto mt-4 max-w-2xl text-white/80">{intro}</p>
        </div>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          {/* Story */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <h3 className="text-2xl font-bold text-amber-300">{person.name}</h3>
              <p className="mt-2 text-sm text-white/60">{person.role}</p>
              <p className="mt-4 text-white/80">{story}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Wellness Days", "Learning Budget", "Hybrid & Remote", "Team Offsites"].map((x) => (
                  <span key={x} className="rounded-full border border-white/10 bg-gradient-to-r from-blue-600/20 to-sky-500/10 px-3 py-1.5 text-xs font-medium text-white/90">
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 text-left text-[52px] font-black leading-none tracking-tight text-white/[0.05]">
              E M P L O Y E E
              <br />
              W E L L B E I N G
            </div>
          </div>

          {/* Image card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-2xl">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-blue-500/10 blur-2xl" />
              <div className="rounded-[2rem] bg-gradient-to-br from-sky-500/40 via-blue-600/25 to-cyan-400/35 p-[1px] shadow-[0_25px_70px_-25px_rgba(29,78,216,0.55)]">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
                  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-2">
                    <div className="aspect-[16/10] overflow-hidden rounded-lg">
                      <img
                        src={imageSrc}
                        alt={`${person.name} — Anslation`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-4 flex items-center justify-between px-1">
                    <div className="text-sm">
                      <div className="font-semibold">Mindful pace, lasting impact</div>
                      <div className="text-white/60">Rituals for focus, community, growth</div>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-1 text-xs font-semibold">
                      Wellbeing
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative shard */}
              <div
                className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rotate-12 opacity-50"
                style={{
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  background: "linear-gradient(135deg, rgba(125,211,252,.6), rgba(14,165,233,.3))",
                  filter: "blur(1px)",
                  animation: "bob 7s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 h-px w-full"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
