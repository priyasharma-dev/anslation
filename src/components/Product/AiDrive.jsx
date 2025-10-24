import React from 'react'

function AiDrive() {
  return (
    <>
      <div className='relative ' >

        <div className=" container relative overflow-hidden border-white/15 py-30 my-30 border rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.15)]  mx-auto  flex items-center justify-center  text-white">

        <div className=' absolute w-full  bottom-30  h-full  rounded-full opacity-100 bg-[radial-gradient(50%_50%_at_50%_50%,_#4596FF7D_0%,_#1f2937_49.04%,_#000000_100%)] '></div>
          <svg
            className='absolute inset-0 w-full h-full'
            viewBox='0 0 500 500'
            preserveAspectRatio='xMidYMid slice'
          >
            <defs>
              {/* Simple horizontal and vertical grid pattern */}
              <pattern id='gridPattern' x='0' y='0' width='50' height='50' patternUnits='userSpaceOnUse'>
                {/* Vertical lines */}
                <line x1='50' y1='0' x2='50' y2='50' stroke='#fff' strokeWidth='0.2' opacity='0.15' />
                {/* Horizontal lines */}
                <line x1='0' y1='50' x2='50' y2='50' stroke='#fff' strokeWidth='0.2' opacity='0.15' />
              </pattern>

              {/* Linear gradient from blue to gray to black */}
              <linearGradient id='bgGradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              
                <stop offset='100%' stopColor='#000000' stopOpacity='1' />
              </linearGradient>
            </defs>

            {/* Apply pattern */}
            <rect width='500' height='500' fill='url(#gridPattern)' />
          </svg>



          <div className="text-center px-6 z-40 ">
            {/* Heading */}
            <h1 className="text-4xl md:text-6xl z-100 font-semibold mb-4">
              AI-driven SEO <br /> for everyone.
            </h1>

            {/* Email Input and Button */}
            <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-5 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 sm:w-80"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-200 transition-all"
              >
                Join waitlist
              </button>
            </form>

            {/* Subtext */}
            <p className="text-gray-400 mt-4 text-sm">
              No credit card required • 7-days free trial
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiDrive