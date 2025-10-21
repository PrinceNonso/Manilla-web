import { HomeLayout } from "../components";

export default function(){
    return(
        <HomeLayout activeLink="contact">
            <main className="max-w-[1216px] mx-auto px-6">
                <div className="min-h-screen py-14 lg:py-28 lg:grid grid-cols-2">
                    <div className="flex-1 hidden lg:block">
                        <div className="h-[400px] relative overflow-hidden">
                            <img className="absolute top-0 left-0 h-full w-full object-cover" src="/contact/login-banner.png" alt="" />
                        </div>
                        <ul className="mt-12 space-y-4">
                            <li className="border gap-x-6 rounded-2xl border-[#EBF1FF] p-6 flex items-center">
                                <div className="border rounded-full border-[rgba(148,163,184,0.5)] h-8 lg:h-14 w-8 lg:w-14 flex items-center justify-center">
                                    <img src="/contact/geo-marker.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-base lg:text-2xl text-[#64748B]">Our Address</p>
                                    <p className="mt-2 text-sm lg:text-base text-[#64748B]">First Canadian Place 100 King St. W. Suite 5700 Toronto, ON M5X 1C7</p>
                                </div>
                            </li>
                            <li className="border gap-x-6 rounded-2xl border-[#EBF1FF] p-6 flex items-center">
                                <div className="border rounded-full border-[rgba(148,163,184,0.5)] h-8 lg:h-14 w-8 lg:w-14 flex items-center justify-center">
                                    <img src="/contact/message.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-base lg:text-2xl text-[#64748B]">For Business & Partnership Enquiries</p>
                                    <p className="mt-2 text-sm lg:text-base font-semibold underline text-[#64748B]">partnerships@manillapay.ca </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:pl-[104px] pb-16 flex-1">
                        <p className="text-2xl lg:text-4xl font-semibold text-[#101828] ">Let’s level up your brand, together</p>
                        <p className="mt-6">Have a support question? Use the form below to reach us and our support team will get back to you shortly</p>
                        <form action="" className="mt-12 space-y-6">
                            <div>
                                <p className="text-sm mb-[6px]">Name</p>
                                <input type="text" className="border rounded-lg w-full border-[#D0D5DD] px-4 py-3 placeholder:text-[#667085]" placeholder="Your Name" />
                            </div>
                            <div>
                                <p className="text-sm mb-[6px]">Email</p>
                                <input type="text" className="border rounded-lg w-full border-[#D0D5DD] px-4 py-3 placeholder:text-[#667085]" placeholder="you@company.com" />
                            </div>
                            <div>
                                <p className="text-sm mb-[6px]">Phone Number</p>
                                <div className="border border-[#d0d5dd] rounded-lg flex items-center px-4 py-3">
                                    <select className="outline-0 border-0 background-transparent" name="" id="">
                                        <option value="US">US</option>
                                    </select>
                                    <input type="text" className="flex-1 placeholder:text-[#667085] bg-transparent outline-0" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                             <div>
                                <p className="text-sm mb-[6px]">How can we help?</p>
                                <textarea className="border h-32 rounded-lg w-full border-[#D0D5DD] px-4 py-3 placeholder:text-[#667085]" placeholder="Tell us a little about the project..." />
                            </div>
                            <button className="mt-2 w-full bg-gradient-to-r text-xs lg:text-base hover:from-[#2b2b2b] hover:to-[#000000] from-[#0005CA] to-[#040786] text-white h-10 lg:h-16 font-semibold rounded-4xl">Get Started</button>
                        </form>
                    </div>
                    <div className="lg:hidden">
                        <div className="h-[400px] relative overflow-hidden">
                            <img className="absolute top-0 left-0 h-full w-full object-cover" src="/contact/login-banner.png" alt="" />
                        </div>
                        <ul className="mt-12 space-y-4">
                            <li className="border gap-x-3 rounded-2xl border-[#EBF1FF] p-3 flex items-center">
                                <div className="border rounded-full border-[rgba(148,163,184,0.5)] h-8 w-8 lg:h-14 lg:w-14 flex items-center justify-center">
                                    <img className="h-4 w-4" src="/contact/geo-marker.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold lg:text-2xl text-[#64748B]">Our Address</p>
                                    <p className="mt-1 text-sm lg:text-base text-[#64748B]">First Canadian Place 100 King St. W. Suite 5700 Toronto, ON M5X 1C7</p>
                                </div>
                            </li>
                            <li className="border gap-x-3 rounded-2xl border-[#EBF1FF] p-3 flex items-center">
                                <div className="border rounded-full border-[rgba(148,163,184,0.5)] h-8 w-8 lg:h-14 lg:w-14 flex items-center justify-center">
                                    <img className="h-4 w-4" src="/contact/message.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold lg:text-2xl text-[#64748B]">For Business & Partnership Enquiries</p>
                                    <p className="mt-1 font-semibold text-sm lg:text-base underline text-[#64748B]">partnerships@manillapay.ca </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}