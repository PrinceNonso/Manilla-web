import Link from "next/link";
import Image from "next/image";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#f9fffc] via-20% to-brand-light/40 py-12 mt-16">
      <div className="max-w mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6">
          {/* Logo & About */}
          <div className="flex-1 max-w-sm">
            <Image
              src="/manilla-finance-logo.svg"
              width={180}
              height={40}
              alt="Manilla Technologies"
              className="mb-4"
            />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed ">
              Manilla Finance is a modern fintech platform simplifying utility,
              travel, and cross-border payments across Africa and North America.
            </p>
          </div>
          {/* Explore */}
          <div className="min-w-[150px]">
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
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
          {/* Links */}
          <div className="min-w-[150px]">
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                <Link href="/terms">Terms & Policy</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          {/* Follow Us + App */}
          <div className="flex flex-col items-cente">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center space-x-3 mb-5">
              <a
                href="#"
                aria-label="Twitter"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all">
                <IoLogoTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all">
                <GrFacebookOption size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all">
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="bg-[#4B4B4B] rounded-full p-2.5 text-white hover:bg-primary transition-all">
                <AiFillGithub size={20} />
              </a>
            </div>

            <p className="text-sm mb-3 text-gray-700">Download Manilla App</p>
            <div className="flex space-x-3">
              <a href="#" className="hover:scale-105 transition">
                <Image
                  src="/hero/googlePlay.png"
                  alt="Get it on Google Play"
                  width={130}
                  height={40}
                />
              </a>
              <a href="#" className="hover:scale-105 transition">
                <Image
                  src="/hero/appleStore.png"
                  alt="Download on the App Store"
                  width={130}
                  height={40}
                />
              </a>
            </div>
          </div>
          {/* QR Code */}{" "}
          <div className="flex flex-col lg:text-center lg:items-end">
            <p className="font-semibold mb-3">Download Manilla App</p>
            <p className="text-xs text-gray-600 mb-2">Scan Now to Download</p>
            <Image
              src="/qrcode.png"
              alt="QR code"
              width={160}
              height={160}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Footer bottom */}
        <hr className="my-10 border-gray-200" />
        <p className="text-center text-xs md:text-sm text-blue-1 ">
          © 2025 Manilla Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
