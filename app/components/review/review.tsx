import { FaCircle } from "react-icons/fa";
import ReviewCard from "./reviewCard/reviewCard";
import Image from "next/image";
export default function Review() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 py-[120px] relative">
      <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1 ml-1">Testimonials</h3>
      <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2">What our client are saying</h1>
      <ReviewCard />
      <Image src="/images/reviews/bgReviews.svg" alt="__" height={580} width={502} className="rotate-[13.52] absolute top-[32.16%] right-[17.7%]"/>
      <ul className="flex gap-[6px] self-center mt-[56px] mb-5">
          <li><FaCircle className="text-primary1"/></li>
          <li><FaCircle className="text-primary1/30"/></li>
          <li><FaCircle className="text-primary1/30"/></li>
          <li><FaCircle className="text-primary1/30"/></li>
      </ul>
    </div>
  )
}
