import React from 'react'

function ProductHeader() {
  return (
    <>

    <div>
    <div
          style={{
            position: "absolute",
            width: "800.38px",
            height: "112.86px",
            left: "951px",// shifted from left to right for responsiveness
            top: "1.71px",
            background:
              "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
            filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,
          }}
        >
        </div>
        <div
          style={{
            position: "absolute",
            width: "800.38px",
            height: "112.86px",
            left: "951px",// shifted from left to right for responsiveness
            top: "200.71px",
            background:
              "linear-gradient(90deg, rgba(2, 34, 71, 0) 0%, #043AAD 50%)",
            filter: "blur(10.45px)",
            borderRadius: "20px",
            transform: "rotate(-33.3deg)",
            zIndex: 0,
          }}
        >
        </div>
  
  <div className="container mx-auto max-w-3xl mt-12 px-4 ">
  <div>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight">
      Boost your
    </h1>
    <h2 className="text-4xl bg-gradient-to-b from-[#FFFFFF] to-[#7296CF] bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight">
      rankings with AI.
    </h2>
  </div>

  <div className="mx-auto py-3 sm:py-4">
    <p className="text-center text-base sm:text-lg md:text-xl">
      Elevate your site’s visibility effortlessly with AI, where smart technology meets
      user-friendly SEO tools.
    </p>
  </div>

  <div className="mt-4 flex justify-center">
    <button className="bg-white cursor-pointer z-100 text-black px-5 py-3 sm:px-6 sm:py-3 rounded-lg font-medium shadow transition hover:shadow-md">
      Start for free
    </button>
  </div>
</div>
</div>
    </>
  )
}

export default ProductHeader