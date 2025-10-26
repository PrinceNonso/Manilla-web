import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import BlogCard from "../../blogCard";
import NotchedCard from "../ClippedComp";

export default function BlogsComp() {
  const swiperInstanceRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    {
      imageSrc: "/blog/blog1.jpg",
      date: "April 18, 2022",
      title: "Few Reasons to Sell NFTs on Nico",
    },
    {
      imageSrc: "/blog/blog2.jpg",
      date: "May 10, 2023",
      title: "The Future of Digital Payments",
    },
    {
      imageSrc: "/blog/blog1.jpg",
      date: "July 7, 2024",
      title: "Building Cross-Border Payment Solutions",
    },
    {
      imageSrc: "/blog/blog2.jpg",
      date: "September 22, 2024",
      title: "Crypto Simplified for Global Transactions",
    },
  ];

  return (
    <div className=" flex flex-col-revers flex-row gap-6 items-center justify-center mt-6 px-4">
      <div className="w-full lg:max-w-4xl relative hidden lg:block">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          onSwiper={(swiper) => {
            swiperInstanceRef.current = swiper;
            // Queue setup for next tick to ensure ref/DOM readiness
            setTimeout(() => {
              if (paginationRef.current) {
                swiper.params.pagination = {
                  el: paginationRef.current,
                  clickable: true,
                };
                swiper.pagination.init();
                swiper.pagination.update();
              }
            }, 0);
          }}
          // Disable default to avoid auto-rendering
          pagination={false}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 } }}>
          {blogPosts.map((b, i) => (
            <SwiperSlide key={i}>
              <BlogCard {...b} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" flex items-center justify-end gap-3 mt-4">
          {/* Dots - shifted up slightly to overlap nav buttons */}
          <div
            ref={paginationRef}
            className="space-x-2 -translate-y-2 flex items-center"></div>
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperInstanceRef.current?.slidePrev()}
            className="group w-8 h-8 rounded-full bg-dark-1 hover:bg-bleu-900 cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in hover:scale-105 "
            aria-label="Previous Slide">
            <ChevronLeft className="w-5 h-5 text-white group-hover:text-secondary transition-all duration-300 ease-in-out" />
          </button>

          <button
            onClick={() => swiperInstanceRef.current?.slideNext()}
            className="group w-8 h-8 rounded-full bg-dark-1 hover:bg-bleu-900 cursor-pointer flex items-center justify-center transition-colors duration-300 ease-in hover:scale-105 "
            aria-label="Next Slide">
            <ChevronRight className="w-5 h-5 text-white group-hover:text-secondary transition-all duration-300 ease-in-out" />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-auto flex justify-center ">
        <NotchedCard />
      </div>
      {/* Custom pagination dot styles */}
      <style jsx global>{`
        /* Base bullets (inactive) */
        .swiper-pagination-bullet {
          background: #faca31 !important; /* yellow */
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          margin: 0 6px !important;

          transition: width 0.25s ease, background 0.2s ease;
        }
        /* Active bullet (white, elongated) */
        .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 40px !important; /* elongated */
          height: 8px !important; /* keep same height */
          border-radius: 9999px !important; /* pill */
        }
      `}</style>
    </div>
  );
}
