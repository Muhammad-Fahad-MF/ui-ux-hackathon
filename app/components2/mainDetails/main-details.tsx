"use client";
import Image from "next/image";
import ShopCard from "../mainShop/shopCard/shopCard";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { useCart } from "@/context/cartContext";

interface food {
  name: string;
  _id: string;
  category: string;
  price: number;
  originalPrice: string;
  tags: [];
  image_url: string;
  description: string;
  available: boolean;
}

export default function MainDetails({ product }: { product: food }) {
  const [foodData, setFoodData] = useState<food[]>([]);
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

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.image_url,
    });
  };
  return (
    <div className="flex justify-center w-screen">
    <div className="my-[120px] flex flex-col max-sm:mx-5 max-sm:my-14 max-lp:mx-0 max-lp:my-[80px] w-fit">
      <section className="flex gap-[55px] max-sm:flex-col max-lp:gap-6 w-fit">
        <div className="flex gap-6 h-fit max-sm:flex-col-reverse max-lp:gap-4">
          <div className="flex flex-col gap-6 h-fit max-sm:flex-row max-sm:overflow-scroll max-sm:w-full">
            <Image
              src="/images/details/fried.svg"
              alt="-"
              height={129}
              width={132}
              className="rounded-md"
            />
            <Image
              src="/images/details/salad.svg"
              alt="-"
              height={129}
              width={132}
              className="rounded-md"
            />
            <Image
              src="/images/details/charg.svg"
              alt="-"
              height={129}
              width={132}
              className="rounded-md"
            />
            <Image
              src="/images/details/something.svg"
              alt="-"
              height={129}
              width={132}
              className="rounded-md"
            />
          </div>
          <div className="h-full flex items-center">
            <Image
              src={product.image_url}
              alt="-"
              height={596}
              width={491}
              className="rounded-md max-sm:w-full max-lp:h-[596px] h-fit w-auto"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="flex justify-between items-center max-sm:w-full ">
            {product.available ? (
              <div className="bg-primary1 rounded-md px-4 h-[28px] flex justify-center items-center text-[14px] leading-[22px] text-white">
                In stock
              </div>
            ) : (
              <div className="bg-[#e93636] rounded-md px-4 h-[28px] flex justify-center items-center text-[14px] leading-[22px] text-white">
                Out of stock
              </div>
            )}
            <div className="h-[26px] w-[152px] flex justify-between ml-[380px] max-sm:ml-0">
              <span className="flex gap-1 items-center  text-[18px] leading-[26px] text-[#828282]">
                <Image
                  src="/images/details/ArrowLeft.svg"
                  alt="<-"
                  height={24}
                  width={24}
                />
                Prev
              </span>
              <span className="flex gap-1 items-center  text-[18px] leading-[26px] text-[#828282]">
                Next
                <Image
                  src="/images/details/ArrowRight.svg"
                  alt="->"
                  height={24}
                  width={24}
                />
              </span>
            </div>
          </span>
          <h1 className="font-HelveticaBold text-[48px] leading-[56px] text-[#333333] mt-2 max-sm:text-4xl max-sm:mt-4">
            {product.name}
          </h1>
          <p className="text-[18px] leading-[26px] w-[608px] my-6 pb-8 border-b-[1px] box-border border-[#e0e0e0] max-sm:w-auto max-sm:text-base ">
            {product.description}
          </p>
          <h3 className="font-HelveticaBold text-[32px] leading-[40px] text-[#333333] mb-[26px]">
            ${product.price}.00
          </h3>
          <span className="h-5 flex items-center">
            <div className="flex items-center gap-1">
              <Image
                src="/images/details/Star.svg"
                alt="*"
                height={20}
                width={20}
              />
              <Image
                src="/images/details/Star.svg"
                alt="*"
                height={20}
                width={20}
              />
              <Image
                src="/images/details/Star.svg"
                alt="*"
                height={20}
                width={20}
              />
              <Image
                src="/images/details/Star.svg"
                alt="*"
                height={20}
                width={20}
              />
              <Image
                src="/images/details/Star.svg"
                alt="*"
                height={20}
                width={20}
              />
            </div>
            <div className="h-6 flex ml-[14px] items-center">
              <p className="h-4 px-4 border-l-[1px] box-border border-[#a9a9a9] text-[#a9a9a9] flex items-center">
                5.0 Rating
              </p>
              <p className="h-4 px-4 border-l-[1px] box-border border-[#a9a9a9] text-[#a9a9a9] flex items-center">
                22 Review
              </p>
            </div>
          </span>
          <p className="text-[18px] leading-[26px] text-[#333333] mt-[22px]">
            Dictum/cursus/Risus
          </p>
          <span className="mt-[25px] flex gap-4">
            <div className="w-[181px] h-[50px] border-[1px] border-[#828282] box-border grid grid-cols-3 grid-rows-1">
              <div className="col-span-1 flex justify-center items-center border-r-[1px] border-[#828282] box-border">
                <Image
                  src="/images/details/Minus.svg"
                  alt="-"
                  height={20}
                  width={20}
                />
              </div>
              <div className="col-span-1 flex justify-center items-center border-r-[1px] border-[#828282] box-border font-HelveticaBold text-xl text-[#333333]">
                1
              </div>
              <div className="col-span-1 flex justify-center items-center">
                <Image
                  src="/images/details/Plus.svg"
                  alt="+"
                  height={20}
                  width={20}
                />
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-[191px] h-[50px] bg-primary1 text-white text-[18px] leading-[26px] flex justify-center items-center gap-2 active:opacity-90"
            >
              <Image
                src="/images/details/Bag.svg"
                alt="|-|"
                height={20}
                width={20}
              />
              Add to cart
            </button>
          </span>
          <span className="w-[618px] border-y-[1px] border-[#e0e0e0] box-border mt-[34px] py-6">
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[18px] leading-[26px]">
                <Image
                  src="/images/details/Heart.svg"
                  alt="(-)"
                  height={20}
                  width={20}
                />
                Add to Wishlist
              </div>
              <div className="flex items-center gap-2 text-[18px] leading-[26px]">
                <Image
                  src="/images/details/Status.svg"
                  alt="(|)"
                  height={20}
                  width={20}
                />
                Compare
              </div>
            </div>
            <div className="flex items-center gap-2 text-[18px] leading-[26px] mt-2">
              <p className="text-[#333333]">Category:</p>
              {product.category}
            </div>
            <div className="flex items-center gap-2 text-[18px] leading-[26px] mt-2">
              <p className="text-[#333333]">Tag:</p>
              {product.tags.map((tag, index) => {
                if (index < product.tags.length - 1) {
                  return tag + ", ";
                } else {
                  return tag;
                }
              })}
            </div>
            <div className="flex items-center gap-2 text-[18px] leading-[26px] mt-6">
              <p className="text-[#333333]">Share :</p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/details/youtube.svg"
                  alt="|>"
                  height={24}
                  width={24}
                />
                <Image
                  src="/images/details/facebook.svg"
                  alt="f"
                  height={24}
                  width={24}
                />
                <Image
                  src="/images/details/twitter.svg"
                  alt="X"
                  height={24}
                  width={24}
                />
                <Image
                  src="/images/details/vk.svg"
                  alt="vk"
                  height={24}
                  width={24}
                />
                <Image
                  src="/images/details/instagram.svg"
                  alt="in"
                  height={24}
                  width={24}
                />
              </div>
            </div>
          </span>
        </div>
      </section>
      <section className="mt-[56px] max-lp:mx-6 w-fit">
        <span className="flex items-center gap-6 max-sm:gap-10">
          <div className="bg-primary1 w-[165px] h-[50px] font-Helvetica text-white flex justify-center items-center">
            Description
          </div>
          <p className="text-[#333333] font-Helvetica">Reviews (24)</p>
        </span>
        <p className="mt-8 text-[#828282]">
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
          purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
          sagittis. Vestibulum suscipit cursus <br className="max-sm:hidden" />
          bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam
          tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam
          pulvinar iaculis justo, sit amet <br className="max-sm:hidden" />
          interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi.
          In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
        </p>
        <p className="mt-6 text-[#828282]">
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
          blandit justo urna, id porttitor est dignissim nec. Pellentesque
          scelerisque hendrerit posuere. Sed at dolor{" "}
          <br className="max-sm:hidden" />
          quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan
          lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis
          sagittis vehicula fermentum. <br className="max-sm:hidden" />
          Integer eu vulputate justo. Aenean pretium odio vel tempor sodales.
          Suspendisse eu fringilla leo, non aliquet sem.
        </p>
        <span>
          <h5 className="font-Helvetica text-[18px] leading-[26px] mt-6">
            Key Benefits
          </h5>
          <ul className="list-disc list-inside mt-4">
            <li className="text-[14px] leading-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="text-[14px] leading-[22px] mt-2">
              Maecenas ullamcorper est et massa mattis condimentum.
            </li>
            <li className="text-[14px] leading-[22px] mt-2">
              Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
            </li>
            <li className="text-[14px] leading-[22px] mt-2">
              Etiam nec massa et lectus faucibus ornare congue in nunc.
            </li>
            <li className="text-[14px] leading-[22px] mt-2">
              Mauris eget diam magna, in blandit turpis.
            </li>
          </ul>
        </span>
      </section>
      <section className="mt-[120px]">
        <div className="w-full flex justify-between items-center">
          <h3 className="font-HelveticaBold text-[32px] leading-[40px] text-[#333333] text-3xl">
            Similar Products
          </h3>
          <div className="flex gap-2">
            <button className="w-10 h-[39px] bg-[#FAF7F2] rounded-full flex justify-center items-center active:opacity-50">
              <Image
                src="/images/details/ArrowLeftC.svg"
                alt="<-"
                height={19.5}
                width={20}
              />
            </button>
            <button className="w-10 h-[39px] bg-primary1 rounded-full flex justify-center items-center active:opacity-50">
              <Image
                src="/images/details/ArrowRightC.svg"
                alt="->"
                height={19.5}
                width={20}
              />
            </button>
          </div>
        </div>
        <div className="flex gap-6 mt-8 max-sm:flex-col max-sm:items-center">
          {foodData.map((item: food, index) => {
            if (index <= 3) {
              return (
                <ShopCard
                  key={index}
                  imgSrc={item.image_url}
                  title={item.name}
                  price={`$${item.price}.00`}
                  Did={item._id}
                />
              );
            }
          })}
        </div>
      </section>
    </div>
    </div>
  );
}
