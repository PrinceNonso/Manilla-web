import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { VerticalProgressBar } from "../ui/vertProgressor";
import Demo from "./demo";

const OurServices = () => {
  return (
    <section>
      <div className="pt-14 text-center space-y-4 flex flex-col items-center">
        <div className="relative w-full h-28 ">
          <Image
            src="/services/ourSev.png"
            alt="About background"
            fill
            className="object-contain rounded-md"
          />
          <h2 className="absolute inset-0 flex items-center gap-3 justify-center text-black font-bold text-xl ">
            Our Services
            <span className="bg-white rounded-full p-2 shadow-lg">
              <MdKeyboardDoubleArrowDown />
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full  bg-[#E1E1E129] w-max p-3 font-medium px-6 border border-gray-500 text-nowrap">
            <span>Learn About Our Services</span>
          </div>
        </div>
        <div>
          <h2 className="text-blue-1 font-bold text-xl md:text-[40px] ">
            Pay Everyday Bills.{" "}
          </h2>
          <p className="text-gray-500 font-semibold text-xl md:tracking-[0.5px] ">
            Crypto Convenience for Nigerian Hustle.
          </p>
        </div>
        <div className="max-w-xl text-center text-gray-500 text-base">
          <p className=" ">
            Life in Nigeria is fast-paced, and your bills shouldn’t slow you
            down.
          </p>
          <p>
            Manilla lets you manage and settle every essential utility in one
            place.
          </p>
        </div>
        
              
              
          </div>
          
          <Demo />
    </section>
  );
};

export default OurServices;
