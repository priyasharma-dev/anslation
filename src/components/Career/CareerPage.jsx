
import {jobData} from "../../libs/data.js"
import React,{ useState,useRef,useEffect } from 'react';
import { Link } from 'react-router-dom';

function CareerPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const categories = [
    { name: 'ALL', count: jobData.length },
    { name: 'ADMIN', count: jobData.filter(job => job.category === 'ADMIN').length },
    { name: 'ENGINEERING', count: jobData.filter(job => job.category === 'ENGINEERING').length },
    { name: 'SUPPORT', count: jobData.filter(job => job.category === 'SUPPORT').length },
    { name: 'DESIGN', count: jobData.filter(job => job.category === 'DESIGN').length },
    { name: 'DIGITAL MARKETING', count: jobData.filter(job => job.category === 'DIGITAL MARKETING').length }
  ];

  const filteredJobs = activeFilter === 'ALL'
    ? jobData
    : jobData.filter(job => job.category === activeFilter);

  const handleFilterClick = (categoryName) => {
    console.log('Clicked:', categoryName); // Debug log
    setActiveFilter(categoryName);
  };
  const listRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

const updateArrows = () => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

   useEffect(() => {
    updateArrows();
    const el = listRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollTabs = (dir) => {
    const el = listRef.current;
    if (!el) return;
    const distance = Math.round(el.clientWidth * 0.8); // scroll ~80% of visible rail
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
      <div className="min-h-screen text-white px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 ">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-3 sm:mb-4 ">WORK AT ANSLATION</p>
            <h1
             className=" font-bold leading-tight mb-6 sm:mb-8 whitespace-nowrap tracking-tight "
             style={{
              fontSize:"clamp(1rem,6.5vw,3.75rem)",
             }}
             >
              We're always seeking talent.
             </h1>
            
            {/* Filter Tabs */}
          <div className="border-t border-gray-700 pt-5 sm:pt-8">
             <div className="relative overflow-x-hidden overflow-y-hidden lg:overflow-visible">
             {/* Left arrow */}
              {/* <div className="absolute inset-y-0 left-2 flex items-center z-20 lg:hidden"> */}
         
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollTabs(-1)}
                disabled={!canLeft}
                // className={`group absolute mx-1 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center
                //             rounded-full bg-black/50 backdrop-blur
                //             border border-white/10 shadow  text-white/90 transition
                //              hover:text-white
                //     hover:ring-2 hover:ring-blue-500/40 hover:shadow-2xl
                //     hover:scale-105 active:scale-95
                //             ${canLeft ? "" : "opacity-40 cursor-not-allowed"}`}
                 className={`group absolute top-1/2 -translate-y-1/2 -left-3 z-20 lg:hidden
                  flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center
                  rounded-full bg-black/50 backdrop-blur border border-white/10 shadow
                  text-white/90 transition hover:text-white hover:ring-2 hover:ring-blue-500/40
                  hover:shadow-2xl hover:scale-105 active:scale-95
                  ${canLeft ? "" : "opacity-40 cursor-not-allowed pointer-events-none"}`}
              >
                 {/* crisp SVG chevron */}
        <svg 
        viewBox="0 0 24 24" 
        className="h-4 w-4 sm:h-5 sm:w-5"
         fill="none" stroke="currentColor" strokeWidth="2"
         >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      </button>
    {/* </div> */}

              {/* Right arrow */}
              {/* <div className="absolute inset-y-0 right-2 flex items-center z-20 lg:hidden"> */}
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollTabs(1)}
                disabled={!canRight}
                // className={`group mx-1 
                //             flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11
                //              rounded-full bg-black/50 backdrop-blur
                //             border border-white/10 shadow text-white/90 transition hover:text-white
                //     hover:ring-2 hover:ring-blue-500/40 hover:shadow-2xl
                //     hover:scale-105 active:scale-95
                //             ${canRight ? "" : "opacity-40 cursor-not-allowed"}`}
                 className={`group absolute top-1/2 -translate-y-1/2 -right-3 z-20 lg:hidden
                  flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center
                  rounded-full bg-black/50 backdrop-blur border border-white/10 shadow
                  text-white/90 transition hover:text-white hover:ring-2 hover:ring-blue-500/40
                  hover:shadow-2xl hover:scale-105 active:scale-95
                  ${canRight ? "" : "opacity-40 cursor-not-allowed pointer-events-none"}`}
              >
                <svg 
                viewBox="0 0 24 24" 
                className="h-4 w-4sm:h-5 sm:w-5 " 
                fill="none" stroke="currentColor" strokeWidth="2">
           <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
        </svg>
              </button>
              {/* </div> */}

 {/* Scroll rail */}
              <div
                  role="tablist"
                  aria-label="Job categories"
                  aria-orientation="horizontal"
                  ref={listRef}
                  onKeyDown={(e) => {
           // keyboard navigation: ← → Home End
              const tabs = Array.from(e.currentTarget.querySelectorAll('[role="tab"]'));
              const current = document.activeElement;
             const i = tabs.indexOf(current);
             if (i === -1) return;
             let nextIdx = i;
             if (e.key === 'ArrowRight') nextIdx = (i + 1) % tabs.length;
              if (e.key === 'ArrowLeft')  nextIdx = (i - 1 + tabs.length) % tabs.length;
              if (e.key === 'Home')       nextIdx = 0;
              if (e.key === 'End')        nextIdx = tabs.length - 1;
              if (nextIdx !== i) {
          e.preventDefault();
          tabs[nextIdx].focus();
          if (window.innerWidth < 640) {
            tabs[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
          }
        }
      }}
    
                  className="
                px-10 sm:px-8 lg:px-0
               flex flex-nowrap lg:flex-wrap
               items-center
                gap-1.5 sm:gap-2
                overflow-x-auto lg:overflow-visible
                overflow-y-hidden
                overscroll-x-contain scroll-px-4 touch-pan-x
                snap-x snap-mandatory 
           scrollbar-thin scrollbar-thumb-gray-700/60 scrollbar-track-transparent 
                 no-scrollbar">

                {categories.map((category) => (
                  
                  <button
                    key={category.name}
                    role="tab"
                    type="button"
                   tabIndex={0}
                   aria-selected={activeFilter === category.name}

                    onClick={(e) => {
                      handleFilterClick(category.name);
                       // center the clicked tab on mobile
                       if(window.innerWidth<640){
                       e.currentTarget.scrollIntoView({
                         behavior: 'smooth',
                          inline: 'center', 
                          block: 'nearest' });
                       }
                    }}
                    className={`
                     shrink-0 sm:shrink whitespace-nowrap sm:whitespace-normal 
                     px-2.5 sm:px-3.5 md:px-5 cursor-pointer
                      py-1.5 sm:py-2 md:py-2.5 
                       text-xs sm:text-[13px] md:text-sm
                        leading-5 tracking-tight  
                       rounded  md:rounded-md
                        font-medium 
                        transition-all relative z-10 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-0
                     ${
                      activeFilter === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name} {category.name !== 'ALL' && `(${category.count})`}
                  </button>
                ))}
              </div>

          {/* subtle edge fades on mobile to hint scroll */}
             <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#061226] to-transparent sm:hidden" />
             <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#061226] to-transparent sm:hidden" />
              </div>
         </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-3 sm:space-y-4">
            {filteredJobs.map(job => (
              <Link key={job.id} to={`/career/${job.id}`}>
              <div
                key={job.id}
                className="bg-gray-900/50 
                my-3 sm:my-4 md:my-5
                backdrop-blur
                 border border-gray-800  rounded-md sm:rounded-xl 
                 p-2.5 sm:p-4 md:p-6
                  hover:border-gray-700 transition-all 
                  cursor-pointer group overflow-hidden
                   max-w-md sm:max-w-none mx-auto sm:mx-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 ">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-1.5 sm:mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-sm sm:text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-4 ">{job.description}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 self-start lg:self-auto">
                    <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide order-2 sm:order-1">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-400 order-1 sm:order-none">
                      <span className="text-xs sm:text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-8 sm:py-12 md:py-16">
              <p className="text-base sm:text-lg text-gray-400 ">No positions available in this category at the moment.</p>
            </div>
          )}
        </div>
      </div>
  
  )
}

export default CareerPage