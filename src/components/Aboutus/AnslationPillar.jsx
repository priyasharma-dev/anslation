import React from 'react'
import anslation from "../../assets/Group 79.png"
import { motion } from 'framer-motion'

function AnslationPillar() {
    return (
        <div className=" mx-auto  relative ">
            {/* image section */}
            <div className='absolute  cursor-pointer z-50 bottom-0 left-90     flex justify-center items-center  flex-col  '
                style={{
                    background:
                        "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
                    opacity: "0.8"


                }} >
                <div>
                    <motion.img 
                     whileHover={{
                        scale: 1.1,
                        transition: { duration: 1.2 },
                      }}
                      whileTap={{ scale: 0.6 }} 
                    
                    src={anslation} alt="" className='w-md ' />
                    <p className='text-center py-3  text-4xl'>Our 7 Pillar & Values</p>
                </div>

            </div>
            {/* image section end */}

            {/* half circle start */}
            <div>
                <div>
                    <svg width="1200" height="600" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="600" // Center of the circle horizontally
                            cy="600" // Center of the circle vertically
                            r="600"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
                <div className='absolute top-10 left-15' >
                    <svg width="1100" height="560" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="550" // Center of the circle horizontally
                            cy="550" // Center of the circle vertically
                            r="550"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
                <div className='absolute top-20 left-25' >
                    <svg width="1000" height="520" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="500" // Center of the circle horizontally
                            cy="500" // Center of the circle vertically
                            r="500"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
                <div className='absolute top-30 left-35' >
                    <svg width="900" height="480" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="450" // Center of the circle horizontally
                            cy="450" // Center of the circle vertically
                            r="450"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
                <div className='absolute top-40 left-45' >
                    <svg width="800" height="440" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="400" // Center of the circle horizontally
                            cy="400" // Center of the circle vertically
                            r="400"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
                <div className='absolute top-50 left-55' >
                    <svg width="700" height="400" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="350" // Center of the circle horizontally
                            cy="350" // Center of the circle vertically
                            r="350"  // Radius of the circle (increased for larger size)
                            stroke="gray" // Border color
                            strokeWidth="2" // Border thickness (4px for a thicker border)
                            fill="none" // No fill, only border
                        />
                    </svg>
                </div>
            </div>

            {/* half circle end */}

            {/* box start here */}
            <div>
                <motion.div whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} className=' absolute bottom-15 left-10 py-1  w-48 border bg-black   rounded cursor-pointer   hover:bg-gradient-to-r hover:from-[#1D73F3] hover:to-[#000C27]' >
                    <h3 className='text-2xl text-center font-extrabold ' >Innovation</h3>
                    <p className='text-center' >Pioneering the Future</p>
                </motion.div>

                <motion.div 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                
                className=' absolute bottom-55 left-30 py-1  w-36 border bg-black   rounded    hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                            ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Integrity</h3>
                    <p className='text-center' >Building Trust</p>
                </motion.div>

                <motion.div  
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                
                className=' absolute top-45 left-52 py-1  w-48 border bg-black   rounded cursor-pointer    hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                          ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Collaboration</h3>
                    <p className='text-center' >Stronger Together</p>
                </motion.div>


                <motion.div  
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                className=' absolute top-20 left-115 py-2  w-64 border bg-black   rounded cursor-pointer   hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                          ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Customer Focus</h3>
                    <p className='text-center' >Focused on You</p>
                </motion.div>


                <motion.div 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                
                className=' absolute top-45 right-52 py-1  w-48 border bg-black   rounded cursor-pointer   hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                            ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Agility</h3>
                    <p className='text-center' >Adapting to Change</p>
                </motion.div>


                <motion.div 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                
                className=' absolute bottom-55 right-30 py-1 w-48 border bg-black  rounded cursor-pointer   hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                            ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Excellence</h3>
                    <p className='text-center' >Commitment to Quality</p>
                </motion.div>



                <motion.div 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                }}
                    whileTap={{ scale: 0.5 }} 
                
                className=' absolute bottom-15 right-10  w-64 py-1 border bg-black   rounded cursor-pointer   hover:bg-gradient-to-r hover:from-[#1D73F3A3] hover:to-[#000C27D1]
                           ' >
                    <h3 className='text-2xl text-center font-extrabold ' >Sustainability</h3>
                    <p className='text-center' >Creating a Better Tomorrow</p>
                </motion.div>
            </div>

        </div>
    )
}

export default AnslationPillar