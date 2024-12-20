import { FaStar } from "react-icons/fa6";
import Image from "next/image";
interface cartCardProps {
  imgSrc: string;
  title: string;
  price: string;
  total: string;
}
export default function CartCard({
  imgSrc,
  title,
  price,
  total,
}: cartCardProps) {
  return (
    <div className="pb-[18px] border-b-[1px] border-[#e0e0e0] flex items-center">
      <span className="flex gap-4">
        <Image src={imgSrc} alt="_|_"  width={93} height={97}/>
        <div className="flex flex-col gap-2">
          <h3 className="font-Inter700">{title}</h3>
          <div className="flex w-[116px] h-5 justify-between items-center ">
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-[#e0e0e0] text-[20px] leading-[20px]" />
            <FaStar className="text-[#e0e0e0] text-[20px] leading-[20px]" />
          </div>
        </div>
      </span>
      <p className="font-Helvetica text-center ml-[17.1212%]">{price}</p>
      <div className="h-8 w-[110px] rounded-[18px] border-[1px] border-[#e0e0e0] flex box-border justify-evenly items-center ml-[10.11%]">
        <Image src="/images/cart/Minus.svg" alt="-"  width={16} height={16} />
        1
        <Image src="/images/cart/Plus.svg" alt="+"  width={16} height={16} />
      </div>
      <p className="font-Inter700 text-center ml-[11.14%]">{total}</p>
      <Image src="/images/cart/X.svg" alt="x"  width={20} height={20} className="ml-[14.1%]"/>
    </div>
  );
}
