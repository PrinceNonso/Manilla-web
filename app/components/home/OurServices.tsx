import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { Services } from "../ui/servicesComps/services";
import ServicesCarousel from "../ui/servicesComps/mobileComp";

const OurServices = () => {
  return (
    <section className="py-14 px-4 md:px-20">
      {/* Header Section */}
      <div className="text-center space-y-6 flex flex-col items-center">
        {/* Banner Image with Overlay */}
        <div className="relative w-full max-w-md h-20 md:h-24 mx-auto">
          <Image
            src="/services/ourSev.png"
            alt="Our Services Banner"
            fill
            className="object-contain rounded-md "
          />
          <h2 className="absolute inset-0 flex items-center justify-center gap-2 text-blue-1 font-bold text-lg md:text-xl drop-shadow-md">
            Our Services
            <span className="bg-white/20 rounded-full p-1.5 shadow-lg backdrop-blur-sm">
              <MdKeyboardDoubleArrowDown className="w-4 h-4" />
            </span>
          </h2>
        </div>

        {/* Learn Badge */}
        <div className="rounded-full bg-[#E1E1E129] w-max p-3 font-medium px-6 border border-gray-300/50 text-nowrap shadow-sm">
          <span className="text-gray-700">Learn About Our Services</span>
        </div>

        {/* Main Title and Subtitle */}
        <div className="space-y-2">
          <h1 className="text-blue-900 font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
            Pay Everyday Bills.
          </h1>
          <p className="text-gray-600 font-semibold text-lg md:text-xl tracking-wide">
            Crypto Convenience for Nigerian Hustle.
          </p>
        </div>

        {/* Description */}
        <div className="max-w-2xl text-center text-gray-600 text-base leading-relaxed space-y-3">
          <p>
            Life in Nigeria is fast-paced, and your bills shouldn’t slow you
            down.
          </p>
          <p>
            Manilla lets you manage and settle every essential utility in one
            place.
          </p>
        </div>
      </div>

      {/* Visual + Demo Section */}
      <div className="mt-12 flex flex-col lg:flex-row lg:max-w-[95rem] mx-auto gap-0 lg:gap-6">
        <div className="flex-1  relative bg-dark rounded-t-[4rem] overflow-hidden max-h-full xl:max-h-[58rem] ">
          <img
            src="/services/lines.png"
            alt="Decorative abstract lines"
            className="w-full h-full object-cover"
          />
          {/* Base overlay for subtle contrast */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent" /> */}

          <div className="absolute inset-0 flex flex-col justify-end z-10 px-4 ">
            <div className="flex flex-col items-center text-center mt-8 px-4">
              <p className="text-gray-200 text-sm md:text-base lg:text-base xl:text-xl mb-6 max-w-md leading-relaxed">
                Simplifying finance for individuals, travelers, and the diaspora
                — fast, secure, and flexible.
              </p>
              <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 drop-shadow-md">
                Empowering Everyday <br /> Transactions
              </h3>
            </div>

            {/* Example Image */}
            <div className="relative w-full h-full lg:w-[30rem] lg:h-[38rem]  pl-">
              <Image
                src="/services/mock.png" // Replace with your icon/image path
                alt="Service Icon"
                fill
                className="object-contain xl:ml-14"
              />
            </div>

            {/* Optional Call-to-Action Button */}
          </div>
        </div>
        <div className="flex-1 ">
          {/* <Demo /> */}
          <Services />
          <ServicesCarousel />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
