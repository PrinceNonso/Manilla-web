"use client"
import { HomeLayout } from "@/app/components";

export default function () {

    return (
        <HomeLayout activeLink="blog">
            <main className="min-h-screen">
                <div className="bg-white pt-11 lg:pt-22">
                    <div className="max-w-[1196px] px-2 mx-auto">
                        <header>
                            <button onClick={() => window.history.back()} className="underline">Back</button>
                        </header>
                        <header className="h-[200px] lg:h-[350px] w-full relative mt-7 lg:mt-14 rounded-2xl overflow-hidden">
                            <img className="absolute top-0 left-0 w-full h-full object-cover" src="/blog/blog-1.png" alt="" />
                        </header>
                    </div>
                </div>
                <div className="max-w-[1196px] mx-auto px-4 py-10">
                    <div className="lg:flex">
                        <div className="flex-1">
                            <p className="text-[#FFA503] uppercase lg:text-2xl">Digital wallets</p>
                            <p className="text-2xl lg:text-4xl font-semibold">Why Flexible Pricing Matters in Today’s Digital Economy</p>
                            <div className="mt-2 lg:mt-24 gap-x-4 flex items-center">
                                <div>
                                    <img src="/manilla-logo-short.svg" className="" alt="" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs lg:text-lg">Team Manilla</p>
                                    <p className="text-xs lg:text-base">Nov 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-2 space-y-3">
                            <p>I recently read an article by Bruce Kasanoff that raised the issue of measuring employee performance purely through metrics alone instead of taking the time to help, nurture and develop talent to improve employee performance.</p>
                            <p>That got me thinking about the link with how ‘Big data’ in general is fast becoming (or already is) the desired method for tracking and improving overall business performance.</p>
                            <p>But is it really that simple?</p>
                            <div className="border-l-2 p-2 border-[#60048A]">
                                <p>What if your data is telling you one thing but your customers or employees are telling you another?</p>
                            </div>
                            <p>I can understand why the idea of big data has grown so rapidly. The value of data is very easy to sell. It’s a clear, almost mathematical way to analyse trends and drive marginal gains within a business or product. But equally, I would argue it’s also a lazy strategy if used in silo. What if the fundamental approach the business or a product is taking is wrong? Are you just driving changes towards the wrong end?</p>
                            <p>This is where consumer experience or ‘consumer love’ is key. Creating a product that people relate to; that fulfils a real need or desire is critical to building a long-lasting, successful business. But herein lies the problem — how do you measure emotional response towards your product?</p>
                            <p>For me, I like to think of this as implied value. Emotion doesn’t directly create value, but it can create a strong affinity towards a product that can indirectly result in heavier and more regular use with strong rewards. This is inevitably difficult to ‘sell’ to stakeholders because of the lack of tangible benefit. Equally, it’s difficult to measure because more often than not, the link between the product change and the implied benefit can be much harder to prove than using pure data.</p>
                            <div className="p-2 border-l border-[#60048A]">
                                <p>As often as Apple is used as an example, in this case they really are the example of emotional selling. Apple was built off creating products that consumers didn’t necessarily need, but that they desired.</p>
                            </div>
                            <p>On the back of that success story, UX has become a big player in most leading businesses, changing the way they approach consumer and product strategy. As a Product Manager at JUST EAT with a UX background, I’m pleased to say we’re no different; putting a huge amount of effort into creating products and propositions that focus on the consumer and deliver an experience they’ll love — and keep coming back for.</p>
                            <p>In a world where fast results matter, it’s becoming harder than ever to secure and dedicate development time to pure ‘love’ features. In my experience, it happens at JUST EAT because it’s in the ethos of the company to say ‘we care about this’, and it has a significant impact on the product strategy as a result.</p>
                            <p>Without that ethos it’s very difficult to get the resource necessary to dedicate time to emotional product changes. At previous companies I’ve found myself in this exact situation; doing regular stand-ups, sharing presentations and articles and generally trying to prove to executive teams that they need to stand up and listen to UX. It took a long time to do that….years in fact. But I have to say, it’s rewarding to see such fundamental changes in a business — and it’s certainly time I’d suggest is well spent if you love and believe in the company you work for.</p>
                            <p>What’s your experience of this? Have you struggled to sell UX or found creative ways to sell emotion to stakeholders?</p>
                        </div>
                    </div>
                </div>
                <div className="py-10 pb-24 bg-white">

                    <div className="max-w-[1196px] mx-auto px-4 ">
                        <p className="text-[#FFA503] font-semibold uppercase text-center text-2xl">Digital wallets</p>
                        <div className="lg:grid lg:grid-cols-2 mt-8 gap-x-10">
                            <div>
                                <div className="h-[187px] lg:h-[208px] relative overflow-hidden">
                                    <img className="h-full w-full absolute top-0 left-0 object-cover" src="/blog/recents.jpg" alt="" />
                                </div>
                                <p className="text-2xl lg:text-4xl mt-11 font-semibold">The value of emotion in a data-driven world</p>
                                <p className="my-4">I recently read an article by Bruce Kasanoff that raised the issue of measuring employee performance purely through metrics alone instead of taking the time to help, nurture and develop talent to improve...</p>
                                <div className=" gap-x-4 flex items-center">
                                    <div>
                                        <img src="/manilla-logo-short.svg" className="" alt="" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs lg:text-lg">Team Manilla</p>
                                        <p className="text-xs lg:text-base">Nov 2025</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-20">
                                <div>
                                    <p className="lg:text-3xl font-semibold">The value of emotion in a data-driven world</p>
                                    <p className="text-sm lg:text-base my-4">I recently read an article by Bruce Kasanoff that raised the issue of measuring employee performance purely through metrics alone instead of taking the time to help, nurture and develop talent to improve...</p>
                                    <div className=" gap-x-4 flex items-center">
                                        <div>
                                            <img src="/manilla-logo-short.svg" className="" alt="" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-xs lg:text-lg">Team Manilla</p>
                                            <p className="text-xs lg:text-base">Nov 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="lg:text-3xl font-semibold">The value of emotion in a data-driven world</p>
                                    <p className="my-4 text-sm lg:text-base">I recently read an article by Bruce Kasanoff that raised the issue of measuring employee performance purely through metrics alone instead of taking the time to help, nurture and develop talent to improve...</p>
                                    <div className=" gap-x-4 flex items-center">
                                        <div>
                                            <img src="/manilla-logo-short.svg" className="" alt="" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-xs lg:text-lg">Team Manilla</p>
                                            <p className="text-xs lg:text-base">Nov 2025</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="lg:text-3xl font-semibold">The value of emotion in a data-driven world</p>
                                    <p className="my-4 text-sm lg:text-base">I recently read an article by Bruce Kasanoff that raised the issue of measuring employee performance purely through metrics alone instead of taking the time to help, nurture and develop talent to improve...</p>
                                    <div className=" gap-x-4 flex items-center">
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
                        </div>

                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}