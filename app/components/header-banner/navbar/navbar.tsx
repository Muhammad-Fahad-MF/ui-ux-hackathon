import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="pt-[45px] mx-[300px] flex flex-col text-white bg-transparent items-center max-sm:mx-4 max-sm:flex-row max-sm:pt-4 max-sm:w-screen max-sm:justify-between max-lp:mx-16 max-lp:pt-6">
        <h2 className="font-HelveticaBold text-[24px] leading-[32px]"><code className="text-primary1 font-HelveticaBold">Food</code>tuck</h2>
        <section className="flex justify-between items-center w-full font-Inter400 max-sm:w-3/12">
            <ul className="font-Inter400 flex gap-8 max-sm:hidden">
                <li><Link href="/" className="flex items-center flex-col">Home<div className="h-[7px] w-[7px] rounded-full bg-primary1"></div></Link></li>
                <li><Link href="#">Menu</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Pages</Link></li>
                <li><Link href="#" className="flex items-center">About<Image src="/images/header-banner/dropArrow.svg" alt="`" height={6} width={10} className="m-[2px]"/></Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
            <div className="flex gap-2 items-center">
                <span className="bg-transparent flex justify-between h-[54px] w-[310px] border-[1px] border-primary1 rounded-[27px] px-[26px] max-sm:hidden">
                    <input className="bg-transparent  placeholder:text-white placeholder:font-Inter400 focus:outline-none" placeholder="Search..."/>
                    <Image src="/images/header-banner/search.svg" alt="s" height={24} width={24}/>
                </span>
                <Link href="/shoppingCart">
                    <Image src="/images/header-banner/Handbag.svg" alt="Bag" height={24} width={24}/>
                </Link>
                <MdMenu className="max-sm:visible text-3xl ml-3 mr-2 lg:hidden" />
            </div>
        </section>
    </div>
  )
}
