import React from "react";
import img1 from "../../assets/our-team1-2.png";
import img2 from "../../assets/our-team1-3.png";
import img3 from "../../assets/our-team1-4.png";
import img4 from "../../assets/our-team1-5.png";
import img5 from "../../assets/our-team1-6.png";
import img6 from "../../assets/our-team1.png";

const TEAM = [
  { src: img1, role: "CEO", name: "Sahil Khan" },
  { src: img2, role: "CTO", name: "Aisha Khan" },
  { src: img3, role: "Marketing Head", name: "Vikram Singh" },
  { src: img4, role: "Product Lead", name: "Priya" },
  { src: img5, role: "Design Lead", name: "Rohit Verma" },
  { src: img6, role: "Engineering Manager", name: "Neha Gupta" },
];

function OurTeam() {
  return (
    <section
      className="relative mt-12 text-white"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
      }}
    >
      {/* Decorative gradient shapes */}
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          width: "800.38px",
          height: "80.86px",
          left: "951px",
          top: "300.71px",
          background:
            "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
          filter: "blur(10.45px)",
          borderRadius: "20px",
          transform: "rotate(-33.3deg)",
          zIndex: 0,
        }}
      />
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          width: "300.38px",
          height: "80.86px",
          right: "-50px",
          top: "500.71px",
          background:
            "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
          filter: "blur(10.45px)",
          borderRadius: "20px",
          transform: "rotate(-33.3deg)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 container max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Team</h2>
          <p className="mx-auto w-full md:w-2/3 text-justify my-4">
            Our leadership team brings a wealth of experience, innovation, and
            passion to Anslation. Together, they lead us in transforming
            technology to drive business success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={`group relative cursor-pointer rounded-xl overflow-hidden ${
                i % 2 === 1 ? "md:mt-10" : ""
              }`}
            >
              <img
                src={m.src}
                alt={`${m.name} — ${m.role}`}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
              {/* Hover overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/40 to-transparent
                  opacity-0 translate-y-2
                  transition-all duration-300 ease-out
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              />
              <div
                className="
                  absolute inset-0 flex items-end p-3
                  opacity-0 translate-y-3
                  transition-all duration-300 ease-out delay-75
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wide text-white/80">
                    {m.role}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg font-semibold">
                    {m.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
