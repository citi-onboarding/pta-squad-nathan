"use client"

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
// Faltando a parte da header
import { AnimalSelector } from "./animalSelector"
import { RegisterModal } from "./registerModal"
import { arrowBack } from "@/assets"
import { arrowDown } from "@/assets"

// Nossa função principal, que importa os componentes necessários - faltando a parte da header
export default function Register() {
  return (
  <div>
    <Form />
    <RegisterModal />
  </div>
  );
}

// Função Form que renderiza o formulário de cadastro
function Form() {

  // Função para lidar com a seleção da espécie
  const [especieSelecionada, setEspecieSelecionada] = useState<string | null>(null)
    const handleSelecionarEspecie = (especie: string) => {
      if (especieSelecionada === especie) {
        setEspecieSelecionada(null);
      }
      else {
        setEspecieSelecionada(especie);
      }
  };
 
  return (
    <form className="w-[1532px] h-[644px] mx-auto space-y-4 mt-12">

      {/* Botão de voltar para a página de cadastro*/}
      <button>
        <div className="flex items-center mb-10">
          <Image className="w-[15.7px] h-[26.67px]" src={arrowBack} alt="arrowBack"/>
          <label className="font-source text-5xl font-bold ml-6 cursor-pointer">Cadastro</label>
        </div>
      </button>

      {/* Campos do formulário */}
      <div className="flex gap-6">
        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Nome do Paciente</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1 mb-2">
          <label className="block mb-2 font-sf font-bold">Nome do Tutor</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>
      </div>
      

      <label className="block font-sf font-bold">Qual é a espécia do paciente?</label>
      <AnimalSelector selected={especieSelecionada} onSelect={handleSelecionarEspecie}/>


      <div className="flex gap-6">
        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Idade do Paciente</label>
          <input type="number" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Tipo de consulta</label>
          <div className="border rounded-lg border-black relative">
            <select className="w-full p-3 appearance-none bg-transparent">
              <option disabled selected>Selecione aqui</option>
              <option>Atendimento a Filhotes e Gestantes</option>
              <option>Cirurgias</option>
              <option>Consulta de Rotina</option>
              <option>Exame Diagnóstico</option>
              <option>Fisioterapia e Reabilitação</option>
              <option>Odontologia Veterinária</option>
              <option>Vacinação</option>
              
            </select>
            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2" width={12} height={7.4} alt="arrowDown"/>
          </div>
        </div>
      </div>


      <div className="flex gap-6">
        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Médico Responsável</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Data do atendimento</label>
          <input type="date" className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-2 font-sf font-bold">Horário do atendimento</label>
          <input type="time" defaultValue="00:00" className="w-full p-3 border rounded-lg border-black"/>
        </div>
      </div>
      
      
      <label className="block font-sf font-bold">Descrição do Problema</label>
      <textarea placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black min-h-[104px]"/>


  </form>
  );

}
