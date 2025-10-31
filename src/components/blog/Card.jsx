import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Card({ post = {} }) {
  const { id, slug, image, title, desc, date, category, readTime } = post;

  const [imgOk, setImgOk] = React.useState(true);
  const to = `/blog/${encodeURIComponent(slug ?? id ?? "unknown")}`;
  const titleId = `post-title-${id ?? slug ?? "x"}`;

  const metaBits = [date, category, readTime].filter(Boolean);
  const meta = metaBits.join(" • ");

  return (
    <Link
      to={to}
      className="group relative block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      aria-labelledby={titleId}
    >
      <div
        className="
          relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]
          transition
          translate-y-0
          group-hover:-translate-y-[2px]
          group-active:-translate-y-[1px]
          group-hover:border-[#2a77ff]/35
          shadow-[0_0_0_0_rgba(42,119,255,0)]
          group-hover:shadow-[0_10px_28px_rgba(42,119,255,0.18)]
          focus-within:shadow-[0_10px_28px_rgba(42,119,255,0.25)]
          will-change-transform
        "
      >
        {/* image */}
        <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-t-2xl">
          {image && imgOk ? (
            <img
              src={image}
              alt={title || "Blog cover"}
              className="
                h-full w-full object-cover
                transition-transform duration-300
                group-hover:scale-[1.04]
                group-active:scale-[1.02]
              "
              loading="lazy"
              decoding="async"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="h-full w-full grid place-items-center bg-gradient-to-br from-[#182033] to-[#0f1623]">
              <span className="text-xs text-white/55">Image unavailable</span>
            </div>
          )}

          {/* soft overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* content */}
        <div className="p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[#8fb3ff]">
              {category || "Blog"}
            </span>
            {date ? <span className="text-white/55">{date}</span> : null}
          </div>

          <h3
            id={titleId}
            className="text-base sm:text-lg md:text-xl font-semibold leading-snug line-clamp-2"
          >
            {title || "Untitled post"}
          </h3>

          {desc ? (
            <p className="mt-2 text-sm sm:text-[15px] text-white/75 line-clamp-2 sm:line-clamp-3">
              {desc}
            </p>
          ) : null}

          {/* CTA row like RelatedGrid */}
          <div className="mt-3 inline-flex items-center text-sm text-[#8fb3ff]">
            <span className="transition-transform group-hover:translate-x-[2px] group-active:translate-x-[1px]">
              Read
            </span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-[4px] group-active:translate-x-[2px]" />
          </div>

          {meta ? (
            <p className="sr-only" aria-label="Post metadata">
              {meta}
            </p>
          ) : null}
        </div>

        {/* glow ring */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-px rounded-[1.05rem]
            bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(42,119,255,0.25),transparent_55%)]
            opacity-0 blur-[10px] transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </div>
    </Link>
  );
}
