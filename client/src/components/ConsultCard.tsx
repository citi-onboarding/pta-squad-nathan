import Image from "next/image"
import { setinha } from "@/assets"

interface ConsultCardProps {
  date: string
  time: string
  title: string
  doctor: string
}

export default function ConsultCard({ date, time, title, doctor }: ConsultCardProps) {
  return (
    <div className="flex bg-[#D9D9D9] w-[510px] h-[82px] rounded-[16px] justify-between flex-row items-center px-6 py-0 gap-x-8">
      <div className="w-[51px] h-[50px] bg-[#FFFFFF] rounded-[4px] font-bold flex flex-col justify-center items-center text-center text-[14px] pt-[1px]">
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
      <h2 className="font-bold text-[14px]">{title}</h2>
      <h2 className="text-[14px]">{doctor}</h2>
      <Image className="w-[24px] h-[24px] ml-4" src={setinha} alt="setinha"/>
    </div>
  )
}