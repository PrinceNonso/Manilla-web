"use client";
import { useState, useMemo } from "react"
import { HomeLayout } from "../components";



const tabs = [
    {
        content: "We continuously push the boundaries of technology, exploring new ways to enhance user experience and expand access to digital financial services.",
        slug: "innovation",
        label: "Innovation"
    },
    {
        content: "We continuously push the boundaries of technology, exploring new ways to enhance user experience and expand access to digital financial services.",
        slug: "security",
        label: "Security"
    },
    {
        content: "We continuously push the boundaries of technology, exploring new ways to enhance user experience and expand access to digital financial services.",
        slug: "integrity",
        label: "Integrity"
    },
    {

        content: "We continuously push the boundaries of technology, exploring new ways to enhance user experience and expand access to digital financial services.",
        slug: "inclusion",
        label: "Inclusion"
    },
    {

        content: "We continuously push the boundaries of technology, exploring new ways to enhance user experience and expand access to digital financial services.",
        slug: "customer-centricity",
        label: "Customer-Centricity"
    }
]

export default function () {
    const [activeTab, setActiveTab] = useState("innovation")

    const selectedTab = useMemo(() => {
        return tabs.find(item => item.slug === activeTab) ?? tabs[0]
    }, [activeTab])
    return (
        <HomeLayout activeLink="about">
            <main className="bg-white">
                <section className="lg:flex lg:min-h-screen">
                    <div className="flex-1 bg-gradient-to-r text-white p-12 lg:pl-24 lg:pt-24 lg:pr-10 lg:pb-10 from-[#760393] to-[#01022D]">
                        <div className="text-3xl lg:text-6xl font-medium">
                            <p>About <span className="text-[#FFA503]">Manilla</span></p>
                            <div className="flex gap-x-4 items-center">
                                <p>Finance</p>
                                <div className="flex-1 h-0.5 bg-white"></div>
                                <p>Who</p>
                            </div>
                            <p className="text-end">We Are</p>
                        </div>
                        <p className="lg:text-lg mt-16 text-[#B8B8B8]">Manilla Finance is a pioneering fintech company transforming the way utility bills and travel payments are made across Africa and North America. Founded with the vision of bridging traditional financial systems and emerging blockchain technology, Manilla Finance empowers individuals and businesses to pay bills and transact seamlessly using both utility digital assets and stable coins like USDC and USDT.</p>
                    </div>
                    <div className="flex-1 relative h-[600px] lg:h-auto">
                        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/wall.png" alt="" />
                        <img className="absolute top-0 left-0 w-full h-full object-cover" src="/about-1.png" alt="" />
                    </div>
                </section>
                <section className="py-24 max-w-[1196px] mx-auto px-4">
                    <header className="text-center">
                        <p className="font-black uppercase text-2xl lg:text-6xl">WHATS MORE</p>
                    </header>
                    <div className="grid lg:grid-cols-2 lg:text-2xl gap-x-4 mt-6">
                        <div className="space-y-3">
                            <p>Headquartered in Nigeria and Canada, Manilla Finance stands at the forefront of the CeDeFi (Centralized Decentralized Finance) revolution, merging the security, transparency, and efficiency of blockchain with the accessibility and convenience required by everyday consumers and enterprises. </p>
                            <p>Our platform leverages cutting-edge technology to simplify payments for essential services such as electricity, water, gas, internet data, cable TV, airtime, </p>
                        </div>
                        <div className="space-y-3">
                            <p>and travel-related expenses, including flights, stays, and airport transfers.</p>
                            <p>At Manilla Finance, we are driven by a deep commitment to financial inclusion, innovation, and customer-centricity. Our team comprises industry veterans, blockchain experts, and customer service professionals dedicated to delivering an unmatched payment experience that is fast, secure, and reliable.</p>
                        </div>
                    </div>
                </section>
                <section className="py-12 lg:py-24 max-w-[1196px] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-x-20">
                        <div>
                            <span className="bg-[#CDCDE7] rounded-5xl px-5 py-2 rounded-4xl text-xs lg:text-base uppercase">About Us</span>
                            <p className="text-2xl lg:text-6xl font-bold text-[#020617] mt-4 lg:mt-8">Our Mission</p>
                            <div className="h-[375px] lg:h-[554px] rounded-xl relative overflow-hidden lg:hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src="/accounting.jpg" alt="" />
                            </div>
                            <p className="my-6 lg:text-lg text-[#64748B]">Our mission is to revolutionize bill payments and travel services by integrating blockchain technology with traditional financial infrastructure to create a seamless, secure, and inclusive payment ecosystem. We aim to:</p>
                            <ul className="list-disc lg:text-lg pl-4 text-[#64748B]">
                                <li>Enable individuals and businesses to transact effortlessly using cryptocurrency and fiat currencies.</li>
                                <li>Promote financial inclusion by making bill payments accessible to underserved and unbanked populations across Africa and North America</li>
                                <li>Ensure transparency, security, and accountability in all transactions by leveraging blockchain’s immutable ledger technology.</li>
                                <li>Deliver exceptional customer experience through continuous innovation and reliable service delivery.</li>
                            </ul>
                        </div>
                        <div>
                            <div className="h-[554px] hidden lg:block rounded-xl relative overflow-hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src="/accounting.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 lg:py-24 max-w-[1196px] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-x-20">
                        <div>
                            <div className="h-[554px] hidden lg:block rounded-xl relative overflow-hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src="/vision.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <span className="bg-[#CDCDE7] rounded-5xl px-5 py-2 rounded-4xl uppercase">About Us</span>
                            <p className="text-2xl lg:text-6xl font-bold text-[#020617] mt-4 lg:mt-8">Our Vision</p>
                             <div className="h-[250px] lg:hidden rounded-xl mt-8 relative overflow-hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src="/vision.jpg" alt="" />
                            </div>
                            <p className="my-6 text-sm lg:text-lg text-[#64748B]">To become the leading global payment platform that redefines how people and businesses pay bills and manage travel expenses—where blockchain technology and everyday finance converge to create a borderless, frictionless financial future. We envision a world where:</p>
                            <ul className="list-disc text-sm lg:text-lg pl-4 text-[#64748B]">
                                <li>All payments, regardless of geography or currency type, are instantaneous, cost-effective, and fully transparen</li>
                                <li>Blockchain empowers communities by providing financial tools previously inaccessible or costly to adopt</li>
                                <li>Businesses of all sizes can integrate our APIs to offer their customers a seamless bill payment experience.</li>
                                <li>Manilla Finance is recognized as a trusted partner for both individuals and enterprises seeking innovation without compromising security.</li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section className="py-12 lg:py-24 max-w-[1196px] mx-auto px-4">
                    <div className="lg:min-h-[510px] rounded-lg bg-gradient-to-r flex items-center justify-center text-white p-8 from-[#03067D] to-[#01022D] lg:from-[#4C037D] lg:to-[#18012D]">
                        <div className="flex-1 max-w-[1000px]">
                            <p className="text-xl lg:text-6xl font-bold text-center">Our Values</p>
                            <header className="my-8 lg:mt-12 gap-x-2 border border-[#FFA503] flex rounded-md lg:rounded-xl mx-auto p-1 w-full justify-center">
                                {tabs.map((item) => {

                                    if (item.slug == activeTab) {
                                        return (
                                            <button key={`tab-title-${item.slug}`} className="font-semibold flex-1 max-w-[80px] sm:max-w-full text-xs lg:text-sm bg-white text-[#01011B] cursor-pointer px-3 py-1.5 lg:px-6 lg:py-3 rounded-xl">{item.label}</button>
                                        )
                                    }

                                    return (
                                        <button onClick={() => setActiveTab(item.slug)} key={`tab-title-${item.slug}`} className="font-semibold max-w-[80px] flex-1 sm:max-w-full  text-xs lg:text-sm cursor-pointer px-3 py-1.5 rounded-xl">{item.label}</button>
                                    )
                                })}
                            </header>
                            <p className="mt-6 lg:mt-16 text-[#B8B8B8] text-center text-sm lg:text-lg">{selectedTab.content}</p>
                        </div>


                    </div>
                </section>
                <section className="py-12 lg:py-24 max-w-[1196px] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-x-20">
                        <div>
                            <p className="lg:text-6xl font-black text-[#020617] text-2xl mt-8">Partner With Us <br /> —</p>
                            <p className="my-6 lg:text-2xl text-[#111111]">
                                Let’s Build the Future Together
                                Whether you are a business seeking to streamline your payment collections or an individual looking for a secure, flexible way to pay your utility bills and travel expenses, Manilla Finance is your trusted partner.
                            </p>
                            <button className="bg-gradient-to-b from-[#0105C4] text-white px-6 text-lg py-2 rounded-4xl font-bold to-[#04078A] hidden lg:inline-block">Sign Up</button>
                        </div>
                        <div>
                            <div className="">
                                <div className="p-8 space-y-12 rounded-2xl py-12 text-white bg-[#01011B]">
                                    <div className="space-y-4">
                                        <header className="flex gap-x-4">
                                            <img src="/business.png" alt="" />
                                            <p className="text-2xl font-bold">For Businessess:</p>
                                        </header>
                                        <p>Integrate our APIs to offer your customers seamless crypto and fiat payment options. Enhance your billing systems with blockchain-powered transparency and security. Benefit from real-time transaction processing and comprehensive invoicing solutions designed for efficiency and compliance.</p>
                                    </div>
                                    <hr className="bg-[#BFBFBF]" />
                                    <div className="space-y-4">
                                        <header className="flex gap-x-4">
                                            <img src="/business.png" alt="" />
                                            <p className="lg:text-2xl font-bold">For Individuals:</p>
                                        </header>
                                        <p className="text-sm lg:text-base">Download our user-friendly app to access a world of payment options at your fingertips. Whether you want to pay electricity bills, top up data, book flights, or manage your invoices, Manilla Finance makes it easy, fast, and safe.
                                            Join thousands of satisfied users who trust Manilla Finance for their everyday payments. Together, we can build a more inclusive, innovative, and efficient financial ecosystem.ce.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-gradient-to-b from-[#0105C4] text-white my-3 px-6 text-lg py-2 rounded-4xl font-bold to-[#04078A] lg:hidden">Sign Up</button>

                        </div>
                    </div>
                </section>
                <section className="py-12 lg:py-24 max-w-[1196px] mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-x-20">
                        <div>
                            <p className="text-2xl lg:text-6xl font-black uppercase text-[#020617]">Meet Our Team</p>
                            <div className="h-[240px] lg:h-[428px] mt-12 rounded-xl relative overflow-hidden">
                                <img className="absolute top-0 left-0 h-full w-full object-cover" src="/meet_our_team.jpg" alt="" />
                            </div>
                        </div>
                        <div>
                            <ul className="lg:text-lg pl-4 text-[#64748B]">
                                <li className="border-t border-[#BFBFBF] py-6">At Manilla Finance, our strength lies in the diversity, expertise, and shared vision of our global team. Spanning four continents and drawn from a rich blend of cultural and professional backgrounds, our team is a collective of innovators, problem-solvers, and industry leaders.</li>
                                <li className="border-t border-[#BFBFBF] py-6">Our core team brings together exceptional talent from key sectors, including digital assets and blockchain, telecommunications, banking and finance, and the energy industry. This multidisciplinary foundation enables us to build solutions that are not only technologically advanced but also grounded in real-world financial systems and user behavior..</li>
                                <li className="border-t border-[#BFBFBF] py-6">Together, our team boasts thousands of combined man-years of experience with each member contributing deep insights, strategic thinking, and hands-on expertise that drive our innovation engine forward..</li>
                                <li className="border-t border-[#BFBFBF] py-6">At Manilla Finance, we’re not just building a platform - we’re building a future where value flows seamlessly, access is democratized, and financial freedom is within reach for everyone.</li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section className="py-24 max-w-[1196px] mx-auto px-4">
                    <header className="text-center">
                        <p className="font-black uppercase g:text-6xl">GET STARTED TODAY</p>
                        <p className="lg:text-2xl font-bold">Contact us to learn more about our solutions or to discuss partnership opportunities.</p>
                    </header>
                    <div className="lg:min-h-[355px] flex items-center text-white mt-16 px-6 lg:px-24 py-12 bg-[#030670] rounded-2xl relative">
                        <img className="absolute top-0 left-0 w-full object-cover rounded-2xl" src="/partner.png" alt="" />
                        <div className="relative flex-1">
                            <div className="grid  lg:grid-cols-2 gap-x-6">
                                <div className="text-center lg:text-left">
                                    <p className="text-2xl lg:text-4xl font-bold">Interested in Partnering with Us?</p>
                                    <p className="lg:text-xl my-6">We’re always open to strategic partnerships that align with our mission to revolutionize digital finance. Reach out to us at <span className="text-[#FFA503]">partnerships@manilla.finance</span> </p>
                                </div>
                                <div>
                                    <textarea placeholder="Enter your message. Kindly, input your contact information as well so we can get back to you." className="p-7 bg-white h-[93px] lg:h-[168px] w-full rounded-lg text-[#7B7B7B]" id=""></textarea>
                                    <button className="bg-gradient-to-r from-[#0106C5] min-h-7 lg:min-h-14 lg:text-xl font-bold w-full my-4 p-4 rounded-4xl text-white to-[#04078B]">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </HomeLayout>
    )
}