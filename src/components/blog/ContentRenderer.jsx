import React from "react";

export default function ContentRenderer({ desc, content = [] }) {
  return (
    <article className="mx-auto max-w-3xl px-6 sm:px-8 md:px-10 py-12">
      {desc && <p className="text-lg sm:text-base md:text-lg text-white/90">{desc}</p>}

      <div className="mt-8 space-y-6 leading-relaxed text-white/85">
        {content.length ? (
          content.map((block, i) => {
            switch (block.type) {
              case "h2":
                return (
                  <h2 key={i} className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#86b2ff]">
                    {block.text}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i} className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/95">
                    {block.text}
                  </h3>
                );
              case "quote":
                return (
                  <blockquote key={i} className="border-l-4 border-[#2a77ff] pl-4 italic text-white/90">
                    {block.text}
                  </blockquote>
                );
              case "img":
                return (
                  <figure key={i} className="my-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                    <img
                      src={block.src}
                      alt={block.alt || ""}
                      className="w-full object-cover rounded-xl"
                      loading="lazy"
                    />
                    {block.caption && (
                      <figcaption className="px-3 py-2 text-xs sm:text-sm text-white/60">{block.caption}</figcaption>
                    )}
                  </figure>
                );
              case "ul":
                return (
                  <ul key={i} className="list-disc list-inside space-y-2">
                    {(block.items || []).map((li, idx) => <li key={idx}>{li}</li>)}
                  </ul>
                );
              default:
                return <p key={i} className="text-sm sm:text-base md:text-lg">{block.text}</p>;
            }
          })
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#86b2ff]">Introduction</h2>
            <p className="text-sm sm:text-base md:text-lg">
              This is a placeholder article body. Add a <code>content</code> array to your <code>blogData</code> to render full sections.
            </p>
            <blockquote className="border-l-4 border-[#2a77ff] pl-4 italic">
              “Language is power — our mission is to make it universal.”
            </blockquote>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#86b2ff]">Key Takeaways</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fast, accurate translations</li>
              <li>Developer-friendly APIs</li>
              <li>Scales with your product</li>
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
