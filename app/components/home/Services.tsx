"use client";
import { useState, useMemo, ReactNode } from "react";

interface Tab {
  title: ReactNode;
  content: ReactNode;
  slug: string;
  buttonTitle: string;
  imageSrc: string;
}

function BillPaymentContent() {
  return (
    <div className="py-4">
      <p className="lg:font-bold text-sm text-[#121212]">
        Tired of juggling utility bills across multiple platforms? Say goodbye
        to missed bills and hello to financial freedom.
      </p>
      <p className="lg:font-bold my-4 text-sm text-[#121212]">
        With Manilla Pay, paying for everyday essentials is as easy as sending a
        text. Whether it's Hydro, water, gas, or mobile data, settle your
        utilities in seconds using crypto assets in-app or crypto debit card -
        anytime, anywhere. It’s secure, seamless, and built for the modern
        Canadian lifestyle.
      </p>
    </div>
  );
}
function TravelMobilityContent() {
  return (
    <div className="py-4">
      <p className="lg:font-bold text-sm text-[#121212]">
        Explore the world, powered by crypto.
      </p>
      <p className="lg:font-bold my-4 text-sm text-[#121212]">
        Manilla Finance brings seamless travel booking to your fingertips.
        Through our ecosystem partner, Borderless Travels - an IATA accredited
        agency integrated with Amadeus, We aggregate over 400 airlines serving
        3,000+ destinations globally. Book domestic and international flights,
        curated hotel stays, and airport transfers with ease using USDC, USDT,
        or crypto card. Travel smart. Spend simpler. Go borderless.
      </p>
    </div>
  );
}
function FreelancerContent() {
  return (
    <div className="py-4">
      <p className="text-sm text-[#121212]">
        Manilla empowers Canadian businesses with modern invoicing tools.
        Whether freelance or enterprise, bill clients worldwide and get paid in
        crypto. Create branded invoices in seconds, accept USDT, USDC, ETH, and
        BTC, and receive real-time payment alerts. Hold crypto or auto-convert
        to CAD (coming soon) to stay ahead with seamless, stable settlements.
      </p>
    </div>
  );
}
function ApiContent() {
  return (
    <div className="py-4 text-sm lg:text-base">
      <p className="text-[#121212]">
        Accept crypto payments directly on your website—fast, secure, and
        borderless. With Manilla’s plug-and-play API or plugins, integration
        takes minutes. Customers enjoy seamless checkout without leaving your
        site. Instantly receive funds in your Manilla wallet. Built for
        developers with clear docs, sandbox tools, and support to get you live
        quickly.
      </p>
    </div>
  );
}

const tabs: Tab[] = [
  {
    title: "Bill Payments",
    content: <BillPaymentContent />,
    imageSrc: "/bills-illustration.png",
    slug: "bills",
    buttonTitle: "Bill Payments",
  },
  {
    title: "Travel & Mobility",
    imageSrc: "/travels-illustration.png",
    content: <TravelMobilityContent />,
    slug: "travel",
    buttonTitle: "Travel Mobility",
  },
  {
    title: "Business & Freelancers",
    content: <FreelancerContent />,
    imageSrc: "/freelancers-illustration.png",
    slug: "business",
    buttonTitle: "Business & Freelancers",
  },
  {
    title: "Crypto Payment API",
    content: <ApiContent />,
    slug: "api",
    imageSrc: "/api-illustration.png",
    buttonTitle: "Crypto Payment API",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("bills");

  const selectedTab = useMemo(() => {
    return tabs.find((item) => item.slug === activeTab) ?? tabs[0];
  }, [activeTab]);

  return (
    <section className="py-22" id="services">
      <div className="max-w-[1196px] relative px-4 mx-auto">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/graphic-3.png"
          alt=""
        />
        <div className="relative">
          <header className="text-center">
            <p className="text-xs lg:text-base">Our Services</p>
            <p className="font-semibold text-xl lg:text-4xl">
              Your Daily Essentials.{" "}
              <span className="text-[#040786]">
                One Dashboard. Powered by Crypto.
              </span>
            </p>
          </header>
          <header className="my-8 mt-14 gap-x-2 flex bg-[#CDCDCD] rounded-[50px] mx-auto p-1 w-[max-content] justify-center">
            {tabs.map((item) => {
              if (item.slug == activeTab) {
                return (
                  <button
                    key={`tab-title-${item.slug}`}
                    className="font-semibold max-w-[80px] sm:max-w-full text-[6px] lg:text-sm bg-[#1D1E64] text-white cursor-pointer px-3 py-1.5 lg:px-6 lg:py-3 rounded-4xl">
                    {item.buttonTitle}
                  </button>
                );
              }

              return (
                <button
                  onClick={() => setActiveTab(item.slug)}
                  key={`tab-title-${item.slug}`}
                  className="font-semibold max-w-[80px] sm:max-w-full  text-[8px] lg:text-sm cursor-pointer px-3 py-1.5 rounded-4xl">
                  {item.buttonTitle}
                </button>
              );
            })}
          </header>
          <div className="flex flex-col-reverse lg:flex-row items-start py-4 lg:pt-10">
            <div className="flex-1">
              <p className="text-[#1D1E64] lg:text-3xl font-bold">
                {selectedTab.title}
              </p>
              {selectedTab.content}
            </div>
            <div className="flex-1 flex min-h-[300px] -mt-14 lg:-mt-0 items-center justify-center">
              <img
                className=" object-contain"
                src={selectedTab.imageSrc}
                alt={selectedTab.slug}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
