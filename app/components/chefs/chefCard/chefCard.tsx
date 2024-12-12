interface chefCardProps {
    img: string;
    name: string;
    role: string;
}
export default function ChefCard({img, name, role}: chefCardProps) {
  return (
    <div className="w-[312px] h-[391px] flex justify-start items-end rounded-md" style={{backgroundImage:  `url('/images/chef/${img}.svg')`}}>
        <div className="bg-white rounded-bl-md h-[67px] w-[181px] flex flex-col gap-1 pl-5 pt-[6px]">
            <h2 className="text-[#333333] font-Inter700 text-[18px] leading-[26px]">{name}</h2>
            <h4 className="text-[#333333] font-Inter400 text-[14px] leading-[22px]">{role}</h4>
        </div>
    </div>
  )
}
