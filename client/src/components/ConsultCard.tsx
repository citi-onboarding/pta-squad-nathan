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
   
    <div className="flex bg-[#D9D9D9] w-full h-[5.125rem] rounded-2xl justify-between flex-row items-center px-6 py-0 gap-x-4 sm:gap-x-8"> 
      
        {/* Data e Hora */}
      <div className="w-[3.1875rem] h-[3.125rem] bg-[#FFFFFF] rounded-sm font-bold flex flex-col justify-center items-center text-center text-sm pt-px">
        <h2>{date}</h2>
        <h2>{time}</h2>
      </div>
        {/* Título e Médico */}
     
      <h2 className="font-bold text-sm">{title}</h2>
      
      <h2 className="text-sm">{doctor}</h2>
      
      <Image className="w-6 h-6 ml-4" src={setinha} alt="setinha"/>
    </div>
  )
}