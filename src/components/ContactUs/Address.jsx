import React, { useState } from 'react';
import LocationCard from '../../ReusableComponent/LocationCard';

function Address() {
  const locations = [
    {  
      id:1,
      name: "Gurgaon", 
      address : "Office no.714, 7th Floor Spaze Palazo, Golf Course Ext Rd, Sector 69 Gurugram, Haryana 122001, IN",
      WorkingdaysTime:"10:00AM - 7:00PM",
      saturday:"10:00AM - 1:00PM",
      sunday : "Off",
      email:"business@anslation.com",
      phone:"8839631260 || 7974657918",
      mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56154.49184815121!2d76.96232514863281!3d28.399464100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23ea040f3ee1%3A0x6454e4dac2f37f4f!2sBeyond%20Just%20Work%20-%20Coworking%20Space%20Sohna%20Road%20%7C%20Shared%20Office%20%7C%20Private%20Cabin%20%7C%20Dedicated%20Seats%20%26%20Desk%2C%20At%20Sohna%20Road!5e0!3m2!1sen!2sin!4v1762177971946!5m2!1sen!2sin"
    },
    {   
        id:2,
       name: "Betul", 
       address : "Betul, Madhya Pradesh 460001, IN",
        WorkingdaysTime:"10:00AM - 7:00PM",
        Saturday:"10:00AM - 1:00PM",
        sunday : "Off",
        email:"business@anslation.com",
        phone:"8839631260 || 7974657918",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473820.97645577835!2d77.21229506668222!3d21.906609930008464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd611d7ddb8fd83%3A0x2911f7d1de8d59f4!2sBetul%2C%20Madhya%20Pradesh%20460001!5e0!3m2!1sen!2sin!4v1762178130056!5m2!1sen!2sin"
      },
  ];

  const [selected, setSelected] = useState("Gurgaon");


  function handleClick(key){
        setSelected(key)
        
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-8">
          OFFICE LOCATION
      </h1>
     

      {/* Location Selector */}
      <div className="flex gap-4 mb-8 bg-white shadow-md rounded-full p-2">
        {locations.map((loc) => (
          <button
            key={loc.name}
            onClick={() => handleClick(loc.name)}
            className={`px-6 py-2 rounded-full cursor-pointer text-sm md:text-base font-medium transition-all duration-300 ${
              selected === loc.name
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-transparent text-gray-600 hover:bg-blue-100'
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>
      {locations.map((item) => (
        <div key={item.id} >
             {selected === item.name && (
                <LocationCard
                name={item.name}
                address={item.address}
                WorkingdaysTime={item.WorkingdaysTime}
                saturday={item.saturday}
                sunday={item.sunday}
                email={item.email}
                phone={item.phone}
                mapUrl={item.mapUrl}
                  />)}
        </div>
      ))}
      

 
      {/* Simple fade-in animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Address;
