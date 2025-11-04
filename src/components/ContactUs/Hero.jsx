import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';

function ContactPage() {
 

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full  rounded-b-3xl shadow-2xl overflow-hidden relative">
        <div className="absolute  bg-black opacity-10"></div>
        <div className="relative top-10 px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-0.5 bg-white/50"></div>
              <div className="text-white/90 font-semibold tracking-widest text-xl">LET'S TALK</div>
              <div className="w-16 h-0.5 bg-white/50"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 50+ Satisfied Clients. Response within 48 hours
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex items-center gap-3 text-white/90">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">48hr Response Time</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}

    </div>
  );
}

export default ContactPage;