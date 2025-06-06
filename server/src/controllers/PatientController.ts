import { Request, Response } from "express";
import { Citi, Crud } from "../global";
import prisma from "@database";

// Classe RegisterController implementa a interface CRUD para gerenciar animais
class RegisterController implements Crud {
  
  constructor(private readonly citi = new Citi("Patient", "idPaciente")) {}
  

  // Função para calcular a idade do animal com base na data de nascimento
  // Recebe uma string no formato 'YYYY-MM-DD' e retorna a idade em anos
  private calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    return today.getFullYear() - birth.getFullYear();
  }

  // Método para criar um novo animal no banco de dados
  create = async (request: Request, response: Response) => {

    const {
      name,
      tutorName,
      age,
      species,
      gender,
      doctorName,
      datetime,
      type,
      description
    } = request.body;

    // Validação básica 
    if (!age || typeof age !== "string") {
      return response.status(400).send({ message: 'O campo "age" deve ser uma data no formato YYYY-MM-DD' });
    }

    // Verifica se algum dos campos obrigatórios não foi preenchido
    const isAnyUndefined = this.citi.areValuesUndefined(
      name,
      tutorName,
      age,
      species,
      gender,
      doctorName,
      datetime,
      type,
      description
    );
    if (isAnyUndefined) return response.status(400).send();

    // Cria um novo objeto de animal com os dados fornecidos e insere no banco de dados
    const newPatient = {
      name,
      tutorName,
      // Converte a idade de string para número
      age: this.calculateAge(age),
      species,
      gender,
      consultations: {
        create: {
          doctorName,
          datetime: new Date(datetime), // Converte a string de data para um objeto Date
          type,
          description
        },
      },
    };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newPatient);
    // Retorna a resposta com o status HTTP e a mensagem de sucesso ou erro
    return response.status(httpStatus).send({ message });

  };

  // Método para obter todos os animais do banco de dados
  get = async (request: Request, response: Response) => {
    const {httpStatus, values} = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };
  getById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params; // ID do paciente

    if (!id) {
      return response.status(400).json({ message: "ID do paciente é obrigatório." });
    }

    // Busca o paciente específico pelo ID e inclui as consultas relacionadas
    const paciente = await prisma.patient.findUnique({
      where: {
        idPaciente: Number(id), // Busca pelo ID do paciente
      },
      include: {
        consultations: true, // Inclui as consultas relacionadas
      },
    });

    if (!paciente) {
      return response.status(404).json({ message: "Paciente não encontrado." });
    }

    // Formata a resposta
    return response.status(200).json({
      idPaciente: paciente.idPaciente,
      name: paciente.name,
      tutorName: paciente.tutorName,
      age: paciente.age,
      species: paciente.species,
      gender: paciente.gender,
      consultations: paciente.consultations.map((consulta) => ({
        idConsulta: consulta.idConsulta,
        doctorName: consulta.doctorName,
        datetime: consulta.datetime.toISOString(),
        type: consulta.type,
        description: consulta.description,
        patientId: consulta.patientId,
      })),
    });
  } catch (error) {
    console.error("Erro ao buscar paciente:", error);
    return response.status(500).json({
      message: "Erro interno no servidor.",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};
// Adicione no ConsultationController

  // Método para deletar um animal do banco de dados
  delete = async (request: Request, response: Response) => {
    const { idPaciente } = request.params;
    const id = parseInt(idPaciente);

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });

  };

  // Método para atualizar os dados de um animal no banco de dados
  update = async (request: Request, response: Response) => {
    const { idPaciente } = request.params
    const id = parseInt(idPaciente);

    const {
      name,
      tutorName,
      age,
      species,
      gender,
      doctorName,
      datetime,
      type,
      description
    } = request.body;

  // Validação básica
  if (!age || typeof age !== 'string') {
    return response.status(400).send({ message: "O campo 'age' deve ser uma data no formato YYYY-MM-DD" });
  }
  
  const { idConsulta } = request.body;
  
  if (!idConsulta || typeof idConsulta !== "number") {
    return response.status(400).send({ message: 'O campo "idConsulta" é obrigatório e deve ser um número.' });
}

    const updatedValues = {
      name,
      tutorName,
      age: this.calculateAge(age),
      species,
      gender,
      consultations: {
        update: {
          where: { idConsulta: idConsulta },
          data: {
            doctorName,
            datetime: new Date(datetime),
            type,
            description
          },
        },
      },

    };

    const  { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );
    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new RegisterController();
