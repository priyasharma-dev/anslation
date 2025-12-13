import React, { useState, useEffect, useRef, useContext } from 'react'
import { jobData } from "../../libs/data.js"
import { Link } from 'react-router-dom';
import { CareerGradiantBottom, CareerGradiantTop } from '../../gradient/gradiant.jsx';
import { motion } from 'framer-motion';
import { BlogContext } from '../../Context/BlogContext.jsx';
import WorkIcon from "../../assets/icons/WorkAt.svg";
import LocationIcon from "../../assets/icons/location.svg";
import './CareerPage.css';

function CareerPage() {
  // const {jobData} = useContext(BlogContext)
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  const categories = [
    { name: 'ALL', count: jobData.length },
    { name: 'ADMIN', count: jobData.filter(job => job.category === 'ADMIN').length },
    { name: 'ENGINEERING', count: jobData.filter(job => job.category === 'ENGINEERING').length },
    { name: 'DESIGN', count: jobData.filter(job => job.category === 'DESIGN').length },
    { name: 'DIGITAL MARKETING', count: jobData.filter(job => job.category === 'DIGITAL MARKETING').length },
    {name : "HR" , count : jobData.filter((job)=> job.category === "HR" ).length},
    { name: 'OPERATIONS', count: jobData.filter(job => job.category === 'OPERATIONS').length },
    {name : "FINANCE" , count : jobData.filter((job)=> job.category === "FINANCE" ).length}
  ];

  console.log("job data is here for contatc us page" , jobData)

  const filteredJobs = activeFilter === 'ALL'
    ? jobData
    : jobData.filter(job => job.category === activeFilter);

  // reset to page 1 whenever the filter changes
  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE));
  const startIdx = (page - 1) * PAGE_SIZE;
  const currentJobs = filteredJobs.slice(startIdx, startIdx + PAGE_SIZE);

   const handleFilterClick = (categoryName) => {
     setActiveFilter(categoryName);
   };

  const listRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const scrollBy = (offset) => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

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
    const distance = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
    <>
      <div>
        {/* <div>
          <CareerGradiantTop />
        </div> */}

        {/* <div>
          <CareerGradiantBottom />
        </div> */}

        <div className="career-page">
          <div className="career-container">
         <section className="w-full relative flex flex-col items-center mt-2">
        {/* Badge with left-aligned icon */}
        <div
          className="flex items-center space-x-2 px-4"
          style={{
            width: '143px',
            height: '24px',
            borderRadius: '9999px',
            border: '0.5px solid #1F40B0',
            background: '#111E3D',
          }}
        >
          <img src={WorkIcon} alt="Work Icon" className="w-4 h-4" />
          <span className="text-white text-[10px] font-medium"style={{ color: '#61A6FB' }} >Work At Anslation</span>
        </div>
          {/* Heading */}
        <h1
          className="text-center font-bold mt-4"
          style={{
            width: '634px',
            height: '49px',
            fontFamily: 'Helvetica Neue',
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '100%',
            color: '#FFFFFF',
          }}
        >
          We're always seeking{' '}
          <span
            className="font-bold"
            style={{
              fontFamily: 'Helvetica Neue',
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '100%',
              background: '#FFFFFF',
              WebkitBackgroundClip: 'text',
              color: '#5DA7FA' ,
            }}
          >
            talent
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p
          className="text-center mt-4"
          style={{
            width: '634px',
            height: '56px',
            fontFamily: 'Helvetica Neue',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '140%',
            color: '#9C9C9C',
          }}
        >
          Join a team that values innovation, growth, and a people-first culture. 
          We're building the future of business solutions together.
        </p>
      </section>
            

            {/* Filter Tabs */}
            <div className="filter-section">
              <div className="filter-container">
                {/* Left arrow */}
                <button
                  type="button"
                  aria-label="Scroll left"
                  onClick={() => scrollTabs(-1)}
                  disabled={!canLeft}
                  className={`scroll-arrow scroll-arrow-left ${!canLeft ? 'disabled' : ''}`}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="arrow-icon"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  type="button"
                  aria-label="Scroll right"
                  onClick={() => scrollTabs(1)}
                  disabled={!canRight}
                  className={`scroll-arrow scroll-arrow-right ${!canRight ? 'disabled' : ''}`}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="arrow-icon" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                  </svg>
                </button>

                {/* Scroll rail */}
                <div
                  role="tablist"
                  aria-label="Job categories"
                  aria-orientation="horizontal"
                  ref={listRef}
                  onKeyDown={(e) => {
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
                  className="filter-tabs"
                >
                  {categories.map(category => (
                    <button
                      key={category.name}
                      role="tab"
                      type="button"
                      tabIndex={0}
                      aria-selected={activeFilter === category.name}
                      onClick={(e) => {
                        handleFilterClick(category.name);
                        if(window.innerWidth < 640){
                          e.currentTarget.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'center', 
                            block: 'nearest' 
                          });
                        }
                      }}
                      className={`filter-tab ${activeFilter === category.name ? 'active' : ''}`}
                    >
                      {category.name} {category.name !== 'ALL' && `(${category.count})`}
                    </button>
                  ))}
                </div>

                {/* Edge fades */}
                <div className="edge-fade edge-fade-left" />
                <div className="edge-fade edge-fade-right" />
              </div>
            </div>

            <div className="job-cards">
  {currentJobs.map(job => (
    <Link key={job.id} to={`/career/${job.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.01,
          borderColor: "#5DA7FA",
          transition: { type: "spring", mass: 1, stiffness: 100, damping: 15 },
        }}
        className="job-card"
      >
        {/* Top row with title */}
        <div className="job-card-header">
          <h3 className="job-title">{job.title}</h3>
        </div>

        {/* Category and location row */}
        <div className="job-card-meta">
          <span className="job-category-badge">{job.category}</span>
          <span className="job-location">{job.location}</span>
        </div>

        {/* Description */}
        <p className="job-description">
          <img src={LocationIcon} alt="Location" />
          {job.description}</p>

        {/* CTA */}
        <div className="job-card-footer">
          <span className="view-role">View Role →</span>
        </div>
      </motion.div>
    </Link>
  ))}
</div>


            {/* Pagination controls */}
            {filteredJobs.length > 0 && totalPages > 1 && (
              <div className="pagination">
                {/* Showing count */}
                <span className="pagination-info">
                  Showing {startIdx + 1}–{Math.min(startIdx + PAGE_SIZE, filteredJobs.length)} of {filteredJobs.length}
                </span>

                <div className="pagination-controls">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`pagination-btn ${page === 1 ? 'disabled' : ''}`}
                  >
                    Prev
                  </button>

                  <span className="pagination-current">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`pagination-btn ${page === totalPages ? 'disabled' : ''}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerPage;
