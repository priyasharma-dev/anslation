import React, { useEffect, useState } from "react";
import { FiUser, FiCalendar, FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

export default function ArticleFeature() {
  console.log("ArticleFeature component loaded");

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("/data/featureArticles.json").then((res) => {
      setArticles(res.data);
    });
  }, []);

  return (
    <>
     <section className="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-20">
  {/* Swiper */}
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 8000, disableOnInteraction: false }}
    loop
    speed={900}
    className="max-w-6xl mx-auto"
    pagination={{
      el: ".custom-pagination", // 📌 Pagination div outside Swiper
      clickable: true,
    }}
  >
    {articles.map((item) => (
      <SwiperSlide key={item.id}>
        <div className="rounded-2xl bg-[#0F172A] overflow-hidden border border-[#46A8FF]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[220px] sm:h-[280px] md:h-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-xs tracking-widest text-cyan-400 uppercase mb-3">
                {item.tag}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl fontWeigth-700px text-[#FFFFFF] leading-snug">
                {item.title} <br />
                <span className="text-cyan-400">{item.highlight}</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <FiUser />
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <span>{item.date}</span>
                </div>
              </div>

              <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0068FF] px-6 py-2.5 text-sm font-500 text-white transition hover:bg-[#0051CC] focus:outline-none focus:ring-4 focus:ring-[#0041A8]/50 cursor-pointer">
                Read Article
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 📌 External Pagination */}
  <div className="custom-pagination mt-6 flex justify-center gap-2
  [&_.swiper-pagination-bullet]:w-3
  [&_.swiper-pagination-bullet]:h-3
 [&>.swiper-pagination-bullet]:bg-gray-100       /* inactive initially white */
  [&_.swiper-pagination-bullet]:opacity-100
  [&>.swiper-pagination-bullet-active]:bg-blue-500   /* active bullet blue */
  [&_.swiper-pagination-bullet-active]:opacity-100
"></div>

</section>

    </>
  );
}
