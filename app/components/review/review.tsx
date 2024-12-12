import ReviewCard from "./reviewCard/reviewCard"
export default function Review() {
  return (
    <div className="px-[300px] flex flex-col font-Inter400 text-white bg-black/95 py-[120px]">
      <h3  className="font-GreatVibes text-[32px] leading-[40px] text-primary1 ml-1">Testimonials</h3>
      <h1 className="font-HelveticaBold text-[48px] leading-[56px] mt-2">What our client are saying</h1>
      <ReviewCard/>  
    </div>
  )
}
