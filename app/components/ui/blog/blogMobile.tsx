"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "../../blogCard";

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

export default function BlogsComp() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle active dot + auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  return (
    <div className="block lg:hidden w-full px-3 py-4">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 px-4">
          {blogPosts.map((b, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-[50%] rounded-lg overflow-hidden">
              <BlogCard {...b} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots + Navigation */}
      <div className="flex items-center flex-col justify-center gap-2 mt-8">
        <div className="flex items-center gap-1.5">
          {blogPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-white w-8 h-2" : "bg-yellow-400 w-3 h-3"
              }`}
            />
          ))}
        </div>
        {/* Prev */}
        <div className="flex gap-6">
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-1 hover:bg-bleu-900 transition-transform duration-300 hover:scale-105 cursor-pointer group">
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-secondary" />
          </button>

          {/* Dots */}

          {/* Next */}
          <button
            onClick={scrollNext}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-dark-1 hover:bg-bleu-900 transition-transform duration-300 hover:scale-105 cursor-pointer group">
            <ChevronRight className="w-6 h-6 text-white group-hover:text-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
}
