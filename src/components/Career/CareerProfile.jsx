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
                    <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
                    <Link to="/career" className="text-blue-400 hover:underline">
                        Back to Careers
                    </Link>
                </div>
            </div>
        )
    }





    return (
        <div className='mx-auto container w-7xl mt-5' >
            <div className='border-white z-30 border-6 relative w-full h-50 rounded-2xl' >
                <img src={jobHeader} alt="jobPoster" className='w-7xl h-47   mx-auto' />
                <div className='absolute  top-15 left-15 ' >
                    <h1 className='text-xl' >{job.category}</h1>
                    <p className='text-6xl font-extrabold' >{job.title}</p>
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


                        <div className=' border w-full '></div>

                        <div className='py-10' >
                            <h2 className='text-2xl font-extrabold ' >The Application Process</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {job.applicationProcess?.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-extrabold ' >Our Statement</h2>
                            <div className=' w-xl ' >
                                <p>{job?.ourStatement}</p>
                            </div>
                        </div>
                        <div className='py-10' >
                            <button className='w-96 py-2 bg-[#286CE6] cursor-pointer rounded ' >Apply Now</button>
                        </div>

                        <div className='border-1 mt-10 w-full '></div>

                    </div>
                </div>

                {/* right div */}
                <div className='p-10 ' >
                    <div className=' w-96 bg-white  shadow-lg rounded-lg p-6 space-y-6' >

                        {/* Apply Button */}
                        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg">
                            Apply Now
                        </button>

                        {/* job summary */}
                        <div>
                            <h2 className="text-xl text-black font-bold">Job Summary</h2>
                            <li className="flex items-center gap-3 py-5">
                                <img src={location} alt="location" className='w-8' />
                                <span className="text-gray-600">Location <br /> <p className='text-black' >{job.location}</p></span>
                            </li>

                            <div className='py-5' >
                                <li className="flex items-center gap-3">
                                <img src={jobType} alt="location" className='w-8' />
                                    <span className="text-gray-600">Job Type: <br /> <p className='text-black'>{job.jobType}</p></span>
                                </li>
                            </div>

                            <div className='py-5' >
                                <li className="flex items-center gap-3">
                                <img src={posteDAte} alt="location" className='w-8' />
                                    <span className="text-gray-600">Date Posted: <br /> <p className='text-black'>{job.postedDate}</p></span>
                                </li>
                            </div>

                            <div className='py-5' >
                                <li className="flex items-center gap-3">
                                <img src={exprience} alt="location" className='w-8' />
                                    <span className="text-gray-600">Exprience: <br /> <p className='text-black' >{job.experience}</p></span>
                                </li>
                            </div>

                            <div className='py-5' >
                                <li className="flex items-center gap-3">
                                <img src={time} alt="location" className='w-8' />
                                    <span className="text-gray-600">Working Hours: <br /> <p className='text-black' >{job.workingHours}</p></span>
                                </li>
                            </div>

                            <div className='py-5  ' >
                                <li className="flex items-center  gap-3">
                                <img src={working} alt="location" className='w-8' />
                                    <span className="text-gray-600">Working Days <br /> <p className='text-black' >{job.workingDays.weekly}</p><span className='text-black' >Weekend : {job.workingDays.weekly}</span></span>
                                </li>
                            </div>

                            <div className='py-5' >
                                <li className="flex items-center gap-3">
                                <img src={vacancy} alt="location" className='w-8' />
                                    <span className="text-gray-600">Vacancy: <br /> <p className='text-black' >{job.noOfVacancy}</p></span>
                                </li>
                            </div>

                            <div className='text-center mt-4' >
                                <li className="mt-4 items-center gap-3">
                                    <a href="#" className="text-blue-600  font-semibold">
                                        View all job
                                    </a>
                                </li>
                            </div>

                        </div>
                    </div>

                    <div className=' my-10' >
                    <p className='text-white text-center text-xl py-3' >Share this:</p>
                    <div className='flex gap-3 items-center justify-around'>
                        <a href="">
                        <img src={fb} alt="facebook_icon" className='w-16' />
                        </a>
                        <a href="">
                        <img src={instagram} alt="facebook_icon" className='w-16' />
                        </a>
                       <a href="">
                       <img src={twitter} alt="facebook_icon" className='w-16' />
                       </a>
                       <a href="">
                       <img src={LinkedIn} alt="facebook_icon" className='w-16' />
                       </a>
                        
                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CareerProfile