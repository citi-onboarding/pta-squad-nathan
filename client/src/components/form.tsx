'use client'

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { AnimalSelector } from "./animalSelector"
import { RegisterModal } from "./registerModal"
import { arrowBack, arrowDown } from "@/assets"
import api from "@/services/api"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"

// Nossa função principal, que importa os componentes necessários
export default function Register() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
  <div>
    <Form setModalAberto={setModalAberto} />
    <RegisterModal open={modalAberto} onOpenChange={setModalAberto} />
  </div>
  );
}

// Função Form que renderiza o formulário de cadastro
function Form({ setModalAberto }: { setModalAberto: (open: boolean) => void }) {

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
  
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  // Estilos padrões para os campos - gerando economia de tempo e reutilização
  const labelStyles = "block mb-1 font-sf font-bold";
  const placeHolderStyles = "w-full p-2 border rounded-lg border-black";
  const blocksStyles = "flex flex-col sm:flex-row gap-6";
  
  // Função para lidar com o envio do formulário
  // A função é assíncrona e usa o método POST da API para enviar os dados do formulário
  const onSubmit = async (dataForm: any) => {
    if (!especieSelecionada) {
      alert("Selecione uma espécie.");
      return;
  }
  
  const datetime = new Date(`${dataForm.dataAtendimento}T${dataForm.horaAtendimento}:00Z`).toISOString();
  
  const data = {
    name: dataForm.nomePaciente,
    tutorName: dataForm.nomeTutor,
    age: dataForm.dataNascimento,
    species: especieSelecionada,
    gender: dataForm.genero,
    doctorName: dataForm.medicoResponsavel,
    datetime,
    type: dataForm.tipoConsulta,
    description: dataForm.descricao,
  };

  try {
    const response = await api.post("/consultations", data);
    console.log("Enviado com sucesso:", response.data);
    setModalAberto(true);
    reset();
  } catch (error) {
    console.error("Erro ao enviar:", error);
    alert("Erro ao cadastrar.");
  }
};
 
  return (
    // Define as dimensões do formulário
    <form
    id="form-cadastro"
    className="max-w-screen-2xl mx-auto space-y-3 mt-4 p-4 sm:p-0"
    onSubmit={handleSubmit(onSubmit)}
    >

      {/* Botão de voltar para a página de cadastro*/}
      <button>
        <div className="flex items-center mb-4">
          <Image className="sm:w-4 sm:h-7" src={arrowBack} alt="arrowBack"/>
          <label
          className="font-source text-4xl sm:text-5xl font-bold ml-6 cursor-pointer">
            Cadastro
            </label>
        </div>
      </button>


      {/* Campos do formulário */}

      {/* O campo abaixo é dividido em duas partes: nome do paciente e nome do tutor */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Nome do paciente</label>
          <input
          className={`${placeHolderStyles} ${errors?.nomePaciente ? "input-error border-red-500" : ""}`}
          type="text" placeholder="Digite aqui..."
          {...register("nomePaciente", { required: true })}
          />
          {errors?.nomePaciente?.type === "required" && <p className="error-message text-red-500 text-xs mt-0.5">É obrigatório informar o nome do paciente.</p>}
        </div>

        {/* Insere o campo do nome do tutor */}
        <div className="flex-1 mb-2">
          <label className={labelStyles}>Nome do tutor</label>
          <input
          className={`${placeHolderStyles} ${errors?.nomeTutor ? "input-error border-red-500" : ""}`}
          type="text" placeholder="Digite aqui..."
          {...register("nomeTutor", { required: true })}
          />
          {errors?.nomeTutor?.type === "required" && <p className="error-message text-red-500 text-xs mt-0.5">É obrigatório informar o nome do tutor do paciente.</p>}
        </div>
      </div>
      

      {/* Insere o campo da espécie do paciente */}
      {/* O componente AnimalSelector é responsável por renderizar as opções de espécies */}
      <label className={labelStyles}>Qual é a espécie do paciente?</label>
      <AnimalSelector selected={especieSelecionada} onSelect={handleSelecionarEspecie}/>


      {/* O campo abaixo é dividido em três partes: gênero do paciente, idade e tipo de consulta */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Gênero do paciente</label>
          <div className={`border rounded-lg relative ${errors?.genero ? "border-red-500" : "border-black"}`}>

            <select className="w-full p-2 appearance-none bg-transparent"
            {...register("genero", {
              validate: (value) => value !== "" || "É obrigatório informar o gênero do paciente.",
            })}
            defaultValue=""
              >
                <option value="" disabled>Selecione aqui</option>
                <option value="FEMALE">Fêmea</option>
                <option value="MALE">Macho</option>
            </select>

            <Image
            src={arrowDown}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2"
            alt="arrowDown"
            />

          </div>

          {errors.genero && (
            <p className="text-red-500 text-xs mt-0.5">
              {errors.genero.message?.toString()}
              </p>
            )}

        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data de nascimento do paciente</label>
          <input
          type="date" className={placeHolderStyles}
          {...register("dataNascimento")}
          />
        </div>

        {/* Insere o campo do tipo de consulta */}
        {/* O campo é um select com opções pré-definidas */}
        {/* A imagem arrowDown é usada como um ícone para indicar que é um campo de seleção */}
        <div className="flex-1">
          <label className={labelStyles}>Tipo de consulta</label>
          <div className="border rounded-lg border-black relative">

            <select className="w-full p-2 appearance-none bg-transparent"
            {...register("tipoConsulta")}
            defaultValue=""
            >
              <option value="" disabled>Selecione aqui</option>
              <option value="FIRST">Primeira consulta</option>
              <option value="VACINATION">Vacinação</option>
              <option value="RETURN">Retorno de consulta</option>
              <option value="CHECKUP">Check-up geral</option>
            </select>

            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2" alt="arrowDown"/>
          </div>
        </div>
      </div>


      {/* O campo abaixo é dividido em três partes: médico responsável, data do atendimento e horário do atendimento */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Médico responsável</label>
          <input
          type="text" placeholder="Digite aqui..." className={placeHolderStyles}
          {...register("medicoResponsavel")}
          />
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data do atendimento</label>
          <input
          type="date" className={placeHolderStyles}
          {...register("dataAtendimento")}
          />
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Horário do atendimento</label>
          <input
          type="time" className={placeHolderStyles}
          {...register("horaAtendimento")}
          defaultValue="00:00"
          />
        </div>
      </div>
      

      {/* Insere o campo da descrição do problema */}
      {/* O campo é um textarea com um tamanho mínimo definido */}
      <label className={labelStyles}>Descrição do problema</label>
      <textarea
      placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black min-h-24"
      {...register("descricao")}
      />
      
      <div className="flex justify-center sm:justify-end max-w-screen-2xl mx-auto">
        <Button
        type="submit"
        className="w-auto h-auto font-sf font-bold sm:w-52 sm:h-12 bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition sm:mt-4 mb-4 sm:mb-0"
        >
          Finalizar Cadastro
        </Button>
      </div>

  </form>
  
  );

}
