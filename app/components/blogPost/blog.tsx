import BlCard from "./blogCards/blCard";

export default function Blog() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 items-center py-[120px]">
       <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1">Blog Post</h3>
       <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">La</code>test News & Blog</h1>
       <section className="mt-[59px] flex gap-[46px]">
         <BlCard imgSrc="/images/blog/burger.svg" date="10 February 2022" title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"/>
         <BlCard imgSrc="/images/blog/pizza.svg" date="10 February 2022" title="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"/>
         <BlCard imgSrc="/images/blog/taco.svg" date="10 February 2022" title="Curabitur rutrum velit ac congue malesuada"/>
       </section>
    </div>
  )
}
