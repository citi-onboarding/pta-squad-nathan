'use client'
import { LeftContent, close, calendar, setinhaa } from "@/assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRef, useState } from "react"


export default function ConsultaModal({ isOpen, setModalOpen }: { isOpen: boolean; setModalOpen: (value: boolean) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const abrirCalendario = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.();
    }
  };

  if (!isOpen) return null;

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"> 

      <div className="bg-[#FFFFFF] relative rounded-3xl shadow-lg p-12 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto"> 

        {/* LOGO + BOTÃO DE FECHAR + TEXTO */}
        
        <div className="flex flex-col items-center justify-center relative w-full px-4"> 
          <Image className="w-[11.375rem] h-[4.625rem] object-contain mb-4" src={LeftContent} alt="Logo" /> 
          <Image
            onClick={() => setModalOpen(false)}
            className="absolute right-0 mr-4 top-0 w-6 h-6 cursor-pointer"
            src={close}
            alt="Fechar"
          />

         
          <p className="pt-6 text-center text-base">
            <b>O pet está cadastrado no sistema!</b> Preencha os dados da <b>consulta</b>
          </p>
        </div>

        {/* FORMULÁRIO */}
        
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 w-full mt-10 px-4"> 

          {/* Tipo de Consulta */}
         
          <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]"> 
            <label htmlFor="consulta" className="mb-2 font-bold text-base">Tipo de consulta</label>
            <div className="relative w-full">
              <select
                id="consulta"
                className="h-[3.125rem] w-full pr-12 appearance-none border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected className="text-gray-400">Selecione aqui</option> 
                <option value="consulta-geral">Consulta Geral</option>
                <option value="vacina">Vacinação</option>
                <option value="exame">Exame</option>
                <option value="cirurgia">Cirurgia</option>
              </select>
              
              <Image className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none" src={setinhaa} alt="Seta" />
            </div>
          </div>

          {/* Médico Responsável */}
          <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
            <label htmlFor="medico" className="mb-2 font-bold text-base">Médico responsável</label>
            <input
              id="medico"
              type="text"
              placeholder="Digite aqui..."
              className="h-[3.125rem] border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Data de Atendimento */}
          <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
            <label htmlFor="data" className="mb-2 font-bold text-base">Data do atendimento</label>
            <div className="relative w-full">
              <input
                id="data"
                type="date"
               
                ref={inputRef}
                className="h-[3.125rem] w-full border border-gray-700 rounded-lg px-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer" 
              />
             
              <Image
                src={calendar}
                alt="Calendário"
         
                onClick={abrirCalendario}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-[1.125rem] h-5 cursor-pointer" 
              />
            </div>
          </div>

          {/* Horário de Atendimento */}
          <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
            <label htmlFor="hora" className="mb-2 font-bold text-base">Horário do atendimento</label>
            <input
              id="hora"
              type="time"
              className="h-[3.125rem] border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

       

        </div>

        {/* Botão Finalizar cadastro */}
       
        <div className="flex justify-center items-center mt-8 w-full px-4"> 
          <Button className="w-full h-12 font-bold text-base bg-[#50E678] rounded-3xl">
            Finalizar cadastro
          </Button>
        </div>
      </div>
    </div>
  )
}