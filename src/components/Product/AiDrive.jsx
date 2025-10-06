import React from 'react'

function AiDrive() {
  return (
    <>
    <div className='relative' >
        {/* <div className=' w-3xl h-72 absolute left-80' style={{ background: 'linear-gradient(to bottom, #4596FF7D 0%, #1f2937 30%, #02010300 100%)' }}></div> */}
    <div className=" container border-white/15 py-30 my-30 border rounded-xl  shadow-[0_10px_30px_rgba(255,255,255,0.15)]  mx-auto  flex items-center justify-center bg-gradient-to-b from-[#4596FF7D] via-gray-800 to-black  text-white"> 
      <div className="text-center px-6">
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