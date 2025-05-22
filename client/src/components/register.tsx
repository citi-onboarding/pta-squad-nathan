"use client"

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { LeftContent } from "@/assets"
import { Buttongroups } from "@/assets"
import { closeButton } from "@/assets"
import { cat, cow, dog, horse, pig, sheep, arrowBack } from "@/assets"
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

        <Image className="pl-8 w-[229px] h-[74px]" src={LeftContent} alt="logo"/>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] w-[196px] gap-x-[48px] flex-row justify-start items-center">

          <div className="flex flex-col items-center cursor-pointer font-bold" onClick={() => setActive("atendimento")}>
            <h2>Atendimento</h2>
            {active === "atendimento" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>


          <div className="flex flex-col items-center cursor-pointer font-bold" onClick={() => setActive("cadastro")}>
            <h2>Cadastro</h2>
            {active === "cadastro" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>

        </div>


        <div className="ml-auto pr-8">
          <Image className="w-[220px] h-[24px] gap-x-[8px]" src={Buttongroups} alt="logo" />
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
  const [especieSelecionada, setEspecieSelecionada] = useState<string | null>(null)
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
    console.log("Qual é a espécie do paciente?", especieSelecionada);
    console.log("Idade do Paciente", idadePaciente);
    console.log("Tipo de consulta", tipoConsulta);
    console.log("Médico Responsável", medicoResponsavel);
    console.log("Data do atendimento", dataAtendimento);
    console.log("Horário do atendimento", horarioAtendimento);
    console.log("Descrição do Problema", descricaoProblema);
  };

    // Função para lidar com a seleção da espécie
    const handleSelecionarEspecie = (especie: string) => {
      if (especieSelecionada === especie) {
    setEspecieSelecionada(null);
  } else {
    setEspecieSelecionada(especie);
  }
  };

  // Função para lidar com a mudança de valor dos campos do formulário
  return (
    <form onSubmit={handleSubmit} className="w-[1532px] mx-auto space-y-4 p-10">

      {/* Botão de voltar*/}
      <div className="flex items-center gap-2">
        <button>
        <Image className="w-[15.7px] h-[26.67px]" src={arrowBack} alt="arrowBack"/>
        </button>
        <label className="text-5xl font-bold ml-6"> Cadastro</label>
      </div>

      {/* Campos do formulário */}
      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Nome do Paciente</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Nome do Tutor</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>
      </div>
      

      <label className="block mb-1 font-sf font-bold">Qual é a espécia do paciente?</label>

      <div className="flex gap-7">

        <div
          className={`m-4 p-2 rounded-lg cursor-pointer ${
            especieSelecionada === "sheep" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("sheep")}
        >
          <Image className="w-[100px] h-[100px]" src={sheep} alt="sheep" />
        </div>


        <div
          className={`m-4 p-2 rounded-lg cursor-pointer ${
            especieSelecionada === "cat" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("cat")}
        >
          <Image className="w-[98.37px] h-[99.66px]" src={cat} alt="cat" />
        </div>


        <div
          className={`m-4 p-2 rounded-lg cursor-pointer ${
            especieSelecionada === "pig" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("pig")}
        >
          <Image className="w-[100px] h-[100px]" src={pig} alt="pig" />
        </div>


        <div
          className={`m-4 p-2 rounded-lg cursor-pointer ${
            especieSelecionada === "cow" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("cow")}
        >
          <Image className="w-[100px] h-[100px]" src={cow} alt="cow" />
        </div>


        <div
          className={`m-4 p-2 rounded-lg cursor-pointer ${
            especieSelecionada === "horse" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("horse")}
        >
          <Image className="w-[100px] h-[100px]" src={horse} alt="horse" />
        </div>


        <div
          className={`m-4 p-4 rounded-lg cursor-pointer ${
            especieSelecionada === "dog" ? "bg-[#D9D9D9]" : ""
          }`}
          onClick={() => handleSelecionarEspecie("dog")}
        >
          <Image className="w-[82px] h-[99px]" src={dog} alt="dog" />
        </div>

      </div>


      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Idade do Paciente</label>
          <input type="number" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Tipo de consulta</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>
      </div>


      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Médico Responsável</label>
          <input type="text" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Data do atendimento</label>
          <input type="date" placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black"/>
        </div>


        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Horário do atendimento</label>
          <input type="time" value="00:00" className="w-full p-3 border rounded-lg border-black"/>
        </div>
      </div>


      <div className="flex gap-16">
        <div className="flex-1">
          <label className="block mb-1 font-sf font-bold">Descrição do Problema</label>
          <textarea placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black min-h-[104px]"/>
        </div>
      </div>

    {/* Modal */}
    <div className="flex justify-end">
      <Dialog>
        <Trigger asChild>
          <Button className="w-[205px] h-[48px] bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition mt-12">
          Finalizar Cadastro
          </Button>
        </Trigger>
        
        {/* Modal de confirmação */}
        <Content className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
          <div className="w-[408px] h-[423px] bg-white rounded-3xl shadow-lg p-8 relative flex flex-col items-center justify-center">
            <Close asChild>
              <button
              type="button" aria-label="Fechar" className="absolute top-12 right-12 text-black text-2xl font-bold">
                <Image className="w-189 h-74" src={closeButton} alt="CloseButton"/>
              </button>
            </Close>
            

            <Image className="w-189 h-74 mb-6" src={LeftContent} alt="logo" />
            

            <div className="text-center">
              <h2 className="text-xl font-sf m-2 scale-90">
                <b>Cadastro finalizado!</b> Envie o comprovante para o <b>tutor</b>
              </h2>
              

              <div className="mb-6">
                <label className="block text-left text-sm font-bold mb-2">
                  <b>E-mail</b>
                </label>
                <input type="email" placeholder="Digite aqui..." className="w-full p-3 border border-black rounded-lg focus:ring-2 focus:ring-[#50E678] focus:border-transparent"/>
              </div>
              

              <Button className="w-full py-3 bg-[#50E678] hover:bg-[#40C768] text-white rounded-3xl font-sf">
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
