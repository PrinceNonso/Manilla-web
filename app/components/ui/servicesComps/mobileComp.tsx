"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active index with Embla
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2500);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="w-full mx-auto relative py-8 lg:hidden">
      {/* Embla viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 mx-auto px-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 text-start p-4  bg-gray-100 border-4 border-[#28282852] rounded-xl shadow-md flex flex-col items-center justify-center gap-4">
              <h2 className="text-xl font-bold">{service.title}</h2>

              {service.intro && (
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.intro}
                </p>
              )}

              {service.list && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {service.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="bg-white rounded-full p-1.5">
                        <MdKeyboardDoubleArrowRight className="w-4 h-4 text-blue-1" />
                      </span>
                      <p className="text-gray-800 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {service.paragraphs && !service.intro && (
                <div className="space-y-2 text-base">
                  {service.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-700 text-sm md:!text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots + Nav Arrows */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {/* Left arrow */}
        <button
          onClick={scrollPrev}
          className="h-7 w-7 bg-dark cursor-pointer rounded-full text-white hover:text-secondary hover:bg-blue-1">
          &#10094;
        </button>

        {/* Dots */}
        {serviceData.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ease-linear ${
              activeIndex === i
                ? "bg-dark w-12 scale-110 "
                : "bg-secondary hover:bg-gray-600"
            }`}
          />
        ))}

        {/* Right arrow */}
        <button
          onClick={scrollNext}
          className="h-7 w-7 bg-dark cursor-pointer rounded-full text-white hover:text-secondary hover:bg-blue-1">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
