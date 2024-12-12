import Link from "next/link";
import Image from "next/image";
import ItemComp from "./itemComp/itemComp";

export default function Menu() {
  return (
  <div className="font-Inter400 text-white bg-black/95 px-[300px] flex flex-col items-center py-[120px]">
    <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1">Choose & pick</h3>
    <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">Fr</code>om Our Menu</h1>
    <ul className="flex gap-[100px] self-start mt-[56px]">
     <li className="font-Inter700 text-[20px] leading-[28px] text-primary1"><Link href="#">Breakfast</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Lunch</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Dinner</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Dessert</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Drink</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Snack</Link></li>
     <li className="font-Inter400 text-[20px] leading-[28px] hover:text-primary1 hover:font-Inter700"><Link href="#">Suops</Link></li>
    </ul> 
    <div className="mt-[56px] flex gap-[21px]">
     <section>
      <span className="grid grid-cols-1 grid-rows-1">
       <Image src="/images/menu/menuBanner1.svg" alt="leaves" height={406} width={515} className="col-start-1 row-start-1"/>
       <Image src="/images/menu/menuBanner2.svg" alt="salad" height={362} width={366} className="col-start-1 row-start-1 ml-[75px]"/>
      </span>
     </section> 
     <section className="flex gap-4">
       <div className="flex flex-col gap-8">
         <ItemComp imgSource="/images/menu/lettuce.svg" itemName="Lettuce Leaf" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
         <ItemComp imgSource="/images/menu/sauce.svg" itemName="Fresh Breakfast" details="Lacus nisi, et ac dapibus velit in consequat." price={14.5}/>
         <ItemComp imgSource="/images/menu/butter.svg" itemName="Mild Butter" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
         <ItemComp imgSource="/images/menu/bread.svg" itemName="Fresh Bread" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
       </div>
       <div className="flex flex-col gap-8">
         <ItemComp imgSource="/images/menu/glow.svg" itemName="Glow Cheese" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
         <ItemComp imgSource="/images/menu/italian.svg" itemName="Italian Pizza" details="Lacus nisi, et ac dapibus velit in consequat." price={14.5}/>
         <ItemComp imgSource="/images/menu/slice.svg" itemName="Sllice Beef" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
         <ItemComp imgSource="/images/menu/mushaom.svg" itemName="Mushaom Pizza" details="Lacus nisi, et ac dapibus velit in consequat." price={12.5}/>
       </div>
     </section>
    </div>
 </div>
  )
}
