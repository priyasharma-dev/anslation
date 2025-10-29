import React from "react";

export default function DetailHero({ image, category = "Blogs", title, meta }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          fetchpriority="high"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1623] to-[#0b1020]" />
      )}

      {/* Overlay for the image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1020]/10 via-[#0b1020]/40 to-[#0b1020]" />

      {/* Content section */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-24">
        {/* Category and Blog Text */}
        <div className="inline-flex items-center gap-2 text-[12px] sm:text-sm uppercase tracking-widest text-white/85">
          <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5">
            {category}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span>Blog</span>
        </div>

        {/* Title */}
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Meta */}
        {meta ? <p className="mt-4 text-sm sm:text-base text-white/70">{meta}</p> : null}
      </div>
    </section>
  );
}

