import Image from "next/image";
export default function Process() {
  return (
    <div className="bg-[url('/images/process/bgProcess.svg')] w-full bg-cover bg-center aspect-[344/100] px-[300px] flex flex-col items-end justify-center text-white font-Inter400 max-sm:px-0 max-sm:py-4 max-sm:aspect-auto max-sm:items-center max-lp:px-4">
        <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl">Restaurant Active Process</h3>
        <h2 className="text-right font-HelveticaBold text-[48px] leading-[56px] w-[705px] mt-2 max-sm:text-4xl max-sm:w-auto max-sm:text-center"><code className="text-primary1 text-right font-HelveticaBold text-[48px] leading-[56px] max-sm:text-4xl">We</code> Document Every Food Bean Process untile it is saved</h2>
        <p className="text-right w-[651px] mt-8 max-sm:text-center max-sm:w-auto max-sm:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,</p>
        <span className="flex items-center mt-8 gap-6">
          <button className="border-[1px] border-primary1 rounded-[30px] w-[190px] h-[60px] hover:bg-primary1 font-Inter700 active:opacity-90">Read More</button>
          <div className="flex items-center active:text-primary1 gap-3">
            <button className="bg-primary1 h-[60px] w-[60px] rounded-full flex items-center justify-center active:opacity-80"><Image src="/images/process/Play.svg" alt=">" height={24} width={24} /></button>
            <p className="font-Inter700 cursor-pointer">Play Video</p>
          </div>
        </span>  
    </div>
  )
}
