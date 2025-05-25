'use client'
import { LeftContent, close, calendar, setinhaa } from "@/assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRef } from "react"
import { useState } from "react"


export default function ConsultaModal({ isOpen, setModalOpen } : { isOpen: boolean; setModalOpen: (value: boolean) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);

  const abrirCalendario = () => {
      if (inputRef.current) {
      inputRef.current.showPicker?.(); 
    
    } 
  };
   
  if (!isOpen) return null;
    return ( <div className="flex flex-col items-center justify-center h-screen fixed transition-opacity z-50 inset-0 bg-[rgb(0, 0, 0, 0.7)] backdrop-blur-3x1 bg-black/90 "> 
    


            <div className="bg-white relative rounded-[24px] shadow-lg pt-10 pb-10 px-6 w-[824px] h-[493px]">

                {/* LOGO + BOTÃO DE FECHAR + TEXTO */}
                <div className="flex flex-col items-center justify-center relative w-[728px] mx-auto h-[100px]">

                    <Image className="w-[182px] h-[74px]" src={LeftContent} alt="Logo" />


                    <Image onClick={() => setModalOpen(false) } className="absolute right-0 top-0 w-[24px] h-[24px] cursor-pointer" src={close} alt="Fechar" />


                    <p className="pt-[25px] text-center text-[16px]">
                        <b>O pet está cadastrado no sistema!</b> Preencha os dados da <b>consulta</b>
                    </p>
                </div>

                {/* FORMULÁRIO */}
                <div className="flex flex-wrap gap-x-[12px] gap-y-[20px] w-[728px] mt-10 mx-auto">

                    {/* Tipo de Consulta */}
                    <div className="flex flex-col w-[358px]">
                        <label htmlFor="consulta" className="mb-2 font-bold text-[16px]">Tipo de consulta</label>
                        <div className="relative w-full">
                            <select
                                id="consulta"
                                className="h-[50px] w-full pr-12 appearance-none border border-[#101010] rounded-[8px] px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled selected className="text-[#D9D9D9]">Selecione aqui</option>
                                <option value="consulta-geral">Consulta Geral</option>
                                <option value="vacina">Vacinação</option>
                                <option value="exame">Exame</option>
                                <option value="cirurgia">Cirurgia</option>
                            </select>
                            <Image className="absolute right-3 top-1/2 -translate-y-1/2 w-[24px] h-[24px] pointer-events-none" src={setinhaa} alt="Fechar" />
                        </div>
                    </div>


                    {/* Médico Responsável */}
                    <div className="flex flex-col w-[358px]">
                        <label htmlFor="medico" className="mb-2 font-bold text-[16px]">Médico responsável</label>
                        <input
                            id="medico"
                            type="text"
                            placeholder="Digite aqui..."
                            className="h-[50px] border border-[#101010] rounded-[8px] px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Data de Atendimento */}
                    <div className="flex flex-col w-[358px]">
                        <label htmlFor="data" className="mb-2 font-bold text-[16px]">Data do atendimento</label>
                        <div className="relative w-full">
                            <input
                                id="data"
                                type="date"
                                className="h-[50px] w-full border border-[#101010] rounded-[8px] px-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                            />
                            <Image
                                src={calendar} // <- sua nova imagem de calendário
                                alt="Calendário"
                                onClick={abrirCalendario} 
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-[18px] h-[20px] pointer-events-none"
                            />
                        </div>
                    </div>

                    {/* Descrição do Problema */}

                    {/* Horário de Atendimento */}
                    <div className="flex flex-col w-[358px]">
                        <label htmlFor="hora" className="mb-2 font-bold text-[16px]">Horário do atendimento</label>
                        <input
                            id="hora"
                            type="time"
                            className="h-[50px] border border-[#101010] rounded-[8px] px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                </div>

                {/* Botão */}
                <div className="flex justify-center items-center mt-9 w-full ">
                    <Button className="w-[728px] h-[48px] font-bold text-[16px] bg-[#50E678] rounded-[24px]">Finalizar cadastro</Button>
                </div>
            </div>
        </div>
    
    )
}


