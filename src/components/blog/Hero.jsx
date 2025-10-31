import React,{useRef} from 'react';
import { motion, useReducedMotion,useScroll,useTransform} from "framer-motion";
import heroBg from "../../assets/blogHero.jpg";

export default function Hero({
  title = "Exploring the Features of Our Translation API",
  subtitle = "A deep dive into powerful capabilities and benefits of our API.",
  meta = "Apr 15, 2024 • Translation • 2 min read",
  tag = "Translation",
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Soft parallax for the background image
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", reduce ? "0px" : "-40px"]);

  const container = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden rounded-none border-none shadow-none bg-transparent"
    >
      {/* Background image (local JPG) */}
      <motion.img
        src={heroBg}
        alt=""               
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-40 rounded-none
         object-[center_35%]"
        style={{ y }}
      />

      {/* Gradient washes to match theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/85 via-transparent to-[#00103a]/80" />
      <div className="pointer-events-none absolute -inset-8 opacity-60 [background:radial-gradient(900px_500px_at_95%_5%,rgba(56,189,248,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute -inset-16 opacity-[0.35] [background:radial-gradient(700px_380px_at_0%_40%,rgba(99,102,241,0.35),transparent_60%)]" />

      {/* Content */}
      <motion.div 
      variants={container} 
      initial="hidden" 
      animate="show" 
      className="relative z-10 flex items-center min-h-[280px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[560px] ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-14">
          {/* Eyebrow */}
          <motion.div variants={item} 
          className="mb-3 inline-flex items-center gap-2 text-[11px] sm:text-[12px] uppercase tracking-widest text-white/80">
            <span className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 backdrop-blur">{tag}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>Feature Deep Dive</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
          variants={item} 
          className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{title}</span>
            <span className="relative mt-3 block h-[3px] w-28 sm:w-32 md:w-40">
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(34,211,238,1) 100%)" }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              />
            </span>
          </motion.h1>

          {/* Subhead & meta */}
          <motion.p variants={item} 
          className="mt-4 max-w-xl text-sm sm:text-base text-white/85">
            {subtitle}
          </motion.p>
          <motion.p variants={item} className="mt-3 text-xs sm:text-sm text-white/65">
            {meta}
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-6">
            <a
              href="#read"
              className="relative inline-flex items-center gap-2 rounded-xl px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white text-black text-sm font-semibold
                         shadow transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Read article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle frame ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </section>
  );
}