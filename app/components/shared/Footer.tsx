import Link from "next/link"


const links = [
    {
        url: "/#product",
        name: "Product"
    }, {
        url: "/#services",
        name: "Services"
    },
    {
        url: "/about",
        name: "About"
    },
    {
        url: "/contact",
        name: "Contact"
    }
]

export default function Footer() {
    return (
        <footer className="bg-white py-4">
            <div className="max-w-[1196px] mx-auto px-4">
                <div className="flex">
                    <div><img className="max-w-[120px] lg:max-w-full" src="/manilla-finance-logo.svg" alt="Footer Logo" /></div>
                    <div className="hidden lg:flex items-center gap-x-7 mx-auto">
                        {links.map(link => (
                            <Link key={`nav-link-${link.name}`} href={link.url} className="text-[#19191B]">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-x-3 ml-auto lg:gap-x-6 items-center">
                        <Link href={"/"}><img src="/telegram.svg" alt="" /></Link>
                        <Link href={"/"}><img src="/medium.svg" alt="" /></Link>
                        <Link href={"/"}><img src="/instagram.svg" alt="" /></Link>
                        <Link href={"/"}><img src="/x.svg" alt="" /></Link>
                        <Link href={"/"}><img src="/linkedin.svg" alt="" /></Link>
                    </div>
                </div>
                <div className="lg:hidden text-xs my-4 flex justify-center items-center gap-x-3 lg:gap-x-7 mx-auto">
                    {links.map(link => ( 
                        <Link key={`nav-link-${link.name}`} href={link.url} className="text-[#19191B]">
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="h-[0.5px] mb-8 lg:my-8 bg-[rgba(0,0,0,0.35)]"></div>
                <div className="flex gap-x-2 lg:gap-x-7 text-xs lg:text-base">
                    <Link href={"/terms"}>Terms of Service</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    <p className="ml-auto">© Manilla Finance 2025</p>
                </div>
            </div>
        </footer>
    )
}