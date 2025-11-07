// src/components/culture/ValuePosterCardImage.jsx
import React from "react";

export default function ValuePosterCardImage({
  imageSrc,
  title,
  overlayHeading = "",
  overlayCopy = "",
}) {
  return (
    <figure className="w-[300px] shrink-0">
      <article
        tabIndex={0}
        className="
          group relative aspect-[3/4] w-full overflow-hidden rounded-3xl p-[1px]
          bg-gradient-to-br from-sky-500/45 via-blue-600/25 to-cyan-400/35
          shadow-[0_25px_70px_-25px_rgba(29,78,216,0.5)]
          transition-transform duration-200 hover:-translate-y-1.5 focus-within:-translate-y-1.5
        "
        aria-label={title}
      >
        <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* SLIDE from TOP + delayed text */}
          <div
            className="
              pointer-events-none absolute inset-0
              translate-y-[-100%] opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              group-focus-within:translate-y-0 group-focus-within:opacity-100
              transition-transform duration-300 ease-out
              motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100
            "
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,14,26,.9),rgba(9,23,54,.85),rgba(12,30,68,.9))]" />
            <div
              className="
                relative flex h-full items-center justify-center p-6 text-center
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                group-focus-within:opacity-100 group-focus-within:translate-y-0
                transition-all duration-300 ease-out delay-150
              "
            >
              <div className="max-w-xs">
                {overlayHeading && (
                  <h3 className="text-xl font-bold text-white drop-shadow">
                    {overlayHeading}
                  </h3>
                )}
                {overlayCopy && (
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    {overlayCopy}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Title below */}
      <figcaption className="mt-3">
        <h4 className="text-lg font-semibold leading-tight text-white">
          {title}
        </h4>
      </figcaption>
    </figure>
  );
}
