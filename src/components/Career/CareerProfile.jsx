import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobData } from '../../libs/data'
import jobHeader from "../../assets/jobposter.jpeg"
import LinkedIn from "../../assets/LinkedIn.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/Twiter.png"
import fb from "../../assets/Facebook.png"
import time from "../../assets/Group 2.png"
import jobType from "../../assets/Vector-2.png"
import posteDAte from "../../assets/Vector-3.png"
import exprience from "../../assets/Vector-4.png"
import vacancy from "../../assets/Vector-5.png"
import location from "../../assets/Vector.png"
import working from "../../assets/Group.png"




function CareerProfile() {
    const { id } = useParams()

    const job = jobData.find((job) => job.id == parseInt(id))


    if (!job) {
        return (
            <div className="min-h-screen text-white p-8 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Job Not Found</h1>
                    <Link to="/career" className="text-blue-400 hover:underline">
                        Back to Careers
                    </Link>
                </div>
            </div>
        )
    }


    return (
        <div className='mx-auto w-full container max-w-7xl px-3 sm:px-6 lg:px-8 mt-4 sm:mt-8 text-white overflow-x-hidden' >
            {/* Header */}
            
            <div className='relative w-full rounded-2xl overflow-hidden' >
                <img 
                src={jobHeader}
                 alt="job header"
                 className='w-full h-36 sm:h-56 md:h-80 lg:h-96 object-cover' />
                <div className='absolute top-2 sm:top-5 md:top-8 left-2 sm:left-5 md:left-8' >
                    <h1 className='text-[9px] sm:text-sm md:text-base text-white/90' >{job.category}</h1>
                    <p className='mt-1 text-base sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow' >
                        {job.title}
                    </p>
                </div>
            </div>

             {/* Main content */}
            <div className='mt-4 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-start' >
                {/* left column */}
                <main className="order-2 lg:order-1 lg:col-span-8 min-w-0" >
                    <section className="space-y-5 sm:space-y-8 md:space-y-10 pb-8 sm:pb-12" >
                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                Who Are We Looking For
                                </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                {job.whoWeAreLookingFor?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                What You Will Be Doing
                                </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                {job.whatYouWillBeDoing?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div >
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                Bonus Points for Familiarity with
                                </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm  text-gray-300 ">
                                {job.bonusPoints?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                Educational Requirement
                                </h2>
                            
                                <p className="mt-2 pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300 max-w-prose break-words">
                                {job?.educationalRequirement}
                                </p>
                        </div>

                        <div >
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                Salary</h2>
                            <ul className=" mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-1 text-xs sm:text-sm text-gray-300">
                                <li>{job?.salary?.range}</li>
                                <li>{job?.salary?.review}</li>
                            </ul>
                        </div>

                        <div >
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >Working Hours</h2>
                            <ul className="mt-2 pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                <li>{job?.workingHours}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >Working Days</h2>
                            <ul className="mt-2  pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                <li>{job?.workingDays?.weekly}</li>
                                <li>{job?.workingDays?.weekend}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >Perks &amp; Benefits You’ll Get </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                {job.perksAndBenefits?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>


                         <hr className="border-gray-800/70" />

                        <div >
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >
                                The Application Process
                                </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300 ">
                                {job.applicationProcess?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >Our Statement</h2>
                            <div className=' mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-300' >
                                <p>{job?.ourStatement}</p>
                            </div>
                        </div>
                        </section>

                        <div className='pt-2' >
                            <button className='w-full sm:w-80 md:w-96 py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 transition cursor-pointer rounded-lg font-semibold text-sm sm:text-base' >
                                Apply Now
                                </button>
                        </div>
                        
                    </main>


        {/* Right column (sidebar) */}

                <aside className='order-1 lg:order-2 lg:col-span-4 lg:justify-self-end w-full' >
                    <div className='w-full mx-auto lg:mx-0
                             max-w-[360px] sm:max-w-[420px] lg:max-w-[380px]
                             bg-white text-black shadow-lg rounded-2xl 
                     p-3 sm:px-5 space-y-5 lg:sticky lg:top-6 ' >

                        {/* Apply Button */}
                        <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition text-sm sm:text-base">
                            Apply Now
                        </button>

                        {/* job summary */}
                        <div>
                            <h2 className="text-base sm:text-xl font-bold">Job Summary</h2>
                            <ul className="mt-2 space-y-3 text-xs sm:text-sm">
                            <li className="flex items-start gap-2">
                                <img src={location} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                <span className="text-gray-600">Location 
                                    <br />
                                     <span className='text-black' >{job.location}</span>
                                     </span>
                            </li>

                           
                                <li className="flex items-start gap-2">
                                <img src={jobType} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">
                                        Job Type: 
                                        <br />
                                     <span className='text-black'>{job.jobType}</span>
                                        </span>
                                </li>
                         

         
                                <li className="flex items-start gap-2">
                                <img src={posteDAte} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">
                                        Date Posted: 
                                        <br /> 
                                    <span className='text-black'>{job.postedDate}</span>
                                    </span>
                                </li>
                            
                            
                                <li className="flex items-start gap-2">
                                <img src={exprience} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">
                                        Experience: 
                                        <br /> 
                                        <span className='text-black' >{job.experience}</span>
                                    </span>
                                </li>
                        

                                <li className="flex items-start gap-2">
                                <img src={time} alt="location" className='w-5 sm:w-6 mt-0.5'/>
                                    <span className="text-gray-600">
                                        Working Hours:
                                         <br />
                                    <span className='text-black' >{job.workingHours}</span>
                                     </span>
                                </li>
                       

                                <li className="flex items-center  gap-2">
                                <img src={working} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">
                                        Working Days
                                         <br />
                                     <span className='text-black' >{job.workingDays.weekly}</span>
                                     <br/>
                                     
                                     </span>
                                </li>
                        
                    
                                <li className="flex items-start gap-2">
                                <img src={vacancy} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">
                                        Vacancy:
                                         <br />
                                     <span className='text-black' >{job.noOfVacancy}</span>
                                     </span>
                                </li>
                                </ul>
                          

                            <div className='text-center mt-5' >
                                <Link to="/career" className=" text-blue-600 font-semibold hover:underline">
                                 View all jobs
                                </Link>
                            </div>

                        </div>
                    </div>

                 {/* Share */}
                    <div className=' mt-6' >
                    <p className='text-white text-center text-base sm:text-lg mb-2' >Share this:</p>
                    <div className='flex flex-wrap gap-3 sm:gap-6 items-center justify-center'>
                        <a href="#" aria-label="Share on Facebook">
                        <img src={fb} alt="facebook_icon" className='w-8 sm:w-12' />
                        </a>
                        <a href="#" aria-label="Share on Instagram">
                        <img src={instagram} alt="facebook_icon" className='w-8 sm:w-12' />
                        </a>
                       <a href="#" aria-label="Share on Twitter / X">
                       <img src={twitter} alt="facebook_icon" className='w-8 sm:w-12' />
                       </a>
                       <a href="#" aria-label="Share on LinkedIn">
                       <img src={LinkedIn} alt="facebook_icon" className='w-8 sm:w-12' />
                       </a>
                        
                    </div>
                    </div>
                    </aside>
                </div>

            </div>

    );
}

export default CareerProfile