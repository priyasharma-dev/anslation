import React from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Users } from "lucide-react";

const leaders = [
  {
    name: "Nikhil Sahu",
    role: "Chief Executive Officer",
    desc: "With over 15 years of experience in tech leadership, Nikhil drives our vision of transforming digital experiences through innovation.",
    linkedin: "#",
  },
  {
    name: "Nikhil Sahu",
    role: "Chief Executive Officer",
    desc: "With over 15 years of experience in tech leadership, Nikhil drives our vision of transforming digital experiences through innovation.",
    linkedin: "#",
  },
  {
    name: "Nikhil Sahu",
    role: "Chief Executive Officer",
    desc: "With over 15 years of experience in tech leadership, Nikhil drives our vision of transforming digital experiences through innovation.",
    linkedin: "#",
  },
];

// -------------------------- CARD COMPONENT --------------------------
const LeaderCard = ({ leader, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      viewport={{ once: true }}
      className="
        bg-[#111] rounded-xl overflow-hidden shadow-md border border-gray-800
        cursor-pointer
        transition-all duration-500 ease-out

        hover:scale-[1.05]
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(30,140,255,0.55)]
      "
    >
      {/* Top Section */}
      <div
        className="
          bg-gradient-to-r from-cyan-400 to-blue-500 
          flex items-center justify-center
          p-8 sm:p-9 md:p-10 lg:p-10 xl:p-12
        "
      >
        <Users className="text-white" size={48} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="text-white p-6 sm:p-6 md:p-6 lg:p-6 xl:p-7">
        <h3 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-medium">
          {leader.name}
        </h3>

        <p className="text-blue-400 text-sm mt-1 sm:text-sm md:text-sm lg:text-sm xl:text-sm">
          {leader.role}
        </p>

        <p
          className="
            text-gray-400 leading-relaxed
            text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
            mt-3
          "
        >
          {leader.desc}
        </p>

        <a
          href={leader.linkedin}
          className="
            flex items-center gap-2 
            text-blue-400 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm
            mt-4 hover:underline
          "
        >
          <LinkedInIcon style={{ fontSize: 20, color: '#0A66C2' }} />
          Connect on LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

// -------------------------- MAIN COMPONENT --------------------------
const OurLeader = () => {
  return (
    <div className="w-full bg-transparent px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
          Meet Our Leaders
        </h2>
        <p className="text-gray-400 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm mt-2">
          The Visionaries Behind Anslation's Success
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          max-w-[1280px] mx-auto
          grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-3
        "
      >
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurLeader;
