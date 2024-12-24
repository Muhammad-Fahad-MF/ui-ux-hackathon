import FoodCard from "./foodCard/foodCard";
export default function FoodCat() {
  return (
    <div className="bg-black/95 font-Inter400 text-white w-screen overflow-hidden ">
      <div className="flex flex-col px-[300px] items-center max-sm:px-5 max-lp:px-0">
        <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1 max-sm:text-2xl">Food Category</h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] w-[446px] mt-2 max-sm:text-4xl max-sm:w-auto max-sm:text-center"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1 max-sm:text-4xl">Ch</code>oose Food Iteam</h1>
        <section className="flex gap-[33px] mt-[56px] max-sm:flex-col max-sm:gap-4 max-sm:mt-8 max-lp:gap-2">
         <FoodCard imgSource="/images/aboutUs/something.svg" discount="30%" foodCat="Fast Food Dish"/>
         <FoodCard imgSource="/images/aboutUs/burger.svg" discount="30%" foodCat="Fast Food Dish"/>
         <FoodCard imgSource="/images/aboutUs/salad.svg" discount="30%" foodCat="Healthy Dish"/>
         <FoodCard imgSource="/images/aboutUs/donut.svg" discount="30%" foodCat="Dessert Dish"/>
        </section>
      </div>
    </div>
  );
}
