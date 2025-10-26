"use client";

import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Button } from "../ui/button";

// Don't forget the CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogsComp from "../ui/blog/BlogComp";
import BlogMobile from "../ui/blog/blogMobile";

const Blogs = () => {
  return (
    <section className="relative w-full  md:h-full overflow-hidden bg-brand-light mt-16 px-4">
      {/* Background Image */}
      <Image
        src="/blog/blogBg.svg"
        alt="Blog background"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 w-full h-full object-cover object-center bg-no-repeat"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white space-y-4 py-12">
        {/* Heading */}
        <div className="relative w-full h-24">
          <Image
            src="/about/aboutBg1.png"
            alt="About background"
            fill
            className="object-contain rounded-md"
          />
          <h2 className="absolute inset-0 flex items-center gap-3 justify-center text-black font-bold text-xl md:text-2xl">
            Blog
            <span className="bg-white rounded-full p-2 shadow-lg">
              <MdKeyboardDoubleArrowDown />
            </span>
          </h2>
        </div>

        {/* Subtext / CTA */}
        <Button variant={"destructive"}>Learn More Daily</Button>

        <BlogsComp />
        <BlogMobile />
      </div>
    </section>
  );
};

export default Blogs;
{
  /* <BlogCarousel /> */
}

// import { FaSearch } from "react-icons/fa"; // Or any icon library you prefer

// export default function BlogHeroCard() {
//   return (

//   );
// }

{
  /* <a href="/blogs" className="absolute left-0 bottom-0">
  <button className="flex items-center gap-2 bg-[#FFEB3B] text-[#18173A] font-semibold px-6 py-3 rounded-2xl border-4 border-[#17d4e4] shadow text-lg">
    <FaSearch className="text-lg" />
    All Blogs
  </button>
</a>; */
}
