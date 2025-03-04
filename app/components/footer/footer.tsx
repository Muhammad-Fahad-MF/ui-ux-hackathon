import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest  } from "react-icons/fa";
export default function Footer() {
  return (
   <div className="relative ">
    <div className="bg-black/95 px-[300px] w-full text-white font-Inter400 pb-[46px] pt-[120px] max-sm:px-0 max-sm:pt-14 max-lp:px-[59px]">
      <section className="mx-[59px] border-b-[1px] border-primary1 flex justify-between h-[143px] max-sm:flex-col max-sm:gap-4 max-sm:mx-0 max-sm:h-auto max-sm:pb-6 max-lp:mx-0">
        <div className="flex flex-col gap-[17px]">
          <h2 className="font-HelveticaBold text-[32px] leading-[40px] max-sm:text-center">
            <code className="font-HelveticaBold text-[32px] leading-[40px] text-primary1">
              St
            </code>
            ill You Need Our <br className="sm:hidden"/>Support ?
          </h2>
          <p className="max-sm:text-center max-sm:mx-4">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="flex bg-primary1 rounded-[4px] w-[459px] h-[56px] pl-5 justify-between max-sm:w-[90%] max-sm:mx-[5%]">
          <input
            placeholder=" Enter Your Email"
            className="bg-transparent placeholder:text-[#ffffff] opacity-[0.59] focus:outline-none"
          />
          <button className="bg-white text-primary1 rounded-[4px] w-[163px] active:opacity-70">
            Subscribe Now
          </button>
        </div>
      </section>
      <section className="mt-16 flex justify-between max-sm:flex-col max-sm:mt-8">
        <div className="flex flex-col max-sm:items-center">
          <h2 className="font-HelveticaBold text-2xl ">About Us.</h2>
          <p className="w-[312px] mt-6 max-sm:text-center max-sm:w-auto max-sm:mx-7">
            orporate clients and leisure travelers has been relying on
            Groundlink for dependab safe, and professional chauffeured car
            service in major cities across World.
          </p>
          <span className="mt-[33px] flex gap-4">
            <div className="bg-primary1 w-[78px] h-[72px] rounded-[3px] flex justify-center items-center">
                <Image src="/images/footer/ClockClockwise.svg" alt="--->" height={40} width={40}/>
            </div>
            <div>
                <h6 className="text-[18px] leading-[26px]">Opening Houres</h6>
                <p className="text-[14px] leading-[22px]">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-[14px] leading-[22px]">Sunday - Closed</p>
            </div>
          </span>
        </div>
        <ul className="flex flex-col gap-[28px] max-sm:mt-8 max-sm:items-center">
            <li className="font-HelveticaBold text-2xl">Useful Links</li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">About</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">News</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Partners</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Team</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Menu</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Contacts</Link></li>
        </ul>
        <ul className="flex flex-col gap-[28px] max-sm:mt-9 max-sm:items-center">
            <li className="font-HelveticaBold text-2xl">Help?</li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">FAQ</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Term & conditions</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Reporting</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Documentation</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Support Policy</Link></li>
            <li><Link href="#" className="text-[20px] leading-[28px] ">Privacy</Link></li>
        </ul>
        <ul className="flex flex-col gap-[14px] max-sm:mt-8 max-sm:items-center">
            <li className="font-HelveticaBold text-2xl mb-[10px]">Recent Post</li>
            <li className="flex gap-4">
                <Image src="/images/footer/fried.svg" alt="||||" width={55} height={47} className="ml-[3px] mb-[1px] mr-[1px]"/>
                <div>
                    <p className="opacity-[0.49]">20 Feb 2022</p>
                    <p>Keep Your Business </p>
                </div>
            </li>
            <li className="flex gap-4">
                <Image src="/images/footer/meat.svg" alt="||||" width={55} height={47} className="ml-[3px] mb-[1px] mr-[1px] w-auto h-auto"/>
                <div>
                    <p className="opacity-[0.49]">20 Feb 2022</p>
                    <p>Keep Your Business </p>
                </div>
            </li>
            <li className="flex gap-4">
                <Image src="/images/footer/roll.svg" alt="||||" width={55} height={47} className="ml-[3px] mb-[1px] mr-[1px] w-auto h-auto"/>
                <div>
                    <p className="opacity-[0.49]">20 Feb 2022</p>
                    <p>Keep Your Business </p>
                </div>
            </li>
        </ul>
      </section>
    </div>
    <Image src="/images/footer/bgFooter.svg" alt="||||" width={296} height={401} className="absolute bottom-0 right-0 max-sm:w-auto max-sm:opacity-40"/>
    <section className="w-screen h-[99px] bg-[#4f4f4f]">
        <div className="px-[300px] w-full h-full flex justify-between items-center max-sm:px-0">
            <p className="font-Inter400 text-white max-sm:text-[12px] max-sm:leading-[18px]">Copyright © 2022 by Ayeman. <br className="sm:hidden"/>All Rights Reserved.</p>
            <span className="flex gap-[14px] max-sm:gap-2">
                <div className="w-[36px] h-[34px] rounded-sm bg-white flex justify-center items-center"><FaFacebookF className="text-[16px] leading-[18.4] text-[#4f4f4f]"/></div>
                <div className="w-[36px] h-[34px] rounded-sm bg-white flex justify-center items-center"><FaTwitter className="text-[16px] leading-[18.4] text-[#4f4f4f]"/></div>
                <div className="w-[36px] h-[34px] rounded-sm bg-white flex justify-center items-center"><FaInstagram className="text-[16px] leading-[18.4] text-[#4f4f4f]"/></div>
                <div className="w-[36px] h-[34px] rounded-sm bg-white flex justify-center items-center"><FaYoutube className="text-[16px] leading-[18.4] text-primary1"/></div>
                <div className="w-[36px] h-[34px] rounded-sm bg-white flex justify-center items-center"><FaPinterest className="text-[16px] leading-[18.4] text-[#4f4f4f]"/></div>
            </span>
        </div>
    </section>
   </div> 
  );
}
