import React from "react";
import {
  ClipboardList, Search, UsersRound, FileCheck2, Handshake
} from "lucide-react";

export default function HiringProcedureImproved({
  title = "Hiring Procedure",
  subtitle = "Discover your perfect career match. Apply online, prepare well, meet our team, complete documentation, and onboard smoothly.",
  steps = [
    {
      icon: ClipboardList,
      heading: "Apply Online",
      bullets: [
        "Browse roles on our Careers page and apply.",
        "No match? Upload your resume to our talent pool.",
      ],
    },
    {
      icon: Search,
      heading: "Preparation",
      bullets: [
        "Review the job description & our product.",
        "Understand our culture and mission.",
      ],
    },
    {
      icon: UsersRound,
      heading: "Interview Process",
      bullets: [
        "Technical/functional interviews with the team.",
        "Culture chat with HR to ensure mutual fit.",
      ],
    },
    {
      icon: FileCheck2,
      heading: "Documentation",
      bullets: [
        "Share requested documents for pre-onboarding.",
        "Confirm offer & notice period details.",
      ],
    },
    {
      icon: Handshake,
      heading: "Onboarding",
      bullets: [
        "Induction and orientation on Day 1.",
        "Meet the team, tools, and rituals.",
      ],
    },
  ],
  onCtaClick = () => (window.location.href = "/career"),
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0A1224] via-[#0B1730] to-[#0B1428]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/70 backdrop-blur">
            • Careers
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-[-0.02em]">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
          <p className="mx-auto mt-4 max-w-3xl text-white/75">{subtitle}</p>
        </div>

        {/* Track line */}
        <div className="relative mt-12">
          {/* Horizontal track (desktop) */}
          <div
            className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-sky-500/30 via-cyan-400/30 to-indigo-500/30 rounded-full"
            aria-hidden
          />
          {/* Vertical track (mobile) */}
          <div
            className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-sky-500/30 via-cyan-400/30 to-indigo-500/30 rounded-full"
            aria-hidden
          />

          {/* Steps */}
          <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.heading} className="relative">
                  <div
                    className={[
                      "group h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6",
                      "shadow-[0_25px_70px_-25px_rgba(29,78,216,0.35)] backdrop-blur",
                      "transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-white/40",
                      "hover:-translate-y-2 hover:shadow-[0_32px_80px_-28px_rgba(29,78,216,0.45)] hover:ring-2 hover:ring-sky-400",
                    ].join(" ")}
                    tabIndex={0}
                  >
                    {/* Step number + icon badge */}
                    <div className="flex items-center gap-3">
                      <div className="grid place-items-center h-8 w-8 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">
                        <span className="text-sm font-semibold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(120%_120%_at_50%_10%,rgba(59,130,246,.35),transparent_55%)] opacity-50 blur-sm" />
                        <div className="grid place-items-center h-12 w-12 rounded-full bg-[linear-gradient(180deg,#173362_0%,#1d4ed8_50%,#2a6df1_100%)] ring-1 ring-white/10 transition-transform group-hover:scale-110">
                          <Icon className="h-6 w-6 text-white group-hover:text-sky-300 transition-all duration-200 ease-in-out" />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.heading}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-white/75">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onCtaClick}
            className={[
              "group relative inline-flex items-center justify-center select-none",
              "rounded-2xl px-7 py-3 text-[15px] font-semibold text-white",
              "transition-all duration-200 focus:outline-none",
              "focus-visible:ring-2 focus-visible:ring-white/40 ring-1 ring-white/10",
              "bg-[linear-gradient(180deg,#173362_0%,#1d4ed8_50%,#2a6df1_100%)]",
              "shadow-[0_12px_24px_rgba(29,78,216,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]",
              "hover:brightness-110 hover:shadow-[0_16px_28px_-12px_rgba(29,78,216,0.45),inset_0_1px_0_rgba(255,255,255,0.18)]",
              "active:translate-y-[1px]",
            ].join(" ")}
          >
            <span
              aria-hidden
              className="absolute -inset-px rounded-[1rem] bg-[radial-gradient(120%_120%_at_50%_10%,rgba(59,130,246,.35),transparent_55%)] opacity-40 blur-[6px] transition-opacity group-hover:opacity-60"
            />
            <span className="relative z-[1]">View Open Roles</span>
          </button>
        </div>
      </div>

      {/* Reduced motion respect */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .group:hover { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
