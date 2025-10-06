import React from 'react'
import ProductHeader from '../components/Product/ProductHeader'
import SiteOverview from '../components/Product/SiteOverview'
import Team from '../components/Product/Team'
import PowerAi from '../components/Product/PowerAi'
import Elevate from '../components/Product/Elevate'
import OurClient from '../components/Product/OurClient'
import PricingSection from '../components/Product/PriceSection'
import AiDrive from '../components/Product/AiDrive'


function Product() {
  return (
    <div>
        <ProductHeader/>
        <SiteOverview/>
        <Team/>
        <PowerAi/>
        <Elevate/>
        <OurClient/>
        <PricingSection/>
        <AiDrive/>
    </div>
  )
}

export default Product