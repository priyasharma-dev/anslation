import React from 'react'
import Hero from '../components/ContactUs/Hero'
import Form from '../components/ContactUs/Form'
import Address from '../components/ContactUs/Address'


function Contact() {
  return (
    <div className='relative bottom-32' >
          <Hero/>
          <Form/>
          <Address/>
    </div>
  )
}

export default Contact