import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <div  style={{boxShadow: '0px 0px 80px 0px #CDCDCD40'}} className="bg-white w-[869px] h-[451px] mt-[123px] relative flex flex-col items-center">
        <Image src="/images/reviews/Dp.svg" alt="_" height={134} width={133} className="absolute mx-auto -top-[67px] rounded-full"/>
        <FaStar/>
    </div>
  )
}
