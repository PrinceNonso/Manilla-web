"use client";
import { FormEventHandler, useState } from "react"


function WaitlistPopup({ open, closeModal }: { open?: boolean, closeModal: () => void }) {

  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit:FormEventHandler<HTMLFormElement> = (e)=>{
    e.preventDefault()
    setIsSuccess(true)
  }

  const closeForm = ()=>{
    setIsSuccess(false)
    closeModal()
  }

  if (!open) return null;


  return (
    <>
      <div onClick={closeModal} className="h-full p-4 flex items-center bg-[rgba(0,0,0,0.4)] z-[10000] justify-center fixed top-0 left-0 w-full">
        <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl flex-1 max-w-[568px] min-h-[300px] lg:min-h-[504px] py-12 px-4 lg:px-8">
          <p className="text-center lg:text-2xl font-bold text-[rgb(65,65,65)]">Join Waitlist Now</p>
          <form onClick={handleSubmit} action="" className="mt-6 lg:mt-12 space-y-7">
            <div>
              <p className="text-xs lg:text-lg font-semibold">First Name <span className="text-[#FF0011]">*</span></p>
              <input type="text" placeholder="Enter Name" className="mt-[10px] lg:mt-5 w-full border outline-0 border-[#888888] p-2 lg:p-4" />
            </div>
            <div>
              <p className="text-xs lg:text-lg font-semibold">Email Address <span className="text-[#FF0011]">*</span></p>
              <input type="text" placeholder="Enter Email" className="mt-[10px] lg:mt-5 w-full border outline-0 border-[#888888] p-2 lg:p-4" />
            </div>
            <button className="from-[#0105C6] to-[#04078C] text-sm lg:text-base bg-gradient-to-r py-4 rounded-4xl w-full text-white hover:from-[#2b2b2b] hover:to-[#000000]">Join Waitlist</button>
          </form>
        </div>
      </div>
      {isSuccess && (
        <div onClick={closeForm} className="h-full p-4 flex items-center bg-[rgba(0,0,0,0.4)] z-[10000] justify-center fixed top-0 left-0 w-full">
          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl flex-1 max-w-[568px] py-12 px-8">
            <img className="h-[180px] w-[180px] mx-auto" src="/success.svg" alt="" />
            <div className="mt-6 text-center">
              <p className="text-xs lg:text-2xl font-semibold">Signup Successful</p>
              <p className="text-xs lg:text-base">You’d be the first to know when we go live!</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Products() {

  const [open, setOpen] = useState(false)

  return (
    <>
      <WaitlistPopup open={open} closeModal={()=>setOpen(false)}/>
      <section className="bg-white py-22" id="product">
        <div className="max-w-[1196px] mx-auto px-4">
          <header className="text-center">
            <p className="text-xs lg:text-base">Product</p>
            <p className="font-semibold text-2xl lg:text-4xl">Your Lifestyle <span className="text-[#040786]">Fueled by Digital Assets</span></p>
          </header>
          <div className="my-4 space-y-2">
            <p>At Manilla Finance, we believe everyday payments should be instant, borderless, and built around your life and not the banks. That’s why we created a CEDEFI platform where crypto and fiat coexist seamlessly - we pay providers using fiat, and you pay us in crypto to access the same services with ease. </p>
            <p>Founded on the principle of financial freedom, the Manilla Pay app brings the power of digital assets to everyday transactions. Whether you’re paying your utility bills or booking a vacation, we make it frictionless, fast, and future-proof.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 my-4">
            <div className="bg-gradient-to-b p-6 space-y-[10px] text-white rounded-2xl from-[#8183C2] to-[#1C1E6C]">
              <p className="text-sm lg:text-lg font-semibold">Manilla Pay</p>
              <p className="font-semibold text-2xl lg:text-3xl my-4">The Power to Pay Anything. Anytime. In Crypto.</p>
              <p className="mb-4 text-xs lg:text-base">Manilla Pay is your digital bridge to real-world services. From hydro and gas bills to cable TV subscriptions and internet top-ups, all can be paid directly from your Manilla wallet using crypto or debit card.</p>
              <ul className="text-xs lg:text-base">
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Real-time utility and service payments</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>USDT, BTC, ETH, and stablecoins supported</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Automated recurring payment features</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Built-in transaction dashboard</p>
                </li>
              </ul>
              <div className="mt-10 mb-16 max-w-[430px] mx-auto">
                <button className="w-full h-16 rounded-4xl bg-gradient-to-r cursor-pointer hover:from-[#2B2B2B] hover:to-[#000000] from-[#0005CA] to-[#040786]">
                  <span>Start Using Manilla Pay</span>
                </button>
              </div>
              <img className="-mb-6 mx-auto" src="/iphone.png" alt="Iphone" />
            </div>
            <div className="bg-gradient-to-b p-6 space-y-[10px] text-white  rounded-2xl from-[#0005CA] to-[#040786]">
              <p className="text-sm lg:text-lg font-semibold">Manilla Pay</p>
              <p className="font-semibold text-2xl lg:text-3xl my-4">Spend Crypto Like Cash – Without the Complexity</p>
              <p className="mb-4 text-xs lg:text-base">Our upcoming Manilla Crypto Debit Card links your digital wallet to everyday life. Buy groceries, pay for gas, shop online, or withdraw cash - no need to convert, wait, or worry.</p>
              <ul className="text-xs lg:text-base">
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Instant crypto-to-fiat conversion</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Accepted at all Mastercard-enabled terminals</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>ATM withdrawals supported</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Travel-ready and globally accepted</p>
                </li>
              </ul>
              <div className="mt-10 mb-16 max-w-[430px] mx-auto">
                <button onClick={()=>setOpen(true)} className="w-full h-16 cursor-pointer hover:from-[#2B2B2B] hover:to-[#000000] rounded-4xl bg-gradient-to-r from-[#0005CA] to-[#040786]">
                  <span>Join Waitlist Now</span>
                </button>
              </div>
              <img className="-mb-6 mx-auto" src="/card.png" alt="Iphone" />
            </div>
          </div>
        </div>
        <div className="max-w-[1196px] px-4  my-10  mx-auto">
          <div className="text-white bg-gradient-to-r lg:flex rounded-xl from-[#390092] to-[#11002C]">
            <div className="flex-1 p-6 px-8">
              <p className="text-sm lg:text-lg font-semibold">The Manilla Token</p>
              <p className="font-semibold text-2xl lg:text-3xl my-4">Fueling the Future of Smart Spending</p>
              <p className="mb-4 text-xs lg:text-base">MNLA is the utility token at the heart of the Manilla ecosystem. It does more than just power transactions - it rewards you for participation and unlocks deeper access.</p>
              <p className="my-4 font-bold text-sm lg:text-base">Why Hold MNLA?</p>
              <ul className="mb-8 text-xs lg:text-base">
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Pay for services at discounted rates</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Earn tokens through referrals and app usage</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Stake for future rewards</p>
                </li>
                <li className="flex items-center gap-x-1">
                  <span className="h-1 w-1 rounded-full bg-white"></span>
                  <p>Use for cross-border remittances and savings</p>
                </li>
              </ul>
              <button className="w-full hover:from-[#2B2B2B] hover:to-[#000000] cursor-pointer h-16 rounded-4xl bg-gradient-to-r from-[#0005CA] to-[#040786]">
                <span>Start Using Manilla Pay</span>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 rounded-md  border-t lg:border-l relative border-white">
              <img className="absolute top-0 left-0 w-full object-center object-cover" src="/stars.png" alt="" />
              <img src="/manilla-coins.png" className="relative" alt="Coins" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}