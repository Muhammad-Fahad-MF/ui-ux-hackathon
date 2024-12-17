import Image from "next/image";
import HeaderBanner from "./components/header-banner/headerBanner";
import AboutUs from "./components/aboutUs/aboutUs";
import FoodCat from "./components/foodCategory/foodCat";
import Choose from "./components/chooseUs/choose";
import Client from "./components/clients/client";
import Menu from "./components/menu/menu";
import Chefs from "./components/chefs/chefs";
import Review from "./components/review/review";
import Process from "./components/process/process";
import Blog from "./components/blogPost/blog";
import Footer from "./components/footer/footer";

export default function Page() {
  return (
    <div className="overflow-hidden relative ">
      <HeaderBanner />
      <AboutUs />
      <FoodCat />
      <Image
        src="/images/aboutUs/bgLeaf.svg"
        alt="bg"
        height={532.3}
        width={444.1}
        className=" absolute top-[2003px] right-[-3px] rotate-[76.86] "
      />
      <Choose />
      <Client />
      <Menu />
      <Chefs />
      <Image
        src="/images/chef/bgChef.svg"
        alt="bg"
        height={531}
        width={409.74}
        className=" absolute top-[4645px] left-[16px] rotate-[101.04] opacity-20"
      />
      <Review />
      <Process />
      <Blog />
      <Footer />
    </div>
  );
}
