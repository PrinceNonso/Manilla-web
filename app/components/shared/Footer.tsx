import Link from "next/link";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#f9fffc] to-[#fef9f2] py-10 mt-16">
      <div className=" mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-10">
          {/* Logo and About */}
          <div className="flex-[2] min-w-[260px]">
            <div className="mb-4">
              <Image
                src="/manilla-finance-logo.svg"
                width={180}
                height={40}
                alt="Manilla Technologies"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Manilla Finance is a modern fintech platform simplifying utility,
              travel, and cross-border payments across Africa and North America.
            </p>
          </div>

          {/* Explore Section */}
          <div className="flex-[1] min-w-[140px]">
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/company">Company</Link>
              </li>
              <li>
                <Link href="/suite">Manilla Suite</Link>
              </li>
              <li>
                <Link href="/legal">Legal</Link>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="flex-[1] min-w-[140px]">
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/terms">Terms & Policy</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us & App Download */}
          <div className="flex-[2] min-w-[240px] flex flex-col items-center text-center">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-6 mb-4">
              <a
                href="#"
                aria-label="Twitter"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all duration-300 ease-in-out">
                <IoLogoTwitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all duration-300 ease-in-out">
                <GrFacebookOption size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all duration-300 ease-in-out">
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                aria-label="github"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all duration-300 ease-in-out">
                <AiFillGithub size={24} />
              </a>
            </div>

            <p className="text-sm mb-3 text-gray-700">Download Manilla App</p>
            <div className="flex space-x-3 mb-3">
              <a href="#" className="hover:scale-105 transition">
                <img
                  src="/hero/googlePlay.png"
                  alt="Get it on Google Play"
                  className="w-20 h-12 md:w-28 md:h-14 lg:w-44 lg:h-18 hover:scale-105 transition-transform duration-200"
                />
              </a>
              <a href="#" className="hover:scale-105 transition">
                <img
                  src="/hero/appleStore.png"
                  alt="Download on the App Store"
                  className="w-20 h-12 md:w-28 md:h-14  lg:w-44 lg:h-18 hover:scale-105 transition-transform duration-200"
                />
              </a>
            </div>

            {/* Reserved space for QR Code */}
          </div>
          <div className="rounded-md flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 mb-2">Scan Now to Download</p>
            <img
              src="/qrcode.png"
              alt="qr code"
              className="w-44 h-44 md:w-52 md:h-52"
            />
          </div>
        </div>

        {/* Footer bottom line */}
        <hr className="my-10 border-gray-200" />
        <div className="text-center text-xs text-gray-500">
          © Copyright 2025, All Rights Reserved by Manilla
        </div>
      </div>
    </footer>
  );
}
