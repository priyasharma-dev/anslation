import React from 'react'
import acme from "../../assets/acme 1.png"
import Box from "../../assets/Box.png"
import celestial from "../../assets/celestial.png"
import echo from "../../assets/echo.png"
import outside from "../../assets/outside.png"
import pulse from "../../assets/pulse.png"
import twich from "../../assets/twich.png"

function Team() {
    const companies = [
        { img: acme, alt: "acmecorp" },
        { img: echo, alt: "echo" },
        { img: pulse, alt: "pulse" },
        { img: Box, alt: "box" },
        { img: outside, alt: "outside" },
        { img: echo, alt: "echo" },
        { img: celestial, alt: "celestial" },
        { img: twich, alt: "twich" }
    ];

    return (
        <div className='container mx-auto px-4 py-12'>
            <h3 className='text-center  py-10 text-2xl md:text-3xl font-semibold '>
                Trusted by the world's most innovative teams
            </h3>
            
            <div className='grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto'  >
                {companies.map((company, index) => (
                    <div 
                        key={index}
                        className='flex justify-center items-center
                            h-32 w-full
                            rounded-xl border border-white/20 bg-white/15
                            shadow-[0_10px_30px_rgba(255,255,255,0.15)]
                            hover:shadow-[0_14px_40px_rgba(255,255,255,0.2)]
                            hover:scale-105
                            transition-all duration-300
                            cursor-pointer'
                    >
                        <img 
                            src={company.img} 
                            alt={company.alt} 
                            className='w-36 h-auto object-contain px-4' 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team