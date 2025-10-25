"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  { url: "/", name: "Home", slug: "Home" },
  { url: "/#company", name: "Company", slug: "company" },
  { url: "/#services", name: "Services", slug: "services" },
  { url: "/manilla-suite", name: "Manilla Suite", slug: "manilla-suite" },
  { url: "/legal", name: "Legal", slug: "legal" },
];

const sidelinks = [...links];

interface NavbarProps {
  activeLink?: string;
}

export default function Navbar({ activeLink = "home" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 bg-white h-full w-full z-[10000] flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <header className="flex top-0 border-b border-[rgba(0,0,0,0.15)] items-center justify-between p-4">
          <img src="/manilla-finance-logo.svg" alt="Manilla Logo" />
          <button onClick={toggleSidebar}>
            <img src="/x-close.svg" alt="Close menu" />
          </button>
        </header>

        <div className="flex-1">
          {sidelinks.map((link) => (
            <Link
              key={`nav-link-${link.name}`}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className={`font-semibold items-center justify-between p-4 border-b border-[rgba(0,0,0,0.15)] w-full flex ${
                activeLink === link.slug ? "text-[#380191]" : "text-[#19191B]"
              }`}>
              <span>{link.name}</span>
              <img src="/chevron-right.svg" alt="" />
            </Link>
          ))}
        </div>
      </aside>

      {/* Top Navbar */}
      <nav
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[#0000008C] backdrop-blur-lg"
            : "bg-black backdrop-blur-0"
        }`}>
        <header className="px-8 xl:px-20 mx-auto min-h-[78px] flex items-center">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center flex-1">
            <Link href={"/"}>
              <img
                src="/manilla-white.svg"
                alt="Manilla Logo"
                className="h-8"
              />
            </Link>
            <button className="ml-auto lg:hidden" onClick={toggleSidebar}>
              <img src="/menu.svg" alt="Open menu" />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-x-7 text-base text-nowrap bg-blue-1/90 px-6 p-4 rounded-full">
            {links.map((link) => (
              <Link
                key={`nav-link-${link.name}`}
                href={link.url}
                className={`font-semibold ${
                  activeLink === link.slug ? "text-[#380191]" : "text-white"
                }`}>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex xl:ml-24 gap-4 font-bold text-[10px] py-0.5 p-1">
            <Button className="bg-inherit hover:bg-blue-1/80">
              Get Started
            </Button>
            <Button>Download App</Button>
          </div>
        </header>
      </nav>
    </>
  );
}
