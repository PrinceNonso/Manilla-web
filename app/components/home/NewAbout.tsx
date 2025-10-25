import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Button } from "../ui/button";

const NewAbout = () => {
  return (
    <section className="mx-auto flex flex-col items-cente justify-center bg-[#FFFFFF] px-4 md:px-20 ">
      <div className="flex flex-col-reverse gap-4 items-center text-center justify-center mt-8">
        <div className="rounded-full  bg-[#E1E1E129] w-max p-2 px-6 border border-gray-500 text-nowrap">
          <span>About Manilla Pay</span>
        </div>
        <div className="relative w-full h-28 ">
          <Image
            src="/about/aboutBg1.png"
            alt="About background"
            fill
            className="object-contain rounded-md"
          />
          <h2 className="absolute inset-0 flex items-center gap-3 justify-center text-black font-bold text-xl ">
            About Us
            <span className="bg-white rounded-full p-2 shadow-lg">
              <MdKeyboardDoubleArrowDown />
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-20 gap-8">
        <div className="flex flex-col gap-20 md:mt-20">
          <div className="">
            <h2 className="text-blue-1 text-2xl md:text-3xl font-bold lg:text-4xl">
              Redefining How Nigerians Pay
            </h2>
            <p className="text-base md:text-xl text-gray-500 max-w-lg">
              Nigeria is moving forward — but payments are still stuck in the
              past.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-[#E2E2E242] rounded-xl py-10 px-6">
              <p className="text-base    font-medium max-w-[62rem] leading-8">
                From bank queues and failed transfers to delayed utility credits
                and cross-border headaches, the system isn’t built for speed or
                convenience. That’s why we created Manilla Pay: to merge the
                reliability of traditional infrastructure with the flexibility
                and freedom of crypto.
              </p>
            </div>
            <div className="flex flex-col w-full sm:flex-row gap-4">
              <Button variant={"ghost"} className="text-base  md:px-8">
                Click to learn more about us
              </Button>
              <Button
                variant={"default"}
                className="px-6 font-semibold text-base">
                About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[40rem]">
          <Image
            src="/about/aboutImg.jpg"
            alt="About"
            fill
            className="object-contain rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
