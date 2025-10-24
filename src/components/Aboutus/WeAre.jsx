import React from "react";
import who from "../../assets/Group 39566.png";
import verticleLine from "../../assets/Group 39562.png";
import mission from "../../assets/Group 39568.png";
import goal from "../../assets/Group 39571.png";
import Gradiant, { LeftBottomGradiant } from "../../gradient/gradiant";
import { motion } from "framer-motion";
import { LeftGradiant } from "../../gradient/gradiant";

function WeAre() {
  return (
    <section
      className="relative py-8 md:py-10 text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
      }}
    >
      {/* Decorative gradient shapes */}
      <div>
        <Gradiant/>
      </div>

       <div>
          <LeftGradiant/>
       </div>
          <div>
            <LeftBottomGradiant/>
          </div>

      {/* Subtle grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="gridPattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="50"
              stroke="#fff"
              strokeWidth="0.2"
              opacity="0.15"
            />
            <line
              x1="0"
              y1="50"
              x2="50"
              y2="50"
              stroke="#fff"
              strokeWidth="0.2"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="500" height="500" fill="url(#gridPattern)" />
      </svg>

      <div className="relative z-10 mx-auto w-[92%] max-w-7xl">
        {/* Center vertical line on lg+ */}
        <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 z-0">
          <img src={verticleLine} alt="" className="h-[920px]" />
        </div>

        {/* Who We Are */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 my-12 md:my-16">
          <div className="flex justify-center lg:justify-start">
            <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1.2 },
          }}
              whileTap={{ scale: 1 }} 
              src={who}
              alt="Team at work"
              className="w-full cursor-pointer max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>
          <div className="text-white/95">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Who We Are
            </h2>
            <div className="mt-4 space-y-4 text-sm sm:text-base leading-relaxed">
              <p className="text-justify">
                At Anslation, we’re redefining how businesses interact with
                technology. As a provider of innovative software solutions, we
                deliver products that help organizations scale and thrive in the
                digital age.
              </p>
              <p className="text-justify">
                Founded with a vision to merge marketing technology and business
                automation, our team of technologists has built tools that
                optimize operations and elevate performance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row justify-between items-center my-20 gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img
             whileHover={{
              scale: 1.2,
              transition: { duration: 1.2},
          }}
              whileTap={{ scale: 1 }} 
              src={mission}
              alt="Our mission"
              className="w-full cursor-pointer  max-w-sm md:max-w-md px-5 md:px-10"
            />
          </div>
          <div className="w-full md:w-1/2 px-5 md:px-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h2>
            <div className="text-base md:text-lg leading-relaxed">
              <p>
                Empower businesses with intelligent, scalable software that
                fuels growth, enhances efficiency, and fosters innovation.
              </p>
              <div className="py-4">
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-3">
                  {[
                    "Intelligent",
                    "Foster innovation",
                    "Fuel growth",
                    "Enhance efficiency",
                    "Scalable software solutions",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className={[
                        "border rounded px-4 py-2 text-sm md:text-base text-center cursor-pointer",
                        "transition-all duration-300 ease-out",
                        "hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]",
                        "hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(29,115,243,0.25)]",
                        
                         tag === "Scalable software solutions" ? "col-span-2" : "",
                          ].join(" ")}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 my-12 md:my-16">
          <div className="flex justify-center lg:justify-start">
            <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1.2 },
          }}
              whileTap={{ scale: 1 }} 
              src={goal}
              alt="Goals and milestones"
              className="w-full cursor-pointer max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>
          <div className="text-white/95">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Story
            </h2>
            <div className="mt-4 text-sm sm:text-base leading-relaxed">
              <p>
                Anslation began as a marketing software company and quickly saw
                the opportunity to transform the tech landscape. Our path—from
                marketing automation to a tech-first company with
                enterprise-grade solutions—has been driven by innovation and
                customer success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeAre;
