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
import { CareerProfileGradiantBottom, CareerProfileGradiantop } from '../../gradient/gradiant'
import { motion } from 'framer-motion'




function CareerProfile() {
    const { id } = useParams()

    const job = jobData.find((job) => job.id == parseInt(id))


    if (!job) {
        return (
            <div className="min-h-screen text-white p-8 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl  sm:text-3xl md:text-4xl font-bold mb-4">Job Not Found</h1>
                    <Link to="/career" className="text-blue-400 hover:underline">
                        Back to Careers
                    </Link>
                </div>
            </div>
        )
    }





    return (

        <div className='relative' >
            <div>
                <CareerProfileGradiantop />
            </div>
            <div>
                <CareerProfileGradiantBottom />
            </div>
            <div className='mx-auto container w-7xl mt-5' >
                <div className='border-white z-30 border-6 relative w-full h-50 rounded-2xl' >
                    <img src={jobHeader} alt="jobPoster" className='w-7xl h-47   mx-auto' />
                    <div className='absolute  top-15 left-15 ' >
                        <h1 className='text-xl' >{job.category}</h1>
                        <motion.p
                            className='text-6xl font-extrabold' >

                            <motion.span
                                style={{ display: "inline-block", clipPath: "inset(0 100% 0 0)" }}
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            >
                                {job.title}
                            </motion.span>


                        </motion.p>
                    </div>
                </div>
                <div className='flex justify-between ' >
                    {/* left div */}
                    <div >
                        <div className='px-10 py-10' >
                            <div>
                                <h2 className='text-2xl font-extrabold ' >Who Are We Looking For</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {job.whoWeAreLookingFor?.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >What You Will Be Doing</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {job.whatYouWillBeDoing?.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >Bonus Points for Familiarity with</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {job.bonusPoints?.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className='text-2xl font-extrabold ' >Educational Requirement</h2>
                                <div className='w-xl ' >
                                    <p>{job?.educationalRequirement}</p>
                                </div>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >Salary</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>{job?.salary?.range}</li>
                                    <li>{job?.salary?.review}</li>
                                </ul>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >Working Hours</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>{job?.workingHours}</li>
                                </ul>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >Working Days</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>{job?.workingDays?.weekly}</li>
                                    <li>{job?.workingDays?.weekend}</li>
                                </ul>
                            </div>

                            <div className='py-10' >
                                <h2 className='text-2xl font-extrabold ' >Perks & Benefits You’ll Get </h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    {job.perksAndBenefits?.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold' >
                                Salary
                                </h2>
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
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold' >Working Days</h2>
                            <ul className="mt-2 pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                <li>{job?.workingDays?.weekly}</li>
                                <li>{job?.workingDays?.weekend}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >Perks & Benefits You’ll Get </h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                {job.perksAndBenefits?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>


                            <div className=' border w-full '></div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold ' >The Application Process</h2>
                            <ul className="mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                                {job.applicationProcess?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-sm sm:text-lg md:text-2xl font-extrabold' >Our Statement</h2>
                            <div className='mt-2 list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-[11px] sm:text-sm text-gray-300' >
                                <p>{job?.ourStatement}</p>
                            </div>
                        </div>
                        <div className='pt-2' >
                            <button className='w-full sm:w-80 md:w-96 py-2 sm:py-3 bg-blue-600 hover:bg-blue-500 transition cursor-pointer rounded-lg font-semibold text-sm sm:text-base ' >Apply Now</button>
                        </div>

                        <div className='border-1 mt-10 w-full '></div>
                        </section> 
                    </main>
                </div>

                {/* right div */}
                <aside className='order-1 lg:order-2 lg:col-span-4 lg:justify-self-end w-full' >
                    <div
                     className='w-full mx-auto lg:mx-0
                             max-w-[360px] sm:max-w-[420px] lg:max-w-[380px]
                             bg-white text-black shadow-lg rounded-2xl 
                     p-3 sm:px-5 space-y-5 lg:sticky lg:top-6 ' >

                        {/* Apply Button */}
                        <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg  hover:bg-blue-500 transition text-sm sm:text-base">
                            Apply Now
                        </button>

                        {/* job summary */}
                        <div>
                            <h2 className="text-base sm:text-xl text-black font-bold">Job Summary</h2>
                             <ul className="mt-2 space-y-3 text-xs sm:text-sm">
                            <li className="flex items-center gap-2">
                                <img src={location} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                <span className="text-gray-600">Location <br /> 
                                <span className='text-black' >{job.location}</span>
                                </span>
                            </li>

                            
                                <li className="flex items-center gap-2">
                                <img src={jobType} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">Job Type: 
                                        <br />
                                         <span className='text-black'>{job.jobType}</span>
                                         </span>
                                </li>
                        

                            
                                <li className="flex items-center gap-2">
                                <img src={posteDAte} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">Date Posted:
                                     <br /> 
                                     <span className='text-black'>{job.postedDate}</span>
                                     </span>
                                </li>
                            

                                <li className="flex items-center gap-2">
                                <img src={exprience} alt="location" className='w-5 sm:w-6 mt-0.5' />
                                    <span className="text-gray-600">Exprience: 
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
                                <li className="mt-4 items-center gap-3">
                                    <a href="#" className="text-blue-600  font-semibold">
                                        View all job
                                    </a>
                                </li>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
                    <div className=' mt-6' >
                    <p className='text-white text-center text-base sm:text-lg mb-2' >Share this:</p>
                    <div className='flex flex-wrap gap-3 sm:gap-6 items-center justify-around'>
                        <a href="">
                        <img src={fb} alt="facebook_icon" className='w-8 sm:w-12' />
                        </a>
                        <a href="">
                        <img src={instagram} alt="facebook_icon" className='w-8 sm:w-12' />
                        </a>
                       <a href="">
                       <img src={twitter} alt="facebook_icon" className='w-8 sm:w-12' />
                       </a>
                       <a href="">
                       <img src={LinkedIn} alt="facebook_icon" className='w-8 sm:w-12' />
                       </a>
                        
                    </div>
                    </div>
                </aside>

            </div>

        </div>
        
    )
}

export default CareerProfile