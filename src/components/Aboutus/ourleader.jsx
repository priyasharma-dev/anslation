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


// ---------------------------
// 🎯 REUSABLE CARD COMPONENT
// ---------------------------

const LeaderCard = ({ leader, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        bg-[#111] rounded-xl overflow-hidden shadow-md border border-gray-800
        cursor-pointer transition-all duration-500 ease-out
        hover:shadow-[0_0_35px_rgba(30,140,255,0.55)]
        hover:scale-[1.04]
        hover:-translate-y-2
      "
    >
      {/* Top Icon Section */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-10 flex items-center justify-center">
        <Users size={52} strokeWidth={1.5} className="text-white" />
      </div>

      {/* Content */}
      <div className="p-6 text-white">
        <h3 className="text-lg font-medium">{leader.name}</h3>
        <p className="text-blue-400 text-sm mt-1">{leader.role}</p>

        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          {leader.desc}
        </p>

        <a
          href={leader.linkedin}
          className="flex items-center gap-2 text-blue-400 text-sm mt-4 hover:underline"
        >
          <LinkedInIcon style={{ fontSize: 20, color: "#0A66C2" }} />
          Connect on LinkedIn
        </a>
      </div>
    </motion.div>
  );
};


// ---------------------------
// ⭐ MAIN COMPONENT
// ---------------------------

const OurLeader = () => {
  return (
    <div className="w-full bg-[#0A0A0A] px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-semibold">Meet Our Leaders</h2>
        <p className="text-gray-400 mt-2 text-sm">
          The Visionaries Behind Anslation's Success
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} leader={leader} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurLeader;
