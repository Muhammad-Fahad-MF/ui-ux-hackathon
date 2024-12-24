import Image from "next/image"
export default function MainCheckout() {
  return (
    <div className="px-[300px] py-[120px] flex gap-6 max-sm:px-5 max-sm:py-10 max-sm:flex-col max-lp:px-5">
        <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <h2 className="font-HelveticaBold text-xl ">Shipping Address</h2>
                <div className="flex flex-col gap-4">
                    <span className="flex gap-6 max-sm:flex-col max-sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <h4>First name</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Last name</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                    </span>
                    <span className="flex gap-6 max-sm:flex-col max-sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <h4>Email address</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Phone number</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                    </span>
                    <span className="flex gap-6 max-sm:flex-col max-sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <h4>Company</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Country</h4>
                            <div className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] active:border-black px-[15px] flex justify-between items-center text-[#828282] max-sm:w-full">
                                Choose country
                                <Image src="/images/check/CaretDown.svg" alt=" " height={24} width={24}/>
                            </div>
                        </div>
                    </span>
                    <span className="flex gap-6 max-sm:flex-col max-sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <h4>City</h4>
                            <div className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] active:border-black px-[15px] flex justify-between items-center text-[#828282] max-sm:w-full">
                                Choose city
                                <Image src="/images/check/CaretDown.svg" alt=" " height={24} width={24}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Zip code</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                    </span>
                    <span className="flex gap-6 max-sm:flex-col max-sm:gap-4">
                        <div className="flex flex-col gap-2">
                            <h4>Address 1</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Address 2</h4>
                            <input className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[56px] focus:outline-none focus:border-black pl-[15px] max-sm:w-auto" placeholder=" "/>
                        </div>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <h2 className="font-HelveticaBold text-xl ">Billing Address</h2>
                <span className="flex gap-2 items-center py-[1px] max-sm:mt-2">
                    <div className="h-5 w-5 box-border border-[1px] border-[#bdbdbd]"></div>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f]">Same as shipping address</p>
                </span>
                <span className="flex gap-6 mt-5 max-sm:flex-col-reverse max-sm:gap-3">
                    <button className="w-[424px] h-[56px] box-border border-[1px] border-[#e0e0e0] flex justify-center items-center gap-2 text-[#4f4f4f] max-sm:w-full active:opacity-70"><Image src="/images/check/CaretLeft.svg" alt="<" height={24} width={24}/>Back to cart</button>
                    <button className="w-[424px] h-[56px] bg-primary1 flex justify-center items-center gap-2 text-white active:opacity-90 max-sm:w-full">Proceed to shipping<Image src="/images/check/CaretRight.svg" alt=">" height={24} width={24}/></button>
                </span>
            </div>
        </section>
        <section className="box-border border-[1px] border-[#e0e0e0] w-[424px] h-[700px] px-6 py-6 max-sm:w-full">
            <div className="w-full box-border border-b-[1px] border-[#e0e0e0] flex gap-[14px] pb-4">
                <Image src="/images/check/tikka.svg" alt="__" height={88} width={83}/>
                <div className="flex flex-col">
                    <h3 className="font-HelveticaBold">Chicken Tikka Kabab</h3>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-2">150 gm net</p>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-1">50$</p>
                </div>
            </div>
            <div className="w-full box-border border-b-[1px] border-[#e0e0e0] flex gap-[14px] pb-4 mt-4">
                <Image src="/images/check/tikka.svg" alt="__" height={88} width={83}/>
                <div className="flex flex-col">
                    <h3 className="font-HelveticaBold">Chicken Tikka Kabab</h3>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-2">150 gm net</p>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-1">50$</p>
                </div>
            </div>
            <div className="w-full box-border border-b-[1px] border-[#e0e0e0] flex gap-[14px] pb-4 mt-4">
                <Image src="/images/check/tikka.svg" alt="__" height={88} width={83}/>
                <div className="flex flex-col">
                    <h3 className="font-HelveticaBold">Chicken Tikka Kabab</h3>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-2">150 gm net</p>
                    <p className="text-[14px] leading-[22px] text-[#4f4f4f] mt-1">50$</p>
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <div className="flex flex-col gap-4 pb-4 box-border border-b-[1px] border-[#e0e0e0] ">
                    <span className="w-full flex justify-between">
                        <p className="text-[#4f4f4f]">Sub-total</p>
                        <p>130$</p>
                    </span>
                    <span className="w-full flex justify-between">
                        <p className="text-[#4f4f4f]">Shipping</p>
                        <p>Free</p>
                    </span>
                    <span className="w-full flex justify-between">
                        <p className="text-[#4f4f4f]">Discount</p>
                        <p>25%</p>
                    </span>
                    <span className="w-full flex justify-between">
                        <p className="text-[#4f4f4f]">Tax</p>
                        <p>54.76$</p>
                    </span>
                </div>
                <span className="w-full flex justify-between mt-4">
                        <p className="text-[18px] leading-[26px]">Total</p>
                        <p className="font-HelveticaBold text-[18px] leading-[26px]">432.65$</p>
                </span>
                <button className="w-full h-[58px] rounded-md bg-primary1 flex justify-center items-center gap-[10px] text-white active:opacity-90 text-[18px] leading-[26px] mt-6">Place an order<Image src="/images/check/ArrowRight.svg" alt=">" height={20} width={20}/></button>
            </div>
        </section>
    </div>
  )
}
 