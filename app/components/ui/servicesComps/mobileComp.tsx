"use client";

import React from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../carousel";

export const serviceData = [
  {
    title: "Travel & Mobility",
    paragraphs: [
      "Whether you’re booking a weekend in Abuja or a vacation in Dubai, we connect you to over 3,000 destinations via our partner, Borderless Travels.",
      "From flights and hotel reservations to airport drop-offs, your entire travel experience can now be powered by stablecoins and Manilla’s smart wallet.",
    ],
  },
  {
    title: "Everyday Bills",
    intro:
      "Whether it’s NEPA light, topping up Glo data, or paying for your DSTV subscription—we make it happen in a few taps, 24/7.",
    list: ["Airtime & Data", "Cable TV", "Electricity", "Water & Gas"],
  },
  {
    title: "For Businesses & Freelancers",
    paragraphs: [
      "Today’s Nigerian freelancer is global. So is the modern SME. With Manilla’s business tools, you can invoice international clients and get paid in crypto—without conversion headaches, delays, or high banking fees.",
      "From designers and developers to export merchants and digital coaches, Manilla gives you the power to scale.",
    ],
  },
  {
    title: "Naira Bridge - Convert Crypto to Naira Without Stress",
    paragraphs: [
      "Swapping digital assets for naira shouldn’t feel like navigating a black market.",
      "Naira Bridge offers you a reliable, transparent way to convert major cryptocurrencies into naira—and vice versa. Built for traders, freelancers, and everyday users alike, it’s designed to be fast, fair, and frictionless.",
    ],
  },
];

const ServicesCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto relative py-8 px-">
      <Carousel className="w-full relative ">
        <CarouselContent className="-ml-4 space-x-4">
          {serviceData.map((service, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 pl-4 first:pl-0 p-8 px-4 text-center bg-gray-100 rounded-xl shadow-md flex flex-col items-center justify-center gap-4">
              <h2 className="text-xl font-bold">{service.title}</h2>

              {service.intro && (
                <p className="text-gray-700">{service.intro}</p>
              )}

              {service.list && (
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {service.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="bg-white rounded-full p-1.5">
                        <MdKeyboardDoubleArrowRight className="w-4 h-4 text-black" />
                      </span>
                      <p className="text-gray-800">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {service.paragraphs && !service.intro && (
                <div className="space-y-2">
                  {service.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-700 text-sm leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-4">
          <CarouselPrevious className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
            &#10094;
          </CarouselPrevious>
          <CarouselNext className="p-2 bg-white rounded-full shadow hover:bg-gray-200">
            &#10095;
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
