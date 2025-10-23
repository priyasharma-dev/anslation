import React from 'react'
import { ProductGradiantBottom, ProductGradiantTop } from '../../gradient/gradiant'
import { motion } from 'framer-motion'

function ProductHeader() {
  return (
    <>

    <div>
        <div>
          <ProductGradiantTop/>
        </div>

        <div>
          <ProductGradiantBottom/>
        </div>
  
  <div className="container mx-auto max-w-3xl mt-12 px-4 ">
  <motion.div  
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight">
      Boost your
    </h1>
    <h2 className="text-4xl bg-gradient-to-b from-[#FFFFFF] to-[#7296CF] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight">
      rankings with AI.
    </h2>
  </motion.div>

  <div className="mx-auto py-3 sm:py-4">
    <p className="text-center text-base sm:text-lg md:text-xl">
      Elevate your site’s visibility effortlessly with AI, where smart technology meets
      user-friendly SEO tools.
    </p>
  </div>

  <div className="mt-4 flex justify-center">
    <motion.button 
         whileHover={{
          scale: 1.3,
          // Will be used when gesture starts
          transition: { duration: 1 }
        }}
        // Will be used when gesture ends
        transition={{ duration: 0.5 }}
    className="bg-white cursor-pointer z-100 text-black px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium shadow transition hover:shadow-md">
      Start for free
    </motion.button>
  </div>
</div>
</div>
    </>
  )
}

export default ProductHeader