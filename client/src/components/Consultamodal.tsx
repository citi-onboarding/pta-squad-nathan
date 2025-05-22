'use client'
import { LeftContent } from "@/assets"
import Image from "next/image"
import {close} from "@/assets"

export default function ConsultaModal() { 
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">

            <div className="bg-white relative rounded-[24px] flex flex-col shadow-lg pl-6 pr-6 pt-10 pb-10 h-[493px] w-[824px]">


               {/* LOGO CITI */}
               <div className="justify-center w-[728px] items-center mx-auto flex-col h-[100px] mr-10 ml-10 flex mt-5 relative" >
                <Image className="w-[182px] h-[74px]" src={LeftContent} alt="Logo" />
                <Image className="absolute right-10 top-1 w-[24px] h-[24px] cursor-pointer" src={close} alt="close" />

                <p className="pt-[25px]"><b>O pet está cadastrado no sistema!</b> Prencha os dados da <b>consulta</b></p>

               </div>

                {/* FORMULÁRIO */}

                <div className="flex w-[728px] h-[172px] border  justify-center mt-10 mx-auto items-center">

                </div>



                
            </div>
        </div>
    )
}