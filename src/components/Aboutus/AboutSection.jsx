import React from 'react'
import objectpng from "../../../public/OBJECTS.png"

function AboutSection() {
    return (
        <>
            <div className='w-[90%] my-32 mx-auto'>
                <div className='flex justify-between items-center'>
                    <div className=' w-xl' >
                        <p className='text-xl'> About us</p>
                        <h2 className='text-6xl' >Empowering with </h2>
                        <h1 className='text-6xl border-0 font-extrabold bg-[#1454E5] rounded px-1 ' >Innovative Software</h1>
                        <div className='my-2.5'>
                            <span className='font-extrabold text-6xl border-0 bg-[#1454E5] rounded px-2' >Solutions</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={objectpng} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection