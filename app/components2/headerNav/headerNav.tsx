import Link from "next/link";
import Image from "next/image";

interface navBarProps {
    mainHead: string;
    trackHead: string;
}
export default function HeaderNav({mainHead, trackHead}: navBarProps) {
  return (
    <div className="bg-[url('/images/headerNav/bgHeader.svg')] bg-cover aspect-[192/42] text-white font-Inter400 flex flex-col items-center gap-[108px] -mr-[1px] max-sm:gap-14 max-sm:pb-10 max-sm:bg-bottom max-lp:pb-14 max-lp:gap-20">
        <section className="w-full h-[90px] bg-[#0d0d0d] px-[300px] flex items-center justify-between max-sm:px-5 max-sm:h-[75px] max-lp:px-5" id="nav">
            <Link href="/"><h2 className="font-HelveticaBold text-[24px] leading-[32px]"><code className="text-primary1 font-HelveticaBold">Food</code>tuck</h2></Link>
            <ul className="font-Inter400 flex gap-8 max-sm:hidden">
                <li><Link href="/" className="font-Inter700 text-primary1">Home</Link></li>
                <li><Link href="#">Menu</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Pages</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
            <ul className="flex gap-4 items-center">
                <li><Link href="#"><Image src="/images/header-banner/search.svg" alt="s" height={20} width={20}/></Link></li>
                <li><Link href="#"><Image src="/images/header-banner/User.svg" alt="o_o" height={24} width={24}/></Link></li>
                <li><Link href="/shoppingCart"><Image src="/images/header-banner/Handbag.svg" alt="{-}" height={24} width={24}/></Link></li>
            </ul>
        </section>
        <section className="flex flex-col items-center gap-5">
            <h1 className="font-HelveticaBold text-[48px] leading-[56px]">{mainHead}</h1>
            <div className="flex gap-1 ">
                <p className="text-[20px] leading-[28px]">Home</p>
                <Image src="/images/headerNav/CaretRight.svg" alt=" " width={16} height={16}/>
                <p className="text-[20px] leading-[28px] text-primary1">{trackHead}</p>
            </div>
        </section>
        
    </div>
  )
}
