

// ISMe Card KA DYNAMIC DATA PASS KRNA H 
    // <Link
    //   to={to}
    //   className="group relative block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    //   aria-labelledby={titleId}
    // >
    //   <div
    //     className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0f1623] transition translate-y-0 group-hover:-translate-y-[2px] group-active:-translate-y-[1px] group-hover:border-[#2a77ff]/35 shadow-[0_0_0_0_rgba(42,119,255,0)] group-hover:shadow-[0_10px_28px_rgba(42,119,255,0.18)] focus-within:shadow-[0_10px_28px_rgba(42,119,255,0.25)] will-change-transform"
    //   >
    //     {/* Image Section */}
    //     <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden rounded-t-2xl">
    //       {image && imgOk ? (
    //         <img
    //           src={image}
    //           alt={title || "Blog cover"}
    //           className="
    //             h-full w-full object-cover
    //             transition-transform duration-300
    //             group-hover:scale-[1.04]
    //             group-active:scale-[1.02]
    //           "
    //           loading="lazy"
    //           decoding="async"
    //           onError={() => setImgOk(false)}
    //         />
    //       ) : (
    //         <div className="h-full w-full grid place-items-center bg-gradient-to-br from-[#182033] to-[#0f1623]">
    //           <span className="text-xs text-white/55">Image unavailable</span>
    //         </div>



    //       )}
    //       {/* Soft overlay on hover */}
    //       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

    //      {/* <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[#8fb3ff]">
    //           {category || "Blog"}
    //         </span> */}




    //     </div>

    //     {/* Content Section */}
    //     <div className="flex flex-1 flex-col p-4 sm:p-5">
    //       <div className="mb-2 flex items-center gap-2 text-[11px] sm:text-xs">
           
    //         {date ? <span className="text-white/55">{date}</span> : null}
    //       </div>

    //       <h3
    //         id={titleId}
    //         className="text-base sm:text-lg md:text-xl font-semibold leading-snug line-clamp-2"
    //       >
    //         {title || "Untitled post"}
    //       </h3>

    //       {desc ? (
    //         <p className="mt-2 text-sm sm:text-[15px] text-white/75 line-clamp-2 sm:line-clamp-3">
    //           {desc}
    //         </p>
    //       ) : null}

    //       {/* CTA row */}
    //       <div className="mt-auto pt-3"> {/* Ensures the CTA stays at the bottom of the card */}
    //         <div className="inline-flex items-center text-sm text-[#8fb3ff]">
    //           <span className="transition-transform group-hover:translate-x-[2px] group-active:translate-x-[1px]">
    //             Read
    //           </span>
    //           <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-[4px] group-active:translate-x-[2px]" />
    //         </div>
    //       </div>

    //       {meta ? (
    //         <p className="sr-only" aria-label="Post metadata">
    //           {meta}
    //         </p>
    //       ) : null}
    //     </div>

    //     {/* Glow ring */}
    //     <span
    //       aria-hidden="true"
    //       className="
    //         pointer-events-none absolute -inset-px rounded-[1.05rem]
    //         bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(42,119,255,0.25),transparent_55%)])
    //         opacity-0 blur-[10px] transition-opacity duration-300
    //         group-hover:opacity-100
    //       "
    //     />
    //   </div>
    // </Link>





import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Calendar, User } from "lucide-react";
import Divider from "@mui/material/Divider";

export default function Card({ post = {} }) {
  const { id, image, title, desc, date, category, author, readTime } = post;
console.log("card id:", id);
console.log("author:", author);
  const [imgOk, setImgOk] = React.useState(true);
  const to = `/blog/${encodeURIComponent(id)}`;
  const titleId = `post-title-${id ?? "x"}`;

  const metaBits = [date, category, readTime].filter(Boolean);
  const meta = metaBits.join(" • ");

  return (
    
    <>
    
     <Link
      to={to}
      aria-labelledby={titleId}
      className="group relative block focus:outline-none"
    >
      <div className="
        relative h-full overflow-hidden rounded-2xl
        border border-white/10 bg-[#0b1220]
        transition-all duration-300
        group-hover:-translate-y-[2px]
        group-hover:border-[#2a77ff]/40
        group-hover:shadow-[0_10px_28px_rgba(42,119,255,0.22)]
      ">

        {/* IMAGE */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden">
          {image && imgOk ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="
                h-full w-full object-cover
                transition-transform duration-300
                group-hover:scale-[1.05]
              "
            />
          ) : (
            <div className="h-full w-full grid place-items-center bg-[#182033]">
              <span className="text-xs text-white/60">Image unavailable</span>
            </div>
          )}

          {/* CATEGORY BADGE */}
          <span className="
            absolute top-3 left-3
            rounded-full border border-white/20
            bg-black/40 px-2 py-0.5
            text-xs text-[#8fb3ff]
            backdrop-blur
          ">
            {category}
          </span>

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/35" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col p-5 text-white">
          <h3
            id={titleId}
            className="
              text-[18px] sm:text-[20px]
              font-semibold leading-[1.35]
              line-clamp-2
            "
          >
            {title}
          </h3>

          <p className="
            mt-2 text-sm sm:text-[15px]
            text-white/75 leading-relaxed
            line-clamp-3
          ">
            {desc}
          </p>


<Divider
  sx={{
    borderColor: "rgba(255,255,255,0.12)",
    my: 2
  }}
/>




          {/* AUTHOR + DATE */}
          <div className="mt-4  flex flex-col items-start  gap-4 text-xs text-white/60">
            <div className="flex items-center gap-5 ">
              <User className="h-3.5 w-3.5   text-[#61A6FB]" />
              {author}
            </div>
            <div className="flex items-center gap-5 ">
              <Calendar className="h-3.5 w-3.5 text-[#61A6FB]" />
              {date}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 inline-flex items-center text-sm text-[#8fb3ff]">
            Read More...
            <ArrowRight className="
              ml-1 h-4 w-4
              transition-transform
              group-hover:translate-x-1
            " />
          </div>
        </div>
        {/* GLOW */}
        <span
          aria-hidden
          className="
            pointer-events-none absolute -inset-px
            rounded-2xl opacity-0
            bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(42,119,255,0.28),transparent_60%)]
            blur-xl transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </div>
    </Link>
    
    
    </>
  );
}
