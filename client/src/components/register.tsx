'use client'

import { useState } from 'react'
import Image from "next/image"
import { LeftContent } from "@/assets"
import { Buttongroups } from "@/assets"
import { closeButton } from "@/assets"
import { cat, cow, dog, horse, pig, pork, sheep } from "@/assets"
import { Dialog, Trigger, Portal, Content, Close } from "@radix-ui/react-dialog"
import { Button } from './ui/button'


export default function Register() {
  return (
    <div className="register">
      <Header/>
      <Form/>
    </div>
  );
}


function Header() {
  const [active, setActive] = useState("atendimento");
  return (
    <>
      <div className="gap-x-3 pb-[20px] pt-[20px] flex h-[114px] flex-row relative items-center bg-white">
        <Image className="pl-8 w-[200px] h-[74px]" src={LeftContent} alt="Logo" />
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] w-[196px] gap-x-[48px] flex-row justify-start items-center">
          <div className="flex flex-col items-center cursor-pointer" onClick={() => setActive("atendimento")}>
            <h2>Atendimento</h2>
            {active === "atendimento" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>

          <div className="flex flex-col items-center cursor-pointer" onClick={() => setActive("cadastro")}>
            <h2>Cadastro</h2>
            {active === "cadastro" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>
        </div>

        <div className="ml-auto pr-8">
          <Image className="w-[220px] h-[24px] gap-x-[8px]" src={Buttongroups} alt="Logo" />
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-200"></div>
    </>
  );
}


function Form() {
  const [nomePaciente, setNomePaciente] = useState('');
  const [nomeTutor, setNomeTutor] = useState('');
  const [especiePaciente, setEspeciePaciente] = useState('');
  const [idadePaciente, setIdadePaciente] = useState('');
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [medicoResponsavel, setMedicoResponsavel] = useState('');
  const [dataAtendimento, setDataAtendimento] = useState('');
  const [horarioAtendimento, setHorarioAtendimento] = useState('');
  const [descricaoProblema, setDescricaoProblema] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log('Nome do Paciente', nomePaciente);
    console.log('Nome do Tutor', nomeTutor);
    console.log('Qual é a espécie do paciente?', especiePaciente);
    console.log('Idade do Paciente', idadePaciente);
    console.log('Tipo de consulta', tipoConsulta);
    console.log('Médico Responsável', medicoResponsavel);
    console.log('Data do atendimento', dataAtendimento);
    console.log('Horário do atendimento', horarioAtendimento);
    console.log('Descrição do Problema', descricaoProblema);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-1xl mx-auto space-y-4 p-6'>
      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-1'>Nome do Paciente</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex-1'>
          <label className='block mb-1'>Nome do Tutor</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-40'>Qual é a espécie do paciente?</label>
          <input
            type=''
          />
        </div>
      </div>

      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-1'>Idade do Paciente</label>
          <input
            type='number'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex-1'>
          <label className='block mb-1'>Tipo de consulta</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-1'>Médico Responsável</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex-1'>
          <label className='block mb-1'>Data do atendimento</label>
          <input
            type='date'
            className='w-full p-2 border rounded'
          />
        </div>

        <div className='flex-1'>
          <label className='block mb-1'>Horário do atendimento</label>
          <input
            type='time'
            className='w-full p-2 border rounded'
          />
        </div>
      </div>

      <div className='flex gap-16'>
        <div className='flex-1'>
          <label className='block mb-1'>Descrição do Problema</label>
          <input type="text" className="w-full p-10 border rounded" />
        </div>
      </div>


<div className='flex justify-end'>
<Dialog>
  <Trigger asChild>
    
    <Button className='py-2 px-6 bg-[#50E678] text-white rounded-full transition'>
      Finalizar Cadastro
    </Button>
  </Trigger>

  <Portal>
    <Content className="fixed top-1/2 left-1/2 w-[500px] h-[400px] bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 p-6">
    <Close asChild>
    <button
      type="button"
      aria-label="Fechar"
      className="absolute top-12 right-12 text-black text-2xl font-bold"
    >
      <Image className="w-189 h-74" src={closeButton} alt="Logo" />
    </button>
  </Close>
  <Image className="w-189 h-74" src={LeftContent} alt="Logo" />
          <label><b>Cadastro finalizado!</b> Envie o comprovante para o <b>tutor</b></label>
          <label className='block mb-1'>E-mail</label>
          <input
            type='text'
            className='w-full p-2 border rounded'
          />
              <Button className='py-2 px-6 bg-[#50E678] text-white rounded-full transition'>
      Enviar
    </Button>

    </Content>
  </Portal>
</Dialog>
  </div>
    </form>
  );
  
}
