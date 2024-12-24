import Image from "next/image"
export default function Choose() {
  return (
    <div className="py-[120px] px-[300px] bg-black/95 flex gap-[135px] text-white font-Inter400 max-sm:px-0 max-sm:py-14 max-lp:px-6 max-lp:py-[80px] max-lp:gap-6">
      <section className="flex flex-col gap-[10px] max-sm:hidden">
        <div className="flex gap-4 items-end">
          <Image src="/images/choose/taco.svg" alt="U" height={356} width={362} className="rounded-md"/>
          <Image src="/images/choose/burger.svg" alt="B" height={231} width={281} className="rounded-md mb-[5px]"/>
        </div>
        <div className="flex gap-4 items-start">
         <Image src="/images/choose/nuggets.svg" alt="N" height={306} width={244} className="rounded-md mt-[6px]"/>
         <Image src="/images/choose/saucyBurger.svg" alt="S" height={226} width={221} className="rounded-md mt-[6px]"/>
         <div className="flex flex-col gap-4">
           <Image src="/images/choose/withFries.svg" alt="F" height={168} width={161} className="rounded-md "/>
           <Image src="/images/choose/salad.svg" alt="S" height={166} width={161} className="rounded-md "/>
         </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl max-sm:px-5">Why Choose us</h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] w-[433px] mt-2 max-sm:text-4xl max-sm:w-auto max-sm:px-5"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1 max-sm:text-4xl">Ex</code>ta ordinary taste <br/>And Experienced </h1>
        <p className="w-[526px] mt-8 max-sm:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in <br/>consequat.</p>
        <p className="mt-4 sm:hidden max-sm:px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus.</p>
        <span className="flex gap-[33px] mt-8 max-sm:w-full max-sm:justify-evenly">
          <div className="flex flex-col items-center gap-[9px]">
            <span className="bg-primary1 rounded-md flex justify-center items-center w-[102px] h-[100px]">
              <Image src="/images/choose/Hamburger.svg" alt="Hb" height={56} width={56} />
            </span>
            <h4 className="text-[18px] leading-[26px]">Fast Food</h4>
          </div>
          <div className="flex flex-col items-center gap-[9px]">
            <span className="bg-primary1 rounded-md flex justify-center items-center w-[102px] h-[100px]">
              <Image src="/images/choose/Cookie.svg" alt="Cc" height={56} width={56} />
            </span>
            <h4 className="text-[18px] leading-[26px]">Lunch</h4>
          </div>
          <div className="flex flex-col items-center gap-[9px]">
            <span className="bg-primary1 rounded-md flex justify-center items-center w-[102px] h-[100px]">
              <Image src="/images/choose/Wine.svg" alt="Haram" height={56} width={56} />
            </span>
            <h4 className="text-[18px] leading-[26px]">Dinner</h4>
          </div>
        </span>
        <span className="bg-white rounded-md w-[374px] h-[93px] border-l-[10px] border-primary1 flex justify-evenly items-center mt-[34px] max-sm:w-[90%] max-sm:mx-[5%]">
          <h2 className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">30+</h2>
          <div className="flex flex-col">
            <h4 className="text-[20px] leading-[28px] text-[#1e1e1e]">Years of</h4>
            <h3 className="font-HelveticaBold text-[24px] leading-[32px] text-[#1e1e1e]">Experienced</h3>
          </div>
        </span>
      </section>
    </div>
  )
}
