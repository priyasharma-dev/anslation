import React from "react";
import Panel from "./Panel";
import ceoPhoto from "../../assets/ceo.jpeg";

export default function MeetCEO({
  ceoSrc = ceoPhoto,     
  name = "Alex Carter",
  title = "Chief Executive Officer",
}) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Base dark blue gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0E1B34] via-[#0C1830] to-[#0B1428]" />

      {/* Aurora blobs (soft, layered) */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] -z-20 rounded-full blur-3xl opacity-30
                      bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.5),transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[40rem] w-[40rem] -z-20 rounded-full blur-3xl opacity-25
                      bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.45),transparent_55%)]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -z-20 rounded-full blur-3xl opacity-20
                      bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div>
            <h2 className="text-3xl font-bold tracking-[-0.01em] sm:text-4xl">
              Meet the{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CEO
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-white/70">
              At Anslation, growth thrives on transparent communication and a
              product mindset. We encourage ownership, speed with precision, and
              a deep care for users—so every release moves the needle.
            </p>

            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Conscious culture that rewards initiative & learning.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Open dialogue, data-informed decisions, and craft excellence.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                Building products that people love—together.
              </li>
            </ul>
          </div>

          {/* CEO gradient-card */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Gradient border wrapper */}
            <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-sky-500/50 via-blue-500/30 to-indigo-500/40">
              <Panel className="rounded-[2rem] bg-white/[0.06] backdrop-blur border-0 p-3">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-blue-900/30 to-blue-900/10 p-2">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={ceoSrc}
                      alt={`${name} portrait`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between px-1">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/60">Leadership</p>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="text-sm text-white/60">{name}</p>
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-1 text-sm font-semibold">
                    CEO
                  </span>
                </div>
              </Panel>
            </div>

            {/* Soft glow behind card */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
