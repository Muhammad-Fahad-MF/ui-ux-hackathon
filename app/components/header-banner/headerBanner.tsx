import Navbar from "./navbar/navbar";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiPinterest } from "react-icons/tfi";
export default function HeaderBanner() {
  return (
    <div  className="bg-[url('/images/header-banner/bannerBg.png')] w-full aspect-[192/95] bg-no-repeat bg-cover bg-center max-sm:aspect-auto max-sm:h-screen max-lp:aspect-auto">
        <div className="bg-secondary1/95 h-full">
           <Navbar />
           <div className="ml-[242px] mt-[59px] flex max-sm:ml-4 max-sm:mt-[17vh] max-sm:pb-5 max-lp:ml-8 max-lp:mt-10 max-lp:pb-5">
              <span className="flex flex-col h-[492px] justify-between self-start max-sm:mt-2 max-sm:h-[400px]">
                <Image src="/images/header-banner/Line11.svg" alt="|" height={158} width={1} className="ml-[6px] max-sm:h-[147px]"/>
                <div className="h-[107px] pb-[14px] flex flex-col items-start justify-between max-sm:pt-[14px]">
                 <FaFacebookF className="text-white text-[11px] leading-[11px]"/>
                 <IoLogoTwitter className="text-primary1 text-[11px] leading-[11px]"/>
                 <TfiPinterest className="text-white text-[11px] leading-[11px]"/>
                </div>
                <Image src="/images/header-banner/Line12.svg" alt="|" height={147} width={1} className="ml-[6px]"/>
              </span>
              <span className="ml-[45px] flex flex-col gap-2 mt-[102px] max-sm:mt-14 max-sm:ml-7 max-lp:mt-14">
                <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl">Its Quick & Amusing!</h3>
                <h1 className="font-HelveticaBold text-[60px] leading-[68px] text-white w-[474px] max-sm:text-4xl"><code className="text-primary1 font-HelveticaBold text-[60px] leading-[68px] max-sm:text-4xl">Th</code>e Art of speed <br/>food Quality</h1>
                <p className="font-Inter400 text-white w-[418px] mt-6 max-sm:w-[80vw] max-sm:mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                <button className="w-[190px] h-[60px] mt-6 bg-primary1 text-[#E0DFDF] font-Inter400 rounded-[30px] max-sm:mt-3">See Menu</button>
              </span>
              <span className="mt-[7px] ml-[209px] max-lp:ml-[109px]">
                <Image src="/images/header-banner/heroImage.svg" alt="Egg" height={670} width={878} className=""/>
              </span>
           </div>
        </div>
    </div>
  )
}
