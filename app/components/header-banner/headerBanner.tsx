import Navbar from "./navbar/navbar";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { TfiPinterest } from "react-icons/tfi";
export default function HeaderBanner() {
  return (
    <div className="bg-[url('/images/header-banner/bannerBg.svg')] w-full aspect-[192/95] bg-cover bg-center">
        <div className="bg-secondary1/95 h-full ">
           <Navbar />
           <div className="ml-[242px] mt-[59px] flex">
              <span className="flex flex-col h-[492px] justify-between self-start">
                <Image src="/images/header-banner/Line11.svg" alt="|" height={158} width={1} className="ml-[6px]"/>
                <div className="h-[107px] pb-[14px] flex flex-col items-start justify-between">
                 <FaFacebookF className="text-white text-[11px] leading-[11px]"/>
                 <IoLogoTwitter className="text-primary1 text-[11px] leading-[11px]"/>
                 <TfiPinterest className="text-white text-[11px] leading-[11px]"/>
                </div>
                <Image src="/images/header-banner/Line12.svg" alt="|" height={147} width={1} className="ml-[6px]"/>
              </span>
              <span className="ml-[45px] flex flex-col gap-2 mt-[102px]">
                <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1">Its Quick & Amusing!</h3>
                <h1 className="font-HelveticaBold text-[60px] leading-[68px] text-white w-[474px]"><code className="text-primary1 font-HelveticaBold text-[60px] leading-[68px]">Th</code>e Art of speed food Quality</h1>
                <p className="font-Inter400 text-white w-[418px] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
                <button className="w-[190px] h-[60px] mt-6 bg-primary1 text-[#E0DFDF] font-Inter400 rounded-[30px]">See Menu</button>
              </span>
              <span className="mt-[7px] ml-[209px]">
                <Image src="/images/header-banner/heroImage.svg" alt="Egg" height={670} width={878}/>
              </span>
           </div>
        </div>
    </div>
  )
}
