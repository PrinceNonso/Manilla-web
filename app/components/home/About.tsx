import Link from "next/link";

export default function About(){
    return(
              <section className="py-22">
        <div className="max-w-[1196px] mx-auto px-4">
          <header className="text-center">
            <p className="text-xs lg:text-base">About us</p>
            <p className="font-semibold text-2xl lg:text-4xl">Redefining the <span className="text-[#040786]">Way Canada Pays</span></p>
          </header>
          <div className="my-4 space-y-2">
            <p>At Manilla Finance, we believe everyday payments should be instant, borderless, and built around your life and not the banks. That’s why we created a CEDEFI platform where crypto and fiat coexist seamlessly - we pay providers using fiat, and you pay us in crypto to access the same services with ease. </p>
            <p>Founded on the principle of financial freedom, the Manilla Pay app brings the power of digital assets to everyday transactions. Whether you’re paying your utility bills or booking a vacation, we make it frictionless, fast, and future-proof.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 my-4">
            <div className="bg-gradient-to-b p-6 space-y-[10px] text-white rounded-2xl hover:from-[#979797] hover:to-[#222222] cursor-pointer from-[#8183C2] to-[#1C1E6C]">
              <p className="text-lg font-semibold">Our Mission</p>
              <p>To empower Canadians with tools that give them more control, more flexibility, and more transparency in how they spend, save, and pay - all powered by the blockchain.</p>
            </div>
            <div className="bg-gradient-to-b p-6 space-y-[10px] text-white rounded-2xl hover:from-[#979797] hover:to-[#222222] cursor-pointer from-[#8183C2] to-[#1C1E6C]">
              <p className="text-lg font-semibold">Our Promise</p>
              <p>We are committed to compliance, security, and service excellence while bringing cutting-edge technology to traditional services, with human support that cares.</p>
            </div>
            <div className="bg-gradient-to-b p-6 space-y-[10px] text-white rounded-2xl hover:from-[#979797] hover:to-[#222222] cursor-pointer from-[#8183C2] to-[#1C1E6C]">
              <p className="text-lg font-semibold">Backed by Global Experience</p>
              <p>Manilla is trusted by thousands across Africa and now proudly expanding into Canada. The Manilla team is experienced, reliable, and ready to challenge the status quo. </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
           <Link href={"/about"}>
              <button className="p-6 py-3 font-bold text-sm lg:text-lg rounded-4xl  border-[#04078C] border-2 text-[#04078C]">Read More</button>
           </Link>
          </div>
        </div>
      </section>
    )
}