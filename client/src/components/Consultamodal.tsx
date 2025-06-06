'use client'
import { LeftContent, close, calendar, setinhaa } from "@/assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { consultaFormSchema, ConsultaFormData } from "@/schemas/consultaSchama"
import api from "@/services/api"

export default function ConsultaModal({ isOpen, setModalOpen, pacientId }: { isOpen: boolean; setModalOpen: (value: boolean) => void; pacientId: string | undefined; }) {
  // Assuming pacientId is available or needs to be passed as a prop or retrieved from somewhere
 
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<ConsultaFormData>({
    resolver: zodResolver(consultaFormSchema),
  });

  const abrirCalendario = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.();
    }
  };

  const handleCreateConsultation = async (data: ConsultaFormData) => {
    try {
      console.log('Dados validados do formulário:', data);

      // Formata os dados para o backend
      const payload = {
        date: data.date,
        time: data.time,
        consultationType: data.consultationType,
        doctorName: data.doctorName,
        description: "Consulta agendada via sistema",
        patientId: pacientId
      };

      console.log('Dados enviados ao backend:', payload);

      const response = await api.post('/consultas', payload);

      if (response.status === 201) {
        alert('Consulta agendada com sucesso!');
        setModalOpen(false);
      }
    } catch (error: any) {
      console.error('Erro completo:', error);
      if (error.response) {
        console.log('Detalhes do erro:', error.response.data);
      }
      alert(`Erro ao agendar: ${error.response?.data?.message || error.message}`);
    }
  };

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-[#FFFFFF] relative rounded-3xl shadow-lg p-12 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
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

        <form onSubmit={handleSubmit(handleCreateConsultation)}>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-5 w-full mt-10 px-4">
            <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
              <label htmlFor="consultationType" className="mb-2 font-bold text-base">Tipo de consulta</label>
              <div className="relative w-full">
                <select
                  id="consultationType"
                  {...register("consultationType")}
                  className="h-[3.125rem] w-full pr-12 appearance-none border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected className="text-gray-400">Selecione aqui</option>
                  <option value="FIRST">Primeira Consulta</option>
                  <option value="VACINATION">Vacinação</option>
                  <option value="RETURN">Retorno</option>
                  <option value="CHECKUP">Check-up</option>
                </select>
                <Image className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none" src={setinhaa} alt="Seta" />
              </div>
              {errors.consultationType && (
                <p className="text-red-500 text-sm mt-1">{errors.consultationType.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
              <label htmlFor="doctorName" className="mb-2 font-bold text-base">Médico responsável</label>
              <select
                id="doctorName"
                {...register("doctorName")}
                className="h-[3.125rem] border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected className="text-gray-400">Selecione o médico...</option>
                <option value="Dr. José Carlos">Dr. José Carlos</option>
                <option value="Dra. Ana Beatriz">Dra. Ana Beatriz</option>
                <option value="Dr. Lucas Pereira">Dr. Lucas Pereira</option>
              </select>
              {errors.doctorName && (
                <p className="text-red-500 text-sm mt-1">{errors.doctorName.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
              <label htmlFor="date" className="mb-2 font-bold text-base">Data do atendimento</label>
              <div className="relative w-full">
                <input
                  id="date"
                  type="date"
                  {...register("date")}
                  className="h-[3.125rem] w-full border border-gray-700 rounded-lg px-3 pr-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                />
                <Image
                  src={calendar}
                  alt="Calendário"
                  onClick={abrirCalendario}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-[1.125rem] h-5 cursor-pointer"
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            <div className="flex flex-col w-full md:w-[calc(50%-0.5rem)]">
              <label htmlFor="time" className="mb-2 font-bold text-base">Horário do atendimento</label>
              <input
                id="time"
                type="time"
                {...register("time")}
                className="h-[3.125rem] border border-gray-700 rounded-lg px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 w-full px-4">
            <Button
              type="submit"
              className="w-full h-12 font-bold text-base bg-[#50E678] rounded-3xl"
            >
              Finalizar cadastro
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}