import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
interface cartCardProps {
  imgSrc: string;
  id: string;
  title: string;
  quantity: number;
  price: string;
  total: string;
}
export default function CartCard({
  imgSrc,
  id,
  title,
  quantity,
  price,
  total,
}: cartCardProps) {

  const { removeFromCart } = useCart();
  return (
    <div className="pb-[18px] border-b-[1px] border-[#e0e0e0] grid grid-cols-[34%_1fr_1fr_1fr_1fr] w-full  items-center max-sm:w-[80vw]">
      <span className="flex gap-4">
        <Image src={imgSrc} alt={title} width={93} height={97} />
        <div className="flex flex-col gap-2 max-sm:gap-1">
          <h3 className="font-Inter700">{title}</h3>
          <div className="flex w-[116px] h-5 justify-between items-center ">
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-primary1 text-[20px] leading-[20px]" />
            <FaStar className="text-[#e0e0e0] text-[20px] leading-[20px]" />
            <FaStar className="text-[#e0e0e0] text-[20px] leading-[20px]" />
          </div>
          <div className="flex flex-col gap-1 sm:hidden max-sm:w-[50vw]">
            <div className="flex w-full justify-between">
              <h6>Qty:1</h6>
              <h6>{price}</h6>
            </div>
            <div className="flex w-full justify-between">
              <h6>Total:{total}</h6>
              <Image src="/images/cart/X.svg" alt="x" width={20} height={20} />
            </div>
          </div>
        </div>
      </span>
      <p className="font-Helvetica text-center max-sm:hidden flex justify-start">
        {price}
      </p>
      <span className="flex justify-start">
        <div className="h-8 w-[110px] rounded-[18px] border-[1px] border-[#e0e0e0] flex box-border justify-evenly items-center  max-sm:hidden">
          <Image src="/images/cart/Minus.svg" alt="-" width={16} height={16} />
          {quantity}
          <Image src="/images/cart/Plus.svg" alt="+" width={16} height={16} />
        </div>
      </span>
      <p className="font-Inter700 text-left max-sm:hidden">{total}</p>
      <button className="flex justify-center" onClick={()=>removeFromCart(id)}>
        <Image
          src="/images/cart/X.svg"
          alt="x"
          width={20}
          height={20}
          className=" max-sm:hidden"
        />
      </button>
    </div>
  );
}
