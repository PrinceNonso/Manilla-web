"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LiaArrowRightSolid } from "react-icons/lia";
import { CurvedArrow } from "@/public/svg";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import HeroMarquee from "../ui/HeroMarquee";

const NewHero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h- w-full overflow-hidden space-y-4 pt-8">
      <div className="absolute inset-0">
        <Image
          src="/hero/heroGradient.jpg"
          alt="Hero Background"
          fill
          priority
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            loaded ? "opacity-100" : "opacity-80"
          }`}
          sizes="100vw"
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Hero Content - Add py-8 here for spacing without affecting background */}
      <div className="relative z-10 flex flex-col items-center justify-center mt- text-center space-y-4 ">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Redefining How You Pay, <br /> Travel, and Connect.
        </h1>
        <p className="text-[var(--grey-500)] max-w-[38rem] text-base md:text-xl">
          Simplify utility bills and travel payments across Africa and North
          America — fast, secure, and affordable with{" "}
          <span className="text-white font-bold">Manilla Finance</span>.
        </p>
        <Button
          variant="whiteBtn"
          size="lg"
          className="!h-11 !px-6 relative overflow-hidden group transition-all duration-300 flex items-center gap-2 
             bg-white text-gray-900 hover:text-white hover:font-bold shadow-md">
          {/* Background slide effect */}
          <span className="absolute inset-0 bg-blue-1/70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-md z-0"></span>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-2">
            Get started Now
            <LiaArrowRightSolid className="transition-transform duration-500 group-hover:translate-x-2 group-hover:rotate-12" />
          </span>
        </Button>

        {/* Decorative Arrow */}
        {/* <div className="absolute bottom-[8rem] right-8 md:right-[34rem]">
          <CurvedArrow />
        </div> */}
        {/* Hero Girl Image with Responsive Overlays */}

        <div className="relative  w-64 h-64 lg:w-[22rem] lg:h-90 my-4">
          <Image
            src="/hero/hero-girl.png"
            alt="Hero girl"
            fill
            className="object-cover rounded-full" // Added rounded-full for a polished look
          />

          <div className="absolute -bottom-4 md:-bottom-7 left-[3rem] lg:-bottom-8 lg:left-20">
            <img
              src="/hero/blurry.png"
              alt=""
              className="relative w-40 h-16  lg:w-48 lg:h-20"
            />

            <div className="flex items-center gap-2 absolute text-xs lg:text-sm text-white top-4 left-5 lg:left-9 text-center">
              <p className="pl-2">
                Trusted by <br />{" "}
                <span className="font-semibold text-nowrap">Top Platforms</span>
              </p>{" "}
              <span className="bg-[#D5F9FB5C] p-1.5 rounded-full">
                <MdKeyboardDoubleArrowDown />
              </span>
            </div>
          </div>
          {/* Overlays Container: Positioned below the image, centered and responsive */}
          <div className="absolute bottom-[2rem] left-[22rem] transform translate-x-1/2 flex flex-col items-center space-y-2 z-20">
            {/* Download Text: Centered above badges */}
            <p className="text-white text-sm md:text-base lg:text-lg pl-10 font-semibold whitespace-nowrap">
              Download Manilla App
            </p>
            {/* Badges: Horizontal flex, responsive sizing, centered */}
            <div className="flex space-x- md:space-x-">
              <img
                src="/hero/googlePlay.png"
                alt="Get it on Google Play"
                className="w-20 h-12 md:w-28 md:h-14 lg:w-44 lg:h-18 hover:scale-105 transition-transform duration-200"
              />
              <img
                src="/hero/appleStore.png"
                alt="Download on the App Store"
                className="w-20 h-12 md:w-28 md:h-14  lg:w-44 lg:h-18 hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          <div className="absolute -bottom-[8rem] right-[23rem] w-[15rem] h-44">
            <img src="/hero/activeUsers.png" alt="" />
          </div>
        </div>

        <div className="relative bottom-0  w-full h-20 md:h-40">
          <Image
            src={"/hero/heroslide.png"}
            alt="hero "
            fill
            className="object-co"
          />
        </div>
        {/* <div className="">
          <HeroMarquee />
        </div> */}
      </div>
    </section>
  );
};

export default NewHero;
