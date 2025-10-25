"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Coinstore } from "@/public/svg";

const WhyChooseManillaApp = () => {
  const brands = [
    "/wcma/fireblocks.png",
    "/wcma/keiretsu.png",
    "/wcma/threshold.png",
    "/wcma/chainalysis.png",
    "/wcma/chainalysis.png",
    "/wcma/chainalysis.png",
  ];

  return (
    <section className=" lg:px-20">
      {/* === Top Section === */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-t-3xl py-8">
        {/* Background Image using next/image */}
        <Image
          src="/wcma/bgInt.png"
          alt="Hero Background"
          fill
          className="absolute inset-0 w-full h-full object-cover rounded-t-3xl"
          priority
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-10 pb-10 text-center text-white space-y-6">
          <Button
            variant="destructive"
            className="!font-medium text-secondary text-base">
            Why Choose <span className="text-white">Manilla App</span>
          </Button>

          <h2 className="text-2xl md:text-4xl font-bold text-blue-1">
            Development Partners
          </h2>

          <p className="md:max-w-[68rem] text-gray-500 md:text-blue-1 font-semibold">
            Trusted by hundreds of digital businesses across emerging markets
            for Identity Verification, Fraud Detection/Prevention & Background
            Checks; to safely acquire, onboard customers and perform seamless
            transactions across borders with trust & without restrictions, while
            maintaining required regulatory compliance checks.
          </p>
        </div>
      </div>

      {/* === Floating Brands Section === */}
      <div className="bg-dark-1 md:rounded-b-4xl py-12 overflow-hidden">
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover
          className="flex items-center gap-6">
          {brands.map((b, i) => (
            <div
              key={i}
              className="mx-4 relative w-60 h-16 p-3 bg-brand-regular rounded-full flex items-center justify-center">
              <div className="relative w-40 h-10">
                <Image
                  src={b}
                  alt={`brand-${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}

          {/* Extra logo */}
          <div className="relative w-60 h-16 p-4 bg-brand-regular rounded-full flex items-center justify-center mx-4">
            <Coinstore className="!h-8" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default WhyChooseManillaApp;
