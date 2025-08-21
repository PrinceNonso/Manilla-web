import Link from "next/link";

export default function NewsLetter() {
    return (
        <div className="lg:min-h-screen py-10 px-4 flex items-center justify-center">
            <div className="max-w-[835px] flex-1">
                <header className="flex flex-row-reverse lg:flex-row items-center">
                    <div className="flex-1 h-[284px]">
                        <img className="h-[284px] object-contain w-full" src="/newsletter-illustration.png" alt="" />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold uppercase">Get our weekly</p>
                        <p className="lg:text-5xl font-bold uppercase bg-gradient-to-r from-[#3C35FF] to-[#1D1E64] bg-clip-text text-transparent">Newsletter</p>
                        <p className="text-sm lg:text-xl mt-5 lg:mt-8">Get weekly updates on the newest stories, and tips right in your mailbox.
                            <span className="font-semibold">Subscribe now!</span></p>
                    </div>
                </header>
                <form action="" className="bg-white mt-7 lg:mt-14 flex rounded-[40px] border border-[#B7B7B7]">
                    <input placeholder="Email Address" type="text" className="flex-1 rounded-l-[40px] text-xs lg:text-base outline-0 px-6" name="" id="" />
                    <button className="rounded-r-[40px] font-bold text-white px-8 py-2 lg:py-4 bg-gradient-to-r from-[#3B3DCA] to-[#1D1E64]">
                        Subscribe
                    </button>
                </form>
                <p className="mt-4 text-center lg:text-left italic text-xs lg:text-base text-[#64748B]">
                    By submitting your email address, you agree to receive occasional marketing messages from Manilla, from which you can unsubscribe at any time. For more information please see our <Link href={"/privacy policy"} className="underline text-[#040786] font-bold">privacy policy</Link>
                </p>
            </div>
        </div>
    )
}