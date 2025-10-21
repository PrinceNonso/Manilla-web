import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-8 mt-12 md:mt-16">
      <div className=" mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-8">
          {/* Logo and About */}
          <div className="flex-[2] min-w-[220px]">
            <div className="mb-4">
              <Image
                src="/manilla-finance-logo.svg"
                width={180}
                height={40}
                alt="Manilla Technologies"
              />
            </div>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xs">
              Manilla Finance is a modern fintech platform simplifying utility,
              travel, and cross-border payments across Africa and North America.
            </p>
          </div>

          {/* Explore */}
          <div className="flex-[1] min-w-[140px]">
            <h4 className="font-bold mb-2">Explore</h4>
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

          {/* Links */}
          <div className="flex-[1] min-w-[140px]">
            <h4 className="font-bold mb-2">Links</h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                <Link href="/terms">Terms & Policy</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Socials + Download */}
          <div className="flex-[2] min-w-[220px] flex flex-col items-center">
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-3 mb-2">
              <a href="#" aria-label="Twitter">
                <Image
                  src="/twitter-icon.svg"
                  width={32}
                  height={32}
                  alt="Twitter"
                />
              </a>
              <a href="#" aria-label="Facebook">
                <Image
                  src="/facebook-icon.svg"
                  width={32}
                  height={32}
                  alt="Facebook"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/instagram-icon.svg"
                  width={32}
                  height={32}
                  alt="Instagram"
                />
              </a>
              <a href="#" aria-label="Pinterest">
                <Image
                  src="/pinterest-icon.svg"
                  width={32}
                  height={32}
                  alt="Pinterest"
                />
              </a>
            </div>
            <div className="mb-3 text-sm">Download Manilla App</div>
            <div className="flex space-x-3 mb-2">
              <a href="#">
                <Image
                  src="/google-play-badge.png"
                  width={120}
                  height={36}
                  alt="Get it on Google Play"
                />
              </a>
              <a href="#">
                <Image
                  src="/app-store-badge.png"
                  width={120}
                  height={36}
                  alt="Download on the App Store"
                />
              </a>
            </div>
            <div className="mb-2 mt-2 text-xs text-gray-600">
              Scan Now to Download
            </div>
            <div>
              <Image
                src="/manilla-qr.png"
                width={100}
                height={100}
                alt="Manilla App QR"
              />
            </div>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-200" />
        <div className="text-center text-xs text-gray-500">
          &copy; Copyright 2025, All Rights Reserved by Manilla
        </div>
      </div>
    </footer>
  );
}
