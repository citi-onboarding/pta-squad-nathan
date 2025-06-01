'use client'

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { AnimalSelector } from "./animalSelector"
import { RegisterModal } from "./registerModal"
import { arrowBack } from "@/assets"
import { arrowDown } from "@/assets"
import Link from "next/link"

// Nossa função principal, que importa os componentes necessários
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
  // O estado especieSelecionada é usado para armazenar a espécie selecionada
  // A função handleSelecionarEspecie é chamada quando uma espécie é selecionada
  // Se a espécie já estiver selecionada, ela é desmarcada
  // Caso contrário, a nova espécie é marcada
  // O estado inicial é null, indicando que nenhuma espécie foi selecionada
  const [especieSelecionada, setEspecieSelecionada] = useState<string | null>(null)
    const handleSelecionarEspecie = (especie: string) => {
      if (especieSelecionada === especie) {
        setEspecieSelecionada(null);
      }
      else {
        setEspecieSelecionada(especie);
      }
  };

  // Estilos padrões para os campos - gerando economia de tempo e reutilização
  const labelStyles = "block mb-1 font-sf font-bold";
  const placeHolderStyles = "w-full p-2 border rounded-lg border-black";
  const blocksStyles = "flex flex-col sm:flex-row gap-6";
 
  return (
    // Define as dimensões do formulário e o espaçamento entre os elementos
    <form className="max-w-screen-2xl mx-auto space-y-3 mt-6 p-4 sm:p-0">

      {/* Botão de voltar para a página de cadastro*/}
      <Link href={"/"}>
        <button>
          <div className="flex items-center mb-5">
            <Image className="sm:w-4 sm:h-7" src={arrowBack} alt="arrowBack"/>
            <label className="font-source text-4xl sm:text-5xl font-bold ml-6 cursor-pointer">Cadastro</label>
          </div>
        </button>
      </Link>


      {/* Campos do formulário */}

      {/* O campo abaixo é dividido em duas partes: nome do paciente e nome do tutor */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Nome do Paciente</label>
          <input type="text" placeholder="Digite aqui..." className={placeHolderStyles}/>
        </div>

        {/* Insere o campo do nome do tutor */}
        <div className="flex-1 mb-2">
          <label className={labelStyles}>Nome do Tutor</label>
          <input type="text" placeholder="Digite aqui..." className={placeHolderStyles}/>
        </div>
      </div>
      

      {/* Insere o campo da espécie do paciente */}
      {/* O componente AnimalSelector é responsável por renderizar as opções de espécies */}
      <label className={labelStyles}>Qual é a Espécie do Paciente?</label>
      <AnimalSelector selected={especieSelecionada} onSelect={handleSelecionarEspecie}/>


      {/* O campo abaixo é dividido em três partes: gênero do paciente, idade e tipo de consulta */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Gênero do Paciente</label>
          <div className="border rounded-lg border-black relative">

            <select className="w-full p-2 appearance-none bg-transparent">
              <option disabled selected>Selecione aqui</option>
              <option>Fêmea</option>
              <option>Macho</option>
            </select>

            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2" alt="arrowDown"/>
          </div>
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data de Nascimento do Paciente</label>
          <input type="date" className={placeHolderStyles}/>
        </div>

        {/* Insere o campo do tipo de consulta */}
        {/* O campo é um select com opções pré-definidas */}
        {/* A imagem arrowDown é usada como um ícone para indicar que é um campo de seleção */}
        <div className="flex-1">
          <label className={labelStyles}>Tipo de Consulta</label>
          <div className="border rounded-lg border-black relative">

            <select className="w-full p-2 appearance-none bg-transparent">
              <option disabled selected>Selecione aqui</option>
              <option>Opção 01</option>
              <option>Opção 02</option>
              <option>Opção 03</option>
              <option>Opção 04</option>
              <option>Opção 05</option>
            </select>

            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2" alt="arrowDown"/>
          </div>
        </div>
      </div>


      {/* O campo abaixo é dividido em três partes: médico responsável, data do atendimento e horário do atendimento */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Médico Responsável</label>
          <input type="text" placeholder="Digite aqui..." className={placeHolderStyles}/>
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data do Atendimento</label>
          <input type="date" className={placeHolderStyles}/>
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Horário do Atendimento</label>
          <input type="time" defaultValue="00:00" className={placeHolderStyles}/>
        </div>
      </div>
      

      {/* Insere o campo da descrição do problema */}
      {/* O campo é um textarea com um tamanho mínimo definido */}
      <label className={labelStyles}>Descrição do Problema</label>
      <textarea placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black min-h-24"/>


  </form>
  
  );

}
