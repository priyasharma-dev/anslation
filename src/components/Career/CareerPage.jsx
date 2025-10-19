import React, { useState, useEffect } from 'react'
import { jobData } from "../../libs/data.js"
import { Link } from 'react-router-dom';

function CareerPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

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

  return (
    <>
       <div>
       <div
          style={{
            position: "absolute",
            width: "600.38px",
            height: "80.86px",
            right: "-100px",// shifted from left to right for responsiveness
            top: "70.71px",
            background:
              "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
            filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,
          }}
        >
        </div>
        <div 
           style={{
            position: "absolute",
            width: "400.38px",
            height: "65.86px",
            right: "-75px",// shifted from left to right for responsiveness
            top: "200.71px",
            background:
              "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
            filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,
          }}
        
        >
         
       

        </div>
     

      <div className="min-h-screen text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">WORK AT ANSLATION</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">We're always seeking talent.</h1>

            {/* Filter Tabs */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-wrap gap-3 scale-z-200 cursor-pointer">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => handleFilterClick(category.name)}
                    className={`px-6 cursor-pointer py-2.5 rounded-md font-medium transition-all relative z-10 ${
                      activeFilter === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category.name} {category.name !== 'ALL' && `(${category.count})`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job Listings (paginated) */}
          <div className="space-y-4">
            {currentJobs.map(job => (
              <Link key={job.id} to={`/career/${job.id}`}>
                <div
                  className="bg-gray-900/50 my-5 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-400">{job.description}</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <span className="text-sm text-gray-400 uppercase tracking-wide">
                        {job.department}
                      </span>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No positions available in this category at the moment.</p>
            </div>
          )}

          {/* Pagination controls */}
          {filteredJobs.length > 0 && totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Showing {startIdx + 1}–{Math.min(startIdx + PAGE_SIZE, filteredJobs.length)} of {filteredJobs.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-md border transition ${
                    page === 1
                      ? 'cursor-not-allowed border-gray-800 text-gray-600 bg-gray-900/50'
                      : 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Prev
                </button>

                {/* current page / total */}
                <span className="text-sm text-gray-300 px-2">
                  Page {page} of {totalPages}
                </span>

                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-md border transition ${
                    page === totalPages
                      ? 'cursor-not-allowed border-gray-800 text-gray-600 bg-gray-900/50'
                      : 'border-gray-700 bg-gray-800 hover:bg-gray-700 text-white'
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
  )
}

export default CareerPage
