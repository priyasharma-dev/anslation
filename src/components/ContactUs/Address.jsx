import React, { useState } from 'react';
import LocationCard from '../../ReusableComponent/LocationCard';

function Address() {
  const locations = [
    {
      id: 1,
      name: 'Gurugram',
      address:
        'alt.f coworking - Orchid Business Park | Coworking Space in Sohna Road, Gurgaon',
      WorkingdaysTime: '10:00 AM - 07:00 PM',
      saturday: '10:00 AM - 01:00 PM',
      sunday: 'Off',
      email: 'business@anslation.com',
      phone: '8839631260 || 7974657918',
      mapUrl:
        'https://www.google.com/maps?q=alt.f%20coworking%20Orchid%20Business%20Park%20Sohna%20Road%20Gurgaon&output=embed&z=15',
    },
    {
      id: 2,
      name: 'Betul',
      address: 'Anslation Pvt. Ltd., 2nd Floor, Shriram Traders, Opp. Hotel Rimoon, Genda Chowk, Sadar, Betul, Madhya Pradesh',
      WorkingdaysTime: '10:00 AM - 07:00 PM',
      saturday: '10:00 AM - 01:00 PM',
      sunday: 'Off',
      email: 'business@anslation.com',
      phone: '8839631260 || 7974657918',
      mapUrl:
       'https://www.google.com/maps?q=Shriram%20Traders%20Genda%20Chowk%20Betul&output=embed',
    },
  ];

  const [selected, setSelected] = useState('Gurugram');

  const activeLocation = locations.find(
    (loc) => loc.name === selected
  );

  return (
    <section className="mt-32 flex flex-col items-center text-white">
      {/* LOCATION SWITCHER */}
      <div className="mb-20 inline-flex rounded-full p-1 bg-[#24354E]">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setSelected(loc.name)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${selected === loc.name
                ? 'bg-[#2563EB]'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            {loc.name}
          </button>
        ))}
      </div>
      {/* CONTENT */}
      <div className="w-full max-w-[1180px] px-6">
        <LocationCard {...activeLocation} />
      </div>
    </section>
  );
}

export default Address;
