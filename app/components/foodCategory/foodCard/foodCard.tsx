interface foodCart {
    discount?: string;
    foodCat?: string;
    imgSource: string;
}

export default function FoodCard({discount, foodCat, imgSource}: foodCart) {
  return (
    <div className="min-w-[305px] min-h-[328px] relative group parent rounded-md" style={{backgroundImage:  `url('${imgSource}')`}}>
        <div className="flex flex-col items-end absolute left-0 top-[123px] child opacity-0 group-hover:opacity-100">
         <span className="bg-white text-primary1 rounded-[6px] font-Inter700 text-[18px] leading-[26px] min-w-[125px] min-h-[40px] flex justify-center items-center">Save {discount}</span>
         <span className="bg-primary1 text-white rounded-[6px] font-Inter700 text-[20px] leading-[28px] min-w-[206px] min-h-[46px] flex justify-center items-center">{foodCat}</span>
        </div>
    </div>
  )
}
