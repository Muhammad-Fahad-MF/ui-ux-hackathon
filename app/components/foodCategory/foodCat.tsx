import FoodCard from "./foodCard/foodCard";
export default function FoodCat() {
  return (
    <div className="overflow-hidden bg-black/95 font-Inter400 text-white">
      <div className="flex flex-col px-[300px] items-center">
        <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1">Food Category</h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] w-[446px] mt-2"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">Ch</code>oose Food Iteam</h1>
        <section className="flex gap-[33px] mt-[56px]">
         <FoodCard imgSource="/images/aboutUs/something.svg" discount="30%" foodCat="Fast Food Dish"/>
         <FoodCard imgSource="/images/aboutUs/burger.svg" discount="30%" foodCat="Fast Food Dish"/>
         <FoodCard imgSource="/images/aboutUs/salad.svg" discount="30%" foodCat="Healthy Dish"/>
         <FoodCard imgSource="/images/aboutUs/donut.svg" discount="30%" foodCat="Dessert Dish"/>
        </section>
      </div>
    </div>
  );
}
