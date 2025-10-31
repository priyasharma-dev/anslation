import React, {useMemo,useState}from 'react';
import Hero from "../components/blog/Hero"
import SearchFilter from"../components/blog/SearchFilter"
import Card from "../components/blog/Card"

import { blogData as POSTS} from "../libs/blogData";

const CAPABILITIES = ["All", "Capabilities", "Security", "Cloud", "Data & AI"];
const INDUSTRIES  = ["All", "Digital Business", "Financial Services", "Retail"];
const GEOS        = ["All", "North America", "Europe", "APAC"];

export default function Blog(){
   const [q, setQ] = useState("");
  const [capability,setCapability] = useState(CAPABILITIES[0]);
  const [industry,setIndustry]= useState(INDUSTRIES[0]);
  const [geo,setGeo]= useState(GEOS[0]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchQ =
        !s ||
        p.title?.toLowerCase().includes(s) ||
        p.desc?.toLowerCase().includes(s);
      // keep filters neutral for now since your blogData doesn't carry these fields
      const matchCap = capability === "All";
      const matchInd = industry === "All";
      const matchGeo = geo === "All";
      return matchQ && matchCap && matchInd && matchGeo;
    });
  }, [q, capability, industry, geo]);


    return(
    <div className="relative min-h-screen overflow-hidden bg-[#0b1020] text-white">
      {/* Vibe: subtle grid & glows (matches other pages) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background:linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(21,94,239,0.35),transparent)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.28),transparent)] blur-2xl" />

      <Hero />
      
      {/* Page container */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-10">
         <SearchFilter
          q={q} setQ={setQ}
          capability={capability} setCapability={setCapability}
          industry={industry} setIndustry={setIndustry}
          geo={geo} setGeo={setGeo}
          count={filtered.length}
          CAPABILITIES={CAPABILITIES}
          INDUSTRIES={INDUSTRIES}
          GEOS={GEOS}
          onSearch={() => {}}
        />
      
       <section className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl border border-white/10 bg-[#0f1623] hover:border-white/15 transition"
              >
                <Card post={post} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    );
}