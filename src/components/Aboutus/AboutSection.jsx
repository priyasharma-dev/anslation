import React from 'react'
import objectpng from "../../../public/OBJECTS.png"
import { motion } from "framer-motion";

function AboutSection() {
  const text = "Empowering with";
  return (
    <section aria-labelledby="about-heading" className="py-16 md:py-24">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1  gap-y-12 sm:gap-y-14 gap-x-10 lg:grid-cols-[1.25fr,0.75fr] xl:grid-cols-2 lg:gap-x-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-base sm:text-lg text-white/80">About us</p>
            <motion.h2
              id="about-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold text-white "

            >
              <motion.span
                style={{ display: "inline-block", clipPath: "inset(0 100% 0 0)" }}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                Empowering with
              </motion.span>

            </motion.h2>

            <h1 className="mt-3 md:mt-4 font-extrabold leading-tight">
              <span className="inline-block whitespace-nowrap bg-[#1454E5] rounded px-2 py-2 text-2xl sm:text-4xl md:text-4xl xl:text-5xl lg:mr-2 lg:align-middle lg:mb-4 ">
                Innovative Software
              </span>
              <span className="block lg:block  xl:inline-block bg-[#1454E5] rounded px-2 py-2 mt-2 lg:mt-2 xl:mt-0 w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl lg:align-middle xl:whitespace-nowrap">
                Solutions
              </span>
            </h1>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end"  >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              src={objectpng}
              alt="Illustration representing innovative software solutions"
              loading="lazy"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-xl  lg:translate-x-6 xl:translate-x-10"
            />
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutSection