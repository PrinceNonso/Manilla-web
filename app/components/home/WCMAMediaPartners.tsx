"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const mediaPartnersLogos = [
  "/wcma/btc-coinist.png",
  "/wcma/cointel.png",
  "/wcma/investing.png",
  "/wcma/Nairametrics.png",
  "/wcma/news-btc.png",
  "/wcma/crypto-daily.png",
  "/wcma/crypto-news.png",
  "/wcma/tech-cabal.png",
  "/wcma/vanguard.png",
  "/wcma/yahoo-finance.png",
  "/wcma/zypcrypto.png",
];

const WCMAMediaPartners = () => (
  <section className=" lg:px-20 mt-8 mx-auto">
    <div className="relative bg-dark-1 h-[450px] md:h-[480px] lg:h-[600px] overflow-hidden rounded-t-4xl flex flex-col items-center justify-center pt-20 ">
      {/* Decorative stroke inside the same section */}
      <Image
        src="/wcma/strokes.png"
        alt="Decorative stroke"
        fill
        className="object-contain opacity-70"
        style={{ zIndex: 0 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 mb-6">
        <Button className="text-base text-dark-1 font-medium bg-[#C5C6DE] hover:bg-gray-400 transition-colors duration-300 ease-in-out">
          Why Choose <span className="text-primary">Manilla App</span>
        </Button>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Media Partners
        </h2>
        <p className="max-w-lg text-center text-white font-medium">
          We’re proud to collaborate with leading media platforms that help
          amplify our mission and share our story with the world.
        </p>
      </div>

      {/* Marquee section */}
      <div className="flex items-center justify-center w-full z-20 overflow-hidden pb-2 pt-4 lg:pt-8">
        <Marquee
          pauseOnHover
          gradient={false}
          direction="left"
          className="flex items-center">
          {mediaPartnersLogos.map((mp, i) => (
            <div
              key={i}
              className="inline-flex w-32 md:w-40 h-12 md:h-14 lg:w-44 lg:h-16 mx-4 shrink-0 items-center justify-center bg-white rounded-md p-3">
              <div className="flex items-center justify-center w-full h-full shrink">
                <Image
                  src={mp}
                  alt={`media logo ${i}`}
                  width={160}
                  height={60}
                  className="object-contain "
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="flex items-center justify-center w-full z-20 overflow-hidden py-4 md:py-4 pb-6 ">
        <Marquee
          pauseOnHover
          gradient={false}
          direction="right"
          className="flex items-center">
          {mediaPartnersLogos.map((mp, i) => (
            <div
              key={i}
              className="inline-flex w-32 md:w-40 h-12 md:h-14 lg:w-44 lg:h-16 mx-4 shrink-0 items-center justify-center bg-white rounded-md p-3">
              <div className="flex items-center justify-center w-full h-full shrink">
                <Image
                  src={mp}
                  alt={`media logo ${i}`}
                  width={160}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>

    {/* Optional background for lower section */}
    <div className="relative w-full  overflow-hidde py-4 md:py-8 !px-4 mx-auto flex flex-col items-center h-[]">
      <Image
        src="/wcma/bgInt.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 w-full h-full object-cover lg:rounded-b-3xl lg:!rounded-t-none"
        priority
      />

      <div className="relative text-center mx-auto flex flex-col items-center pb-10 space-y-8 px-4 w-full ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Be First. Be Ready.
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ">
          <div className="text-blue-1 space-y-2 text-center lg:text-start">
            <p className="text-xl font-bold">
              Manilla is launching soon — Join our Newsletter.
            </p>
            <p className="md:max-w-lg text-gray-500 md:text-blue-1 text-base md:text-lg font-semibold ">
              Join our newsletter to get early access, exclusive updates and a
              front-row seat to the future of cross-border payments
            </p>
          </div>

          <div className=" flex flex-col sm:flex-row gap-5 md:gap-8 md:px-8 w-full md:w-auto  sm:items-center sm:justify-center">
            <Button
              variant="whiteBtn"
              className="md:px-10 font-semibold lg:text-lg lg:!h-14">
              Join the waiting list for our App
            </Button>
            <Button
              variant={"destructive"}
              className="font-semibold lg:text-base lg:!h-14">
              Join Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WCMAMediaPartners;
