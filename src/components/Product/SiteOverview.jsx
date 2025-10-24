import React from 'react'
import overViewImage from "../../assets/App Wide@2x 1.png"

function SiteOverview() {
  return (
    <div>
        <div className='container mx-auto my-20 relative '>
              <img src={overViewImage} alt="overView Image" />
              <div className=' w-full h-80 absolute bottom-0 opacity-0 bg-[linear-gradient(to_right,_#050207E9,_#050208_10%)] ' ></div>
        </div>
    </div>
  )
}

export default SiteOverview