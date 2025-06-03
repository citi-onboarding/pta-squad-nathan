'use client'

// Importando as dependências necessárias
import { useState } from "react"
import Image from "next/image"
import { AnimalSelector } from "./animalSelector"
import { RegisterModal } from "./registerModal"
import { arrowBack, arrowDown } from "@/assets"
import api from "@/services/api"
import { useForm, Controller } from "react-hook-form"
import { Button } from "./ui/button"
import Calendar from "@/components/ui/calendarBoxCopy";

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
  
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();

  // Estilos padrões para os campos - gerando economia de tempo e reutilização
  const labelStyles = "block mb-1 font-sf font-bold";
  const placeHolderStyles = "w-full p-2 border rounded-lg border-black";
  const blocksStyles = "flex flex-col sm:flex-row gap-6";
  const errorStyles = "error-message text-red-500 text-xs mt-0.5";
  
  // Função para lidar com o envio do formulário
  // A função é assíncrona e usa o método POST da API para enviar os dados do formulário
  const onSubmit = async (dataForm: any) => {
    if (!especieSelecionada) {
      alert("Selecione uma espécie.");
      return;
    }
  
    // Converrte a data de nascimento do paciente para o formato ISO 8601
    const dataNascimento = dataForm.dataNascimento as Date;
    if (!dataNascimento || isNaN(dataNascimento.getTime())) {
      alert("Data de nascimento inválida.");
      return;
  }

    const anoNasc = dataNascimento.getFullYear();
    const mesNasc = (dataNascimento.getMonth() + 1).toString().padStart(2, "0");
    const diaNasc = dataNascimento.getDate().toString().padStart(2, "0");
    const dataNascimentoFormatada = `${anoNasc}-${mesNasc}-${diaNasc}`;
    
    // Converte a data e hora do atendimento para o formato ISO 8601
    // O formato é necessário para o envio correto dos dados para a API
    const dataAtendimento = dataForm.dataAtendimento as Date;
    
    if (!dataAtendimento || isNaN(dataAtendimento.getTime())) {
      alert("Data do atendimento inválida.");
      return;
  }

    const ano = dataAtendimento.getFullYear();
    const mes = (dataAtendimento.getMonth() + 1).toString().padStart(2, "0");
    const dia = dataAtendimento.getDate().toString().padStart(2, "0");

    const dataFormatada = `${ano}-${mes}-${dia}`;
    const horaAtendimento = dataForm.horaAtendimento || "00:00";

    const datetime = new Date(`${dataFormatada}T${horaAtendimento}:00Z`).toISOString();

    const data = {
      name: dataForm.nomePaciente,
      tutorName: dataForm.nomeTutor,
      age: dataNascimentoFormatada,
      species: especieSelecionada,
      gender: dataForm.genero,
      doctorName: dataForm.medicoResponsavel,
      datetime,
      type: dataForm.tipoConsulta,
      description: dataForm.descricao,
    };

    try {
      const response = await api.post("/registro", data);
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
    className="max-w-screen-2xl mx-auto -mt-6 space-y-2.5 p-8 2xl:p-0 2xl:mt-8"
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
          <label className={labelStyles}>Nome do Paciente</label>
          <input
          className={`${placeHolderStyles} ${errors?.nomePaciente ? "input-error border-red-500" : ""}`}
          type="text" placeholder="Digite aqui..."
          {...register("nomePaciente", { required: true })}
          />
          {errors?.nomePaciente?.type === "required" && <p className={errorStyles}>É obrigatório informar o nome do paciente.</p>}
        </div>

        <div className="flex-1 mb-2">
          <label className={labelStyles}>Nome do Tutor</label>
          <input
          className={`${placeHolderStyles} ${errors?.nomeTutor ? "input-error border-red-500" : ""}`}
          type="text" placeholder="Digite aqui..."
          {...register("nomeTutor", { required: true })}
          />
          {errors?.nomeTutor?.type === "required" && <p className={errorStyles}>É obrigatório informar o nome do tutor do paciente.</p>}
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

          {errors.genero &&(
            <p className={errorStyles}>
              {errors.genero.message?.toString()}
            </p>
          )}
        </div>
        
        <div className="flex-1">
          <label className={labelStyles}>Data de Nascimento do Paciente</label>
          <div className={`${placeHolderStyles} ${errors?.dataNascimento ? "input-error border-red-500" : ""}`}>
            
            <Controller
            control={control}
            name="dataNascimento"
            defaultValue={null}
            rules={{
              required: "A data de nascimento é obrigatória.",
              validate: value => value instanceof Date && !isNaN(value.getTime()) || "Data de nascimento inválida."
            }}
            render={({ field }) => (

            <Calendar
            text={
              field.value
              ? field.value.toLocaleDateString("pt-BR")
              : "dd/mm/aa"
            }
            value={field.value}
            onChange={field.onChange}
            popUpPosition="absolute bottom-[100%] right-[6.25%]"
            />
            
            )}

            />
            </div>
            {errors.dataNascimento && (
              <p className={errorStyles}>
                {errors.dataNascimento.message?.toString()}
              </p>
            )}
        </div>

        {/* Insere o campo do tipo de consulta */}
        {/* O campo é um select com opções pré-definidas */}
        {/* A imagem arrowDown é usada como um ícone para indicar que é um campo de seleção */}
        <div className="flex-1">
          <label className={labelStyles}>Tipo de Consulta</label>
          <div className={`border rounded-lg relative ${errors?.tipoConsulta ? "border-red-500" : "border-black"}`}>

            <select className="w-full p-2 appearance-none bg-transparent"
            {...register("tipoConsulta", {
              validate: (value) => value !== "" || "É obrigatório informar o tipo de consulta.",
            })}
            defaultValue=""
            >

              <option value="" disabled>Selecione aqui</option>
              <option value="FIRST">Primeira consulta</option>
              <option value="VACINATION">Vacinação</option>
              <option value="RETURN">Retorno de consulta</option>
              <option value="CHECKUP">Check-up geral</option>
            </select>
            
            <Image src={arrowDown} 
            className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2"
            alt="arrowDown"
            />
            
          </div>
          
          {errors.tipoConsulta &&(
            <p className={errorStyles}>
              {errors.tipoConsulta.message?.toString()}
            </p>
          )}

        </div>

      </div>
      

      {/* O campo abaixo é dividido em três partes: médico responsável, data do atendimento e horário do atendimento */}
      <div className={blocksStyles}>
        <div className="flex-1">
          <label className={labelStyles}>Médico Responsável</label>
          <div className={`border rounded-lg relative ${errors?.doctorName ? "border-red-500" : "border-black"}`}>
            
            <select className="w-full p-2 appearance-none bg-transparent"
            {...register("doctorName", {
              validate: (value) => value !== "" || "É obrigatório informar o médico responsável pelo paciente.",
            })}
            defaultValue=""
            >
              
              <option value="" disabled>Selecione aqui</option>
              <option value="DOCTOR_01">Opção 01</option>
              <option value="DOCTOR_02">Opção 02</option>
            </select>
            
            <Image
            src={arrowDown}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-3 h-2"
            alt="arrowDown"
            />

          </div>
          
          {errors.doctorName &&(
            <p className={errorStyles}>
              {errors.doctorName.message?.toString()}
            </p>
          )}
        </div>

        <div className="flex-1">
          <label className={labelStyles}>Data do Atendimento</label>
          <div className={`${placeHolderStyles} ${errors?.dataAtendimento ? "input-error border-red-500" : ""}`}>
            
            <Controller
            control={control}
            name="dataAtendimento"
            defaultValue={null}
            rules={{
              required: "Informe minimamente a data estimada de nascimento do animal.",
              validate: value => value instanceof Date && !isNaN(value.getTime()) || "Data de atendimento inválida."
            }}
            render={({ field }) => (
            
            <Calendar
            text={
              field.value
              ? field.value.toLocaleDateString("pt-BR")
              : "dd/mm/aa"
            }
            value={field.value}
            onChange={field.onChange}
            popUpPosition="absolute bottom-[100%] right-[6.25%]"
            />

          )}
          />
          
          </div>  
          {errors.dataAtendimento && (
              <p className={errorStyles}>
                {errors.dataAtendimento.message?.toString()}
              </p>
            )}
          </div>

        <div className="flex-1">
          <label className={labelStyles}>Horário do Atendimento</label>
          <input
          type="time"
          className={placeHolderStyles}
          //defaultValue="00:00"
          {...register("horaAtendimento", {
            required:"É obrigatório informar o horario do atendimento."
          })}
          />
          {errors.horaAtendimento && (
            <p className={errorStyles}>
              {errors.horaAtendimento.message?.toString()}
            </p>
          )}
        </div>
      </div>
      

      {/* Insere o campo da descrição do problema */}
      {/* O campo é um textarea com um tamanho mínimo definido */}
      <div className="mb-2">
        <label className={labelStyles}>Descrição do Problema</label>
        <textarea
        placeholder="Digite aqui..."
        className="w-full p-3 border rounded-lg border-black min-h-24"
        {...register("descricao", {
          required: "A descrição do problema é obrigatória.",
        })}
        />

        {errors?.descricao && (
          <p className={errorStyles}>{errors.descricao.message?.toString()}</p>
        )}
      </div>
      <div className="flex justify-center sm:justify-end max-w-screen-2xl mx-auto">
        <Button
        type="submit"
        className="w-auto h-auto font-sf font-bold sm:w-52 sm:h-12 bg-[#50E678] hover:bg-[#40C768] text-white rounded-full transition mt-4 sm:mt-2"
        >
          Finalizar Cadastro
        </Button>
      </div>

  </form>

  );

}
