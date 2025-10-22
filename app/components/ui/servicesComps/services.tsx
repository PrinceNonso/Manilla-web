"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { VerticalProgressBar } from "../vertProgressor";

// Mini Component: ServiceSection
// Reusable for each service section - handles paragraphs or intro + list
interface ServiceSectionProps {
  title: string;
  paragraphs?: string[]; // For standard multi-paragraph sections
  intro?: string; // For sections with a list (e.g., Everyday Bills)
  list?: string[]; // Optional list items for bullet-style rendering
  active?: boolean; // Optional: for highlighting active section
  index: number; // For step reference
  onHover: (index: number) => void; // Hover enter handler
  onLeave: () => void; // Hover leave handler
}

const ServiceSection = React.forwardRef<HTMLDivElement, ServiceSectionProps>(
  (
    { title, paragraphs, intro, list, active = false, index, onHover, onLeave },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`space-y-2 mb-4 last:mb-0 bg-[#BABABA1F] p-5 rounded-2xl w-full transition-all duration-300 cursor-pointer focus:outline-none  ${
          active ? "scale-105 ring-2 ring-[#28282852] bg-[#BABABA2F]" : ""
        }`}
        onMouseEnter={() => onHover(index)}
        onMouseLeave={onLeave}
        onFocus={() => onHover(index)}
        tabIndex={0} // Make focusable
        title={`Step ${index + 1}: ${title}`} // Native tooltip on hover/focus
      >
        <h2
          className={`text-base md:text-xl font-bold ${
            active ? "" : "text-gray-800"
          }`}>
          {title}
        </h2>

        {intro && <p className="leading-relaxed">{intro}</p>}

        {list && (
          <div className="gap-4 mt-4 grid grid-cols-2">
            {list.map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <span className="bg-white w-max rounded-full p-1.5 flex-shrink-0">
                  <MdKeyboardDoubleArrowRight className="w-4 h-4 text-black" />
                </span>
                <p className="flex-1">{item}</p>
              </div>
            ))}
          </div>
        )}

        {paragraphs && !intro && (
          <div className="space-y-3">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

ServiceSection.displayName = "ServiceSection";

interface ProgressTooltipProps {
  step: number;
  visible: boolean;
}

const ProgressTooltip: React.FC<ProgressTooltipProps> = ({ step, visible }) => {
  if (!visible) return null;

  return (
    <div className="absolute right-full mr-1 top-1/2 -translate-y-1/2 z-50">
      <div className="relative bg-black/80 text-white px-3 py-2 rounded-md text-sm whitespace-nowrap shadow-lg">
        {step}
        {/* Arrow tip pointing right toward the vertical indicator */}
        <div
          className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-0 
          border-y-4 border-y-transparent border-l-4 border-l-black/80"></div>
      </div>
    </div>
  );
};

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

export const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [tooltipStep, setTooltipStep] = useState(-1);
  const [containerHeight, setContainerHeight] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [0, 33, 66, 100];
  const progress = (activeStep / (steps.length - 1)) * 100;

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [serviceData]);

  useEffect(() => {
    const refs = sectionRefs.current;
    if (refs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const handleHover = (index: number) => {
    setActiveStep(index);
    setTooltipStep(index);
  };

  const handleLeave = () => {
    setTooltipStep(-1);
  };

  // Calculate moving circle Y-position
  const stepCount = serviceData.length;
  const circleTop =
    tooltipStep === -1 ? 0 : (tooltipStep / (stepCount - 1)) * containerHeight;

  return (
    <div className="relative hidden lg:block">
      <div>
        <h2 className=" flex items-center justify-center gap-2 text-blue-1 font-bold text-base md:text-xl lg:text-2xl ">
          Our Services
          <span className="bg-lightest rounded-full p-1.5 shadow-xl backdrop-blur-">
            <MdKeyboardDoubleArrowDown className="w-4 h-4" />
          </span>
        </h2>
      </div>
      <div className="min-h-screen hidden lg:flex items-start gap-8 lg:gap-12 py-8 relative">
        <div ref={containerRef} className="flex-1 max-w-4xl lg:px-4 space-y-4">
          {serviceData.map((service, index) => (
            <ServiceSection
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              active={activeStep === index}
              index={index}
              onHover={handleHover}
              onLeave={handleLeave}
              {...service}
            />
          ))}
        </div>

        <div className="flex-shrink-0 hidden md:flex items-start relative mx-auto">
          <div
            className="relative h-full bg-[#5858581F] p-4 py-4 rounded-full"
            style={{ height: `${containerHeight}px` }}>
            <div className="h-full">
              <VerticalProgressBar
                progress={progress}
                steps={steps}
                className="h-full "
              />
            </div>

            {/* === Moving Rounded Element === */}
            {tooltipStep !== -1 && (
              <div
                className="absolute z-50 w-5.5 h-5 rounded-full p-[4px] shadow-lg transition-all duration-500"
                style={{
                  left: "50%",
                  top: `${circleTop}px`,
                  transform: "translate(-50%, -50%)",
                  background:
                    "linear-gradient(135deg, #6DDCFF 0%, #7F60F9 100%)",
                  boxShadow: "0 0 10px rgba(127, 96, 249, 0.5)",
                }}>
                <div className="w-full h-full bg-white rounded-full" />
              </div>
            )}

            {/* Tooltip on left */}
            <ProgressTooltip
              step={tooltipStep + 1}
              visible={tooltipStep !== -1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
