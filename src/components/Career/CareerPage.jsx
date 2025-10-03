import React from 'react'
import {jobData} from "../../libs/data.js"
import { useState } from 'react';
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


  return (
    <>
      <div className="min-h-screen text-white p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">WORK AT ANSLATION</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">We're always seeking talent.</h1>
            
            {/* Filter Tabs */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-wrap gap-3 scale-z-200 cursor-pointer ">
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

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <Link key={job.id} to={`/career/${job.id}`}>
              <div
                key={job.id}
                className="bg-gray-900/50 my-5  backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between  ">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
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
        </div>
      </div>
    </>
  )
}

export default CareerPage