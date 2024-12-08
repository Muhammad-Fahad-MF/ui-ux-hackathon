import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="bg-black/95 py-[120px] px-[300px] flex font-Inter400 text-white">
      <section className="flex flex-col ">
        <h3 className="font-GreatVibes text-[32px] leading-[40px] text-primary1">
          About us
        </h3>
        <h1 className="font-HelveticaBold text-[48px] leading-[56px] w-[446px] mt-2"><code className="font-HelveticaBold text-[48px] leading-[56px] text-primary1">We</code> Create the best foody product</h1>
        <p className="w-[526px] mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in<br/>consequat.</p>
        <ul className="text-[18px] leading-[26px] flex flex-col gap-6 mt-6">
            <li className="flex gap-[10px]"><Image src="/images/aboutUs/tick.svg" alt="`/" height={13} width={17}/><p className="text-[18px] leading-[26px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p></li>
            <li className="flex gap-[10px]"><Image src="/images/aboutUs/tick.svg" alt="`/" height={13} width={17}/><p className="text-[18px] leading-[26px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p></li>
            <li className="flex gap-[10px]"><Image src="/images/aboutUs/tick.svg" alt="`/" height={13} width={17}/><p className="text-[18px] leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
        </ul>
        <button className="w-[190px] h-[60px] mt-8 bg-primary1 text-white rounded-[30px]">Read More</button>
      </section>
      <section className="ml-[98px] flex flex-col gap-4">
        <Image src="/images/aboutUs/eggAbout.svg" alt="Eggs" height={330} width={660} className="rounded-[6px]"/>
        <div className="flex gap-4">
          <Image src="/images/aboutUs/kababAbout.svg" alt="Kababs" height={194} width={322} className="rounded-[6px]"/>
          <Image src="/images/aboutUs/sandwichAbout.svg" alt="Sandwich" height={194} width={322} className="rounded-[6px]"/>
        </div>
      </section>
    </div>
  );
}
