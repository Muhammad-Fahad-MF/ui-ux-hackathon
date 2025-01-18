import ChefCard from "./chefCard/chefCard";
import Link from "next/link";
export default function Chefs() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 items-center max-sm:px-5">
        <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl">Choose & pick</h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2 max-sm:text-4xl"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1 max-sm:text-4xl">Me</code>et Our Chef</h1>
        <section className="flex gap-6 my-[56px] max-sm:flex-col max-sm:mt-10 max-lp:gap-3">
            <ChefCard img="D.Estwood" name="D.Estwood" role="Chief Chef"/>
            <ChefCard img="D.Scoriesh" name="D.Scoriesh" role="Assistant Chef"/>
            <ChefCard img="M. William" name="M. William" role="Advertising Chef"/>
            <ChefCard img="W.Readfroad" name="W.Readfroad" role="Chef"/>   
        </section>
        <Link href="/chefs"><button className="border-[1px] border-primary1 rounded-[25px] w-[155px] h-[50px] hover:bg-primary1">See More</button></Link>
    </div>
  )
}

