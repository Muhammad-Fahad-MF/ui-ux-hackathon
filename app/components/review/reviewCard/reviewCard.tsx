import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div  style={{boxShadow: '0px 0px 80px 0px #CDCDCD40'}} className="bg-white w-[869px] h-[451px] mt-[123px] relative flex flex-col items-center self-center">
        <Image src="/images/reviews/Dp.svg" alt="_" height={134} width={133} className="absolute mx-auto -top-[67px] rounded-full "/>
        <Image src="/images/reviews/Quotes.svg" alt=",," height={48} width={48} className=" mt-[99px]"/>
        <p className="font-Helvetica text-[18px] leading-[26px] text-center text-[#4f4f4f] w-[696.57px] mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
        <ul className="flex gap-2 items-center mt-8">
          <li><FaStar className="text-primary1 text-[24px]"/></li>
          <li><FaStar className="text-primary1 text-[24px]"/></li>
          <li><FaStar className="text-primary1 text-[24px]"/></li>
          <li><FaStar className="text-primary1 text-[24px]"/></li>
          <li><FaStar className="text-[#e0e0e0] text-[24px]"/></li>
        </ul>
        <h5 className="text-[#333333] text-2xl font-HelveticaBold mt-4">Alamin Hasan</h5>
        <p className="mt-2 text-[#828282] font-Helvetica">Food Specialist</p>
    </div>
  )
}
