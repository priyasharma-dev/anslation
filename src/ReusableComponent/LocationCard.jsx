import React from 'react';
import { MapPin, Clock, Mail, Phone, Star, Navigation } from 'lucide-react';
import hero from "../assets/Box.png";

function LocationCard({name , address , WorkingdaysTime,saturday , sunday , email ,  phone , mapUrl}) {
    
  return (
    <div className=" container min-h-screen  py-12 px-4">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl   font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">{name}</span> Office
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl lg:w-[1000px] xl:w-[1200px]  shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative">
              <iframe src={mapUrl} 
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen="" 
              loading="lazy" 
              width="100%" 
              height="100%" 
              style={{
                border:"0"

              }}
              frameborder="0"></iframe>
              
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 p-8  md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Contact Details
                </h2>
                <div className=" w-64 h-1 bg-blue-600 rounded-full"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                    {address}
                    </p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Operating Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">{WorkingdaysTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">{saturday}</span>
                      </div>
                      <div className="flex justify-between text-red-500">
                        <span>Sunday:</span>
                        <span className="font-medium">{sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600 mb-1">{email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600 text-xl font-bold mb-1">{phone}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                   style={{
                    background: "linear-gradient(90deg, #0040ff, #0078ff)",
                  }}
                   className="flex-1 text-white py-3 px-6 rounded-xl font-semibold hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </button>
                  <button className="flex-1 border border-amber-500 text-amber-600 py-3 px-6 rounded-xl font-semibold hover:bg-amber-50 transition-colors duration-300 flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;