"use client"

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { LeftContent } from "@/assets"
import { Buttongroups } from "@/assets"
import { closeButton } from "@/assets"
import { cat, cow, dog, horse, pig, sheep } from "@/assets"
import { Button } from "./ui/button"
import { Dialog, Trigger, Content, Close } from "@radix-ui/react-dialog"

// Nossa função principal, que importa os componentes necessários
export default function Register() {
  return (
  <div className="register">
    <Header/>
    <Form/>
  </div>
  );
}

// Função Header que renderiza o cabeçalho da página
function Header() {
  const [active, setActive] = useState("atendimento");

  // Estado para controlar qual aba está ativa
  return (
    <>
      <div className="gap-x-3 pb-[20px] pt-[20px] flex h-[114px] flex-row relative items-center bg-white">
        <Image className="pl-8 w-[200px] h-[74px]" src={LeftContent} alt="Logo"/>
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

// Função Form que renderiza o formulário de cadastro
function Form() {
  const [nomePaciente, setNomePaciente] = useState("")
  const [nomeTutor, setNomeTutor] = useState("")
  const [especiePaciente, setEspeciePaciente] = useState("")
  const [idadePaciente, setIdadePaciente] = useState("")
  const [tipoConsulta, setTipoConsulta] = useState("")
  const [medicoResponsavel, setMedicoResponsavel] = useState("")
  const [dataAtendimento, setDataAtendimento] = useState("")
  const [horarioAtendimento, setHorarioAtendimento] = useState("")
  const [descricaoProblema, setDescricaoProblema] = useState("")

  // Como lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    console.log("Nome do Paciente", nomePaciente);
    console.log("Nome do Tutor", nomeTutor);
    console.log("Qual é a espécie do paciente?", especiePaciente);
    console.log("Idade do Paciente", idadePaciente);
    console.log("Tipo de consulta", tipoConsulta);
    console.log("Médico Responsável", medicoResponsavel);
    console.log("Data do atendimento", dataAtendimento);
    console.log("Horário do atendimento", horarioAtendimento);
    console.log("Descrição do Problema", descricaoProblema);
  };

  // Função para lidar com a mudança de valor dos campos do formulário
  return (
    <form onSubmit={handleSubmit} className="max-w-1xl mx-auto space-y-4 p-6">
  
      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1">Nome do Paciente</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1">Nome do Tutor</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-4">Qual é a espécie do paciente?</label>
          <div className="flex">
            <Image className="w-[100px] h-[100px] m-10" src={sheep} alt="Sheep"/>
            <Image className="w-[98.37px] h-[99.66px] m-10" src={cat} alt="Cat"/>  
            <Image className="w-[100px] h-[100px] m-10" src={pig} alt="Pig"/>
            <Image className="w-[100px] h-[100px] m-10" src={cow} alt="Cow"/>
            <Image className="w-[100px] h-[100px] m-10" src={horse} alt="Horse"/>
            <Image className="w-[82px] h-[99px] m-10" src={dog} alt="Dog"/>
          </div>
        </div>
      </div>

      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1">Idade do Paciente</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1">Tipo de consulta</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1">Médico Responsável</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1">Data do atendimento</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1">Horário do atendimento</label>
          <input
            type="time"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1">Descrição do Problema</label>
          <input type="text" className="w-full p-10 border rounded" />
        </div>
      </div>

    {/* Botão para abrir o moda */}
    <div className="flex justify-end">
      <Dialog>
        <Trigger asChild>
          <Button className="py-2 px-6 bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition">
          Finalizar Cadastro
          </Button>
        </Trigger>
        
        <Content className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
          <div className="w-[408px] h-[423px] bg-white rounded-3xl shadow-lg p-8 relative flex flex-col items-center justify-center">
            <Close asChild>
              <button
              type="button"
              aria-label="Fechar"
              className="absolute top-12 right-12 text-black text-2xl font-bold">
                <Image className="w-189 h-74" src={closeButton} alt="CloseButton"/>
              </button>
            </Close>
            
            <Image className="w-189 h-74 mb-6" src={LeftContent} alt="Logo" />
            
            <div className="text-center">
              <h2 className="text-xl font-SF Pro Display m-2 scale-90">
                <b>Cadastro finalizado!</b> Envie o comprovante para o <b>tutor</b>
              </h2>
              
              <div className="mb-6">
                <label className="block text-left text-sm font-bold mb-2">
                  <b>E-mail</b>
                </label>
                <input
                  type="email"
                  placeholder="Digite aqui..."
                  className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-[#50E678] focus:border-transparent"
                />
              </div>
              
              <Button 
                className="w-full py-3 bg-[#50E678] hover:bg-[#40C768] text-white rounded-3xl font-SF Pro Display"
              >
                Enviar
              </Button>
            </div>
          </div>
        </Content>
      </Dialog>
    </div>

  </form>
  );
  
}
