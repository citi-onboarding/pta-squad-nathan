"use client";

import { useState } from 'react';
import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";
import { Cross } from "@/assets";
import Switch from '@/components/ui/switch';
import Calendar from '@/components/ui/calendarBox'


export default function Home() {

  return (

    <div className="w-[1920px] h-[1080px]">
      <Header />

      <div className="flex items-center gap-4 ml-[194px] mt-[48px]">
        <h2 className="text-[48px] ml-[10.5px]">Atendimento</h2>
      </div>

      <div className="ml-[194px] mt-[32px]">
        <p className="text-[24px]">Qual é o médico?</p>

        <div className="flex items-center gap-6 mt-[26px]">
          <input
            placeholder="Pesquise aqui..."
            type="text"
            className="border-black w-[520px] h-[50px] border rounded-[8px] placeholder-[#D9D9D9] text-[16px] font-normal leading-[110%] tracking-[0%] pl-4"
          />
          <CustomButton 
            text="Buscar"
            className="text-white bg-[#7D1AD7] hover:bg-[#690EB8] w-[116px] h-[42px] rounded-[24px] font-bold shadow-md"
          />
        </div>
      </div>

      <div className='mt-[40px] flex'>
        <span className='ml-[194px] inline-block'><Switch primeiro='Histórico' segundo='Agendamento'/></span>
        <Calendar text='dd/mm/aa' className='ml-[1021px]' popUpPosition='absolute bottom-[70px] right-[120px]'/>
        <Calendar text='dd/mm/aa' className='ml-[16px]' popUpPosition='absolute bottom-[70px] right-[5px]'/>
      </div>

      <div className="flex flex-wrap gap-6 ml-[194px] mt-[32px]">
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
      </div>

      <CustomButton 
        text="Nova Consulta"
        icon={ Cross }
        className="text-white bg-[#50E678] hover:bg-[#3CBF62] w-[205px] h-[48px] rounded-[24px] font-bold shadow-md mt-[185px] ml-[1521px]"
      />
    </div>
  );
}