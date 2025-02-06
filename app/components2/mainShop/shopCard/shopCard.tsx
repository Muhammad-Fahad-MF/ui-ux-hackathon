import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface shopCardProps {
  imgSrc: string;
  title: string;
  price: string | boolean;
  originalPrice?: string;
  discount?: boolean;
  sell?: boolean;
  id?: string;
  Did?: string;
}
export default function ShopCard({
  imgSrc,
  title,
  price,
  originalPrice,
  discount,
  sell,
  id,
  Did,
}: shopCardProps) {
  const [isDiscount, setIsDiscount] = useState<boolean | undefined>(false);
  const [isSell, setIsSell] = useState<boolean | undefined>(false);
  useEffect(() => {
    setIsDiscount(discount);
    setIsSell(sell);
  }, [discount, sell]);
  return (
      <div className="h-[330px] w-[312px] flex flex-col justify-between relative group">
        <Image src={imgSrc} alt="_" height={267} width={312} className="group-hover:brightness-75"/>
        {isSell && (
          <div className="w-[52px] h-[22px] rounded-[4px] bg-primary1 text-white flex justify-center items-center absolute left-[30px] top-[27px] text-[14px] leading-[22px]">
            Sell
          </div>
        )}
        <div className="hidden group-hover:block h-[34px] w-[146px] absolute top-[148px] left-[83px] ">
          <span className="h-[34px] w-[146px] flex gap-[13px] ">
            <Link href="/details">
              <div className="w-10 h-[34px] rounded-sm flex justify-center items-center bg-white">
                <Image
                  src="/images/shop/status.svg"
                  alt=" "
                  height={18}
                  width={18}
                />
              </div>
            </Link>
            <Link href="/shoppingCart">
              <div className="w-10 h-[34px] rounded-sm flex justify-center items-center bg-primary1">
                <Image
                  src="/images/shop/Tote.svg"
                  alt=" "
                  height={18}
                  width={18}
                />
              </div>
            </Link>
            <Link href="#nav">
              <div className="w-10 h-[34px] rounded-sm flex justify-center items-center bg-white">
                <Image
                  src="/images/shop/Heart.svg"
                  alt=" "
                  height={18}
                  width={18}
                />
              </div>
            </Link>
          </span>
        </div>
       <Link href={`/details/${id || Did}`}>
        <h3 className="font-Inter700 text-[18px] leading-[26px]">{title}</h3>
        <span className="flex gap-2">
          <p className="text-primary1">{price}</p>
          {isDiscount && (
            <p className="text-[#828282] line-through">{`$${originalPrice}.00`}</p>
          )}
        </span>
       </Link>
      </div>
  );
};
