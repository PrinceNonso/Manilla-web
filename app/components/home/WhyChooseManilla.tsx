import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Secle } from "@/public/svg";
import { FiDollarSign } from "react-icons/fi";
import { RiCellphoneLine } from "react-icons/ri";
import { MdFlight } from "react-icons/md";

const WhyChooseManilla = () => {
  const wcuCard = [
    {
      title: "Pay Utility Bills",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, augue eget blandit sodales, arcu sapien convallis urna, sit amet dictum eros lorem ac nulla.",
      icon: <FiDollarSign size={26} />,
    },
    {
      title: "Top Up Airtime & Data",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, augue eget blandit sodales, arcu sapien convallis urna, sit amet dictum eros lorem ac nulla.",
      icon: <RiCellphoneLine size={26} />,
    },
    {
      title: " Book Flights & Pay for Travel",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies, augue eget blandit sodales, arcu sapien convallis urna, sit amet dictum eros lorem ac nulla.",
      icon: <MdFlight size={26} />,
    },
  ];
  return (
    <section>
      <div className="px-4 md:px-20 flex flex-col">
        <div className="mt-14 mb-10 flex flex-col items-center space-y-4 ">
          <div className="text-center flex flex-col items-center">
            <h1 className=" text-2xl md:text-4xl font-bold text-center text-dark-1">
              Why Choose Manilla App
            </h1>
            <p className="text-gray-500 text-base md:text-lg font-semibold max-w-sm">
              -smarter, faster, and more reliable way to handle your bills,
              travel, and financial needs.
            </p>
          </div>

          <Button
            variant={"destructive"}
            className="!font-medium text-secondary text-base">
            Why Choose <span className="text-white">Us</span>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full mb-20">
          <div className="relative lg:w-[45%] w-full h-[28rem] lg:h-[38rem] xl:h-[28rem]">
            <Image
              src="/about/wcu.jpg"
              alt="About"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          <div className="lg:w-[55%] w-full bg-black flex flex-col items-cente justify-center  p-2 rounded-xl gap-4">
            <div className="text-white text-2xl font-semibold text-cente  flex gap-4">
              <Secle />
              <h2 className="text-base md:text-2xl">
                <span className="text-secondary">Manilla App</span> makes
                everyday payments faster, easier, and more flexible
              </h2>
            </div>

            <div className="flex flex-col space-y-4">
              {wcuCard.map((w, i) => {
                const icon = w.icon;
                return (
                  <div
                    key={i}
                    className="text-white flex gap-4 bg-dark p-3 rounded-lg">
                    <div className="bg-white w-max h-max p-2 rounded-lg text-black ">
                      {icon}
                    </div>
                    <div>
                      <h2 className="font-bold text-base md:text-lg">
                        {w.title}
                      </h2>
                      <p className="text-xs md:text-base ">{w.subTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseManilla;
