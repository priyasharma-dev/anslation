import React, { useState, useEffect, useRef, useContext } from "react";
import { jobData } from "../../libs/data.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlogContext } from "../../Context/BlogContext.jsx";
import WorkIcon from "../../assets/icons/WorkAt.svg";
import { CiLocationOn } from "react-icons/ci";

import "./CareerPage.css";

function CareerPage() {
  // const {jobData} = useContext(BlogContext)
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  const categories = [
    { name: "ALL", count: jobData.length },
    {
      name: "ADMIN",
      count: jobData.filter((job) => job.category === "ADMIN").length,
    },
    {
      name: "ENGINEERING",
      count: jobData.filter((job) => job.category === "ENGINEERING").length,
    },
    {
      name: "SUPPORT",
      count: jobData.filter((job) => job.category === "SUPPORT")
        .length,
    },
    {
      name: "DESIGN",
      count: jobData.filter((job) => job.category === "DESIGN").length,
    },
    {
      name: "DIGITAL MARKETING",
      count: jobData.filter((job) => job.category === "DIGITAL MARKETING")
        .length,
    },
  ];

  console.log("job data is here for contatc us page", jobData);

  const filteredJobs =
    activeFilter === "ALL"
      ? jobData
      : jobData.filter((job) => job.category === activeFilter);

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
      listRef.current.scrollBy({ left: offset, behavior: "smooth" });
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

        <div className="career-page">
          <div className="career-container">
            <section className="w-full relative flex flex-col items-center mt-2">
              {/* Badge with left-aligned icon */}
              <div className="work-badge flex items-center gap-2">
                <img src={WorkIcon} alt="Work Icon" className="w-4 h-4" />
                <span className="badge-text">Work At Anslation</span>
              </div>
              {/* Heading */}
              <h1
                className="text-center font-bold mt-4"
                style={{
                  width: "634px",
                  height: "49px",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "100%",
                  color: "#FFFFFF",
                }}
              >
                We're always seeking{" "}
                <span
                  className="font-bold"
                  style={{
                    fontWeight: 700,
                    fontSize: "40px",
                    lineHeight: "100%",
                    background: "#FFFFFF",
                    WebkitBackgroundClip: "text",
                    color: "#5DA7FA",
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
                  width: "634px",
                  height: "56px",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "140%",
                  color: "#9C9C9C",
                }}
              >
                Join a team that values innovation, growth, and a people-first
                culture. We're building the future of business solutions
                together.
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
                  className={`scroll-arrow scroll-arrow-left ${
                    !canLeft ? "disabled" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 18l-6-6 6-6"
                    />
                  </svg>
                </button>

                {/* Right arrow */}
                <button
                  type="button"
                  aria-label="Scroll right"
                  onClick={() => scrollTabs(1)}
                  disabled={!canRight}
                  className={`scroll-arrow scroll-arrow-right ${
                    !canRight ? "disabled" : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6l6 6-6 6"
                    />
                  </svg>
                </button>

                {/* Scroll rail */}
                <div
                  role="tablist"
                  aria-label="Job categories"
                  aria-orientation="horizontal"
                  ref={listRef}
                  onKeyDown={(e) => {
                    const tabs = Array.from(
                      e.currentTarget.querySelectorAll('[role="tab"]')
                    );
                    const current = document.activeElement;
                    const i = tabs.indexOf(current);
                    if (i === -1) return;
                    let nextIdx = i;
                    if (e.key === "ArrowRight") nextIdx = (i + 1) % tabs.length;
                    if (e.key === "ArrowLeft")
                      nextIdx = (i - 1 + tabs.length) % tabs.length;
                    if (e.key === "Home") nextIdx = 0;
                    if (e.key === "End") nextIdx = tabs.length - 1;
                    if (nextIdx !== i) {
                      e.preventDefault();
                      tabs[nextIdx].focus();
                      if (window.innerWidth < 640) {
                        tabs[nextIdx].scrollIntoView({
                          behavior: "smooth",
                          inline: "center",
                          block: "nearest",
                        });
                      }
                    }
                  }}
                  className="filter-tabs"
                >
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      role="tab"
                      type="button"
                      tabIndex={0}
                      aria-selected={activeFilter === category.name}
                      onClick={(e) => {
                        handleFilterClick(category.name);
                        if (window.innerWidth < 640) {
                          e.currentTarget.scrollIntoView({
                            behavior: "smooth",
                            inline: "center",
                            block: "nearest",
                          });
                        }
                      }}
                      className={`filter-tab ${
                        activeFilter === category.name ? "active" : ""
                      }`}
                    >
                      {category.name} ({category.count})

                    </button>
                  ))}
                </div>

                {/* Edge fades */}
                <div className="edge-fade edge-fade-left" />
                <div className="edge-fade edge-fade-right" />
              </div>
            </div>

            {/* jobcards */}
            <div className={`job-cards ${
    currentJobs.length === 0 ? "no-jobs-state" : ""
  }`}>
              {currentJobs.length > 0 ? (
                currentJobs.map((job) => (
                  <Link key={job.id} to={`/career/${job.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{
                        scale: 1.01,
                        boxShadow: "0 8px 20px rgba(93,167,250,0.3)",
                      }}
                      className="job-card"
                    >
                      <h3 className="job-title">{job.title}</h3>
                      {/* Description */}
                      <p className="job-description">{job.description}</p>
                      {/* Meta row */}
                      <div className="job-card-meta">
                        <span className="job-category-badge">
                          {job.category}
                        </span>

                        {/* Location */}
                        <span className="job-location">
                          <span>
                            <CiLocationOn size={18} className="text-[#9CA3B0]" />
                          </span>

                          {job.location}
                        </span>
                      </div>

                      {/* Divider */}
                      <div className="job-divider" />

                      {/* Footer */}
                      <div className="job-card-footer">
                        <span className="view-role">View Role</span>
                        <span className="arrow">→</span>
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                <div className="no-jobs-wrapper">
                  <p className="no-jobs-title">
                    No positions available in this category at the moment.
                  </p>
                  <p className="no-jobs-subtitle">
                    Check back soon or subscribe to our newsletter for updates
                  </p>
                </div>
              )}
            </div>

            {/* Pagination controls */}
            {filteredJobs.length > 0 && totalPages > 1 && (
              <div className="pagination">
                {/* Showing count */}
                <span className="pagination-info">
                  Showing {startIdx + 1}–
                  {Math.min(startIdx + PAGE_SIZE, filteredJobs.length)} of{" "}
                  {filteredJobs.length}
                </span>

                <div className="pagination-controls">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className={`pagination-btn ${page === 1 ? "disabled" : ""}`}
                  >
                    Prev
                  </button>

                  <span className="pagination-current">
                    Page {page} of {totalPages}
                  </span>

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className={`pagination-btn ${
                      page === totalPages ? "disabled" : ""
                    }`}
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
