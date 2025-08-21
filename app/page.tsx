import {
  AboutSection,
  Footer,
  HeroSection,
  Navbar,
  NewsLetterSection,
  PartnersSection,
  ProductSection,
  ServicesSection,
  WhyChooseUsSection
} from "./components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F8FF]">
        <HeroSection />
        <WhyChooseUsSection />
        <AboutSection />
        <ProductSection />
        <ServicesSection />
        <PartnersSection/>
        <NewsLetterSection/>
      </main>
      <Footer/>
    </>
  );
}
