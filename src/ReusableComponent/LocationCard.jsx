import { MapPin, Clock, Mail, Phone } from 'lucide-react';

function IconBox({ children }) {
  return (
    <div className="
    flex h-9 w-9 items-center justify-center rounded-lg
      bg-[linear-gradient(180deg,#0B1224_-15%,#2A458A_118%)]
      shrink-0">
      {children}
    </div>
  );
}

export default function LocationCard({
  address,
  WorkingdaysTime,
  saturday,
  sunday,
  email,
  phone,
  mapUrl,
   latitude,
  longitude,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-6 items-start">
      
      {/* LEFT */}
      <div className="space-y-6 md:space-y-8">
        <h3 className="text-[22px] md:text-[26px] font-medium tracking-[-0.02em] mb-6 md:mb-10">
          Contact Information
        </h3>

        {/* Address */}
        <div className="flex gap-3 md:gap-4 items-start flex-wrap">
          <IconBox><MapPin size={18} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Visit Us</p>
            <p className="leading-snug text-sm md:text-base">{address}</p>
          </div>
        </div>

        {/* Operating Hours */}
      <div className="flex gap-3 md:gap-4 items-start flex-wrap">
        <IconBox>
       <Clock size={18} />
      </IconBox>

       <div className="w-full">
       <p className="text-sm text-[#9CA3AF] mb-3">Operating Hours</p>

       <div className="flex flex-col gap-[4px] md:gap-[6px] text-[13px] md:text-[14px] leading-[18px] md:leading-[20px]">
      <div className="flex justify-between max-w-[320px]">
        <span className="text-white">Monday – Friday</span>
        <span className="text-[#D1D5DB]">{WorkingdaysTime}</span>
      </div>

      <div className="flex items-center justify-between max-w-[320px]">
        <span className="text-white">Saturday</span>
        <span className="text-[#D1D5DB]">{saturday}</span>
      </div>

      <div className="flex items-center justify-between max-w-[320px]">
        <span className="text-[#61A6FB]">Sunday</span>
        <span className="text-[#61A6FB]">{sunday}</span>
      </div>
    </div>
  </div>
</div>


        {/* Email */}
        <div className="flex gap-3 md:gap-4 items-start flex-wrap">
          <IconBox><Mail size={18} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Email Us</p>
            <p text-sm md:text-base>{email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-3 md:gap-4 items-start flex-wrap">
          <IconBox><Phone size={18} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1">Call Us</p>
            <p text-sm md:text-base>{phone}</p>
          </div>
        </div>
      </div>

      {/* RIGHT – MAP */}
      <div className="relative rounded-2xl overflow-hidden border border-[#293444]  bg-[#0B1224]
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)] h-[300px] md:h-[480px] w-full">
        <iframe
         title="Location Map"
          src={mapUrl}
          loading="lazy"
          style={{ border: 0, filter: 'invert(99%) hue-rotate(10deg) brightness(0.9) contrast(0.9)' }}
          className="
          w-full h-full brightness-90"
          
        />
          <div
                className="absolute pointer-events-none  inset-0 bg-[#051c5a]/40"
                style={{ zIndex: 0 }}
                onClick={() => window.open(
                  `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank')}
              ></div>
      </div>
    </div>
  );
}
