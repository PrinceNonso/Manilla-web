import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const HeroMarquee = () => {
  const mediaPartnersLogos = [
    "/hero/rogers.png",
    "/hero/lebara.png",
    "/hero/lucky.png",
    "/hero/freedommobile.png",
    "/hero/bell.png",
    "/hero/phcn.png",
    "/hero/kenGen.png",
    "/hero/surfline.png",
    "/hero/chatr.png",
    "/hero/lyca-mobile.png",
    "/hero/surfline.png",
  ];

  return (
    <>
      {/* <div className="w-ful  z-20"> */}
      {/* Left-to-right marquee */}
      <Marquee
        pauseOnHover
        gradient={false}
        direction="left"
        className="w-full flex items-center">
        {mediaPartnersLogos.map((mp, i) => (
          <div
            key={i}
            className="flex w-32 md:w-40 h-12 md:h-14 mx-4 shrink-0 items-center justify-center bg-white rounded-md p-8">
            <Image
              src={mp}
              alt={`media logo ${i}`}
              width={160}
              height={60}
              className="object-contain p-2"
            />
          </div>
        ))}
      </Marquee>

      {/* Right-to-left marquee */}
      <Marquee
        pauseOnHover
        gradient={false}
        direction="left"
        className="w-full flex items-center">
        {mediaPartnersLogos.map((mp, i) => (
          <div
            key={i}
            className="flex w-32 md:w-40 h-12 md:h-14 mx-4 shrink-0 items-center justify-center bg-white rounded-md p-8">
            <Image
              src={mp}
              alt={`media logo ${i}`}
              width={160}
              height={60}
              className="object-contain p-2"
            />
          </div>
        ))}
      </Marquee>
      {/* </div> */}
    </>
  );
};

export default HeroMarquee;
