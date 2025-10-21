export default function WhyChooseUs(){
    return(
         <section className="bg-white py-11">
        <div className="max-w-[1196px] gap-8 grid lg:grid-cols-2 mx-auto px-4">
          <div>
            <p className="text-2xl font-semibold">Play the video to learn More</p>
            <div className="h-[325px] mt-4 w-full rounded-lg overflow-hidden relative">
              <img className="absolute top-0 left-0 w-full h-full object-cover" src="/canada-2.png" alt="" />
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <button>
                  <img src="/AiFillPlaySquare.svg" alt="" />
                </button>
              </div>

            </div>
          </div>
          <div>
            <p className="text-2xl lg:text-4xl font-semibold">What Makes Us <span className="text-[#040786]">Different?</span></p>
            <ul className="my-8 space-y-2 text-sm lg:text-base">
              <li className="flex item gap-x-4">
                <img src="/check.svg" alt="Check" />
                <p> Canada’s first CEDEFI solution for everyday bills</p>
              </li>
              <li className="flex item gap-x-4">
                <img src="/check.svg" alt="Check" />
                <p> Utility and travel services powered by blockchain</p>
              </li>
              <li className="flex item gap-x-4">
                <img src="/check.svg" alt="Check" />
                <p>Real-time transactions and zero banking red tape</p>
              </li>
              <li className="flex item gap-x-4">
                <img src="/check.svg" alt="Check" />
                <p> Transparent fees, zero hidden charges</p>
              </li>
              <li className="flex item gap-x-4">
                <img src="/check.svg" alt="Check" />
                <p> Backed by our native Manilla Token (MNLA) - earn as you spend</p>
              </li>
            </ul>
            <p className="font-bold text-[#040786]">Built for Canadian lifestyles. Engineered for the blockchain generation.</p>
            <div className="mt-10 flex items-center gap-x-4">
              <p className="font-semibold text-xs lg:text-base">Play video To <br />Learn More</p>
              <div className="bg-gradient-to-r h-16 cursor-pointer gap-x-4 text-white hover:from-[#2B2B2B] hover:to-[#000000] transition-all duration-400 ease-linear from-[#0005CA] to-[#040786] items-center flex flex-1 rounded-4xl p-4">
                <div className="flex gap-x-2 lg:gap-x-4 items-center">
                  <button>
                    <img src="/appstore.svg" alt="" />
                  </button>
                  <button>
                    <img src="/playstore.svg" alt="" />
                  </button>
                </div>
                <div className="flex-1 text-xs lg:text-base border-l px-4 border-white">
                  <p>Try it out</p>
                  <p>Download Manilla Finance App</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}