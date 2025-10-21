// File: components/MediaMarquee.tsx
"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface MediaMarqueeProps {
  logos: string[];
  direction?: "left" | "right";
  speed?: number;
  padding?: string;
  containerWidth?: string;
  containerHeight?: string;
  className?: string;
}

const MediaMarquee: React.FC<MediaMarqueeProps> = ({
  logos,
  direction = "left",
  speed = 50,
  padding = "p-3",
  containerWidth = "w-44",
  containerHeight = "h-16",
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center w-full overflow-hidden ${className}`}>
      <Marquee
        pauseOnHover
        gradient={false}
        direction={direction}
        speed={speed}
        className="flex items-center">
        {logos.concat(logos).map((logo, i) => (
          <div
            key={i}
            className={`inline-flex ${containerWidth} ${containerHeight} mx-4 shrink-0 items-center justify-center bg-white rounded ${padding}`}>
            <div className="flex items-center justify-center w-full h-full shrink">
              <Image
                src={logo}
                alt={`media logo ${i}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MediaMarquee;
