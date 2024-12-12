import ChefCard from "./chefCard/chefCard"
export default function Chefs() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 items-center">
        <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1">Choose & pick</h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">Me</code>et Our Chef</h1>
        <section className="flex gap-6 my-[56px]">
            <ChefCard img="D.Estwood" name="D.Estwood" role="Chief Chef"/>
            <ChefCard img="D.Scoriesh" name="D.Scoriesh" role="Assistant Chef"/>
            <ChefCard img="M. William" name="M. William" role="Advertising Chef"/>
            <ChefCard img="W.Readfroad" name="W.Readfroad" role="Chef"/>   
        </section>
        <button className="border-[1px] border-primary1 rounded-[25px] w-[155px] h-[50px] hover:bg-primary1">See More</button>
    </div>
  )
}

