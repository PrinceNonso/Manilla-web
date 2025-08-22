import Link from "next/link";
import { HomeLayout } from "../components";

function ArticleCard() {
    return (
        <div className="p-2 lg:p-4 rounded-2xl  gap-x-6 bg-[#F8FAFC] flex flex-col lg:flex-row">
            <div className="flex-1">
                <div className="h-[70px] lg:h-[272px] rounded-xl relative overflow-hidden">
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src="/blog/article-1.png" alt="" />
                </div>
            </div>
            <div className="flex-1 flex space-y-4 pt-1 lg:pt-0 flex-col justify-between">
                <div>
                    <Link href={"/blog/123"}><p className="text-sm lg:text-2xl text-[#020617] font-semibold">Unlocking Flexible Pricing for SaaS Success</p></Link>
                    <p className="text-[#64748B] text-xs lg:text-base">Learn how customizable pricing boosts customer satisfaction and drives revenue growth in the SaaS world.</p>
                </div>
                <div className="flex items-center">
                    <img className="hidden lg:inline-block" src="/play.svg" alt="" />
                    <p className="font-bold text-xs lg:text-base text-[#020617]">5 mins Read</p>
                    <p className="ml-auto text-xs lg:text-base text-[#64748B]">16 Jun 2024</p>
                </div>
            </div>
        </div>
    )
}

function BlogCard() {
    return (
        <div className="bg-[#F8FAFC] rounded-xl p-4 lg:p-8 flex gap-x-4 lg:gap-x-8">
            <div className="flex-1">
                <div className="h-[200px] lg:h-[350px] rounded-lg relative overflow-hidden">
                    <img className="object-cover absolute top-0 left-0 h-full w-full" src="/blog/blog-1.png" alt="" />
                </div>
            </div>
            <div className="flex-1">
                <span className="bg-white rounded-lg p-1 lg:p-2 text-[#04075A] font-bold text-xs">Digital Wallets</span>
                <Link href={"/blog/123"}><p className="mt-2 lg:mt-4 text-sm lg:text-3xl font-bold text-[#020617]">Why Flexible Pricing Matters in Today’s Digital Economy</p></Link>
                <p className="mt-2 text-xs hidden lg:block lg:text-base">Flexible pricing ensures that businesses cater to diverse customer needs, from startups to enterprises. It allows clients to pay only for what they need, fostering trust and long-term relationships. </p>
                <p className="mt-2 text-xs lg:hidden lg:text-base">Flexible pricing ensures that businesses cater to diverse customer needs, </p>
                <div className="mt-4 lg:mt-24 gap-x-4 flex items-center">
                    <div>
                        <img src="/manilla-logo-short.svg" className="" alt="" />
                    </div>
                    <div>
                        <p className="font-bold text-xs lg:text-lg">Team Manilla</p>
                        <p className="text-xs lg:text-base">Nov 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function () {
    return (
        <HomeLayout activeLink="blog">
            <main className="bg-white pb-11 lg:pb-[191px] min-h-screen">
                <div className="max-w-[1196px] mx-auto px-4">
                    <section className="py-9 lg:py-[86px] max-w-[493px] text-center mx-auto">
                        <p className="text-2xl lg:text-6xl text-[#020617] font-semibold">Discover our latest Stories</p>
                        <p className="lg:text-xl text-[#64748B]">Your go-to resource for insights, tips, and the latest updates in the world of Manilla Pay.</p>
                    </section>
                    <section className="space-y-10 mb-24">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </section>
                </div>
               <div className="px-4">
                 <section className="max-w-[1280px]  mb-24 mx-auto rounded-4xl relative">
                    <img className="absolute top-0 left-0 w-full h-full rounded-4xl object-cover" src="/blog/modern-smartphone.png" alt="" />
                    <div className="relative flex items-center text-white justify-end p-9 text-end lg:text-right lg:p-16 min-h-[173px] lg:min-h-[367px] bg-[rgba(0,0,0,0.2)] rounded-4xl">
                        <div className="max-w-[384px]">
                            <p className="font-semibold lg:text-3xl">Tap to Pay,<br className="lg:inline-block hidden" /> Simplify Your Day</p>
                            <p className="mt-2 text-sm lg:text-base">Experience the ease of contactless payments
                                with Manilla pay. Just tap and go secure, fast, and
                                hassle-free for all your transactions.</p>

                            <button className="mt-8 bg-white rounded-lg text-xs lg:text-base font-medium px-6 py-1.5 lg:py-3 text-[#60048A]">Know More</button>
                        </div>
                    </div>
                </section>
               </div>
                <section className="max-w-[1280px] mx-auto px-4">
                    <header className="text-center font-semibold lg:text-4xl">Manilla pay library</header>
                    <form className="flex max-w-[70%] mt-10 mb-6 mx-auto justify-center gap-x-2 lg:gap-x-6">
                        <input placeholder="Search for an article" type="text" className="h-6 text-xs lg:text-base lg:h-[51px] placeholder:text-[#94A3B8] flex-1 border border-[#94A3B8] px-4 lg:p-4" />
                        <button className="min-h-6 lg:min-h-[51px] px-7 font-medium text-xs lg:text-base text-white bg-[#60048A]">Search</button>
                    </form>
                    <div className="grid grid-cols-2 gap-6">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>

                    <footer className="flex justify-center my-8 text-xs lg:text-base">
                        <button className="py-3 px-4">15 pages</button>
                        <button className="py-3 px-4 bg-[#94A3B8] text-white">Page 1</button>
                    </footer>

                </section>

            </main>
        </HomeLayout>
    )
}