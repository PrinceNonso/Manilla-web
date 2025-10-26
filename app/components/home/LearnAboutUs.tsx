"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LearnAboutUs = () => {
  const learnCards = [
    "/learn/manilla-pay.png",
    "/learn/manilla-debit.png",
    "/learn/manilla-token.png",
    "/learn/manilla-vault.png",
  ];

  return (
    <section className="py-10 px-4 md:px-20">
      <div className=" lg:pl- flex flex-col lg:flex-row items-center gap-10">
        {/* === LEFT SECTION === */}
        <div className="space-y-4 flex-1">
          <Button variant="destructive" className="cursor-none ">
            <span className="text-secondary">Learn About </span> Our Products
          </Button>

          <h2 className="text-2xl md:text-4xl text-blue-1 font-semibold">
            Manilla Products
          </h2>

          <div className="text-gray-500 divide-y-2 divide-dashed divide-gray-400 text-base md:text-lg font-semibold">
            <div className="py-3 max-w-[20rem]">
              <p>
                Manilla offers a suite of innovative solutions designed to make
                everyday financial transactions seamless and secure.
              </p>
            </div>

            <div className="py-3 max-w-[22.5rem]">
              <p>
                Each product is built for speed, reliability, and convenience,
                empowering users across Africa and beyond to stay connected and
                in control of their finances.
              </p>
            </div>
          </div>
        </div>

        {/* === RIGHT SECTION: CAROUSEL === */}
        <div className=" w-full bg-brand-lighter lg:max-w-[60rem] py-4 px-2 lg:rounded-l-2xl">
          <Carousel
            className="w-full"
            opts={{
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}>
            <CarouselContent className="">
              {learnCards.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center md:basis-1/2 lg:basis-1/3 h-full ">
                  <div className="relative w-full md:w-full h-[32rem] ">
                    <Image
                      src={src}
                      alt={`Manilla product ${index + 1}`}
                      fill
                      className="object-contain rounded-x"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LearnAboutUs;
