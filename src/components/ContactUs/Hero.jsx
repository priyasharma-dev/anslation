import React from 'react';
import Form from './Form';
import Address from './Address';
import star from'../../assets/icons/star.svg';

function ContactPage() {
  return (
  <div className="min-h-screen text-white relative overflow-hidden">

    {/* HERO */}
    <section className="relative text-center pt-40 pb-22 overflow-hidden">
 {/* Content */}
   <div
          className="
            relative z-10
            flex flex-col items-center
            gap-6
            w-full
            max-w-2xl  
            mx-auto
            px-6
            text-center
          "
        >

  {/*Get In Touch pill  */}
   <div
            className="
              inline-flex items-center gap-2
              px-3 py-1
              rounded-full
              bg-[#111E3D]
              border border-[#1F40B0]
              border-[0.5px]
            "
          >
  <div className="flex items-center justify-center">
    <img
  src={star}
  alt="star"
  className="w-4 h-4"
  style={{
    filter:
      'brightness(0) saturate(100%) invert(55%) sepia(85%) saturate(500%) hue-rotate(185deg)'
  }}
/>

  </div>

  {/* Text */}
   <span className="font-roboto text-[0.75rem] leading-[1rem] text-[#61A6FB]">
              Get In Touch
            </span>
</div>
 {/* Heading + Subtitle */}
   <div className="flex flex-col items-center gap-5 w-full">
            {/* Contact Us */}
            <h1
              className="
                font-helvetica font-bold
                text-[clamp(2.25rem,4vw,2.5rem)]  
                leading-none
              "
            >
              Contact Us
            </h1>

            {/* Subtitle */}
            <p
              className="
                mt-0.8
  text-[18px]
  leading-[140%]
  text-[#9C9C9C]
  max-w-[674px]
  mx-auto
  text-center
              "
            >
              Have a question or want to work together? We’d love to hear from you.
            </p>
          </div>
        </div>
    </section>
     {/* MAIN CARD */}
      <section className="px-4">
        <div className="max-w-[1200px] mx-auto rounded-3xl border border-[#1E293B] bg-[#080E20] pb-14">
          <Form />
          <Address />
        </div>
      </section>
    </div>

  
);
}

export default ContactPage;

