import Link from "next/link";



export default function Page() {
  return (
    <main className="flex flex-col gap-20 items-center justify-center min-h-screen p-4 bg-[#e5e5e5]">
      <h1 className="text-5xl font-HelveticaBold font-bold text-[#333333] ">
        Checkout success!!!
      </h1>
      <div className="flex justify-between w-[70vw]">
        <Link href="/" className="text-primary1 text-xl font-Inter700 hover:text-red-500 bg-[#333333] flex justify-center items-center p-3 rounded-lg ">Continue Ordering?</Link>
        <button disabled={true} className="text-[#333333] bg-primary1 p-3 rounded-lg text-xl font-Inter700 opacity-70 hover:cursor-not-allowed">Track order(coming soon!)</button>
      </div>
    </main>
  );
}