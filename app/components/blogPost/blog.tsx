import BlCard from "./blogCards/blCard";

export default function Blog() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 items-center pt-[120px] max-sm:px-5 max-sm:pt-14">
       <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl">Blog Post</h3>
       <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2 max-sm:text-4xl"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1 max-sm:text-4xl">La</code>test News & Blog</h1>
       <section className="mt-[59px] flex gap-[46px] max-sm:flex-col max-sm:mt-8 max-lp:gap-2">
         <BlCard imgSrc="/images/blog/burger.svg" date="10 February 2022" title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"/>
         <BlCard imgSrc="/images/blog/pizza.svg" date="10 February 2022" title="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"/>
         <BlCard imgSrc="/images/blog/taco.svg" date="10 February 2022" title="Curabitur rutrum velit ac congue malesuada"/>
       </section>
    </div>
  )
}
