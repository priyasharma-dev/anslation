import React, { useContext } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
 import { jobData } from '../../libs/data'
import {
  FiArrowLeft,
  FiShare2,
} from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { GrCurrency } from "react-icons/gr";
import { RiBriefcase4Line } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { motion } from 'framer-motion'
import { BlogContext } from '../../Context/BlogContext'

const WORKING_HOURS = "10 AM to 7 PM";
const WORKING_DAYS = "5 days a week";

const STATIC_PERKS = [
  "Creative freedom",
  "Growth opportunities",
  "Flexible working hours",
];

function CareerProfile() {
    const { id } = useParams();
    const navigate = useNavigate();
    //  const {jobData} = useContext(BlogContext)

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
        <div className="min-h-screen text-white">
        <div className="mt-20 max-w-[1004px] mx-auto flex items-center gap-4 ">
        <button
          onClick={() => navigate("/career")}
          className="w-8 h-8 flex items-center justify-center
          hover:bg-[#24354E] rounded-md transition-colors"
        >
          <FiArrowLeft size={25} />
        </button>

        <h1 className="text-[28px] font-bold leading-[34px]">{job.title}</h1>
      </div>
       {/* ===== Main Card ===== */}
      <motion.div
        className="mt-6 sm:mt-8 mx-auto w-full max-w-[1004px] rounded-[10px] border border-transparent 
        p-4 sm:p-6 md:p-8 lg:p-10"
        style={{
          background:
            "linear-gradient(98.28deg, #0F1929 -3.49%, #1B2635 106.83%)",
        }}
      >
        {/*Title + Share*/}
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-medium leading-[28px]" >
            {job.title}
          </h2>

          <button className="w-8 h-8 rounded-md flex items-center justify-center
                       transition-all duration-200
                       hover:bg-[#24354E] hover:scale-105">
            <FiShare2 size={20} color="#46A8FF" />
          </button>
        </div>

        {/*Location*/}
        <div className="mt-3 inline-flex items-center gap-1 h-8 border-[#9CA3B0] rounded-md">
          <CiLocationOn size={18} className="text-[#9CA3B0]" />
          <span
            className="text-[16px] font-medium leading-none"
          >
            {job.location}
          </span>
        </div>

        {/* Job Info Row */}
       <div className="mt-10 flex gap-10">
          <InfoItem icon={<RiBriefcase4Line />} label="Job Type" value={job.jobType} />
          <InfoItem icon={<GrCurrency />} label="Salary (Annual)" value={job.salary} />
          <InfoItem icon={<BsJournalBookmarkFill />} label="Experience" value={job.experienceRange} />
          <InfoItem icon={<FaRegClock />} label="Working Hours" value={WORKING_HOURS} />
          <InfoItem icon={<FaRegCalendarAlt/>} label="Working Days" value={WORKING_DAYS} />
        </div>
     
       {/* Posted + Apply */}
      <div className="mt-6 flex items-center justify-between">
      <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#1E293B] text-xs text-[#9CA3B0] gap-1">
      <FaClockRotateLeft size={16} className="text-[#9CA3B0]" />
       <span>Posted {job.posted}</span>
      </div>

      <motion.button
     whileHover={{ scale: 1.03 }}
     className="px-4 py-2 rounded-full bg-[#1677FF] text-white font-semibold"
     style={{
      background: "linear-gradient(180deg, rgba(0, 104, 255, 0.8) -13.78%, rgba(0, 163, 255, 0.8) 110.46%)",

     }}
     >
     Apply Now
     </motion.button>
    </div>

        <hr className="my-8 border-[#293444]" />

        {/*Description Sections*/}
        <div className="space-y-10 max-w-[900px]">

        {job.whoWeAreLookingFor?.length > 0 && (
       <Section title="What We're Looking For">
      <ol className="list-decimal pl-6 text-[#CBD5E1] leading-7 space-y-3">
        {job.whoWeAreLookingFor.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
      </Section>
     )}


          {/* Responsibilities */}
          {job.responsibilities?.length > 0 && (
            <Section title="Key Responsibilities">
              <ol className="list-decimal pl-6 text-[16px]leading-7 text-[#CBD5E1] space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </Section>
          )}

          {/*Experience Section */}
         {job.experience?.length > 0 && (
         <Section title="Experience">
          <ol className="list-decimal pl-6 text-[16px] leading-7 text-[#CBD5E1] space-y-3">
          {job.experience.map((item, i) => (
          <li key={i}>{item}</li>
         ))}
        </ol>
         </Section>
        )}

          {/* Perks */}
          <Section title="Perks">
      <div className="flex flex-wrap gap-4">
    {STATIC_PERKS.map((perk, index) => (
      <span
        key={index}
        className="
          bg-[#24354E]
          text-[16px]
          font-medium
          text-white
          px-5
          py-2
          rounded-full
          leading-7
        "
      >
        {perk}
      </span>
    ))}
  </div>
</Section>
        

         {/* Number of Openings */}
          {job.openings && (
            <Section title="Number of Openings">
              <p className="text-[16px] text-[#CBD5E1]">
                {job.openings}
              </p>
            </Section>
          )}

           <hr className="my-8 border-[#293444]" />
        

        {/* ===== Apply Button ===== */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-[317px] h-11 rounded-[40px] px-5 py-2.5 font-semibold text-white flex items-center justify-center gap-2.5"
            style={{
      background:
        "linear-gradient(180deg, rgba(0, 104, 255, 0.8) -13.78%, rgba(0, 163, 255, 0.8) 110.46%)",
    }}
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1 min-w-[120px]">
    <div className="flex items-center gap-1 text-[#9CA3B0] text-xs">
      {icon}
      {label}
    </div>
    <span className="text-sm font-medium">{value}</span>
  </div>
);
const Section = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-[24px] font-semibold leading-[30px]">
      {title}
    </h3>
    {children}
  </div>
);


export default CareerProfile;