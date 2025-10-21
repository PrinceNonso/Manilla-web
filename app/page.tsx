"use client";

import {
  AboutSection,
  BlogSection,
  Footer,
  HeroSection,
  MediaPartnersSection,
  Navbar,
  NewAboutSection,
  NewHeroSection,
  NewsLetterSection,
  OurServices,
  PartnersSection,
  ProductSection,
  ServicesSection,
  WhyChooseUsSection,
  WhyManiilaAppSection,
} from "./components";
import LearnAboutUs from "./components/home/LearnAboutUs";
import WhyChooseManilla from "./components/home/WhyChooseManilla";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <NewHeroSection />
        <NewAboutSection />
        <WhyChooseManilla />
        <LearnAboutUs />
        <OurServices />
        <WhyManiilaAppSection />
        <BlogSection />
        <MediaPartnersSection />
        {/* <WhyChooseUsSection />
        <AboutSection />
        <ProductSection />
        <ServicesSection />
        <PartnersSection/>
        <NewsLetterSection/> */}
      </main>
      <Footer />
    </>
  );
}
