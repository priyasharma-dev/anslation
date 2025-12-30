import React from "react";
import career1 from "../../assets/caree1.png";
import { motion } from "framer-motion";

import DrivesUsIcon from "../../assets/icons/DrivesUs.svg";
import CareIcon from "../../assets/icons/Care.svg";
import PlayIcon from "../../assets/icons/Play.svg";
import CourageIcon from "../../assets/icons/Courage.svg";
import ExcellenceIcon from "../../assets/icons/Excellence.svg";
import JoinUs from "../../assets/JoinUs.png";

function CareerGrowth() {

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">

      {/*SECTION 1 — WHAT DRIVES US*/}
<div className="mx-auto w-full max-w-7xl px-4 py-20 flex flex-col items-center">

  <div
    className="inline-flex items-center gap-2 px-4 py-1 rounded-full border text-sm"
    style={{
      borderColor: "#1F40B0",
      background: "#111E3D",
      color: "#61A6FB",
    }}
  >
    <img src={DrivesUsIcon} alt="Drives Us" className="w-4 h-4" />
    What Drives Us
  </div>

  <h1
    className="text-center mt-6"
    style={{
      fontWeight: 700,
      fontSize: "40px",
      color: "#FFFFFF",
      lineHeight: "100%",
      maxWidth: "941px",
    }}
  >
    Play, Courage,{" "} 
    <span 
     style={{
    background:
      "linear-gradient(90deg, #31C8F0 48.56%, #5DA7FA 80.77%, #2DD4C8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
    >
      Care & Excellence
      </span>
  </h1>


  <p
    className="text-center mt-6"
    style={{
      maxWidth: "934px",
     
      fontWeight: 400,
      fontSize: "20px",
      color: "#9C9C9C",
      lineHeight: "140%",
    }}
  >
    From products to partnerships to everyday interactions—we aim for excellence
    in everything we do. These four core values guide our journey and unite our
    team. If they resonate with you, let’s talk.
  </p>

  {/* 4 CARDS ROW */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 w-full max-w-7xl place-items-center">
    {[
      { title: "Play", icon: PlayIcon },
      { title: "Care", icon: CareIcon },
      { title: "Courage", icon: CourageIcon },
      { title: "Excellence", icon: ExcellenceIcon },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileHover={{
                y: -3,
                 border: "1.5px solid #5DA7FA",
                transition: {
                  type: "spring",
                  mass: 1,
                  stiffness: 44.44,
                  damping: 10,
                },
              }}
        className="p-6 rounded-2xl border cursor-pointer w-[260px] h-[220px]"
        style={{
          borderColor: "#293444",
   background: "linear-gradient(98.28deg, #0F1929 -3.49%, #1B2635 106.83%)",

        }}
      >
        <img src={item.icon} alt={item.title} className="h-8 w-8 mb-4" />

        <h3
          style={{
            fontWeight: 700,
            fontSize: "22px",
            color: "#FFFFFF",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#9C9C9C",
            marginTop: "8px",
            lineHeight: "140%",
          }}
        >
          We embrace creativity and experimentation, fostering an environment
          where innovative ideas flourish.
        </p>
       </motion.div>

    ))}

  </div>
   {/* SECTION 2*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto px-4 mt-32">
        <div className="flex flex-col justify-center">
          <div
            className="inline-flex items-center px-4 h-6 rounded-full text-[10px] font-medium"
            style={{
            width: "154px",
            height: "24px",
           borderRadius: "9999px",
           border: "0.5px solid #1F40B0",
            background: "#111E3D",
            color: "#61A6FB",
            opacity: 1,
            }}
          >
            TASMANIA, AUSTRALIA
          </div>
          <h2
            className="mt-6"
            style={{
              
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "100%",
              color: "#FFFFFF",
              maxWidth: "550px",
            }}
          >
            Join us on the edge of {" "}
            <span style={{
    background:
      "linear-gradient(90deg, #31C8F0 48.56%, #5DA7FA 80.77%, #2DD4C8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }} >
   the World.</span>
          </h2>
          <p
            className="mt-6"
            style={{
             
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "140%",
              color: "#9C9C9C",
              maxWidth: "560px",
            }}
          >
            Powered by a vibrant creative and cultural scene, the thriving city of Hobart
            sits nestled amongst the pristine wilderness of Tasmania. Procreate proves
            you can develop industry-leading creative software anywhere with the right
            people and drive.
          </p>
        </div>

  
        <div className="flex justify-center lg:justify-end">
          <img
            src={JoinUs}
            alt="Tasmania Landscape"
            className="rounded-2xl w-full max-w-[480px] shadow-lg object-cover"
          />
        </div>
</div>

      </div>
    </div>
  );
}

export default CareerGrowth;
