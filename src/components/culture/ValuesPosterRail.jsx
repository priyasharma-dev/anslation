// src/components/culture/ValuesPosterRail.jsx
import React, { useEffect, useRef, useState } from "react";
import ValuePosterCardImage from "./ValuePosterCardImage";

const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

export default function ValuesPosterRail({
  heading = "Our Values",
  blurb =
    "We deliver exceptional experiences through ownership, curiosity, and craft.",
  items = [
    {
      imageSrc: u("photo-1517245386807-bb43f82c33c4"),
      title: "Craft Excellence",
      overlayHeading: "Quality at speed",
      overlayCopy:
        "We ship with care, improve relentlessly, and measure what matters.",
    },
    {
      imageSrc: u("photo-1529333166437-7750a6dd5a70"),
      title: "Customer Obsession",
      overlayHeading: "Start with users",
      overlayCopy: "Insights before opinions. Real problems, real outcomes.",
    },
    {
      imageSrc: u("photo-1522071820081-009f0129c71c"),
      title: "Win Together",
      overlayHeading: "Team first",
      overlayCopy: "Debate ideas, align quickly, and move with momentum.",
    },
    {
      imageSrc: u("photo-1557800636-894a64c1696f"),
      title: "Curiosity Always",
      overlayHeading: "Learn by doing",
      overlayCopy:
        "Experiment, reflect, and share—growth is a team sport.",
    },
    {
      imageSrc: u("photo-1551836022-d5d88e9218df"),
      title: "Build with Code",
      overlayHeading: "Prototype to production",
      overlayCopy:
        "Short feedback loops, strong foundations, fewer regressions.",
    },
    {
      imageSrc: u("photo-1519389950473-47ba0277781c"),
      title: "Radical Honesty",
      overlayHeading: "Open channels",
      overlayCopy:
        "We communicate candidly to remove barriers and unlock possibilities.",
    },
  ],
}) {
  const railRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(0);

  const [progress, setProgress] = useState(0); // 0..1
  const [dragging, setDragging] = useState(false);

  // --- utils ---
  const clamp01 = (n) => Math.max(0, Math.min(1, n));

  const computeProgress = () => {
    const el = railRef.current;
    if (!el) return 0;
    const denom = el.scrollWidth - el.clientWidth;
    if (denom <= 0) return 0;
    return el.scrollLeft / denom;
  };

  const measureStep = () => {
    const rail = railRef.current;
    if (!rail) return 0;
    const kids = rail.querySelectorAll("[data-card]");
    if (kids.length < 2) {
      const first = kids[0];
      return first ? first.getBoundingClientRect().width + 32 : 360;
    }
    const a = kids[0].getBoundingClientRect();
    const b = kids[1].getBoundingClientRect();
    return b.left - a.left; // includes gap
  };

  const scrollToProgress = (p, behavior = "auto") => {
    const el = railRef.current;
    if (!el) return;
    const denom = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: p * denom, behavior });
  };

  // native scroll -> progress
  const onScroll = () => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setProgress(computeProgress());
    });
  };

  // arrows: slide by N cards
  const slideByCards = (dir = 1, cards = 1) => {
    const el = railRef.current;
    if (!el) return;
    const step = measureStep() * cards;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // progress track interaction
  const pointerToProgress = (clientX) => {
    const track = trackRef.current;
    if (!track) return progress;
    const rect = track.getBoundingClientRect();
    const p = (clientX - rect.left) / rect.width;
    return clamp01(p);
    };

  const onPointerMove = (e) => {
    const p = pointerToProgress(e.clientX);
    setProgress(p);
    // live scrub without easing while dragging
    scrollToProgress(p, "auto");
  };

  const onPointerUp = () => {
    setDragging(false);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const p = pointerToProgress(e.clientX);
    setProgress(p);
    scrollToProgress(p, "auto");
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp, { once: true });
  };

  // mount
  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    setProgress(computeProgress()); // sync initial
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  const pct = clamp01(progress) * 100;
  const atStart = progress <= 0.001;
  const atEnd = progress >= 0.999;

  return (
    <section className="relative overflow-hidden text-white">
      {/* backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B1224] via-[#0C1830] to-[#0B1428]" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-3xl font-bold tracking-[-0.01em]">{heading}</h2>
        <p className="mt-2 max-w-2xl text-white/70">{blurb}</p>

        {/* Rail */}
        <div
          ref={railRef}
          className="
            mt-8 flex gap-8 overflow-x-auto pb-8
            snap-x snap-mandatory
            [scrollbar-width:none] [-ms-overflow-style:none]
          "
          style={{ scrollBehavior: "smooth" }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {items.map((it, i) => (
            <div key={i} className="snap-start" data-card>
              <ValuePosterCardImage {...it} />
            </div>
          ))}
        </div>

        {/* Bottom controls + progress */}
        <div className="mt-2 flex items-center gap-3 select-none">
          {/* left: one card */}
          <button
            type="button"
            onClick={() => slideByCards(-1, 1)}
            aria-label="Slide left"
            disabled={atStart}
            className={`
              grid place-items-center h-8 w-8 rounded-lg
              border border-white/10 bg-white/5 backdrop-blur
              transition
              ${atStart
                ? "opacity-30 pointer-events-none"
                : "opacity-80 hover:opacity-100 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/30"}
            `}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* track (click/drag to scrub) */}
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            className="relative flex-1 h-2 rounded-full bg-white/12 cursor-pointer"
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 transition-[width] duration-250 ease-out"
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* right: one card */}
          <button
            type="button"
            onClick={() => slideByCards(1, 1)}
            aria-label="Slide right"
            disabled={atEnd}
            className={`
              grid place-items-center h-9 w-9 rounded-lg
              border border-white/15 bg-white/5 backdrop-blur
              transition
              ${atEnd
                ? "opacity-30 pointer-events-none"
                : "hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white/40"}
            `}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

         
        </div>
      </div>
    </section>
  );
}
