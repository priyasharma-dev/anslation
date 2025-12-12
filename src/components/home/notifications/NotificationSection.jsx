// import React, { useState } from "react";
// import "./NotificationSection.css";
 import { MdClose, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const NotificationsSection = () => {

// const [showPanel, setShowPanel] = useState(true);


  return (
//     // <section className="nt-section">
//     //   <div className="nt-card">
//     //     {/* close icon in corner */}
//     //     <button className="nt-close" aria-label="Close">
//     //       ✕
//     //     </button>

//     //     <div className="nt-content">
//     //       {/* LEFT SIDE */}
//     //       <div className="nt-left">
//     //         <h2 className="nt-title">Notifications or Alerts</h2>

//     //         <ul className="nt-list">
//     //           <li>
//     //             Critical alerts (e.g., lab results flagged, patient emergencies).
//     //           </li>
//     //           <li>
//     //             System reminders (e.g., &quot;Follow-up overdue for Patient X&quot;).
//     //           </li>
//     //         </ul>

//     //         <div className="nt-chips">
//     //           <span className="nt-chip">
//     //             Critical alerts in red to take quick action
//     //           </span>
//     //           <span className="nt-chip">Collapsable reminders</span>
//     //           <span className="nt-chip">
//     //             Use arrow to see more alerts and reminders
//     //           </span>
//     //         </div>

//     //         <div className="nt-actions">
//     //           <button className="nt-btn nt-btn-primary">
//     //             Go to Data verse
//     //           </button>
//     //           <button className="nt-btn nt-btn-outline">Go Back</button>
//     //         </div>
//     //       </div>

//     //       {/* RIGHT SIDE – mock cards */}
//     //       <div className="nt-right">
//     //         <div className="nt-alert-card nt-alert-main">
//     //           <div className="nt-alert-header">Critical alerts</div>

//     //           <div className="nt-alert-row">
//     //             <span className="nt-dot" />
//     //             <span className="nt-alert-label">Emergencies alert</span>
//     //             <span className="nt-alert-pill" />
//     //           </div>

//     //           <div className="nt-alert-row">
//     //             <span className="nt-dot" />
//     //             <span className="nt-alert-label">Emergencies alert</span>
//     //             <span className="nt-alert-pill" />
//     //           </div>

//     //           <div className="nt-alert-row">
//     //             <span className="nt-dot" />
//     //             <span className="nt-alert-label">Emergencies alert</span>
//     //             <span className="nt-alert-pill" />
//     //           </div>
//     //         </div>

//     //         <div className="nt-alert-card nt-alert-secondary">
//     //           <div className="nt-alert-header">Data to be replaced</div>

//     //           {["Follow-up overdue", "Follow-up overdue", "Follow-up overdue"].map(
//     //             (text, i) => (
//     //               <div key={i} className="nt-alert-row nt-row-compact">
//     //                 <button className="nt-mini-close" aria-label="Dismiss">
//     //                   ✕
//     //                 </button>
//     //                 <span className="nt-alert-label">{text}</span>
//     //                 <span className="nt-alert-pill" />
//     //               </div>
//     //             )
//     //           )}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>

<div className="w-full max-w-[1845px] mx-auto flex items-center justify-center bg-[#071022] rounded-2xl relative">

       
       

          {/* ---- TOP RIGHT CLOSE ICON ---- */}
          <button
            onClick={() => setShowPanel(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center 
                       bg-white text-black rounded-full text-md shadow-lg hover:scale-110 transition"
          >
            <MdClose />
          </button>
      
        <div className="relative z-10 px-8 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            {/* LEFT */}
            <div className=" text-left">
              <h1 className=" fontfamily-Roboto fontweight-800    text-#FFFFFF text-2xl md:text-5xl font-extrabold leading-tight">
                Notifications or Alerts
              </h1>

              <ul className=" fontfamily-Roboto fontweight-400     mt-6 text-gray-300 space-y-2 text-sm md:text-base">
                <li>• Critical alerts (e.g., lab results flagged, patient emergencies).</li>
                <li>• System reminders (e.g., "Follow-up overdue for Patient X").</li>
              </ul>

              {/* Pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-block bg-[#4b5563] text-#FFFFFF  fontfamily-Roboto px-4 py-2 rounded-full fontWeight-500 text-sm shadow-sm">
                  Critical alerts in red to take quick action
                </span>
               <span className="inline-block bg-[#4b5563] text-#FFFFFF  fontfamily-Roboto px-4 py-2 rounded-full fontWeight-500 text-sm shadow-sm">
                  Collapsible reminders
                </span>
                <span className="inline-block bg-[#4b5563] text-#FFFFFF  fontfamily-Roboto px-4 py-2 rounded-full fontWeight-500 text-sm shadow-sm">
                  Use arrow to see more alerts and reminders
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="flex items-center justify-center px-5 py-2 rounded-full text-white font-medium w-72 border-0 border-[1px] border-solid border-[#FFFF]" 
                  style={{
                    background: "linear-gradient(90deg,#174ECC,#1D9AFF)",
                    boxShadow: "0 8px 30px rgba(36,120,255,0.18)",
                  }}
                >
                  Go to Data verse
                </button>

                <button
                  className="px-6 py-3 w-48 rounded-full text-white font-medium border border-white"
                  style={{ background: "#373d45" }}
                >
                  Go Back
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-[420px] max-w-full h-auto">
                {/* Back glow */}
                <div
                  className="absolute -right-6 top-2 w-64 h-40 rounded-2xl"
                  style={{
                    
                    filter: "blur(18px)",
                    zIndex: 0,
                  }}
                />

                {/* Top (larger) card */}
                <div
                  className="relative rounded-2xl p-5 w-80 md:w-[340px] shadow-2xl"
                  style={{
                    background: "linear-gradient(180deg, #00266F, #000E29)",
                    border: "1px solid rgba(88,140,255,0.08)",
                    boxShadow: "0 8px 40px rgba(10,40,90,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
                    zIndex: 20,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="fontfamily-Roboto fontweight-500 text-white">Critical alerts</div>

                    {/* arrow controls */}
                    <div className="flex items-center gap-2">
                       <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl">
   
<MdKeyboardArrowLeft />
  </button>

  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl">
    <MdKeyboardArrowRight />
  </button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-3 py-2 rounded-full"
                        style={{
                         background: "linear-gradient(90deg, #7FABFF30)",
                          border: "1px solid rgba(255,255,255,0.03)",
                        }}
                      >
                        <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#3EA8FF" }} />
                        <div className="flex-1 text-white fontfamily-Roboto fontweight-400">Emergencies alert</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower (overlapping) card */}
                <div
                  className="absolute right-0 top-40 rounded-2xl p-4 w-72 md:w-80 shadow-2xl"
                  style={{
                    background: "linear-gradient(180deg, #00266F, #000E29)",
                    border: "1px solid rgba(88,140,255,0.08)",
                    boxShadow: "0 8px 40px rgba(10,40,90,0.6), inset 0 1px 0 rgba(255,255,255,0.03)",
                    zIndex: 30,
                  }}
                >
                 <div className="flex items-center gap-2 justify-end w-full mb-3 ">
   <div className="pr-16 ">Data to be replaced</div>

  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl">
   
<MdKeyboardArrowLeft />
  </button>

  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-xl">
    <MdKeyboardArrowRight />
  </button>
</div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-3 py-2 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #7FABFF30)",
                          border: "1px solid rgba(255,255,255,0.03)",
                        }}
                      >
                       <div className="w-3.5 h-3.5 flex items-center justify-center rounded-full bg-white">
  <MdClose size={14} color="#000" />
</div>
                        <div className="flex-1 text-white fontfamily-Roboto fontweight-400">Follow-up overdue</div>
                        
                      </div>
                    ))}
                  </div>
                </div>

                {/* small outer decoration (glow circle) */}
                <div
                  className="absolute right-12 top-[-12px] w-14 h-14 rounded-full"
                  style={{
                    background: "radial-gradient(closest-side, rgba(43,113,255,0.18), transparent 40%)",
                    filter: "blur(8px)",
                    zIndex: 5,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    





  );
};

export default NotificationsSection;







