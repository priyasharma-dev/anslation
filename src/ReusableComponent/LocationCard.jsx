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
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
      
      {/* LEFT */}
      <div className="space-y-10">
        <h3 className="text-[24px] font-medium tracking-tight mb-10">
          Contact Information
        </h3>

        {/* Address */}
        <div className="flex gap-4 items-start">
          <IconBox><MapPin size={16} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Visit Us</p>
            <p className="leading-snug">{address}</p>
          </div>
        </div>

        {/* Operating Hours */}
<div className="flex gap-5 items-start">
  <IconBox>
    <Clock size={16} />
  </IconBox>

  <div className="w-full">
    <p className="text-sm text-[#9CA3AF] mb-3">Operating Hours</p>

    <div className="space-y-2 text-sm">
      <div className="flex justify-between">
        <span className="text-white">Monday – Friday</span>
        <span className="text-[#D1D5DB]">{WorkingdaysTime}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-white">Saturday</span>
        <span className="text-[#D1D5DB]">{saturday}</span>
      </div>

      <div className="flex justify-between">
        <span className="text-[#61A6FB]">Sunday</span>
        <span className="text-[#61A6FB]">{sunday}</span>
      </div>
    </div>
  </div>
</div>


        {/* Email */}
        <div className="flex gap-4 items-start">
          <IconBox><Mail size={16} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-2">Email Us</p>
            <p>{email}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4 items-start">
          <IconBox><Phone size={16} /></IconBox>
          <div>
            <p className="text-sm text-[#9CA3AF] mb-1">Call Us</p>
            <p>{phone}</p>
          </div>
        </div>
      </div>

      {/* RIGHT – MAP */}
      <div className="relative rounded-2xl overflow-hidden border border-[#293444]  bg-[#0B1224]
        shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
        <iframe
         title="Location Map"
          src={mapUrl}
          loading="lazy"
          className="
          w-full h-[380px] "
          
        />
          <div
                className="absolute   pointer-events-none  inset-0 bg-[#051c5a]/70"
                style={{ zIndex: 0 }}
                onClick={() => window.open(
                  `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank')}
              ></div>
      </div>
    </div>
  );
}
