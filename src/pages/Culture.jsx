import React from "react";
import CultureHero from "../components/culture/CultureHero";
import MeetCEO from "../components/culture/MeetCEO";
import ValuePosterRail from "../components/culture/ValuesPosterRail";
import EmployeeWellBeing from "../components/culture/EmployeeWellBeing";
import HiringProcedure from "../components/culture/HiringProcedure";



export default function Culture() {
  return (
    <div className="text-white w-full">
       <div className="w-full max-w-full overflow-x-hidden">
      <CultureHero />
     <MeetCEO/>

        {/* Our Values */}
      <ValuePosterRail />
      <EmployeeWellBeing/>
     <HiringProcedure/>
       </div>
    </div>
  );
}
