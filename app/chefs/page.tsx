"use client";

import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import HeaderNav from "../components2/headerNav/headerNav";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface chefData {
  name: string;
  position: string;
  experience: number;
  specialty: string;
  image_url: string;
  description: string;
  available: boolean;
}
export default function Page() {
  const [chef, setChef] = useState<chefData[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const responce = await client.fetch(`*[_type == "chef"]{
                                        name,
                                        position,
                                        experience,
                                        specialty,
                                        "image_url":image.asset->url,
                                        description,
                                        available,
                                    }`);
      setChef(responce);
    };
    fetchData();
  });

  function getAvailabilityStyles(avail: boolean) {
    return {
      text: avail ? "Available" : "Not Available",
      color: avail ? "limegreen" : "red",
    };
  }

  function toggleDetails(index: number) {
    setVisibleIndex(visibleIndex === index ? null : index);
  }
  return (
    <div className="overflow-hidden">
      <HeaderNav trackHead="Chef" mainHead="Our Chef" />
      <div className="bg-white py-[120px] px-[300px] grid grid-cols-4 grid-flow-row gap-6 max-lp:px-0 max-lp:py-[80px]">
        {chef.map((chef: chefData, index: number) => {
          const { text, color } = getAvailabilityStyles(chef.available);
          const isVisible = visibleIndex === index;
          return(
          <div key={index} className="flex flex-col items-center relative" onClick={()=>toggleDetails(index)}>
            <Image
              src={chef.image_url}
              alt={chef.name}
              height={380}
              width={312}
              className="max-lp:h-[340px] max-lp:w-auto"
            />
            <h3 className="font-HelveticaBold text-[20px] leading-[28px] text-[#333333] mt-2">
              {chef.name}
            </h3>
            <h4 className="font-Inter400 text-[18px] leading-[26px] text-[#333333] mt-1">
              {chef.position}
            </h4>
            <div className={`text-center absolute top-[446px] z-10 bg-white pb-1 shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${isVisible ? "h-auto max-h-[500px]" : "max-h-0"}`}style={{display: isVisible ? "block" : "none",zIndex: 10,width: "100%"}}>
              <h4 className="font-semibold text-lg text-secondary1">
                <code className="font-Inter700 text-lg text-secondary1">
                  Experience:{" "}
                </code>
                {chef.experience} years
              </h4>
              <h4 className="font-semibold text-lg text-secondary1">
                <code className="font-Inter700 text-lg text-secondary1">
                  Speciality:{" "}
                </code>
                {chef.specialty}
              </h4>
              <p className="mt-2 text-center font-Inter700 text-lg text-secondary1">
                Description:
              </p>
              <p className="font-Inter700 text-[#333333] text-center">
                {chef.description}
              </p>
              <h4
                  className="font-Inter700 text-lg text-secondary1 mt-2 p-1 rounded-lg"
                  style={{ backgroundColor: color }}
                >
                  {text}
                </h4>
            </div>
          </div>
          )
        })}
      </div>
      <Footer />
    </div>
  );
}
