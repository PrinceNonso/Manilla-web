"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { url: "/blog", name: "Blog", slug: "blog" },
  { url: "/#product", name: "Product", slug: "product" },
  { url: "/#services", name: "Services", slug: "services" },
  { url: "/about", name: "About", slug: "about" },
  { url: "/contact", name: "Contact", slug: "contact" },
];
const sidelinks = [
  { url: "/about", name: "About", slug: "about" },
  { url: "/#product", name: "Product", slug: "product" },
  { url: "/#services", name: "Services", slug: "services" },
  { url: "/contact", name: "Contact", slug: "contact" },
  { url: "/blog", name: "Blog", slug: "blog" },
];

interface NavbarProps {
  activeLink?: string;
}

export default function Navbar({ activeLink = "home" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full z-[10000] bg-white flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex bg-white top-0 border-b border-[rgba(0,0,0,0.15)] items-center justify-between p-4">
          <img src="/manilla-finance-logo.svg" alt="Manilla Logo" />
          <button onClick={toggleSidebar}>
            <img src="/x-close.svg" alt="Close menu" />
          </button>
        </header>

        {/* Navigation Links */}
        <div className="flex-1">
          {sidelinks.map((link) => (
            <Link
              key={`nav-link-${link.name}`}
              href={link.url}
              onClick={() => setIsOpen(false)}
              className={`font-semibold items-center justify-between p-4 border-b border-[rgba(0,0,0,0.15)] w-full flex ${
                activeLink === link.slug ? "text-[#380191]" : "text-[#19191B]"
              }`}
            >
              <span>{link.name}</span>
              <img src="/chevron-right.svg" alt="" />
            </Link>
          ))}
        </div>

        {/* Language Buttons */}
        <div className="space-y-3 font-bold text-sm py-0.5 p-1">
          <button className="px-6 py-3 w-full rounded-4xl text-white from-[#0105C5] to-[#04078B] bg-gradient-to-r">
            English
          </button>
          <button className="px-6 py-3 font-bold rounded-4xl w-full text-[#010B28] border border-[#5F0489]">
            French
          </button>
        </div>
      </aside>

      {/* Top Navbar */}
      <nav className="bg-white sticky top-0 z-[100]">
        <header className="max-w-[1196px] mx-auto px-4 min-h-[78px] flex items-center">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center flex-1 lg:flex-auto">
            <Link href={"/"}>
              <img src="/manilla-finance-logo.svg" alt="Manilla Logo" />
            </Link>
            <button className="ml-auto lg:hidden" onClick={toggleSidebar}>
              <img src="/menu.svg" alt="Open menu" />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-x-7 ml-auto">
            {links.map((link) => (
              <Link
                key={`nav-link-${link.name}`}
                href={link.url}
                className={`font-semibold ${
                  activeLink === link.slug
                    ? "text-[#380191]"
                    : "text-[#19191B]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Language Switch */}
          <div className="hidden lg:flex ml-24 border font-bold text-[10px] py-0.5 border-[#5F0489] p-1">
            <button className="px-6">French</button>
            <button className="px-6 py-1 text-white bg-[#5F0489]">
              English
            </button>
          </div>
        </header>
      </nav>
    </>
  );
}
