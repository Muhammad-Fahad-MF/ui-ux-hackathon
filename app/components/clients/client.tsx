import Image from "next/image"
export default function Client() {
  return (
   <div className="bg-[url('/images/client/bgClient.svg')] w-full aspect-[641/156] bg-cover bg-center text-white font-Inter400 max-sm:h-full max-sm:aspect-auto">
    <div className="bg-[#0D0D0DD9]/85 h-full w-full flex items-center justify-center gap-[161px] max-sm:flex-col max-sm:gap-8 max-sm:py-3 max-lp:gap-0 max-lp:justify-between max-lp:px-4">
      <span className="flex flex-col items-center gap-[23px]">
        <Image src="/images/client/chef.svg" alt="chef" height={120} width={120}/>
        <h3 className="font-HelveticaBold text-[24px] leading-[32px]">Professional Chefs</h3>
        <h2 className="font-HelveticaBold text-[40px] leading-[48px]">420</h2>
      </span>
      <span className="flex flex-col items-center gap-[23px]">
        <Image src="/images/client/items.svg" alt="items" height={120} width={120}/>
        <h3 className="font-HelveticaBold text-[24px] leading-[32px]">Items Of Food</h3>
        <h2 className="font-HelveticaBold text-[40px] leading-[48px]">320</h2>
      </span>
      <span className="flex flex-col items-center gap-[23px]">
        <Image src="/images/client/experience.svg" alt="experience" height={120} width={120}/>
        <h3 className="font-HelveticaBold text-[24px] leading-[32px]">Years Of Experienced</h3>
        <h2 className="font-HelveticaBold text-[40px] leading-[48px]">30+</h2>
      </span>
      <span className="flex flex-col items-center gap-[23px]">
        <Image src="/images/client/happy.svg" alt="happy" height={120} width={120}/>
        <h3 className="font-HelveticaBold text-[24px] leading-[32px]">Happy Customers</h3>
        <h2 className="font-HelveticaBold text-[40px] leading-[48px]">220</h2>
      </span>
    </div>
   </div>
  )
}
