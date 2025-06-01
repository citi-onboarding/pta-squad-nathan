'use client'

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { AnimalSelector } from "./animalSelector"
import { RegisterModal } from "./registerModal"
import { arrowBack, arrowDown } from "@/assets"
import api from "@/services/api"
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

  const [nomePaciente, setNomePaciente] = useState("");
  const [nomeTutor, setNomeTutor] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [medicoResponsavel, setMedicoResponsavel] = useState("");
  const [dataAtendimento, setDataAtendimento] = useState("");
  const [horaAtendimento, setHoraAtendimento] = useState("");
  const [descricao, setDescricao] = useState("");

  // Estilos padrões para os campos - gerando economia de tempo e reutilização
  const labelStyles = "block mb-1 font-sf font-bold";
  const placeHolderStyles = "w-full p-2 border rounded-lg border-black";
  const blocksStyles = "flex flex-col sm:flex-row gap-6";
  
  // Função para lidar com o envio do formulário
  // A função é assíncrona e usa o método POST da API para enviar os dados do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!especieSelecionada) {
      alert("Selecione uma espécie.");
      return;
    }
    
    const datetime = new Date(`${dataAtendimento}T${horaAtendimento}:00Z`).toISOString();
    
    const data = {
      name: nomePaciente,
      tutorName: nomeTutor,
      age: dataNascimento,
      species: especieSelecionada.toUpperCase(),
      gender: genero.toUpperCase(),
      doctorName: medicoResponsavel,
      datetime: datetime,
      type: tipoConsulta.toUpperCase(),
      description: descricao,
    };
    
    try {
      const response = await api.post("/consultations", data);
      console.log("Enviado com sucesso:", response.data);
      setModalAberto(true);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao cadastrar.");
    }
  };
 
  return (
    // Define as dimensões do formulário e o espaçamento entre os elementos
    <form
    id="form-cadastro"
    className="max-w-screen-2xl mx-auto space-y-3 mt-6 p-4 sm:p-0"
    onSubmit={handleSubmit}
    >

      {/* Botão de voltar para a página de cadastro*/}
      <button>
        <div className="flex items-center mb-5">
          <Image className="sm:w-4 sm:h-7" src={arrowBack} alt="arrowBack"/>
          <label className="font-source text-4xl sm:text-5xl font-bold ml-6 cursor-pointer">Cadastro</label>
        </div>
      </button>


      {/* Campos do formulário */}

      {/* O campo abaixo é dividido em duas partes: nome do paciente e nome do tutor */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Nome do Paciente</label>
          <input
          type="text" placeholder="Digite aqui..." className={placeHolderStyles}
          value={nomePaciente}
          onChange={(e) => setNomePaciente(e.target.value)}
          />
        </div>

        {/* Insere o campo do nome do tutor */}
        <div className="flex-1 mb-2">
          <label className={labelStyles}>Nome do Tutor</label>
          <input
          type="text" placeholder="Digite aqui..." className={placeHolderStyles}
          value={nomeTutor}
          onChange={(e) => setNomeTutor(e.target.value)}
          />
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

            <select className="w-full p-2 appearance-none bg-transparent"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              >
                <option value="" disabled>Selecione aqui</option>
                <option value="FEMALE">Fêmea</option>
                <option value="MALE">Macho</option>
            </select>

            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2" alt="arrowDown"/>
          </div>
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data de Nascimento do Paciente</label>
          <input
          type="date" className={placeHolderStyles}
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        {/* Insere o campo do tipo de consulta */}
        {/* O campo é um select com opções pré-definidas */}
        {/* A imagem arrowDown é usada como um ícone para indicar que é um campo de seleção */}
        <div className="flex-1">
          <label className={labelStyles}>Tipo de Consulta</label>
          <div className="border rounded-lg border-black relative">

            <select className="w-full p-2 appearance-none bg-transparent"
            value={tipoConsulta}
            onChange={(e) => setTipoConsulta(e.target.value)}
            >
              <option value="" disabled>Selecione aqui</option>
              <option value="FIRST">Primeira Consulta</option>
              <option value="VACINATION">Vacinação</option>
              <option value="RETURN">Retorno de Consulta</option>
              <option value="CHECKUP">Check-up Geral</option>
            </select>

            <Image src={arrowDown} className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2" alt="arrowDown"/>
          </div>
        </div>
      </div>


      {/* O campo abaixo é dividido em três partes: médico responsável, data do atendimento e horário do atendimento */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Médico Responsável</label>
          <input
          type="text" placeholder="Digite aqui..." className={placeHolderStyles}
          value={medicoResponsavel}
          onChange={(e) => setMedicoResponsavel(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data do Atendimento</label>
          <input
          type="date" className={placeHolderStyles}
          value={dataAtendimento}
          onChange={(e) => setDataAtendimento(e.target.value)}
          />
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Horário do Atendimento</label>
          <input
          type="time" className={placeHolderStyles}
          value={horaAtendimento}
          onChange={(e) => setHoraAtendimento(e.target.value)}
          />
        </div>
      </div>
      

      {/* Insere o campo da descrição do problema */}
      {/* O campo é um textarea com um tamanho mínimo definido */}
      <label className={labelStyles}>Descrição do Problema</label>
      <textarea
      placeholder="Digite aqui..." className="w-full p-3 border rounded-lg border-black min-h-24"
      value={descricao}
      onChange={(e) => setDescricao(e.target.value)}
      />
      
      <div className="flex justify-center sm:justify-end max-w-screen-2xl mx-auto">
        <Button
        type="submit"
        className="w-auto h-auto font-sf font-bold sm:w-52 sm:h-12 bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition sm:mt-12 mb-4 sm:mb-0"
        >
          Finalizar Cadastro
        </Button>
      </div>

  </form>
  
  );

}
