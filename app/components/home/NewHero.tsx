"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LiaArrowRightSolid } from "react-icons/lia";
import { CurvedArrow } from "@/public/svg";
import Image from "next/image";

const NewHero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Fade-in */}
      <div className="absolute inset-0">
        <Image
          src="/hero/heroGradient.jpg"
          alt="Hero Background"
          fill
          priority
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            loaded ? "opacity-100" : "opacity-70"
          }`}
          sizes="100vw"
        />
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold">
          Redefining How You Pay, <br /> Travel, and Connect.
        </h1>

        <p className="text-[var(--grey-500)] max-w-[38rem] text-base md:text-xl">
          Simplify utility bills and travel payments across Africa and North
          America — fast, secure, and affordable with{" "}
          <span className="text-white font-bold">Manilla Finance</span>.
        </p>

        <Button variant="whiteBtn" size="lg" className="!h-11 !px-6">
          Get started Now
          <LiaArrowRightSolid />
        </Button>

        {/* Decorative Arrow */}
        <div className="absolute bottom-[8rem] right-8 md:right-[34rem]">
          <CurvedArrow />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
