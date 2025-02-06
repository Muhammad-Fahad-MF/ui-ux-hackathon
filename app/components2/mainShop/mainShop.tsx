"use client";

import Image from "next/image";
import ShopCard from "./shopCard/shopCard";
import { FaStar } from "react-icons/fa6";
import { ChangeEvent, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface food {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: string;
  tags: string[];
  image_url: string;
  description: string;
  available: boolean;
}

type SortByOption = "Newest" | "Oldest" | "LtoH" | "HtoL";

type ShowOption = "Default" | "In Stock" | "Top Rated";

export default function MainShop() {
  const [foodData, setFoodData] = useState<food[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortByOption>("Newest");
  const [show, setShow] = useState<ShowOption>("Default");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    "Appetizer",
    "Dessert",
    "Drink",
    "Main Course",
    "Sandwich",
    "Italian",
    "Chinese",
    "Turkish",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const responce = await client.fetch(
        `*[_type == "food"]{
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    "image_url":image.asset->url,
    description,
    available,
  }`
      );
      setFoodData(responce);
    };
    fetchData();
  }, []);

  // Filter by search
  const filteredData = foodData
    .filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    .filter((food) => {
      if (show === "In Stock") return food.available;
      if (show === "Top Rated") return food.tags.includes("Top Rated");
      return true; // Default
    })
    .filter((food) => {
      if (selectedCategories.length > 0) {
        return selectedCategories.includes(food.category);
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Newest") return 0; // Placeholder, assuming newest by default
      if (sortBy === "Oldest") return 0; // Placeholder if sorting by oldest is needed
      if (sortBy === "LtoH") return a.price - b.price;
      if (sortBy === "HtoL") return b.price - a.price;
      return 0;
    });

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      // Remove category if already selected
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      // Add category to the selected list
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="flex my-[120px] mx-[300px] gap-6 max-sm:mx-5 max-sm:my-14 max-sm:flex-col max-lp:mx-0 max-lg:flex-col max-lp:my-14 max-lp:gap-2">
      <section className="flex flex-col">
        <span className="flex gap-[33px] max-sm:flex-col max-sm:items-center">
          <div className="flex items-center gap-[15px] max-sm:w-full max-sm:justify-between max-sm:flex-col max-sm:items-start ">
            <h6 className="text-[20px] leading-[28px]">Sort By :</h6>
            <Select
              onValueChange={(value: SortByOption) => {
                console.log(value);
                setSortBy(value);
              }}
            >
              <SelectTrigger className="w-[336px] h-[46px] text-[#bdbdbd] text-[18px] leading-[26px]">
                <SelectValue placeholder="Newest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Newest" defaultChecked>
                  Newest
                </SelectItem>
                <SelectItem value="Oldest">Oldest</SelectItem>
                <SelectItem value="LtoH">Price: Low to High ↑</SelectItem>
                <SelectItem value="HtoL">Price: High to Low ↓</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-[15px] max-sm:w-full max-sm:justify-between max-sm:flex-col max-sm:items-start">
            <h6 className="text-[20px] leading-[28px]">Show :</h6>
            <Select onValueChange={(value: ShowOption) => setShow(value)}>
              <SelectTrigger className="w-[336px] h-[46px] text-[#bdbdbd] text-[18px] leading-[26px]">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Default" defaultChecked>
                  Default
                </SelectItem>
                <SelectItem value="In Stock">In Stock</SelectItem>
                <SelectItem value="Top Rated">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="h-[46px] w-[248px] bg-primary1/10 pl-5 flex justify-between items-center sm:hidden">
            <input
              className="text-[#828282] w-[150px] bg-transparent focus:outline-none"
              placeholder="Search Product"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
              }}
            />
            <button className="bg-primary1 h-[46px] w-[46px] flex justify-center items-center">
              <Image
                src="/images/shop/Magnify.svg"
                alt="_"
                height={20}
                width={20}
              />
            </button>
          </div>
        </span>
        <span className="mt-6 grid grid-cols-3 grid-flow-row gap-6 max-sm:grid-cols-1 max-sm:items-center">
          {filteredData.map((food: food, index) => (
            <ShopCard
              key={index}
              imgSrc={food.image_url}
              title={food.name}
              price={`$${food.price}.00`}
              originalPrice={food.originalPrice}
              id={food._id}
              discount
            />
          ))}
          {filteredData.length === 0 && <p>No products found.</p>}
        </span>
        <span className="mt-[56px] flex gap-[14px] self-center">
          <div className="h-[50px] w-[50px] box-border border-[2px] border-[#f2f2f2] flex items-center justify-center">
            <Image
              src="/images/shop/arrows.svg"
              alt="<"
              height={17}
              width={14}
              className="h-[17px] w-auto "
            />
          </div>
          <div className="h-[50px] w-[50px] box-border border-[2px] border-[#f2f2f2] flex items-center justify-center text-primary1">
            1
          </div>
          <div className="h-[50px] w-[50px] box-border border-[2px] border-[#f2f2f2] flex items-center justify-center bg-primary1 text-white">
            2
          </div>
          <div className="h-[50px] w-[50px] box-border border-[2px] border-[#f2f2f2] flex items-center justify-center text-primary1">
            3
          </div>
          <div className="h-[50px] w-[50px] box-border border-[2px] border-[#f2f2f2] flex items-center justify-center">
            <Image
              src="/images/shop/arrows.svg"
              alt=">"
              height={17}
              width={14}
              className="rotate-180 h-[17px] w-auto "
            />
          </div>
        </span>
      </section>
      <section className="h-[1489px] w-[312px] max-lp:w-[300px] max-lp:px-5 rounded-md border-[1px] border-[#f2f2f2] box-border px-[30px] py-6 flex flex-col gap-6 max-sm:self-center max-sm:mt-8">
        <div className="h-[46px] w-[248px] bg-primary1/10 pl-5 flex justify-between items-center max-sm:hidden">
          <input
            className="text-[#828282] w-[150px] bg-transparent focus:outline-none"
            placeholder="Search Product"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
          />
          <button className="bg-primary1 h-[46px] w-[46px] flex justify-center items-center">
            <Image
              src="/images/shop/Magnify.svg"
              alt="_"
              height={20}
              width={20}
            />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-HelveticaBold text-[20px] leading-[28px] mb-2">
            Category
          </h3>
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer font-Helvetica text-[18px] leading-[26px] select-none"
              >
                <input
                  type="checkbox"
                  value={category}
                  className="hidden"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span
                  className={`w-[14px] h-[14px] box-border border-[1px] border-[#333333] flex items-center justify-center`}
                >
                  {selectedCategories.includes(category) && (
                    <span className="text-[#333333] text-[12px] pt-[0.5px]">
                      ✔
                    </span>
                  )}
                </span>
                <span className="ml-2">{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="w-[248px] h-[286px] py-[29px] px-[23px] flex flex-col justify-between bg-[url('/images/shop/bgCard.svg')] text-white">
          <span className="flex flex-col">
            <h4 className="font-Inter700 ">Perfect Taste</h4>
            <h3 className="font-HelveticaBold text-xl mt-1">
              Classic Restaurant
            </h3>
            <h4 className="font-Inter700 text-primary1 mt-[13px]">45.00$</h4>
          </span>
          <span className="flex gap-2">
            <h4>Shop Now</h4>
            <Image
              src="/images/shop/ArrowCircleRight.svg"
              alt="->"
              height={20}
              width={20}
              className="self-end"
            />
          </span>
        </div>
        <div className="flex flex-col">
          <h3 className="font-HelveticaBold text-xl mb-[14px]">
            Filter By Price
          </h3>
          <div className="w-full h-[5px] bg-primary1 mt-1 mb-[2px] relative">
            <div
              className="h-[11px] w-[11px] bg-primary1 box-border border-[2px] border-white rounded-full absolute -left-[2px] -top-[3px]"
              style={{ boxShadow: "0px 0px 7px 0px #16329E24" }}
            ></div>
            <div
              className="h-[11px] w-[11px] bg-primary1 box-border border-[2px] border-white rounded-full absolute -right-[2px] -top-[3px]"
              style={{ boxShadow: "0px 0px 7px 0px #16329E24" }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-[#1e1e1e] opacity-[0.61]">From $0 to $8000</p>
            <p className="text-[#0d0d0d] opacity-[0.61]">Filter</p>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="">
            <h3 className="font-HelveticaBold text-xl mb-[12px]">
              Latest Products
            </h3>
          </li>
          <li className="flex gap-4">
            <Image
              src="/images/shop/latProds.svg"
              alt="___"
              height={65}
              width={72}
              className="mb-0.5"
            />
            <span className="flex flex-col">
              <h3 className="font-Helvetica text-[#4f4f4f] mb-2">Pizza</h3>
              <div className="flex w-[62px] justify-between items-center mb-1">
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
              </div>
              <h4 className="font-Helvetica text-[#4f4f4f] text-[14px] leading-[22px]">
                $35.00
              </h4>
            </span>
          </li>
          <li className="flex gap-4">
            <Image
              src="/images/shop/latProds.svg"
              alt="___"
              height={65}
              width={72}
              className="mb-0.5"
            />
            <span className="flex flex-col">
              <h3 className="font-Helvetica text-[#4f4f4f] mb-2">Cupchake</h3>
              <div className="flex w-[62px] justify-between items-center mb-1">
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
              </div>
              <h4 className="font-Helvetica text-[#4f4f4f] text-[14px] leading-[22px]">
                $35.00
              </h4>
            </span>
          </li>
          <li className="flex gap-4">
            <Image
              src="/images/shop/latProds.svg"
              alt="___"
              height={65}
              width={72}
              className="mb-0.5"
            />
            <span className="flex flex-col">
              <h3 className="font-Helvetica text-[#4f4f4f] mb-2">Cookies</h3>
              <div className="flex w-[62px] justify-between items-center mb-1">
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
              </div>
              <h4 className="font-Helvetica text-[#4f4f4f] text-[14px] leading-[22px]">
                $35.00
              </h4>
            </span>
          </li>
          <li className="flex gap-4">
            <Image
              src="/images/shop/latProds.svg"
              alt="___"
              height={65}
              width={72}
              className="mb-0.5"
            />
            <span className="flex flex-col">
              <h3 className="font-Helvetica text-[#4f4f4f] mb-2">Burger</h3>
              <div className="flex w-[62px] justify-between items-center mb-1">
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-primary1 text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
                <FaStar className="text-[#e0e0e0] text-[9px] leading-[9px]" />
              </div>
              <h4 className="font-Helvetica text-[#4f4f4f] text-[14px] leading-[22px]">
                $35.00
              </h4>
            </span>
          </li>
        </ul>
        <div className="flex flex-col">
          <h3 className="font-HelveticaBold text-xl">Product Tags</h3>
          <span className="flex flex-col text-[#4f4f4f] gap-4 mt-6">
            <div className="flex justify-between w-[225px]">
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Services
              </p>
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Our Menu
              </p>
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Pizza
              </p>
            </div>
            <div className="flex justify-between w-[225px]">
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Cupcake
              </p>
              <p className="border-b-[1px] border-primary1 text-primary1 box-border p-[1px]">
                Burger{" "}
              </p>
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Cookies
              </p>
            </div>
            <div className="flex justify-between w-[225px]">
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Our Shop
              </p>
              <p className="border-b-[1px] border-[#f2f2f2] box-border p-[1px]">
                Tandoori Chicken
              </p>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}
