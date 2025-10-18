import React from 'react'
import pic from "../../assets/colleagues-working-project-discussing-details 1.png"

function Careerbg(
  {
    alt = "",
    heightClass = "h-[320px] md:h-[480px] lg:h-[560px]",
    children,

  }
) {
  return (
    <div className={`relative w-full ${heightClass} top-[-150px] overflow-hidden`}>
      {/* Blurred background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${pic})` }}
      />
      <div className="absolute inset-0 backdrop-blur-[2px] opacity-60 bg-black/10" />

      {/* Optional crisp foreground image (cover) */}
      <div className='flex justify-center ' >
        <div className=' absolute top-[-100%] w-[100%] h-[1200px] bg-blue-900/70   rounded-full ' >
        </div>
      </div>

      <div className="relative z-10 flex h-full items-center justify-center p-6">
        {children}
      </div>
    </div>

  )
}

export default Careerbg
