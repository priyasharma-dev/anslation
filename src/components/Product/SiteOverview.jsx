import React from 'react'
import overViewImage from "../../assets/App Wide@2x 1.png"

function SiteOverview() {
  return (
    <div>
        <div className='container mx-auto my-20 '>
              <img src={overViewImage} alt="overView Image" />
        </div>
    </div>
  )
}

export default SiteOverview