import React from 'react'
import { Rectangle82, Rectangle83, Ellipse81, Ellipse82 } from './gradienttop'
import { motion } from 'framer-motion'

function Gradiant() {
    return (
        <div>
            {/* <motion.div
                className="pointer-events-none"
                style={{
                    position: "absolute",
                    width: "800.38px",
                    height: "112.86px",
                    left: "951px",
                    top: "1.71px",
                    // base gradient (unchanged)
                    // + a moving torch spot tinted with the same #043AAD hue
                    backgroundImage:
                        "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
                        "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
                        "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
                    backgroundBlendMode: "screen",

                    filter: "blur(10.45px)",
                    borderRadius: "20px",
                    transform: "rotate(-33.3deg)",
                    zIndex: 0,

                    // start off-screen on the right
                    "--x": "120%",
                }}
                animate={{
                    // sweep the spot from right -> left
                    "--x": ["120%", "-70%"],
                }}
                transition={{
                    duration: 2,   // adjust speed to taste
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            /> */}
            <GlowWaveBackground/>
            
        </div>
    )
}

export default Gradiant




// left torch style


export function LeftGradiant() {
    return (
        <div>
            <motion.div
                className="pointer-events-none"
                style={{
                    position: "absolute",
                    width: "500.38px",
                    height: "112.86px",
                    left: "-200px",
                    top: "500.71px",

                    // base gradient (unchanged) + moving torch spot
                    backgroundImage:
                        "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 70%), " +
                        "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
                        "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 35%, rgba(4,58,173,0.08) 55%, transparent 70%)",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
                    backgroundBlendMode: "screen",

                    filter: "blur(10.45px)",
                    borderRadius: "20px",
                    transform: "rotate(-150.3deg)",
                    zIndex: 0,

                    // start off-screen on the left
                    "--x": "-60%",
                }}
                animate={{
                    // sweep the spot from left -> right
                    "--x": ["120%", "0%"],
                }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            />
        </div>
    )
}


export function LeftBottomGradiant() {
    return (
        <div>
            <motion.div
                className="pointer-events-none"
                style={{
                    position: "absolute",
                    width: "700.38px",
                    height: "112.86px",
                    left: "-200px",
                    top: "750.71px",

                    // base gradient (unchanged) + moving torch spot
                    backgroundImage:
                        "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 70%), " +
                        "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
                        "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 35%, rgba(4,58,173,0.08) 55%, transparent 70%)",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
                    backgroundBlendMode: "screen",
                    filter: "blur(10.45px)",
                    borderRadius: "20px",
                    transform: "rotate(-150.3deg)",
                    zIndex: 0,

                    // start off-screen on the left
                    "--x": "-60%",
                }}
                animate={{
                    // sweep the spot from left -> right
                    "--x": ["120%", "0%"],
                }}
                transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
            />
        </div>
    )
}


export function OurTeamGradiantTop(){
       return(
        <motion.div
        className="pointer-events-none"
        style={{
            position: "absolute",
            width: "800.38px",
            height: "80.86px",
            left: "951px",
            top: "300.71px",
            // base gradient (unchanged)
            // + a moving torch spot tinted with the same #043AAD hue
            backgroundImage:
                "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
                "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
                "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
            backgroundBlendMode: "screen",

            filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,

            // start off-screen on the right
            "--x": "120%",
        }}
        animate={{
            // sweep the spot from right -> left
            "--x": ["120%", "-70%"],
        }}
        transition={{
            duration: 2,   // adjust speed to taste
            ease: "easeInOut",
            repeat: Infinity,
        }}
    />
       )
}


export function OurTeamGradiantBottom(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "300.38px",
        height: "80.86px",
        right: "-50px",// shifted from left to right for responsiveness
        top: "500.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}


export function CareerGradiantTop(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "600.38px",
        height: "80.86px",
        right: "-100px",// shifted from left to right for responsiveness
        top: "70.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}

export function CareerGradiantBottom(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "400.38px",
        height: "65.86px",
        right: "-75px",// shifted from left to right for responsiveness
        top: "200.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
         borderRadius: "20px",
         transform: "rotate(-33.3deg)",
         zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}



export function CareerProfileGradiantop(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "300.38px",
        height: "80.86px",
        right: "-100px",// shifted from left to right for responsiveness
        top: "-80px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
         borderRadius: "20px",
         transform: "rotate(-33.3deg)",
         zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}

export function CareerProfileGradiantBottom(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "300.38px",
        height: "65.86px",
        right: "-75px",// shifted from left to right for responsiveness
        top: "100.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
         borderRadius: "20px",
         transform: "rotate(-33.3deg)",
         zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}



export function ProductGradiantTop(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
        width: "800.38px",
        height: "112.86px",
        left: "951px",// shifted from left to right for responsiveness
        top: "1.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
         borderRadius: "20px",
         transform: "rotate(-33.3deg)",
         zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}

export function ProductGradiantBottom(){
    return(
     <motion.div
     className="pointer-events-none"
     style={{
        position: "absolute",
            width: "800.38px",
            height: "112.86px",
            left: "951px",// shifted from left to right for responsiveness
            top: "200.71px",
         // base gradient (unchanged)
         // + a moving torch spot tinted with the same #043AAD hue
         backgroundImage:
             "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%), " +
             "radial-gradient(ellipse 40% 70% at var(--x) 50%, " +
             "rgba(4,58,173,0.55) 0%, rgba(4,58,173,0.28) 55%, rgba(4,58,173,0.08) 55%, transparent 70%)",
         backgroundRepeat: "no-repeat, no-repeat",
         backgroundSize: "100% 100%, 180% 100%", // wide spotlight layer for smooth travel
         backgroundBlendMode: "screen",

         filter: "blur(10.45px)",
         borderRadius: "20px",
         transform: "rotate(-33.3deg)",
         zIndex: 0,

         // start off-screen on the right
         "--x": "120%",
     }}
     animate={{
         // sweep the spot from right -> left
         "--x": ["120%", "-70%"],
     }}
     transition={{
         duration: 2,   // adjust speed to taste
         ease: "easeInOut",
         repeat: Infinity,
     }}
 />
    )
}

export  function GlowWaveBackground() {
    return (
      <div className=" overflow-hidden ">
        <motion.div 
          animate={{
            background: [
              "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0,81,255,0.48) 49.04%, rgba(0,111,255,0) 100%)",
              "radial-gradient(60% 60% at 50% 50%, #0051FF 0%, rgba(0,81,255,0.65) 49.04%, rgba(0,111,255,0) 100%)",
              "radial-gradient(70% 70% at 50% 50%, #006FFF 0%, rgba(0,81,255,0.8) 49.04%, rgba(0,111,255,0) 100%)",
              "radial-gradient(60% 60% at 50% 50%, #0051FF 0%, rgba(0,81,255,0.65) 49.04%, rgba(0,111,255,0) 100%)",
              "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0,81,255,0.48) 49.04%, rgba(0,111,255,0) 100%)",
            ]
          }}
       
        >
          {/* Wave 1 - Expanding from center */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              borderRadius: "50%",
              border: "1px solid rgba(0,77,255,0.6)",
              boxShadow: "0 0 30px rgba(0,77,255,0.8), inset 0 0 30px rgba(0,77,255,0.4)",
            }}
            animate={{
              width: ["100px", "800px"],
              height: ["100px", "800px"],
              opacity: [1, 0.6,1],
              borderWidth: ["2px", "1px",],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
  
          {/* Wave 2 - Delayed */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              borderRadius: "50%",
              border: "2px solid rgba(0,111,255,0.7)",
              boxShadow: "0 0 40px rgba(0,111,255,0.9), inset 0 0 40px rgba(0,111,255,0.5)",
            }}
            animate={{
              width: ["100px", "800px","1200px"],
              height: ["100px", "800px", "1200px"],
              opacity: [1, 0.6, 1],
              borderWidth: ["2px", "1px", "1px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
  
          {/* Wave 3 - More Delayed */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
            
              borderRadius: "50%",
              border: "2px solid rgba(0,81,255,0.8)",
              boxShadow: "0 0 50px rgba(0,81,255,1), inset 0 0 50px rgba(0,81,255,0.6)",
            }}
            animate={{
              width: ["100px", "800px", "1400px"],
              height: ["100px", "800px" , "1400px"],
              opacity: [1, 0.6, 1],
              borderWidth: ["2px", "1px", "1px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
          />
  
          {/* Central Glow Pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,77,255,0.8) 0%, rgba(0,77,255,0.3) 50%, rgba(0,77,255,0) 100%)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
  
          {/* Secondary Glow Pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,111,255,1) 0%, rgba(0,111,255,0.5) 50%, rgba(0,111,255,0) 100%)",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
  
        </motion.div>
      </div>
    );
  }

