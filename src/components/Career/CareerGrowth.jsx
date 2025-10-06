import React from 'react'
import career1 from "../../assets/caree1.png"
import careerpc from "../../assets/careerPic.png"

function CareerGrowth() {
    return (
        <div className='container mx-auto max-w-7xl flex flex-col gap-20' >
            <div className='flex justify-center items-center gap-20' >
                <div >
                    <img src={careerpc} alt="" className='w-96 h-96' />
                </div>
                <div >
                    <p className='text-[#808080]' >What drives us</p>
                    <div className='py-4' >
                        <h3 className='text-5xl font-bold' >Play, Courage,</h3>
                        <h3 className='text-5xl font-bold' >Care & Excellence</h3>
                    </div>
                    <div className='w-md ' >
                        <p className='text-[#808080] ' >From product, to partnerships, to everyday interactions  — when we do anything, we want it to be the absolute best it can be. These four core values help guide us, and resonate with everyone who works here. If they and resonate with everyone who works here. If they </p>
                    </div>

                </div>
            </div>
            <div className=' flex justify-center relative flex-row-reverse ' >
                <div className='' >
                    <img src={career1} alt="" className='w-xl h-80' />
                </div>
                <div className='absolute bottom-0 left-40  ' >
                    <p className='text-white/75' >Tasmania, Australia</p>
                    <h3 className='text-4xl font-bold py-3' >Join us on the edge of the World.</h3>
                    <p className='w-2xl text-white/75' >Powered by a vibrant creative and cultural scene, the thriving city of Hobart sits nestled amongst the pristine wilderness of Tasmania. Procreate proves you can develop industry-leading creative software anywhere with the right people and drive. </p>
                </div>
            </div>
        </div>
    )
}

export default CareerGrowth