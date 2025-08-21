"use client";
import { useState, useMemo, ReactNode } from "react"

interface Tab {
    title: ReactNode,
    content: ReactNode,
    slug: string,
    buttonTitle: string,
    imageSrc: string
}

function BillPaymentContent() {
    return (
        <div className="py-4">
            <p className="lg:font-bold text-sm text-[#121212]">Tired of juggling utility bills across multiple platforms? Say goodbye to missed bills and hello to financial freedom.</p>
            <p className="lg:font-bold my-4 text-sm text-[#121212]">With Manilla Pay, paying for everyday essentials is as easy as sending a text. Whether it's Hydro, water, gas, or mobile data, settle your utilities in seconds using crypto assets in-app or crypto debit card - anytime, anywhere. It’s secure, seamless, and built for the modern Canadian lifestyle.</p>
            <ul className="lg:font-bold text-[#121212] text-sm space-y-2">
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Electricity – Pay hydro bills instantly with crypto or card</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Water – Settle city water services without queues</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Gas – Keep your utilities flowing</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Cable TV – Top up Shaw, Bell, or Rogers subscriptions</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Airtime & Data – For all major Canadian carriers</p>
                </li>
            </ul>
        </div>
    )
}
function TravelMobilityContent() {
    return (
        <div className="py-4">
            <p className="lg:font-bold text-sm text-[#121212]">Explore the world, powered by crypto.</p>
            <p className="lg:font-bold my-4 text-sm text-[#121212]">Manilla Finance brings seamless travel booking to your fingertips. Through our ecosystem partner, Borderless Travels - an IATA accredited agency integrated with Amadeus, We aggregate over 400 airlines serving 3,000+ destinations globally. Book domestic and international flights, curated hotel stays, and airport transfers with ease using USDC, USDT, or crypto card. Travel smart. Spend simpler. Go borderless.</p>
            <ul className="lg:font-bold text-[#121212] text-sm space-y-2">
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Flight Bookings – Domestic & global flights with crypto</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Hotel & Stays – Curated options across Canada and worldwide</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p>Airport Transfers – Book crypto-powered rides ahead of time</p>
                </li>
            </ul>
        </div>
    )
}
function FreelancerContent() {
    return (
        <div className="py-4">
            <p className="text-sm text-[#121212]">Modern Tools for the Modern Canadian Business. Accept Crypto. Get Paid. Stay Ahead.</p>
            <p className="text-sm text-[#121212] font-bold mt-4">Invoice Settlement</p>
            <p className="my-1 mb-4 text-sm text-[#121212]">Whether you’re a solo freelancer or a growing enterprise, Manilla makes it easy to bill clients globally and get paid in crypto..</p>
            <ul className="text-[#121212] text-sm space-y-2">
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Branded Invoice System</b>: Generate professional invoices in seconds—customized with your business name, logo, and payment instructions.</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Multi-Asset Support</b>: Accept top cryptocurrencies like USDT, USDC, ETH, and BTC from clients around the world.</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Automated Conversion</b> – Choose to hold funds in crypto or auto-convert to CAD (coming soon) for business stability.</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Real-Time Notifications</b>: Get alerted the moment payments hit your Manilla wallet.</p>
                </li>
            </ul>
        </div>
    )
}
function ApiContent() {
    return (
        <div className="py-4 text-sm lg:text-base">
            <p className="text-[#121212]">Take payments directly on your website—fast, secure, and borderless.</p>
            <ul className="text-[#121212] space-y-2 my-4">
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Plug & Play Integration</b>:  Add Manilla’s lightweight API or plugins to your e-commerce store or service platform in minutes.</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Seamless Checkout</b>: Customers pay in crypto without leaving your website.</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Instant Settlement</b> – Once a customer pays, the funds reflect directly in your Manilla wallet, ready for</p>
                </li>
                <li className="flex items-center gap-x-2">
                    <span className="h-1 w-1 bg-[#121212] rounded-full"></span>
                    <p><b>Built for Developers:</b>: Clean documentation, test environment, and developer support to get you live fast.</p>
                </li>
            </ul>
        </div>
    )
}

const tabs: Tab[] = [
    {
        title: "Bill Payments",
        content: <BillPaymentContent />,
        imageSrc: "/bills-illustration.png",
        slug: "bills",
        buttonTitle: "Bill Payments"
    },
    {
        title: "Travel & Mobility",
        imageSrc: "/travels-illustration.png",
        content: <TravelMobilityContent />,
        slug: "travel",
        buttonTitle: "Travel Mobility"
    },
    {
        title: "Business & Freelancers",
        content: <FreelancerContent />,
        imageSrc: "/freelancers-illustration.png",
        slug: "business",
        buttonTitle: "Business & Freelancers"
    },
    {
        title: "Crypto Payment API",
        content: <ApiContent />,
        slug: "api",
        imageSrc: "/api-illustration.png",
        buttonTitle: "Crypto Payment API"
    }
]


export default function Services() {
    const [activeTab, setActiveTab] = useState("bills")

    const selectedTab = useMemo(() => {
        return tabs.find(item => item.slug === activeTab) ?? tabs[0]
    }, [activeTab])

    return (
        <section className="py-22">
            <div className="max-w-[1196px] relative px-4 mx-auto">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src="/graphic-3.png" alt="" />
                <div className="relative">
                    <header className="text-center">
                        <p className="text-xs lg:text-base">Our Services</p>
                        <p className="font-semibold text-xl lg:text-4xl">Your Daily Essentials. <span className="text-[#040786]">One Dashboard. Powered by Crypto.</span></p>
                    </header>
                    <header className="my-8 mt-14 gap-x-2 flex bg-[#CDCDCD] rounded-[50px] mx-auto p-1 w-[max-content] justify-center">
                        {tabs.map((item) => {

                            if (item.slug == activeTab) {
                                return (
                                    <button key={`tab-title-${item.slug}`} className="font-semibold max-w-[80px] sm:max-w-full text-[6px] lg:text-sm bg-[#1D1E64] text-white cursor-pointer px-3 py-1.5 lg:px-6 lg:py-3 rounded-4xl">{item.buttonTitle}</button>
                                )
                            }

                            return (
                                <button onClick={() => setActiveTab(item.slug)} key={`tab-title-${item.slug}`} className="font-semibold max-w-[80px] sm:max-w-full  text-[8px] lg:text-sm cursor-pointer px-3 py-1.5 rounded-4xl">{item.buttonTitle}</button>
                            )
                        })}
                    </header>
                    <div className="flex flex-col-reverse lg:flex-row items-start pt-10">
                        <div className="flex-1">
                            <p className="text-[#1D1E64] lg:text-3xl font-bold">{selectedTab.title}</p>
                            {selectedTab.content}
                        </div>
                        <div className="flex-1 flex min-h-[300px] items-center justify-center">
                            <img className=" object-contain" src={selectedTab.imageSrc} alt={selectedTab.slug} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}