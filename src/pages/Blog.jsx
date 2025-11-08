import React, {useMemo,useState,useEffect, useContext}from 'react';
import Hero from "../components/blog/Hero"
import SearchFilter from"../components/blog/SearchFilter"
import Card from "../components/blog/Card";

import { blogData as POSTS} from "../libs/blogData";
import { BlogContext } from '../Context/BlogContext';

const CAPABILITIES = ["All", "Capabilities", "Security", "Cloud", "Data & AI"];
const INDUSTRIES  = ["All", "Digital Business", "Financial Services", "Retail"];
const GEOS        = ["All", "North America", "Europe", "APAC"];

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
export default function Blog(){
      
  // const {blogData} = useContext(BlogContext)
   const [q, setQ] = useState("");
  const [capability,setCapability] = useState(CAPABILITIES[0]);
  const [industry,setIndustry]= useState(INDUSTRIES[0]);
  const [geo,setGeo]= useState(GEOS[0]);

   useEffect(() => {
    scrollToTop();
  }, []);

  // console.log("blog data---priyya shrama" , blogData)

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      const matchQ =
        !s ||
        p.title?.toLowerCase().includes(s) ||
        p.desc?.toLowerCase().includes(s);
      const matchCap = capability === "All";
      const matchInd = industry === "All";
      const matchGeo = geo === "All";
      return matchQ && matchCap && matchInd && matchGeo;
    });
  }, [q, capability, industry, geo]);


  console.log("slug data is coming" , filtered)


    return(
    <div className="relative min-h-screen text-white">
    
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.06]
       [background:linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(21,94,239,0.35),transparent)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.28),transparent)] blur-2xl" /> */}
  
      <Hero />
    
      
      {/* Page container */}
      <div className="relative mx-auto w-full py-10">
         <SearchFilter
          q={q} setQ={setQ}
          capability={capability} setCapability={setCapability}
          industry={industry} setIndustry={setIndustry}
          geo={geo} setGeo={setGeo}
          count={filtered.length}
          CAPABILITIES={CAPABILITIES}
          INDUSTRIES={INDUSTRIES}
          GEOS={GEOS}
          onSearch={scrollToTop}
        />
      
       <section className="mt-6">
           {filtered.length === 0 ? (
            <p className="text-white/70">No results found.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map(post => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          )}   
        </section>
      </div>
    </div>
    );
}