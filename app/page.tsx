import HeaderBanner from "./components/header-banner/headerBanner";
import AboutUs from "./components/aboutUs/aboutUs";
import FoodCat from "./components/foodCategory/foodCat";

export default function Page() {
  return (
    <div>
      <HeaderBanner/>
      <AboutUs/>
      <FoodCat/>
    </div>
  )
}
