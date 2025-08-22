import Link from "next/link";

const links = [
  {
    url: "/blog",
    name: "Blog",
    slug:"blog"
  }, {
    url: "/",
    name: "Product",
    slug:"product"
  }, {
    url: "/",
    name: "Services",
    slug:"services"
  },
  {
    url: "/",
    name: "About",
    slug:"about"
  },
  {
    url: "/contact",
    name: "Contact",
    slug:"contact"
  }
]

interface NavbarProps{
  activeLink?:string
}

export default function Navbar({activeLink="home"}:NavbarProps){
    return(
         <nav className="bg-white">
                <header className="max-w-[1196px] mx-auto px-4 min-h-[78px] flex items-center">
                  <div className="flex items-center flex-1 lg:flex-auto">
                    <Link href={"/"}>
                      <img src="/manilla-finance-logo.svg" alt="" />
                    </Link>
                    <button className="ml-auto lg:hidden">
                      <img src="/menu.svg" alt="" />
                    </button>
                  </div>
                  <div className="hidden lg:flex items-center gap-x-7 ml-auto">
                    {links.map(link => (
                      <Link key={`nav-link-${link.name}`} href={link.url} className={`font-semibold ${activeLink == link.slug?"text-[#380191]":"text-[#19191B]"}`}>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                  <div className="hidden lg:flex ml-24 border font-bold text-[10px] py-0.5 border-[#5F0489] p-1">
                    <button className="px-6">French</button>
                    <button className="px-6 py-1 text-white bg-[#5F0489]">English</button>
                  </div>
                </header>
              </nav>
    )
}