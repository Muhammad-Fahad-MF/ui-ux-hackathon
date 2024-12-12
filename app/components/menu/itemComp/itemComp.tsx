import Image from "next/image";
import Link from "next/link";

interface itemDetails {
    imgSource: string;
    itemName: string;
    price: number;
    details: string;
} 

export default function ItemComp({imgSource, itemName, details, price}: itemDetails) {
  return (
    <div className="h-[79px] w-[376px] flex  text-white font-Inter400 gap-[9px]">
        <Image src={imgSource} alt={itemName} height={79} width={80} className="rounded-md"/>
        <section className="flex flex-col gap-1">
            <Link href="#"><h4 className="-mt-1 text-[20px] leading-[28px] font-Inter700">{itemName}</h4></Link>
            <p className="text-[14px] leading-[22px]">{details}</p>
            <h4 className="text-[18px] leading-[26px] text-primary1 font-Inter700">{price}$</h4>
        </section>
    </div>
  )
}
