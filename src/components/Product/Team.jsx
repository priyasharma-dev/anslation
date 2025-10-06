import React from 'react'
// import apex from "../../assets/apex.png"
import acme from "../../assets/acme 1.png"
import Box from "../../assets/Box.png"
import celestial from "../../assets/celestial.png"
import echo from "../../assets/echo.png"
import outside from "../../assets/outside.png"
import pulse from "../../assets/pulse.png"
import twich from "../../assets/twich.png"

function Team() {
    return (
        <div className='container   mx-auto' >
            <h3 className='text-center py-10 text-2xl '>Trusted by the world’s most innovative teams</h3>
            <div className='flex justify-between flex-wrap gap-10 cursor-pointer' >

                <div className="
                flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"
                >
                    <img src={acme} alt="acmecorp" className=" w-36 " />
                </div>

                <div className='flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={echo} alt="" className='w-36' />
                </div>
                <div className='flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={pulse} alt="" className='w-36 ' />
                </div>
                <div className='flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={Box} alt="" className='w-36 py-6 ' />
                </div>
                <div className='flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={outside} alt="" className='w-36 py-6' />
                </div>
                <div className='flex justify-center items-center
                      w-64 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={echo} alt="" className='w-36 py-6 ' />
                </div>
                <div className='border flex justify-center items-center
                      w-64 rounded-xl py-6 border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"' >
                    <img src={celestial} alt="" className='w-36 ' />
                </div>
                <div className='flex justify-center items-center
                      w-64 py-6 rounded-xl border border-white/20 bg-white/15
                      shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                       hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                       transition-shadow"'>
                    <img src={twich} alt="" className='w-36 ' />
                </div>
            </div>
        </div>
    )
}

export default Team