export default function HeroSection() {
  return (
    <section className="relative">
      <img className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block" src="/hero-full.png" alt="" />
      <img className="absolute top-0 left-0 w-full h-full object-cover lg:hidden" src="/mobile_banner.png" alt="" />
      <div className="lg:min-h-[87vh] py-10 lg:py-24 relative  lg:flex items-center">
        <div className="flex-1 max-w-[1196px] mx-auto px-4">
          <div className="max-w-[666px] mx-auto lg:mx-0">
            <p className="font-semibold text-2xl lg:text-[40px] lg:leading-[15"><span className="text-[#0005CA]">Settle Bills</span>, the Crypto Way.
              Modern Utilities. Travel Services.
              All in One Crypto-Powered Platform.</p>
            <p className="mt-5">Welcome to a new era of personal finance. Manilla Pay  is more than a bill payment platform.  We are your everyday financial co-pilot. Pay your hydro bills, book your next flight, top up your phone, or settle business invoices - all with crypto, at your fingertips.</p>
            <div className="mt-7">
              <p className="text-[#040786] font-semibold">As featured on:</p>
              <div className="flex gap-x-4 items-center mt-6">
                <div><img src="/yahoo-news.svg" alt="" /></div>
                <div><img src="/yahoo-finance.svg" alt="" /></div>
                <div><img src="/bezinga.svg" alt="" /></div>
                <div><img src="/tech-crunch.svg" alt="" /></div>
                <div><img src="/entrepreneur.svg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
            <div className="h-[400px]">
              <img className="lg:hidden w-full h-[400px] object-cover" src="/mobile_phone.png" alt="" />
            </div>

      </div>
    </section>
  )
}