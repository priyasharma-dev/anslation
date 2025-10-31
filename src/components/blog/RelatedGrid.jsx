import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedGrid({ items = [], currentId }) {
  const related = items
    .filter(p => String(p.id) !== String(currentId))
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12 pb-16">
      <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>

      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((p) => (
          <CardLink key={p.id} to={`/blog/${p.id}`} post={p} />
        ))}
      </div>
    </section>
  );
}

function CardLink({ to, post }) {
  const { image, title, desc } = post;

  return (
    <Link
      to={to}
      className="group relative block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      aria-label={`Read: ${title}`}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623]
          transition transform group-hover:translate-y-[-2px] group-active:translate-y-[-1px]
          group-hover:border-[#2a77ff]/35
          shadow-[0_0_0_0_rgba(42,119,255,0)] group-hover:shadow-[0_10px_28px_rgba(42,119,255,0.18)]
          group-focus-visible:shadow-[0_10px_28px_rgba(42,119,255,0.25)]
          will-change-transform"
      >
        {/* image */}
        <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-t-2xl">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#182033] to-[#0f1623]" />
          )}

          {/* soft overlay on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          {desc ? <p className="text-sm text-white/70 mt-1 line-clamp-2">{desc}</p> : null}

          {/* CTA row */}
          <div className="mt-3 inline-flex items-center text-sm text-[#8fb3ff]">
            <span className="transition-transform group-hover:translate-x-[2px]">Read</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-[4px]" />
          </div>
        </div>

        {/* glow ring */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute -inset-px rounded-[1.05rem]
            bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(42,119,255,0.25),transparent_55%)]
            opacity-0 blur-[10px] transition-opacity duration-300 group-hover:opacity-100
          "
        />
      </div>
    </Link>
  );
}