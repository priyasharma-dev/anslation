import React from "react";
import { Typography } from "@mui/material";

// Reusable paragraph component
const Paragraph = ({ children }) => (
  <Typography className="font-['Helvetica_Neue'] text-[16px] leading-[24px] text-[#94A3B8] mt-2">
    {children}
  </Typography>
);

export default function WeAre() {
  return (
    <div className="flex flex-row w-[1248px] h-auto pb-10 gap-16 ml-[96px]">

      {/* LEFT SIDE – Story */}
      <div className="flex flex-col w-[592px] gap-4">
        <h2 className="font-['Helvetica_Neue'] font-medium text-[36px] leading-[40px] text-white">
          Our Story
        </h2>

        <Paragraph>
          At Anslation, we are redefining the way businesses interact with technology.
          As a leading provider of innovative software solutions, we deliver
          cutting-edge products that help organizations scale and thrive in the digital age.
        </Paragraph>

        <Paragraph>
          Founded with a vision to merge the worlds of marketing technology and
          business automation, our team of passionate technologists and innovators
          have built a suite of tools designed to optimize business operations
          and elevate performance.
        </Paragraph>

        <Paragraph>
          Anslation started as a marketing software company but quickly realized the
          potential to transform the tech landscape. Our journey from providing
          marketing automation tools to becoming a tech-first company with enterprise-
          level solutions has been driven by our commitment to innovation and
          customer satisfaction.
        </Paragraph>
      </div>

      {/* RIGHT SIDE – Image */}
      <div className="w-[280px] h-[250px] rounded-3xl overflow-hidden mt-[80px] ml-[250px]">
        <img
          src="/svg/story.png"
          className="w-full h-full object-cover"
          alt="story"
        />
      </div>
    </div>
  );
}
