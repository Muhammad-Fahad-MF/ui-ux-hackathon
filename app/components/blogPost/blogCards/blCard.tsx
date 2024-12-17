import Image from "next/image";
import Link from "next/link";

interface BlCardProps {
    imgSrc: string;
    date?: string;
    title?: string;
}
export default function BlCard({imgSrc, date, title}:BlCardProps) {
  return (
    <div className="w-[424px] h-[569px] border-white border-[1px] border-t-0 flex flex-col">
        <Image src={imgSrc} alt="|_|_|" height={349} width={423}/>
        <p className="text-primary1 font-Inter400 ml-[43px] mt-[30px]">{date}</p>
        <h3 className="font-HelveticaBold text-2xl w-[338px] ml-[43px] mt-4">{title}</h3>
        <span className="flex gap-[176px] w-full px-[43px] mt-8">
            <Link href="#">Learn More</Link>
            <div className="flex gap-2 items-center">
                <Image src="/images/blog/ThumbsUp.svg" alt="_|" width={20} height={20}/>
                <Image src="/images/blog/ChatDots.svg" alt="_|" width={20} height={20}/>
                <Image src="/images/blog/ShareNetwork.svg" alt="_|" width={20} height={20}/>
            </div>
        </span>
    </div>
  )
}
